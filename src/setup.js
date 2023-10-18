function setup() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  createListeners();
  generateParticles();

  train();

  loop();
}

function particle() {
  this.net = new brain.NeuralNetwork(config.netConfig);
  this.x = rand(0, canvas.width);
  this.y = rand(0, canvas.height);
}

function generateParticles() {
  for (var i = 0; i < config.particles; i++) {
    particles[i] = new particle();
  }
}

function train() {
  generateData()
  for (var particle of particles) {
    var net = particle.net;
    net.train(trainingData);
  }
}




function generateData() {
  for (var i = 0; i < 500; i++) {
    var data = {
      input: {
        mx: rand(0, canvas.width),
        my: rand(0, canvas.height),
        x: rand(0, canvas.width),
        y: rand(0, canvas.height),
      },
      output: { negx: 0, negy: 0 }
    }
    (data.input.mx > data.input.x) ? data.output.negx = 0 : data.output.negx = 1;
    (data.input.my > data.input.y) ? data.output.negy = 0 : data.output.negy = 1;
    trainingData.push(data);
  }
}

var trainingData = [];