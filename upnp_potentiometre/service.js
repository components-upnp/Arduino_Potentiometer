function createService(device) {

    // create a SwitchPower service in the BinaryLight device as specified here http://upnp.org/specs/ha/UPnP-ha-SwitchPower-v1-Service.pdf
    var service = device.createService({
        domain: "schemas-upnp-org",
        type: "SwitchPower",
        version: "1",
        // Service Implementation
        implementation: {
            GetTarget: function(inputs){
                // the result is the value of the state variable Target
                return {RetTargetValue: this.get("Target")}
            },
            SetTarget: function(inputs){
                console.log("LOL");
                // set the new value of the state variable Target
                service.set("Target", inputs.NewTargetValue);
                service.set("Status", inputs.NewTargetValue);

                // notify state change of the state variable to all subscribers


                service.notify("Target");
                service.notify("Status");
                //this.get("Target") == "1"? console.log("Light is ON"):console.log("Light is OFF");
            },
            GetStatus: function(inputs){
                // the result is the value of the state variable Target
                return {ResultStatus: this.get("Target")}
            },
        },
        // Service Description. this will be converted to XML
        description: {
            actions: {
                GetTarget: {
                    outputs: {
                        RetTargetValue: "Target", // Target is the name of the state variable
                    }
                },
                SetTarget: {
                    inputs: {
                        NewTargetValue: "Target"
                    }
                },
                GetStatus: {
                    outputs: {
                        ResultStatus: "Status",
                    }
                }
            },
            // declare all state variables: key is the name of the variable and value is the type of the variable.
            // type can be JSON object in this form {type: "boolean"}.
            variables: {
                Target: {
                  type: "string",
                  event: true,
                  multicast: true
                },
                Status: {
                  type: "string",
                  event: true,
                  multicast: true
                }
            }
        }
    });
    service.set("Target",0);
    service.set("Status",0);



return service;
}
