var canvas, ctx;
var particles = [];

window.onload = setup;

var config = {
  particles: 5,
  netConfig: {
    binaryThresh: 0.5,
    hiddenLayers: [3],
    activation: "sigmoid"
  },
  mx: 0,
  my: 0
}

function loop() {
  clear();
  for (var particle of particles) {
    var net = particle.net;
    var result = net.run({ mx: config.mx, my: config.my, x: particle.x, y: particle.y });
    if (result.negx) 
    circle(particle.x, particle.y, 3, "red");
  }
  requestAnimationFrame(loop);
}