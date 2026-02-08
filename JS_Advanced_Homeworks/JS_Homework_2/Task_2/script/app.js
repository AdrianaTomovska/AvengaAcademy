var btn = document.getElementById("btn");
var personName = document.getElementById("personName");
var personStatsBody = document.querySelector("#personStats tbody");

btn.addEventListener("click", function() {
    fetch("https://swapi.py4e.com/api/people/1/")
        .then(function(response) {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json(); 
        })
        .then(function(data) {
            console.log(data); 

            
            personName.textContent = data.name;

           
            personStatsBody.innerHTML = "";

            
            let stats = {
                "Height": data.height,
                "Weight": data.mass,
                "Eye Color": data.eye_color,
                "Hair Color": data.hair_color
            };

            
            for (var stat in stats) {
                var tr = document.createElement("tr");

                var tdName = document.createElement("td");
                tdName.textContent = stat;

                var tdValue = document.createElement("td");
                tdValue.textContent = stats[stat];

                tr.appendChild(tdName);
                tr.appendChild(tdValue);

                personStatsBody.appendChild(tr);
            }
        })
        .catch(function(error) {
            console.error("Fetch error:", error);
        });
});
