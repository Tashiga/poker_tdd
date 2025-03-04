import { Carte } from "../src/Carte";
import { Poker } from "../src/poker";

test('Créer une main de poker avec 5 cartes valides', () => {
  const cartes = [
    new Carte('As', 'Cœur'),
    new Carte('Roi', 'Cœur'),
    new Carte('Dame', 'Cœur'),
    new Carte('Valet', 'Cœur'),
    new Carte('10', 'Cœur')
  ];
  const poker = new Poker(cartes);
  expect(poker.cartes).toEqual(cartes);
});

test('Créer une main de poker avec un nombre invalide de cartes', () => {
  expect(() => new Poker([])).toThrow('Vous n\'avez pas 5 cartes dans votre main!');
  expect(() => new Poker([new Carte('As', 'Cœur')])).toThrow('Vous n\'avez pas 5 cartes dans votre main!');
  expect(() => new Poker([new Carte('As', 'Cœur'), new Carte('Roi', 'Cœur')])).toThrow('Vous n\'avez pas 5 cartes dans votre main!');
});

test('Vérifier le résultat pour une Quinte Flush Royale', () => {
  const cartes = [
    new Carte('As', 'Cœur'),
    new Carte('Roi', 'Cœur'),
    new Carte('Dame', 'Cœur'),
    new Carte('Valet', 'Cœur'),
    new Carte('10', 'Cœur')
  ];
  const poker = new Poker(cartes);
  expect(poker.evaluate()).toBe('Quinte Flush Royale');
});

test('Vérifier le résultat pour une Quinte Flush', () => {
  const cartes = [
    new Carte('9', 'Pique'),
    new Carte('8', 'Pique'),
    new Carte('7', 'Pique'),
    new Carte('6', 'Pique'),
    new Carte('5', 'Pique')
  ];
  const poker = new Poker(cartes);
  expect(poker.evaluate()).toBe('Quinte Flush');
});

test('Vérifier le résultat pour un Carré', () => {
  const cartes = [
    new Carte('As', 'Cœur'),
    new Carte('As', 'Carreau'),
    new Carte('As', 'Trèfle'),
    new Carte('As', 'Pique'),
    new Carte('10', 'Cœur')
  ];
  const poker = new Poker(cartes);
  expect(poker.evaluate()).toBe('Carré');
});

test('Vérifier le résultat pour un Full', () => {
  const cartes = [
    new Carte('As', 'Cœur'),
    new Carte('As', 'Carreau'),
    new Carte('As', 'Pique'),
    new Carte('Roi', 'Trèfle'),
    new Carte('Roi', 'Cœur')
  ];
  const poker = new Poker(cartes);
  expect(poker.evaluate()).toBe('Full');
});

test('Vérifier le résultat pour une Couleur', () => {
  const cartes = [
    new Carte('2', 'Cœur'),
    new Carte('4', 'Cœur'),
    new Carte('6', 'Cœur'),
    new Carte('8', 'Cœur'),
    new Carte('10', 'Cœur')
  ];
  const poker = new Poker(cartes);
  expect(poker.evaluate()).toBe('Couleur');
});

test('Vérifier le résultat pour une Quinte', () => {
  const cartes = [
    new Carte('2', 'Cœur'),
    new Carte('3', 'Carreau'),
    new Carte('4', 'Trèfle'),
    new Carte('5', 'Pique'),
    new Carte('6', 'Cœur')
  ];
  const poker = new Poker(cartes);
  expect(poker.evaluate()).toBe('Quinte');
});

test('Vérifier le résultat pour un Brelan', () => {
  const cartes = [
    new Carte('As', 'Cœur'),
    new Carte('As', 'Carreau'),
    new Carte('As', 'Pique'),
    new Carte('10', 'Trèfle'),
    new Carte('2', 'Cœur')
  ];
  const poker = new Poker(cartes);
  expect(poker.evaluate()).toBe('Brelan');
});

test('Vérifier le résultat pour Deux Paires', () => {
  const cartes = [
    new Carte('As', 'Cœur'),
    new Carte('As', 'Carreau'),
    new Carte('10', 'Trèfle'),
    new Carte('10', 'Pique'),
    new Carte('2', 'Cœur')
  ];
  const poker = new Poker(cartes);
  expect(poker.evaluate()).toBe('Deux Paires');
});

test('Vérifier le résultat pour une Paire', () => {
  const cartes = [
    new Carte('As', 'Cœur'),
    new Carte('As', 'Carreau'),
    new Carte('10', 'Trèfle'),
    new Carte('2', 'Pique'),
    new Carte('3', 'Cœur')
  ];
  const poker = new Poker(cartes);
  expect(poker.evaluate()).toBe('Paire');
});

test('Vérifier le résultat pour une Carte Haute', () => {
  const cartes = [
    new Carte('2', 'Cœur'),
    new Carte('4', 'Carreau'),
    new Carte('6', 'Trèfle'),
    new Carte('8', 'Pique'),
    new Carte('10', 'Cœur')
  ];
  const poker = new Poker(cartes);
  expect(poker.evaluate()).toBe('Carte Haute');
});
