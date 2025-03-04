const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const Carte = require('../../src/Carte.js');

let carte;
let erreur = null;

Given('une carte {string} de {string}', function (rang, couleur) {
  carte = new Carte(rang, couleur);
});

Given('je tente de créer une carte avec {string} de {string}', function (rang, couleur) {
    try {
        new Carte(rang, couleur);
    } catch (err) {
        erreur = err;
    }
});

Then('sa valeur doit être {string}', function (expectedRank) {
  assert.strictEqual(carte.rang, expectedRank);
});

Then('sa couleur doit être {string}', function (expectedColor) {
  assert.strictEqual(carte.couleur, expectedColor);
});

Then('une erreur doit être lancée', function () {
  assert.ok(erreur, 'Aucune erreur n\'a été lancée');
  assert.ok(erreur.message.includes('Rang invalide'), `Erreur attendue sur le rang invalide, mais obtenu : ${erreur.message}`);
});
