# Synchronous Testing Exercises

## Enviroment setup

Make a new folder name `synchronous-testing-exercises` in the root folder of this repository.

Change directories to your new folder.

Run `npm init`

Install the following packages

```
npm install --save-dev mocha
npm install --save-dev chai
```

Create a folder named `tests`, this is where you testing files will live.

Inside the `packages.json` file, make sure that the `test` property looks like this:

```
  "scripts": {
    "test": "mocha"
  }
```

this allows you to run the test suite with the command `npm test`

For each of the following exercises, you'll need two files. One where the functionality will be located, and the other where the test are located.

The file with the functionality should be named after the exercise. But the test file, should be located in the test folder, and be named in the following pattern `exercise1.test.js`.

## Example

In the folder `hello-world-test` there is a running implementation of a test using mocha. The test are run by using the command `npm test`.


## Exercise 1 - Math Libary

Create an object that provides the following basic mathematical methods.

- Addition,
- Substraction,
- Multiplication,
- Division, (if it's divison by zero, return null),
- Power,
- Square root

Follow the red/green/refactor pattern when coding the tests.

## Exercise 2 - Tax Calculator

Create at object that provides the tax calculations for a positive amount:

- The first $10 is taxed at 10%
- The second $10 is taxed at 7%
- The third $10 is taxed at 5%
- Everything after that is taxed at 3%
- If the value passed to calculate taxes on is negative, return null.

Follow the red/green/refactor pattern when coding the tests.


## Exercise 3 - Toaster Simulator

For this exercise, we are going create tests of a Toaster object. This object will exhibt the following behavior.

- When instantiated, the toaster has a power status of `off`
- When instantiated, the toaster has a toasting status of `off`.
- When the power function is called, it should change the power status to `on`
- When the power function is called, it should turn change the power status to the opposite of the current status.
- When the toast function is called, and the power is `off`, the toasting status should not change to `on`.
- When the toast function is called, and the power is `on`, the toasting status should change to the opposite of the current status.
- When the power status is `on`, and the toasting status is `on`, and the power function is called, it should set the power status and the toasting status to `off`.

Follow the red/green/refactor pattern when coding the tests and object methods


## Exercise 4 - Number Validation

Create an object that can do number validation with the following features:

- Can set/get minimum valid number
- Can set/get maximum valid number
- Can set/get an array of invalid numbers
- Can set/get an array of valid numbers
- It should use only one validation strategy at a time. If one strategy is set after another, apply only the latest.

Follow the red/green/refactor patter when coding the test and object methods.


