# nail_salon

### LINK TO SITE: 

### Technology Used
* Node.js, Express, & EJS:
  * Created routes to the web browser using Node.js. 
  * Built a RESTful API with Node & Express, storing data in JSON format.
  * Created HTML pages with EJS.
* Mongoose, MongoDB:
  * Created Models & Schemas using Mongoose. Used Mongoose to create full CRUD within the RESTful routes.
  * Stored data using Node.js & MongoDB.
* CSS, Bootstrap:
  * Styled EJS pages with custom CSS and Bootstrap.
* Heroku:
  * Hosted my app on Heroku.

### Approach Taken
1. I started off by creating a repo on Github.
2. Made a wireframe.
3. I then started working on creating routes for users to login/create new user.
  * Created a model/schema for users to store their user Id and password.
  * Using Bcrypt, encrypted the password for security.
4. Once users can login and create new users, I created two more models/schemas. 
  * Service schema.
  * Brand schema.
5. I then created routes following the RESTful convention, ensuring they all work properly.
6. Once routes were created I made EJS files for each of my HTML pages and rendered data onto them as necessary.
7. Used CSS and Bootstrap to style all of my pages.
8. Hosted my site on Heroku. 

### Unsolved Problems:
* NONE

### User Stories
* This site is made for the owner of the nail salon.
* They will be able to login to add and remove services/brands they offer.
* Only when the user logs in to the site is when they are able to create a new user.
* Anyone that is not logged in, will only see information rendered to the site and unable to make any edits/deletes.

![Landing Page](/public/images/landingpage.jpg)

..