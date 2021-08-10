# Opstaande pendulum

## Probleemomschrijving

### Wat is het probleem

* Informeel:
  
Er zijn verschillende actuatoren en externe invloeden. Het instellen van PID parameters gebeurt ad-hoc. Er is geen standaard tussen verschillende vestigingen.

* Formeel:

Zuurstof stabiel regelen onder verschillende condities.
  
* Veronderstellingen

  - temperatuur heeft een invloed op zuurstofopname van water
  - actuatoren (beluchters) zijn frequentiegestuurd

* Gelijkaardige problemen

...

### Waarom bestaat het probleem?

* Motivatie

Wat is het uiteindelijke doel door het probleem op te lossen? Zijn er bijvoorbeeld persoonlijke redenen om technieken bij te leren door ze toe te passen? Zijn er doelstellingen die door het management opgelegd worden?

Standardisatie doorvoeren in verschillende vestigingen waar gelijksoortige installaties aanwezig zijn.

* Voordelen

Door duidelijke richtlijnen te volgen zal het instellen van huidige regelaars sneller verlopen. Ook zal de procesregeling stabieler verlopen met verhoogde kwaliteit tot gevolg.

* Levensduur

Denk aan het onderhouden van een gevonden oplossing. Als er een programma werd geschreven (of gebruikt). Hoelang zal het duren voorleer deze opnieuw nodig zal zijn? Moet het herschreven worden met updates? Je wilt een oplossing dat lang meegaat en gemakkelijk is om up-to-date te houden.

Variaties in watervolumes, actuatoren en omgeving zijn redenen om per regelkring elk subsysteem duidelijk in kaart te brengen en regelmatig te valideren met de werkelijkheid. Een aanpassing in het procesmodel maakt de 'oude' controlewet minder effectief waardoor deze mee moet evolueren. 

### Hoe oplossen

Verzamel gegevens, plan prototypes en experimenten. Deze zullen problemen aan het licht brengen 

## Het proces (de hardware)

* 130 motor smart car robot gear motor
  * DC 3v-6v
  * Koppel: 800 cm.min
  * Toerental: 100-240
  * Stroom: 100mA - 120mA
  * Reductie: 48:1
* Driver
  * SparkFun Dual H-Bridge motor dirver L298
  * working voltage up to 46V
  * 25W rated power
  * Connection
    * Out 1: Motor A lead out 1
    * Out 2: Motor A lead out 2
    * Out 3: Motor B lead out 1
    * Out 4: Motor B lead out 2
    * GND: Ground
    * 5V: 5V Logic Input
    * EnA: Enables PWM signal for Motor A
    * In1: Input for Motor A lead out 1
    * In2: Input for Motor A lead out 2
    * In3: Input for Motor B lead out 1
    * In4: Input for Motor B lead out 2
    * EnB: Enables PWM signal for Motor B*
  
* Sensor
  * inertial measurement unit (IMU) 
  * MPU6050
  * 6 dof


## Data

Welke gegevens zijn er voorhanden?
- meetfrequentie
- datatype

Onder welke condities moet het systeem werken?
* Geef de verschillende situaties
* Geef de referentiesignalen waarin het proces moet volgen
* Geef de verschillende setpoints
  Zuurstof heeft twee wenswaardes (gelinkt aan hoge en lage belasting)
  

## Preprocessing

* Vorm de dataset om naar een bruikbaar formaat.
* Selecteer de juiste variabelen (=features)
* Filter/verwerk de dataset

## Transformeer

Vorm bruikbare dataset voor de systeem identificatie fase. 


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

Lichaam vrijmaken met:

$m_2$: massa kar
$m_1$: massa pendulum
b: wrijvingscoëfficiënt
l: lengte pendulum
I: massatraagheid
F: kracht op kar
x: karpositie
$\theta$: hoek tenopzichte van loodrecht

$$ m_2 \ddot{x} + b \dot{x} + N = F $$
N: reactiekracht in scharnier


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
