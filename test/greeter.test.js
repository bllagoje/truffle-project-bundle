const Greeter = artifacts.require('Greeter.sol');


contract('Greeter', () => {
  it("Should update the greeting once it is changed", async () => {
    const greeter = await Greeter.new('Hello World!');
    await greeter.setGreeting('Hola Mundo!');
    const greeting = await greeter.getGreeting();
    assert(greeting.toString() === 'Hola Mundo!');
  });
});
