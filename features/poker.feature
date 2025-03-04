Feature: Évaluation d'une main de poker
  Scenario: Une main de poker doit être évaluée pour obtenir un score
    Given une main de poker contenant:
      | Rang  | Couleur  |
      | As    | Cœur  |
      | Roi   | Cœur  |
      | Dame  | Cœur  |
      | Valet | Cœur  |
      | 10    | Cœur  |
    When j'évalue cette main
    Then le score doit être "Quinte Flush Royale"
