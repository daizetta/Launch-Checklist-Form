// Write your JavaScript code here!
document.addEventListener('DOMContentLoaded', function() {
   const form = document.getElementById('form');
   const pilotName = document.getElementById('pilotName');
   const copilotName = document.getElementById('copilotName');
   const fuelLevel = document.getElementById('fuelLevel');
   const cargoMass = document.getElementById('cargoMass');
   const pilotStatus = document.getElementById('pilotStatus');
   const copilotStatus = document.getElementById('copilotStatus');
   const fuelStatus = document.getElementById('fuelStatus');
   const cargoStatus  = document.getElementById('cargoStatus');
   const faultyItems = document.getElementById('faultyItems');

   form.addEventListener('submit', function(event) {
      
      if (pilotName.value === '' || pilotName.value == null) {
         alert('Pilot name is required')
      }
      if (!isNaN(pilotName.value)) {
        alert('Make sure to enter valid information for pilot name')
      }
      if (copilotName.value === '' || copilotName.value == null) {
         alert('Copilot name is required')
      }
      if (!isNaN(copilotName.value)) {
         alert('Make sure to enter valid information for copilot name')
      }
      if (fuelLevel.value === '') {
         alert('Fuel level is required')
      }
      if (isNaN(fuelLevel.value)) {
         alert('Make sure to enter valid information for fuel level')
      }
      if (cargoMass.value === '') {
         alert('Cargo mass is required')
      }
      if (isNaN(cargoMass.value)) {
         alert('Make sure to enter valid information for cargo mass')
      } else {
         event.preventDefault();
         
      } 
      
      if(Number(fuelLevel.value) < 10000 || Number(cargoMass.value) > 10000) {
         document.getElementById('launchStatusCheck').innerHTML = `
                     <h2 id="launchStatus" style="color:red">Shuttle Not Ready For Launch</h2>
               <div id="faultyItems" style="visibility:visible">
                   <ol>
                     <li id="pilotStatus">Pilot ${pilotName.value} is ready for launch</li>
                     <li id="copilotStatus">Co-pilot ${copilotName.value} is ready for launch</li>
                     <li id="fuelStatus">Fuel level too low for launch</li>
                     <li id="cargoStatus">Cargo mass too much for launch</li>
                  </ol>
               </div>`
               
         } else {
            document.getElementById('launchStatusCheck').innerHTML = `
               <h2 id="launchStatus" style="color:green">Shuttle is ready for launch</h2>`
         }

/* This block of code shows how to format the HTML once you fetch some planetary JSON! */

      const planets_url = 'https://handlers.education.launchcode.org/static/planets.json';

      async function getData() {
         const response = await fetch(planets_url);
         const data = await response.json();
      
              document.getElementById('missionTarget').innerHTML = `
                  <h2>Mission Destination</h2>
                     <ol>
                        <li>Name: ${data[0].name}</li>
                        <li>Diameter: ${data[0].diameter}</li>
                        <li>Star: ${data[0].star}</li>
                        <li>Distance from Earth: ${data[0].distance}</li>
                        <li>Number of Moons: ${data[0].moons}</li>
                     </ol>
                  <img src="${data[0].image}">` 
            }
         getData();
   })
})

