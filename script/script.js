const canvas = document.getElementById("noise");
const ctx = canvas.getContext("2d", { alpha: true });

const noiseConfig = {
    speed: -0.03,
    movementAmplitude: 0,
    
    // Performance: pixel step (2 = every 2nd pixel, faster but lower quality)
    pixelStep: 2,
    
    // First noise layer (fine detail)
    layer1: {
        xFreq: 0.022,
        yFreq: 0.024,
        diagFreq: 0.015,
        phaseX: 0.64,
        phaseY: 0.52,
        phaseDiag: 0.92,
        weight: 0.6
    },
    
    // Second noise layer (coarse structure)
    layer2: {
        xFreq: 0.008,
        yFreq: 0.009,
        diagFreq: 0.006,
        phaseX: 0.8,
        phaseY: 0.7,
        phaseDiag: 1.1,
        weight: 0.4
    },
    
    brightnessBase: 80,
    brightnessRange: 150,
    sharpen: 2,
    
    // Mouse influence parameters
    mouseInfluenceStrength: 0.6,
    mouseInfluenceRadius: 400,
    mouseBrightnessBoost: 80,
    
    // Mouse color boost (0-255 for each channel)
    mouseColorBoost: {
        r: 30,
        g: 0,
        b: 50
    },
    // Click ripple effect
    clickRipple: {
        duration: 1200, // ms
        maxRadius: 1000,
        // голубой / бирюзовый рябь
        colorBoost: { r: 55, g: 0, b: 0 },
        blurTarget: 0.1 // sharpen value when fully affected
    },
    
    color: {
        r: 0,
        g: 0,
        bBase: 20,
        bMax: 220
    }
};

let width;
let height;
let imageData;
let frame = 0;
let mouseX = 0;
let mouseY = 0;
let clickRipples = [];
let isMouseDown = false;
let dragRipple = null;

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    imageData = ctx.createImageData(width, height);
}

window.addEventListener("resize", resize);
window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
resize();

function clamp(value, min, max) {
    return value < min ? min : value > max ? max : value;
}

