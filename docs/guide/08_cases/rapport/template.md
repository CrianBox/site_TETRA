# Titel

## Probleemomschrijving

### Wat is het probleem

* Informeel:
  
Beschrijf (enkele) kernproblemen en gewenste doelen binnen dezelfde installatie.
Opstellen van een V-diagram ('system engineering'). De vereisten van het controlesysteem moet voor zowel de ontwerper als voor de eindgebruiker (klant/organisatie) duidelijk zijn. 

* Formeel:

Regeltechnische ontleding met een 'Controlled Variable'. Verificatie en validatie setpoints bespreken met de klant. Vaak zijn referentiesignalen in het tijdsdomein noodzakelijk.
  
* Veronderstellingen

Maak een lijst met (beschrijvende) veronderstellingen. Dit maakt onduidelijke en onjuiste aspecten sneller duidelijk. 

* Gelijkaardige problemen

Bekijk problemen van dezelfde aard om inspiratie op te doen of om limitaties aan te kaarten.

### Waarom bestaat het probleem?

* Motivatie

Wat is het uiteindelijke doel door het probleem op te lossen? Zijn er bijvoorbeeld persoonlijke redenen om technieken bij te leren door ze toe te passen? Zijn er doelstellingen die door het management opgelegd worden?

* Voordelen

Wat is de gecreëerde meerwaarde door het probleem op te lossen? Verhoogt het productiecapaciteit, veiligheid, kwaliteit, et cetera? 

* Levensduur

Denk aan het onderhouden van een gevonden oplossing. Als er een programma werd geschreven (of gebruikt). Hoelang zal het duren voorleer deze opnieuw nodig zal zijn? Moet het herschreven worden met updates? Je wilt een oplossing dat lang meegaat en gemakkelijk is om up-to-date te houden.

### Vereisten

Aan welke eisen moet het systeem voldoen?
Aan welke minimale prestaties moet de regelkring voldoen?

### Hoe oplossen

Verzamel gegevens, plan prototypes en experimenten. Deze zullen problemen aan het licht brengen 

## Het proces

Omschrijf de omgeving waarin de installatie zich bevindt.
Omschrijf het proces in een blokschema
- open-lus testen van het proces
- het begrijpen van de actuatordynamica
- kennis hebben van sensor specificaties

Bespreek de componenten en de limitaties.

Bespreek de (minimale) veiligheid en de gewenste betrouwbaarheid.


## Data

Welke gegevens zijn er voorhanden.
- meetfrequentie
- datatype


## Preprocessing

Vorm de dataset om naar een bruikbaar formaat.


### Features

Met welke variabelen ga je verder?


## Analyse

Beschrijf wat de gebreken zijn in het systeem in vergelijking met de status quo.
Onderbouw aan de hand van verschillende analyses waarom een bepaalde conclusie wordt getrokken.

### Systeem identificatie

Stel een procesmodel op, indien noodzakelijk. Maak gebruik van een blok diagram met de verschillende ingangen en uitgangen. Maak het onderscheid tussen niet-gemeten verstoringen (UD), gemeten verstoringen (MD), manipuleerbare variabelen (MV) en gemeten uitgangen (MO).

Identificeer de verschillende onderdelen:
* het process
* de omvormer (power converter)
* de feedback (sensor)
* de controller

Kies het tijds- of frequentiedomein.

### Controle ontwerp

* Kies een controlestrategie. 
* Simuleer de controller
* Ontwerp controleparameters voor gewenst systeemgedrag


## Validatie

Stel een experiment op om de uiteindelijke oplossingen te testen in een industriële omgeving. Zijn de verwachtingen gelijk aan de werkelijke resultaten bij het toepassen van de vooropgestelde oplossingen?

Mogelijke technieken: [RCP, HIL](docs\guide\05_praktische_aanpak\README.md), et cetera

Constructie en implementatie:
* Zorg voor aansluitende hardware en software
* Bouw het systeem virtueel op

Systeem integratie:
* Test de subsystemen
* Voer HIL simulatie uit
* Verbeter en fine-tune
* Test de veiligheid en betrouwbaarheid

Veldtest:
* Pas een test scenario toe
* Integreer testen tijdens het standaard werkschema van de installatie (prestaties onder verschillende condities)
* Analyseer (statistisch) en verbeter prestaties

Productie:
* Draag virtuele componenten over naar hardware


## Besluit

Formuleer een (of meerdere) oplossingen om betere procescontrole te bekomen.
- oplossingen
- veranderingen
- aanbevelingen


## Economische analyse

Maak een kosten/baten analyse. Vergelijke de verwachte en de reële resultaten.  
