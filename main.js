"use strict"
var coffeesArray = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];



var names = document.getElementsByClassName("name");
function renderCoffees (array) {
    var length = array.length;
    if(coffeesArray.length <array.length) {
        length = coffeesArray.length;
    }
    for(var i = 0; i<length; i++) {
        var text = "";
        text = coffeesArray[i].name;
        array[i].innerText = text;
    }
}
renderCoffees(names);

var roast = document.getElementsByClassName("roast");
function renderRoasts (array) {
    var length = array.length;
    if(coffeesArray.length <array.length) {
        length = coffeesArray.length;
    }
    for(var i = 0; i<length; i++) {
        var text = "";
        text = coffeesArray[i].roast;
        array[i].innerText = text;
    }
}
renderRoasts(roast);



function coffeeSearch () {
    var input = document.getElementById("searchCoffee");
    var lowerInput = input.value.toLowerCase();
    var searchList = document.getElementById("coffeeSelection");
    var searchItem = searchList.getElementsByTagName("li");
    for (var i = 0; i < searchItem.length; i++) {
        var links = searchItem[i].getElementsByTagName("a")[0];
        if (links.innerHTML.toLowerCase().indexOf(lowerInput) > -1){
            searchItem[i].style.display = "";
        } else {
            searchItem[i].style.display = "none";
        }
    }
};


function updateCoffees () {
    var roastSelection = document.getElementById("roast-selection").value;
    // var searchList = document.getElementById("coffeeSelection");
    // var searchRoast = searchList.getElementsByClassName("roast");
    var filteredCoffees = [];
    for (var i = 0; i < coffeesArray.length; i++) {
        if (coffeesArray[i] == roastSelection) {
            filteredCoffees.push(coffeesArray[i]);
            console.log(filteredCoffees);
        }
    }
    coffeesArray = filteredCoffees;
    renderCoffees(name);
    renderRoasts(roast);
};

// roastSelection.addEventListener('change', updateCoffees,);


// function updateCoffees(e) {
//     var searchRoast = searchList.getElementsByClassName("roast");
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     var selectedRoast = roastSelection;
//     var filteredCoffees = [];
//     coffeesArray.forEach(function(coffee) {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }
//
//
// // from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
//
var tbody = document.querySelector('#coffees');
// var submitButton = document.querySelector('#submit');
// var roastSelection = document.querySelector('#roast-selection');
//
// tbody.innerHTML = renderCoffees(coffeesArray);
// roastSelection.addEventListener('change', updateCoffees);
// submitButton.addEventListener('click', updateCoffees);









