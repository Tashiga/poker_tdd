const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const Carte = require('../../src/Carte.js');
const Poker = require('../../src/poker.js');

let main;
let score;

Given('une main de poker contenant:', function (dataTable) {
  const cartes = dataTable.raw().map(([rang, couleur]) => new Carte(rang, couleur));
  main = new Poker(cartes);
});

When("j'évalue cette main", function () {
  score = hand.evaluate();
});

Then("le score doit être {string}", function (expectedScore) {
  assert.strictEqual(score, expectedScore);
});