function render() {

    frame += noiseConfig.speed;
    const tx = Math.sin(frame * 0.42) * noiseConfig.movementAmplitude;
    const ty = Math.cos(frame * 0.28) * noiseConfig.movementAmplitude;

    const data = imageData.data;
    const step = noiseConfig.pixelStep;
    const radiusSq = noiseConfig.mouseInfluenceRadius * noiseConfig.mouseInfluenceRadius;
    const preCalcRadius = 1 / noiseConfig.mouseInfluenceRadius;
    const now = Date.now();
    
    const l1w = noiseConfig.layer1.weight;
    const l2w = noiseConfig.layer2.weight;
    const l1xf = noiseConfig.layer1.xFreq;
    const l1yf = noiseConfig.layer1.yFreq;
    const l1df = noiseConfig.layer1.diagFreq;
    const l2xf = noiseConfig.layer2.xFreq;
    const l2yf = noiseConfig.layer2.yFreq;
    const l2df = noiseConfig.layer2.diagFreq;

    for (let y = 0; y < height; y += step) {

        for (let x = 0; x < width; x += step) {

            const i = (y * width + x) * 4;
            const nx = x + tx;
            const ny = y + ty;

            // Optimized distance calculation
            const dx = x - mouseX;
            const dy = y - mouseY;
            const distSq = dx * dx + dy * dy;
            
            let mouseInfluence = 0;
            if (distSq < radiusSq) {
                const dist = Math.sqrt(distSq);
                mouseInfluence = Math.max(0, 1 - dist * preCalcRadius) * noiseConfig.mouseInfluenceStrength;
            }

            // Click ripple influence (expanding, fading)
            let rippleInfluence = 0;
            let rippleColorR = 0;
            let rippleColorG = 0;
            let rippleColorB = 0;
            for (let ri = 0; ri < clickRipples.length; ri++) {
                const r = clickRipples[ri];
                // dragging ripple (follows cursor while mouse down)
                if (r.dragging) {
                    const currentRadius = r.activeRadius || 120;
                    const dxr = x - r.x;
                    const dyr = y - r.y;
                    const distsq = dxr * dxr + dyr * dyr;
                    const dist = Math.sqrt(distsq);
                    if (dist < currentRadius) {
                        const local = 1 - dist / currentRadius;
                        const influence = local; // no time fade while dragging
                        rippleInfluence += influence;
                        rippleColorR += influence * r.color.r;
                        rippleColorG += influence * r.color.g;
                        rippleColorB += influence * r.color.b;
                    }
                    continue;
                }

                // normal (expanding) ripple
                const elapsed = now - r.start;
                if (elapsed < 0) continue;
                const progress = r.duration > 0 ? elapsed / r.duration : 1;
                if (progress > 1) continue;
                const currentRadius = progress * r.maxRadius;
                if (currentRadius <= 0) continue;
                const dxr = x - r.x;
                const dyr = y - r.y;
                const distsq = dxr * dxr + dyr * dyr;
                const dist = Math.sqrt(distsq);
                if (dist < currentRadius) {
                    const local = 1 - dist / currentRadius;
                    // fade as progress approaches 1
                    const fade = 1 - progress;
                    const influence = local * fade;
                    rippleInfluence += influence;
                    rippleColorR += influence * r.color.r;
                    rippleColorG += influence * r.color.g;
                    rippleColorB += influence * r.color.b;
                }
            }

            // Layer 1: Fine detail noise
            const n1a = Math.sin(nx * l1xf + frame * noiseConfig.layer1.phaseX);
            const n2a = Math.cos(ny * l1yf - frame * noiseConfig.layer1.phaseY);
            const n3a = Math.sin((nx + ny) * l1df + frame * noiseConfig.layer1.phaseDiag);
            const noisea = (n1a + n2a + n3a) * 0.333;

            // Layer 2: Coarse structure noise
            const mi2 = mouseInfluence * 2;
            const n1b = Math.sin(nx * l2xf + frame * noiseConfig.layer2.phaseX * 0.7 + mi2);
            const n2b = Math.cos(ny * l2yf - frame * noiseConfig.layer2.phaseY * 0.7 + mi2);
            const n3b = Math.sin((nx + ny) * l2df + frame * noiseConfig.layer2.phaseDiag * 0.7 + mi2);
            const noiseb = (n1b + n2b + n3b) * 0.333;

            // Blend layers
            const noise = noisea * l1w + noiseb * l2w + mouseInfluence + rippleInfluence * 0.6;

            // locally reduce sharpen to simulate blur when ripples hit
            const targetSharpen = noiseConfig.clickRipple.blurTarget;
            const sharpenMix = clamp(rippleInfluence, 0, 1);
            const localSharpen = noiseConfig.sharpen * (1 - sharpenMix) + targetSharpen * sharpenMix;
            const sharp = Math.pow((noise + 1) * 0.5, localSharpen) * 2 - 1;
            const brightness = noiseConfig.brightnessBase + sharp * noiseConfig.brightnessRange;
            const blue = clamp(noiseConfig.color.bBase + brightness + mouseInfluence * noiseConfig.mouseBrightnessBoost + rippleInfluence * noiseConfig.mouseBrightnessBoost * 0.8, 0, noiseConfig.color.bMax);

            // combine mouse and ripple color boosts
            const red = clamp(noiseConfig.color.r + mouseInfluence * noiseConfig.mouseColorBoost.r + rippleColorR, 0, 255);
            const green = clamp(noiseConfig.color.g + mouseInfluence * noiseConfig.mouseColorBoost.g + rippleColorG, 0, 255);
            const finalBlue = clamp(blue + mouseInfluence * noiseConfig.mouseColorBoost.b + rippleColorB, 0, 255);

            data[i]     = red;
            data[i + 1] = green;
            data[i + 2] = finalBlue;
            data[i + 3] = 255;
        }
    }

    ctx.putImageData(imageData, 0, 0);
}

