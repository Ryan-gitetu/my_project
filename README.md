# Le projet

En raison de la crise sanitaire, beaucoup de magasins ou de commerçants ont recours de manière exceptionnelle à la vente à emporter.
Beaucoup d'entre eux n'ont pas à leur disposition une application Web leur permettant de gérer cette activité. 

Le but est donc de créer une application web pour gérer en interne un magasin. Les données du magasin viennent d'une base de données, on y retrouve par exemple les identifiants des employées pour se connecter, ainsi que les données correspondant aux rayons et produits du magasin. Nous utilisons l'API vendor afin de d'interagir avec la base de données depuis l'application web. 

### Framework EmberJS + Semantic UI

Le projet à été conçu avec l'utilisation de deux framework
 *  EmberJS est un framework open-source javascript, qui s'appuie sur une architecture MVC.
 *  Semantic UI est un framework d'interface avec des composants sémantiques prédifini qui simplifie la mise en page d'un site.

# Le site

### Connexion au site 
 Pour accéder à n'importe quelles pages du site, il faut renseigner ses identifiants. La page d'après connexion pemet au commercant de voir les commandes qu'il doit traiter. La barre de menu en haut permet de pouvoir accéder à la partie gestion du magasin, mais aussi de se déconnecter à tout moment.
 
### Gestion du magasin

 La gestion du magasin se fait par deux pages principales. La première page accessible sur la barre de menu, permet d'afficher les differentes sections du magasin avec leurs descriptions. Cette page permet aussi l'ajout, la suppression et la vue détaillées des section mais aussi l'ajout d'un produit. 
 
 Lorsque l'on clique sur le bouton pour détailler une section, nous sommes redirigé sur la secone page principale de gestion du magasin. Cette page affiche les produits présent dans la section, elle permet aussi de supprimer ou modifier la section. Pour les interactions avec les produit, ils peuvent etre supprimés et modifiés. Il est aussi possible d'ajouter de nouveaux produits.
