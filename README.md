# Projet React par Axel Carandang

disponible sur: https://react-lyfe-quizz.netlify.app/

## Etape pour faire fonctionner le projet

Commencer par cloner le repository avec: 
### `git clone` https://github.com/IIM-Creative-Technology/react-azor40k/
#
Ensuite avant de lancer le projet en local, installer les dépendances avec: 
### `npm install`
#
Pour lancer le projet en local: 
### `npm start`
#
Commande pour un déploiement en production:
### `npm run build`

## Utilisation des custom Hooks:

useCityTemperature :
### `const { temp, ville } = useCityTemperature(cityName)` 
Ce Hook prends en paramètre un le nom d'une ville (en string) et retourne deux valeurs, :
`temp` qui correspond a la tempréature de la ville.
`ville` qui est le nom de la ville formatée.
#

## Indications supplémentaire :
Ce projet a été realisé à deux et n'est inspiré d'aucun tuto trouvable sur internet. Nous nous sommes réparties la même charge de travail.
#
Attention ! Il est possbile que l'api météo ne fonctionne pas sur le site déployé. Si cela est le cas, vous pouvez clone ce repo et tester en local. Si cela ne marche toujours pas, il est possbile que le nombre de requêtes ait été dépassé.
