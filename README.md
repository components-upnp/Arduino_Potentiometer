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
    
    
Foctionnement:

   Le potentiomètre est un composant physique qui lorsque l'on tourne son curseur, fait varier la tension électrique au niveau de sa borne centrale.
   
   Dans notre cas, lorsque la tension électrique change, le service UPnP est notifié et on lui transmet un entier de 0 à 100 représant l'intensité électrique. Le service enverra alors un évènement "StatusEvent" sur le réseau avec la nouvelle valeur (sous forme d'entier).
    
Ici, schéma du circuit:
![alt tag](https://github.com/components-upnp/upnp_potentiometer/blob/master/upnp_potentiometre/Circuit.png?raw=true
)

Schéma du composant avec son interface:

![alt tag](https://github.com/components-upnp/upnp_potentiometer/blob/master/upnp_potentiometre/upnp_potentiometer_diagram.png
)

L'interface PotoService offre:

    - getStatus(): permet de récupérer la valeur de la variable d'état.
    - setStatus(int newValeur): permet de modifier la valeur de la variable d'état, si la valeur est nouvelle appelle la méthode notify() qui enverra un évènement de type "StatusEvent"



Cas d'utilisation du potentiomètre UpNP:

    -Gestion de la luminosité dans une salle.
    -Gestion du niveau sonore d'un haut parleur connecté en UpNP.
