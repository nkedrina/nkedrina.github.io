const canvas = document.getElementById("noise");
const ctx = canvas.getContext("2d", { alpha: true });

const noiseConfig = {
    speed: 0,
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
    
    brightnessBase: 50,
    brightnessRange: 100,
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
            const noise = noisea * l1w + noiseb * l2w + mouseInfluence;

            const sharp = Math.pow((noise + 1) * 0.5, noiseConfig.sharpen) * 2 - 1;
            const brightness = noiseConfig.brightnessBase + sharp * noiseConfig.brightnessRange;
            const blue = clamp(noiseConfig.color.bBase + brightness + mouseInfluence * noiseConfig.mouseBrightnessBoost, 0, noiseConfig.color.bMax);

            const red = clamp(noiseConfig.color.r + mouseInfluence * noiseConfig.mouseColorBoost.r, 0, 255);
            const green = clamp(noiseConfig.color.g + mouseInfluence * noiseConfig.mouseColorBoost.g, 0, 255);
            const finalBlue = clamp(blue + mouseInfluence * noiseConfig.mouseColorBoost.b, 0, 255);

            data[i]     = red;
            data[i + 1] = green;
            data[i + 2] = finalBlue;
            data[i + 3] = 255;
        }
    }

    ctx.putImageData(imageData, 0, 0);

    requestAnimationFrame(render);
}

render();

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        console.log("Open:", card.href);
    });
});