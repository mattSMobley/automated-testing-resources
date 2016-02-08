# Asynchronous Testing Exercises

## Problem 1

Create an object that provides a Logging service. It has methods that write to a file, preappending the date and the type of information. This object needs to have the following functionality


- The Logger object needs to have a function that initializes the logger, it takes a parameter that is the name of the log file. If the file does not exist, create it. If the file exists.
- If a `LOG`, `INFO`, `WARN`, `ERROR`, or `DEBUG` message is attempted to be logged without the Logger object, it should return false.
- Log logging information, with the text `LOG` preappended to the information being logged.
- Log information, with the text `INFO` preappended to the information being logged.
- Log warnings, with the text `WARN` preappended to the information being logged.
-  Log errors, with the text `ERROR` preappended to the information being logged.
-  Log debugging messages, with the text `DEBUG` preappended to the information being logged
- If any of the file actions is unsuccessfull, return `false`. If the action was successful, return `true`.



## Problem 2

In this repository there is a folder named `database-test`. This folder contains a basic skeleton to test a database using mocha. To set up the project, run the following commands:

```
npm init
createdb database-test

```

To run the test: `npm test`

In the `user-database.js` add the following functions to the object:

- Get all users from database,
- Get one user with a given id,
- Update 1 user with a given id, and updated values,
- Delete 1 user with a given id.



 





