import { Carte } from "../src/Carte";

test('Créer une carte de poker', () => {
  const carte = new Carte('As', 'Cœur');
  expect(carte.rang).toBe('As');
  expect(carte.couleur).toBe('Cœur');
});

test('Créer une carte avec une valeur et une couleur valides', () => {
  const card = new Carte('10', 'Pique');
  expect(card.rang).toBe('10');
  expect(card.couleur).toBe('Pique');
});

test('Vérifier que deux cartes différentes ne sont pas identiques', () => {
  const card1 = new Carte('Roi', 'Trèfle');
  const card2 = new Carte('Roi', 'Cœur');
  expect(card1).not.toEqual(card2);
});

test('Vérifier que deux cartes identiques sont égales', () => {
  const card1 = new Carte('Dame', 'Carreau');
  const card2 = new Carte('Dame', 'Carreau');
  expect(card1).toEqual(card2);
});

test('Vérifier la gestion d’une carte invalide (optionnel, si implémenté)', () => {
  expect(() => new Carte('Joker', 'Cœur')).toThrow();
  expect(() => new Carte('11', 'Trèfle')).toThrow();
  expect(() => new Carte('Roi', 'InvalidSuit')).toThrow();
});
