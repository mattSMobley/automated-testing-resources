# automated-testing-resources

---
This unit covers automated testing, why it is useful, and how to implement it. 

Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle: first the developer writes an (initially failing) automated test case that defines a desired improvement or new function, then produces the minimum amount of code to pass that test, and finally refactors the new code to acceptable standards.

Testing is useful in software development for the following reasons,

- Lower Bug Count
- Faster Pace of Change
- Executable Documentation
- Higher Confidence Deploys
- Reduced Cost over time
- Easily repeatable for team

By provided a benchmark of the current code base, test make it safer to expand on it. If any new features, or changes break any existing behavior of the application, good test coverage can discover it sooner.

On the other hand, testing does have some qualities that detract from their usefulness

- Huge investmet of time initially
- Complex Cases
- Design Impacts
- Continous Tweaking of Tests
- Testing the wrong thing

Test do not provide a immediate and direct value to the customer. Not in the short term. Therefore, some developer/teams skip them in favor of getting their product out.

---

#### Unit Testing vs Integration Testing

A unit test is a test written by the programmer to verify that a relatively small piece of code is doing what it is intended to do. They are narrow in scope, they should be easy to write and execute, and their effectiveness depends on what the programmer considers to be useful. The tests are intended for the use of the programmer, they are not directly useful to anybody else, though, if they do their job, testers and users downstream should benefit from seeing fewer bugs.

An integration test is done to demonstrate that different pieces of the system work together. Integration tests cover whole applications, and they require much more effort to put together. They usually require resources like database instances and hardware to be allocated for them. The integration tests do a more convincing job of demonstrating the system works (especially to non-programmers) than a set of unit tests can, at least to the extent the integration test environment resembles production.

---

#### Red/Green/Refactor

Red/Green/Refactor is a mnemonic that TDD uses to descrive it development process, it goes as follows:

RED: Start by thinking of a behavior you want the software to have which could be implemented by a few lines of code (fewer than five is a good target). Then write a test (also only a few lines of code) that will fail unless that behavior is present.

GREEN: Write just enough code to get the test to pass.

REFACTOR: Now that the code does what you want, use refactoring to make the design right.

The cycle then repeats with each new behavior you want to have. The entire cycle should take between 5-10 minutes. 

A couple of last points to emphasize:

- Tests are checked in with the rest of the code (they are essentially living documentation of the code)
- Tests are run with every build

---

## Exercises

[Synchronous Testing](synchronous-testing.md)

[Asynchronous Testing](asynchronous-testing.md)

<!-- [Hooks] -->

<!-- [Thrown Error Testing](thrown-error-testing.md) -->

<!-- [Promise Testing](promise-testing.md) -->

<!-- [API with Super Test] -->


