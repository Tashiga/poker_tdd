export class Carte {
    constructor(rang, couleur) {
        const rangsValides = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valet', 'Dame', 'Roi', 'As'];
        const couleursValides = ['Cœur', 'Carreau', 'Trèfle', 'Pique'];
        if (!rangsValides.includes(rang))
            throw new Error(`Rang invalide : ${rang}`);
        if (!couleursValides.includes(couleur))
            throw new Error(`Couleur invalide : ${couleur}`);
        this.rang = rang;
        this.couleur = couleur;
    }
}