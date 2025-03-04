Feature: Création de cartes
  Scenario: Une carte possède une valeur et une couleur
    Given une carte "As" de "Cœur"
    Then sa valeur doit être "As"
    And sa couleur doit être "Cœur"

  Scenario: Vérifier les rangs valides
    Given une carte "Valet" de "Trèfle"
    Then sa valeur doit être "Valet"
    And sa couleur doit être "Trèfle"

  Scenario: Vérifier un rang invalide
    Given je tente de créer une carte avec "Joker" de "Cœur"
    Then une erreur doit être lancée