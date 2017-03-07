var five = require("johnny-five"),
	board, potentiometer;
var board = new five.Board({port: 'COM3'});

var upnp = require("peer-upnp");
var http = require("http");
var server = http.createServer();
var PORT = 8080;

var fs = require("fs");
var vm = require("vm");

vm.runInThisContext(fs.readFileSync(__dirname + "/service.js"));
vm.runInThisContext(fs.readFileSync(__dirname + "/potentiometer_device.js"));


// start server on port 8080. please do this step before you create a peer
server.listen(PORT);


// Create a UPnP Peer.

var device = createServerPlusDevice(upnp, server, device);


var service = createService(device);

var oldValue = 0;
var newValue = 0;
var timeOut = true;



// When the board is ready
board.on("ready", function() {
 // Create a new `potentiometer` hardware instance.
  potentiometer = new five.Sensor({
    pin: "A0",
    freq: 250
  });

  // Inject the `sensor` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    pot: potentiometer
  });

  // "data" get the current reading from the potentiometer
  potentiometer.on("data", function() {
  	// initialize the Target State Variable with 0
	//service.set("Target",0);
  //  console.log(this.value, this.raw);
		//service.set("SetTarget",this.value);

		newValue = Math.trunc((this.value * 100)/1023);
		service.set("Status",newValue);
		service.set("Target",newValue);

		if ((newValue != oldValue) && timeOut) {
			console.log("Nouvelle valeur" + newValue);
			oldValue = newValue;

			//service.notify("Target");
			service.notify("Status");
			timeOut = false;
			setTimeout(function () {
				timeOut = true;
			}, 1500);
		}


  });
});
