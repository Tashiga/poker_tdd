import { Carte } from "./Carte";

export class Poker {
  constructor(cartes) {
    if (cartes.length !== 5) 
        throw new Error('Vous n\'avez pas 5 cartes dans votre main!');
    this.cartes = cartes;
  }

  evaluate() {
    const couleurs = this.cartes.map(card => card.couleur);
    const rangs = this.cartes.map(card => card.rang);

    const isFlush = new Set(couleurs).size === 1;
    const sortedRangs = rangs
      .map(rang => this.getScoreOfRang(rang))
      .sort((a, b) => a - b);

    const suiteOfCarte = this.estUneSuite(sortedRangs);
    const occurrences = this.getOccurrences(sortedRangs);

    if (isFlush && suiteOfCarte && sortedRangs.includes(14)) return 'Quinte Flush Royale';
    if (isFlush && suiteOfCarte) return 'Quinte Flush';
    if (this.estUnCarre(occurrences)) return 'Carré';
    if (this.estUnFull(occurrences)) return 'Full';
    if (isFlush) return 'Couleur';
    if (suiteOfCarte) return 'Quinte';
    if (this.estUnBrelan(occurrences)) return 'Brelan';
    if (this.estDeuxPaires(occurrences)) return 'Deux Paires';
    if (this.estUnePaire(occurrences)) return 'Paire';
    
    return 'Carte Haute';
  }
  
  //si c'est une suite de carte
  estUneSuite(sortedRangs) {
    for (let i = 1; i < sortedRangs.length; i++) {
      if (sortedRangs[i] !== sortedRangs[i - 1] + 1) 
        break;
      if (i === sortedRangs.length - 1) 
        return true;
    }
    return sortedRangs.join(",") === "2,3,4,5,14" || false;
  }

  getOccurrences(rangs) {
    const occurrences = new Map();
    rangs.forEach(rang => {
      occurrences.set(rang, (occurrences.get(rang) || 0) + 1);
    });
    return occurrences;
  }

  estUnCarre(occurrences) {
    return Array.from(occurrences.values()).includes(4);
  }

  estUnFull(occurrences) {
    const values = Array.from(occurrences.values());
    return values.includes(3) && values.includes(2);
  }

  estUnBrelan(occurrences) {
    return Array.from(occurrences.values()).includes(3);
  }

  estDeuxPaires(occurrences) {
    return Array.from(occurrences.values()).filter(count => count === 2).length === 2;
  }

  estUnePaire(occurrences) {
    return Array.from(occurrences.values()).includes(2);
  }

  getScoreOfRang(rang) {
    const scores = {
      '2': 2, 
      '3': 3, 
      '4': 4, 
      '5': 5, 
      '6': 6, 
      '7': 7, 
      '8': 8, 
      '9': 9,
      '10': 10, 
      'Valet': 11, 
      'Dame': 12, 
      'Roi': 13, 
      'As': 14
    };
    return scores[rang] || 0; //return le score de la carte ou sinon 0
  }


}