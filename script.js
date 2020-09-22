// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         const div = document.getElementById("missionTarget");
         div.innerHTML = `
            <ol>
               <li>Name ${json[0].name}</li>
               <li>Diameter ${json[0].diameter}</li>
               <li>Star ${json[0].star}</li>
               <li>Distance from Earth ${json[0].distance}</li>
               <li>Number of Moons ${json[0].moons}</li>
            </ol>
            <img src="${json[0].image}">`;
      });
   });
});


window.addEventListener("load", function () {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
       
       let faultyItems = document.getElementById("faultyItems")
       let pilotInfo = document.getElementById("pilotStatus");
       let copilotInfo = document.getElementById("copilotStatus");
       let cargoInfo = document.getElementById("cargoStatus");
       let fuelInfo = document.getElementById("fuelStatus");
       let shuttleInfo = document.getElementById("launchStatus");

       let pilotInput = document.querySelector("input[name=pilotName]");
       let copilotInput = document.querySelector("input[name=copilotName]");
       let fuelInput = document.querySelector("input[name=fuelLevel]");
       let cargoInput = document.querySelector("input[name=cargoMass]");

       if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoInput.value === "") {
           alert("all fields are required");
           event.preventDefault();
       } else if (fuelInput.value < 10000) {
           fuelInfo.innerHTML = "Fuel amount too low for launch";

           shuttleInfo.innerHTML = "Shuttle not ready for launch";

           faultyItems.style.visibility = "visible";
           event.preventDefault();
           pilotInfo.innerHTML = `${pilotInput.value} Ready`;
           copilotInfo.innerHTML = `${copilotInput.value} Ready`;
           shuttleInfo.style.color = "crimson";
           if (cargoInput.value > 10000) {
               cargoInfo.innerHTML = "Cargo mass too high for launch";
           }
       } else if (cargoInput.value > 10000) {

           cargoInfo.innerHTML = "Cargo mass too high for launch";

           faultyItems.style.visibility = "visible";
           event.preventDefault();
           pilotInfo.innerHTML = `${pilotInput.value} Ready`;
           copilotInfo.innerHTML = `${copilotInput.value} Ready`;
           shuttleInfo.innerHTML = "Shuttle not ready for launch";
           shuttleInfo.style.color = "crimson";
       }
       
       });
       
   });
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
