# Second project for the course of Interactive 3D Graphics



## Membri del gruppo

- Comuzzo Massimo, Matricola 131100

- Rovere Andrea, Matricola 128074

## Descrizione generale del progetto

Il progetto consiste in una applicazione web caratterizzata da un sito di e-commerce che permette l'acquisto di una machcientta del caffè, abbiamo introdotto anche la possibilità di selezionare il materiale per il case e il materiale per il dispenser da una lista di materiali disponibili, è inoltre possibile ruotare la camera attorno alla macchinetta per osservare il prodotto da diverse angolazioni, è inoltre possibile avvicinare o allontanare la camera per concentrarsi sui dettagli o avere una vista d'insieme.

Inoltre è possibile rimuovere il contenitore del caffè posto nella parte sinistra della macchinetta.

Le informazioni sui materiali scelti e sul prezzo dell prodotto vengono visualizzate in alto vicino al pulsante per l'acquisto.

## Suddivisione del codice 

- **index.html** è il file principale che contiene il codice html, l'inizializzazione della scena e il rendering loop 
- **stile.css** è il file css che contiene il codice per l'interfaccia utente
- **materials.js** contiene il codice relativo ai materiali usati
- **README.md** è il presente file
- **journal.md** giornale dei progressi sul progetto
- la cartella **gui-images** contiene le immagini necessarie per l'interfaccia utente
- la cartella **textures** contiene le immagini necessarie per i materiali legnosi
- la cartella **jquery-ui** contiene il codice che crea le animazioni dell'interfaccia utente
- la cartella **fonts** contiene i font e le licenze usati nella pagina web
- la cartella **libs** contiene le librerie impiegate nella realizzazione della pagina di e-commerce
- la cartella **models** contiene il modello (in formato gltf) della macchinetta visulalizzata
- la cartella **Screenshot** contiene gli screenshot usati in questa relazione



## Camera

Nella pagina web è possibile ruotare la camera attorno alla macchinetta del caffe tramite uno slider posto nella parte inferiore della pagina, inoltre è possibile effettuare zoom in/out tramite la rotellina del mouse. 



## Interfaccia Utente

Nella parte in alto della pagina web è  presente un menù contenente:

- Logo ACME
- Nome del macchinetta del caffè
- Pulsante per effettuare l'acquisto della macchinetta
- Prezzo della macchinetta
- Materiale selezionato per il case 
- Materiale selezionato per il dispenser 

![Interfaccia utente](C:\xampp\htdocs\product-configuration-2019-rovere-comuzzo\Screenshot\interfaccia_top.JPG)

Nella parte destra della pagina web è presente un menù contenente tre bottoni:

- **Select Case**: premendolo compare una lista di immagini che se premute premettono di cambiare i materiali del case della macchinetta, una volta premuto viene sostituito dal bottone **Hide Selector** che può essere usato per nascondere la lista di materiali
- **Select Dispenser**: premendolo compare una lista di immagini che se premute premettono di cambiare i materiali del dispenser della macchinetta, una volta premuto viene sostituito dal bottone **Hide Selector** che può essere usato per nascondere la lista di materiali
- **Close**: può essere usato per minimizzare il menù avendo cosi una migliore visione del prodotto

![Interfaccia utente ](C:\xampp\htdocs\product-configuration-2019-rovere-comuzzo\Screenshot\interfaccia.JPG)

## Screenshot

![Interfaccia utente ](C:\xampp\htdocs\product-configuration-2019-rovere-comuzzo\Screenshot\Front_full.JPG)



![Interfaccia utente ](C:\xampp\htdocs\product-configuration-2019-rovere-comuzzo\Screenshot\Front_full_mat.JPG)



![Interfaccia utente ](C:\xampp\htdocs\product-configuration-2019-rovere-comuzzo\Screenshot\Front_solo_mat.JPG)

![Interfaccia utente ](C:\xampp\htdocs\product-configuration-2019-rovere-comuzzo\Screenshot\Side_solo.JPG)



## Futuri sviluppi

Alcune possibili estensioni e miglioramenti sono:

- Creare altri materiali
- Creare alcune animazioni come l'erogazione del caffè, la rimozione/aggiunta di alcune parti della macchinetta



## Crediti

- Il modello della macchinetta è preso da:https://sketchfab.com
- le texture per i materiali del legno sono prese da: https://cc0textures.com

  