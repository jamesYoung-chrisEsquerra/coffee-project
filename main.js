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

// function renderCoffee(coffee) {
//     var html = '<tr class="coffee">';
//     html += '<td>' + coffee.id + '</td>';
//     html += '<td>' + coffee.name + '</td>';
//     html += '<td>' + coffee.roast + '</td>';
//     html += '</tr>';
//
//     return html;
// }



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
// var headerTextList = document.getElementsByClassName("name");
// function renderCoffees(array) {
//     for(var i = 0; i< array.length; i++) {
//         var html = "";
//         html = array[i].name;
//         headerTextList.innerText = "html";
//         console.log(headerTextList.innerText);
//
//     }
// }
// renderCoffees(coffeesArray);

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









