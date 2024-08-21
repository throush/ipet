function hexToRgb(hex) {
    // Remove hash symbol if present
    hex = hex.replace(/^#/, '');

    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return { r: r, g: g, b: b };
}

// Example usage:
let colors = ["#FF0000", "#00FF00", "#0000FF"]; // An array of hex colors
for (let i = 0; i < colors.length; i++) {
    let rgbColor = hexToRgb(colors[i]);
    console.log(`Color ${i}:`, rgbColor); // Output: {r: 255, g: 0, b: 0}, etc.
}