// render() will be driven by the wrapper below which also does cleanup

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        console.log("Open:", card.href);
    });
});

// remove expired ripples each frame (keeps array small)
// and create ripples on canvas clicks
canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const now = Date.now();
    // small randomization in color and radius
    const color = {
        r: noiseConfig.clickRipple.colorBoost.r * (0.9 + Math.random() * 0.4),
        g: noiseConfig.clickRipple.colorBoost.g * (0.9 + Math.random() * 0.4),
        b: noiseConfig.clickRipple.colorBoost.b * (0.9 + Math.random() * 0.4)
    };
    clickRipples.push({ x, y, start: now, duration: noiseConfig.clickRipple.duration, maxRadius: noiseConfig.clickRipple.maxRadius * (0.8 + Math.random() * 0.6), color });
});

// Also listen on the document so background clicks still register
// (canvas may have `pointer-events:none` in CSS). Ignore clicks on cards.
document.addEventListener('click', (e) => {
    if (e.target.closest && e.target.closest('.card')) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const now = Date.now();
    const color = {
        r: noiseConfig.clickRipple.colorBoost.r * (0.9 + Math.random() * 0.4),
        g: noiseConfig.clickRipple.colorBoost.g * (0.9 + Math.random() * 0.4),
        b: noiseConfig.clickRipple.colorBoost.b * (0.9 + Math.random() * 0.4)
    };
    clickRipples.push({ x, y, start: now, duration: noiseConfig.clickRipple.duration, maxRadius: noiseConfig.clickRipple.maxRadius * (0.8 + Math.random() * 0.6), color });
});

// Start drag-follow ripple on mousedown; update position on mousemove while pressed; on mouseup convert to expanding ripple
document.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return; // only left button
    if (e.target.closest && e.target.closest('.card')) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const now = Date.now();
    const color = {
        r: noiseConfig.clickRipple.colorBoost.r * (0.95 + Math.random() * 0.1),
        g: noiseConfig.clickRipple.colorBoost.g * (0.95 + Math.random() * 0.1),
        b: noiseConfig.clickRipple.colorBoost.b * (0.95 + Math.random() * 0.1)
    };
    const r = { x, y, color, dragging: true, activeRadius: 120, start: now, duration: 0, maxRadius: 0 };
    clickRipples.push(r);
    dragRipple = r;
    isMouseDown = true;
});

document.addEventListener('mousemove', (e) => {
    if (!isMouseDown || !dragRipple) return;
    const rect = canvas.getBoundingClientRect();
    dragRipple.x = e.clientX - rect.left;
    dragRipple.y = e.clientY - rect.top;
});

document.addEventListener('mouseup', (e) => {
    if (!dragRipple) return;
    // convert dragging ripple into an expanding ripple that fades
    dragRipple.dragging = false;
    dragRipple.start = Date.now();
    dragRipple.duration = Math.max(400, noiseConfig.clickRipple.duration);
    dragRipple.maxRadius = noiseConfig.clickRipple.maxRadius || 600;
    dragRipple.activeRadius = dragRipple.maxRadius;
    dragRipple = null;
    isMouseDown = false;
});

// periodic cleanup in animation loop: remove expired ripples
const _origRender = render;
function _renderWithCleanup() {
    const now = Date.now();
    clickRipples = clickRipples.filter(r => now - r.start < r.duration);
    _origRender();
    requestAnimationFrame(_renderWithCleanup);
}

// start with wrapper that does cleanup
requestAnimationFrame(_renderWithCleanup);

// Prevent image dragstart (extra guard) and any accidental selection via JS
document.addEventListener('dragstart', (e) => {
    if (e.target && e.target.nodeName === 'IMG') e.preventDefault();
});