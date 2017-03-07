# upnp_potentiometer
Potentiometre UPnP basée sur une carte Arduino

INSTALLATION:

    i - Avoir nodeJs installé sur la machine
    ii - Télécharger et décompresser l'archive du projet dans un dossier
    iii - Lancer les commandes npm install johnny-five et npm install peer-upnp depuis un terminal dans le répertoire du projet
    iv - Cabler les composants physiques sur la carte Arduino (confère la schéma ci-dessous)
    v - Brancher la carte sur la machine (port COM3 par défaut, si branchée sur un autre port, le préciser dans index.js)
    vi - Depuis l'IDE Arduinon, lancer le sketch File > Examples > Firmata > StandardFirmata
    vii - Lancer l'application avec la commande node index.js
    
Ici, lien vers le schéma du circuit:
https://github.com/components-upnp/upnp_potentiometer/blob/master/upnp_potentiometre/Circuit.png?raw=true



Cas d'utilisation du potentiomètre UpNP:
    -Gestion de la luminosité dans une salle.
    -Gestion du niveau sonore d'un haut parleur connecté en UpNP.
