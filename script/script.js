const canvas = document.getElementById("noise");
const ctx = canvas.getContext("2d", { alpha: true });

const noiseConfig = {
    speed: 0.06,
    movementAmplitude: 0,
    
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
    
    brightnessBase: 12,
    brightnessRange: 46,
    sharpen: 1.9,
    
    // Mouse influence parameters
    mouseInfluenceStrength: 0.45,
    mouseInfluenceRadius: 400,
    mouseBrightnessBoost: 80,
    
    color: {
        r: 0,
        g: 0,
        bBase: 10,
        bMax: 100
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

    for (let y = 0; y < height; y++) {

        for (let x = 0; x < width; x++) {

            const i = (y * width + x) * 4;
            const nx = x + tx;
            const ny = y + ty;

            // Calculate distance from mouse
            const dx = x - mouseX;
            const dy = y - mouseY;
            const distSq = dx * dx + dy * dy;
            const dist = Math.sqrt(distSq);
            const mouseInfluence = Math.max(0, 1 - (dist / noiseConfig.mouseInfluenceRadius)) * noiseConfig.mouseInfluenceStrength;

            // Layer 1: Fine detail noise
            const n1a = Math.sin((nx * noiseConfig.layer1.xFreq) + frame * noiseConfig.layer1.phaseX);
            const n2a = Math.cos((ny * noiseConfig.layer1.yFreq) - frame * noiseConfig.layer1.phaseY);
            const n3a = Math.sin(((nx + ny) * noiseConfig.layer1.diagFreq) + frame * noiseConfig.layer1.phaseDiag);
            const noisea = (n1a + n2a + n3a) / 3;

            // Layer 2: Coarse structure noise
            const n1b = Math.sin((nx * noiseConfig.layer2.xFreq) + frame * noiseConfig.layer2.phaseX * 0.7 + mouseInfluence * 2);
            const n2b = Math.cos((ny * noiseConfig.layer2.yFreq) - frame * noiseConfig.layer2.phaseY * 0.7 + mouseInfluence * 2);
            const n3b = Math.sin(((nx + ny) * noiseConfig.layer2.diagFreq) + frame * noiseConfig.layer2.phaseDiag * 0.7 + mouseInfluence * 2);
            const noiseb = (n1b + n2b + n3b) / 3;

            // Blend layers
            const noise = (noisea * noiseConfig.layer1.weight) + (noiseb * noiseConfig.layer2.weight) + mouseInfluence;

            const sharp = Math.pow((noise + 1) * 0.5, noiseConfig.sharpen) * 2 - 1;
            const brightness = noiseConfig.brightnessBase + sharp * noiseConfig.brightnessRange;
            const blue = clamp(noiseConfig.color.bBase + brightness + mouseInfluence * noiseConfig.mouseBrightnessBoost, 0, noiseConfig.color.bMax);

            data[i]     = noiseConfig.color.r;
            data[i + 1] = noiseConfig.color.g;
            data[i + 2] = blue;
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