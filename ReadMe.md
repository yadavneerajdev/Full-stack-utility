Open terminal in the node folder and use the following command to install all dependecies

project_node_directory : >  npm i

Folowing are the list of dependecies

- Nodemon - For restarting server automaticaly when detect any change in the files
- Express - Middleware for node js
- Cors - To satisfy cors policy
- Concurrently - To run both server and client at the same time in one terminal 
                 Change the projectname to your project folder name in package.json file client key
                 In terminal Enter "npm run dev" to run the server and client at the same time
- Mysql - To connect to the databse and perform sql queries
- Body-parser - To get and set data in json form to the route being used


The sever runs on Port : 5000 and routes are predefined for all CRUD(Create, Read, Update, Delete) operations.

Use Either fetch or axios on the required route to perform any particular operation.