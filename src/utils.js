function circle(x, y, r, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}

function clear() {
  ctx.clearRect(0, 0, 720, 480);
}

function createListeners() {
  canvas.addEventListener("mousemove", (event) => {
    var rect = canvas.getBoundingClientRect();
    config.mx = event.clientX - rect.left;
    config.my = event.clientY - rect.top;
  });
}

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}