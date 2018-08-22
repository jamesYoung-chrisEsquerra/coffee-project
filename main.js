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
    for(var i = 0; i< array.length; i++) {
        var text = "";
        text = coffeesArray[i].name;
        array[i].innerText = text;
    }
}
renderCoffees(names);

var roast = document.getElementsByClassName("roast");
function renderRoasts (array) {
    for(var i = 0; i< array.length; i++) {
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


// function coffeeSearch(){
//     var links = searchItem[0].getElementsByTagName("a")[0];
//         if (links.innerHTML.toLowerCase()=== lowerInput.indexOf(-1)){
//             searchItem[0].style.display = "none";
//         }else {
//             searchItem[0].style.display = "";
//         }
// };
// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     var selectedRoast = roastSelection.value;
//     var filteredCoffees = [];
//     coffees.forEach(function(coffee) {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide

// var tbody = document.querySelector('#coffees');
// var submitButton = document.querySelector('#submit');
// var roastSelection = document.querySelector('#roast-selection');

// tbody.innerHTML = renderCoffees(coffees);

// submitButton.addEventListener('click', updateCoffees);









