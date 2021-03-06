# Initial Setup
1. [x] - `npm install express body-parser pg`, `npm init`, add "start": "node server/server.js" to package.json
2. [x] - create server.js, make folder structure
3. [x] - create client.js, controllers.js, index.html, views.html, routers, pool.js
4. [x] - set up server code on server.js, spin up server
5. [x] - set up pg code on pool.js
6. [x] - create database, 2 tables pets and owners, create database.sql file with creation sql and add to project
7. [x] - source in angular/router, client, controllers, material ng on index.html
8. [x] - basic set up code inside client.js(config), index(ng views, #url for views) , controllers, routers(exports), views

# Dashboard View
1. [x] - buttons for dashboard and manage owners
## [x] - add pet section (display):
 1. [x] - create inputs for pet name, pet color, pet breed - inside form
 2. [x] - create dropdown with owners names inside - inside form
 3. [x] - create submit button - inside form

## [x] - add pet section (functionality)
1. [x] - on page load GET owners name list from db into dropdown menu
2. [x] - get value of inputs and current value of owners name dropdown into db on submit button click

## [x] - history cards section (display) (changed from table to allow for images)
1. [x] - create card with: owner, pet, breed, color, checked in, actions
2. [x] - card will also contain: 
    delete button, 
    check in button(only if pet is not currently checked in), 
    checkout button(only if pet "checked in" status is false/no)
3. [x] - create display functionality for delete/in/out buttons based on status
4. [x] - create server/db functionality for delete/in/out buttons

## [x] - history card section (functionality) (changed from table to allow for images)
1. [x] - on page load GET data for table from db
2. [x] - display this data on DOM


# Manage Owners View
## [ ] - Display
1. [ ] - create input field for add owner
2. [ ] - create submit button
3. [ ] - create "Owners" table with headers: name, number of pets, actions
4. [ ] - create "Delete" button and place inside actions columns

## [ ] - Functionality
1. [ ] - get value of input into db on submit button click
2. [ ] - get list of owners name, number of pets and actions button to update on submit button
3. [ ] - number of pets will require some sql magic and may need to update
number of pets in table at the time the add new pet is done
4. [ ] - get id of row on delete button click and remove from db
5. [ ] - update table with updated list on delete button click

### Stretch for the stuffs
 - upload/link to image when adding pet
 - filter list of cards based on checked in/out