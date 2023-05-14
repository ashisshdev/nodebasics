# nodebasics
 Learning NodeJs

node cmd commends -
node -v - version of my nodejs environment 
npm -v - version of my package manager 

create a file in root and name it app.js/main.js/server.js it's the starting point of the app (we will mention this file as out root file)


Express is a package we need to fetch from api just like we fetch packages from pub.dev 
go to terminal - npm init (this will create a packages file / dependencies file ) packages.json 
like there is pubspec.yaml in flutter 

now that we have out packages file in our node environment, let's install some packages and they will automatically appear in this package.json 

lets run npm install express 

now I have a new file called package-lock.json similar to pubspec.lock in flutter 
and I have node_modules folder that contains my external dependencies 

now we use import in flutter to import packages in our dart files
here we will do const variable = require('express'); at top of the file 

then we call const app = express();
and the app.listen(portNumber);

then run the app, node main.js to start the server 
(it will throw an error because there is not root path)

let's create some paths/routes 

I will have to make all those routs and stuff before listening to the server..

I have setUP the database using mongoose package and path from my mongoDb database on cloud, 

Now everytime I make change, I have to press Ctrl+c and then run node main.js 
let's automate this process

we will use a package nodemon 
lets install it 

this time we will use the command npm install -g nodemon 
this will install this dependency into out local machine (global level) so we can easily use it in future node projects 

now I won't run node main.js 
I will run nodemon main.js 
and that will restart the server everytime I make a change in the project 


let's create a script in configuration file of my project (package.json)

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start":"node main.js", /// added this 
    "dev":"nodemon main.js" /// added this
  },

now I can just run -> npm run dev ,instead of, nodemon main.js 
..........

furhter let's structure our code further 

create a src folder and put all project files in it
(remember to change address of the files in the scripts as well)

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start":"node src/main.js", /// added this 
    "dev":"nodemon src/main.js" /// added this
  },

...........

let us now create a model 

then import it in out main.js 



