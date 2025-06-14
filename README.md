# Breco (exercice projet)

## Présentation

Pour la région Bretagne, application mobile de **covoiturage régional**.
Mise en relation de particuliers afin de permettre à des usagers réalisant des trajets réguliers de se mettre en contact afin de réaliser ces trajets ensemble.

## Exemple de parcours

L’application permettra par exemple à Thomas, qui réalise quotidiennement le trajet Tinténiac > Rennes de s’inscrire sur l’application. Il entrera alors les jours du trajet (par exemple « Du lundi au Vendredi ») ainsi que l’horaire et lieu de départ (« Aire de covoiturage de Tinténiac » à 7h45), l’heure d’arrivée (8h10) et le lieu exact de stationnement la journée. Il renseignera également l’heure de retour le soir.
Une autre utilisatrice, Alice qui habite à Vignoc pourra trouver le trajet de Thomas si les horaires coïncident car l’aire de Vignoc se trouve sur le trajet de Thomas.

Attention, l’application a uniquement pour but de mettre en relation les utilisateurs et en aucune manière ne gérera la partie financière. Les utilisateurs pourront se mettre d’accord sur une participation financière ou sur un trajet alterné, mais cela ne fait pas partie du scope de ce projet.

## Environnements et logiciels

- Données stockées sur une base de données NoSQL **MongoDB**, via container **Docker**
- Développement sous VSCode via **Flutter**, applications natives Android compilées sous **Android Studio**.
- Backend réalisé en **PHP** avec une communication FrontEnd via des webservices (API REST) basés sur JSON.
- Frontend réalisé en HTML/CSS/JS ou avec un framework.
