# Initial Setup
[ ] - `npm install express body-parser pg`
[ ] - create server.js, make folder structure
[ ] - create client.js, controllers.js, index.html, views.html, routers, pool.js
[ ] - set up server code on server.js, spin up server
[ ] - set up pg code on pool.js
[ ] - create database, create database.sql file with creation sql and add to project
[ ] - source in angular/router, client, controllers, material ng on index.html
[ ] - basic set up code inside client.js(config), index(ng views, #url for views) , controllers, routers(exports), views

# Dashboard View
[ ] - buttons for dashboard and manage owners
## [ ] - add pet section (display):
 1. [ ] - create inputs for pet name, pet color, pet breed - inside form
 2. [ ] - create dropdown with owners names inside - inside form
 3. [ ] - create submit button - inside form

## [ ] - pet section (functionality)
1. [ ] - on page load GET owners name list from db into dropdown menu
2. [ ] - get value of inputs and current value of owners name dropdown into db on submit button click

## [ ] - history table section (display)
1. [ ] - create headers: owner, pet, breed, color, checked in, actions
2. [ ] - actions column will contain: 
    delete button, 
    check in button(only if pet is not currently checked in), 
    checkout button(only if pet "checked in" status is false/no)
3. [ ] - create display functionality for delete/in/out buttons based on status
4. [ ] - create server/db functionality for delete/in/out buttons

## [ ] - history table section (functionality)
1. [ ] - on page load GET data for table from db
2. [ ] - display this data on DOM


 # Manage Owners View
## [ ] - Display
1. [ ] - create input field for add owner
2. [ ] - create submit button
3. [ ] - create "Owners" table with headers: name, number of pets, actions
4. [ ] - create "Delete" button and place inside actions columns

## [ ] - Functionality
1. [ ] -