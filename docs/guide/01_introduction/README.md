# Introductie

## Termen en definities

Een *proces* refereert naar een systeem zonder controle.
Een *installatie* (= 'plant') geeft het te controleren systeem weer waarvan het gecontroleerde proces een deel is.
De controle is dan de aanpassing van de beschikbare manipuleerbare variabelen om de installatie op een acceptabele manier te laten werken.

De werking van het systeem is het gedrag dat zich voordoet wanneer het systeem inclusief het ingestelde regelsysteem is gemaakt.
De operationaliteit is het potentieel dat het systeem bevat om een acceptabele werking te bewerkstelligen. Operationaliteit houdt flexibiliteit, verwisselbaarheid en controleerbaarheid in.

*Flexibiliteit* beschrijft de haalbare steady-state werking bij een gegeven set van werkingspunten. *Schakelbaar* slaat op de eigenschap om te veranderen naar een andere setpoint op een acceptabele manier. De *haalbaarheid* is hierbij van groot belang.
Optimale werking beschrijft de nominale optimale manier waarop de installatie werkt door steady-state en/of dynamische optimalisatie toe te voegen aan het model van de installatie. Hierbij streeft men naar het minimaliseren van een kostfunctie. In werkelijkheid is de optimale werking niet realiseerbaar door het optreden van onzekerheid.

Onzekerheid kan men beschrijven vanuit twee bronnen, signaal- en brononzekerheid. *Robuustheid* betekent het bestand zijn tegen onzekerheid. Robuuste optimale werking is de optimale werking waarin maatregelen voor onzekerheid zijn genomen.
Geïntegreerde optimalisatie en controle refereert naar een systeem waarin optimalisatie en controle ingebouwd zijn. Dit is theoretisch mogelijk met hiërarchische decompositie.
Hiërarchische decompositie is het onderverdelen van het systeem in verschillende lagen. 

De *controleerbaarheid* van een installatie is het tonen van acceptabele controleprestaties zoals controlevariabelen (output) binnen bepaalde grenzen liggen vanuit hun referentiepunten (ref).
Zelfregelende installaties kunnen controlevariabelen (output) binnen acceptabele grenzen houden met constante inputs.

## Frequent gebruikte afkortingen

Om onduidelijkheid te vermijden is een goede definitie van veelgebruikte afkortingen van groot belang. Hieronder zien we symbolen die in PID regeltechniek frequent voorkomen.

* $K_p$ : de versterker (P-gain) van de controller
* $K_i$ : de integratieversterker (I-gain) van de controller
* $T_i$ : de integratietijd (integrator) van de controller
* $K_d$ : de afgeleide versterker (D-gain) van de controller
* $T_d$ : de afgeleide tijd (derivative) van de controller
* $T_u$ : de periode van de oscillatiefrequentie tijdens de stabiliteitslimiet (in een gesloten lus)
* $K_u$ : de versterkingsmarge voor stabiliteit (in een gesloten lus)

## Regelaar

Een PID regelaar heeft slechts drie parameters maar deze correct instellen vergt enige basiskennis en oefening. Een duidelijk stappenplan bijgestaan door eenvoudige formules is een goed startpunt tot betere performantie. Dit behandelen we in een later hoofdstuk.

Een eerste orde systeem is de eerste keuze om het proces te representeren, nadien wordt een tweede orde systeem geopteerd. Wanneer ook deze de realiteit niet nauwkeurig beschrijft, dan zijn meer geavanceerde technieken nodig. We bespreken later verschillende instelregels die van toepassing zijn met en zonder kennis van het procesmodel.

Klassieke PID instelregels werden in 1942 door Ziegler en Nichols opgesteld. In hun originele vorm geven ze een goed resultaat als er aan een aantal criteria wordt voldaan. Daarom bestaan er ook gemodificeerde algoritmes die ervoor zorgen dat het regelsysteem de wenswaarde beter opvolgd (setpoint-tracking). Het SIMC algoritme van S. Skogestad is een voorbeeld van een instelalgoritme gebaseerd op de Ziegler-Nichols regels. Sigurd Skogestad is een Professor in Chemical Engineering met een focus op procescontrole. Hij is de auteur van een groot aantal boeken en papers over controle, van multivariabele feedbackcontrole tot simple PID tuning. Over dit laatste bestaan er enkele goed beschreven systematische aanpakken die in deze cursus aan bod zullen komen.

## Controlestructuur

Het definiëren van de verschillende variabelen en begrijpen waarom deze worden gekozen is de eerste stap in het ontwerpen van de controlestructuur.
De **te controleren variabele** (controlled variable [CV]) moet volgens Skogestad (2000) aan vier eigenschappen voldoen:

1. De optimale waarde is ongevoelig voor storingen.
2. De variabele valt nauwkeurig te meten en te controleren.
3. De variabele is gevoelig voor veranderingen van de manipuleerbare variabelen.
4. Voor situaties met twee (of meer) te controleren variabelen mogen de geselecteerde variabelen niet sterk afhankelijk van elkaar zijn.

De **manipuleerbare variabelen** (manipulated variables [MV]) zijn de fysische vrijheidsgraden. Voorbeelden hiervan zijn: de elektrische stroom door warmte-elementen, de klepstand, etc.
De selectie van de **te meten variabelen** hangt af van de resultaten vanuit een controleerbaarheidsanalyse. Het aantal, de locatie en de nauwkeurigheid van de sensoren zijn vaak een afweging tussen de kost en de verbetering in controle.  

De selectie van de **controle configuratie** is de beschrijving van de structuur van de controller dat de metingen, de setpoints en de manipuleerbare variabelen verbindt. Een controller kan gestructureerd worden in verschillende (horizontale of verticale) blokken. Dit heeft verschillende voordelen zoals: het minder gevoelig zijn voor modelonzekerheid, het verlagen van de kost om het controle probleem te definiëren, grotere fouttolerantie, etc.

## Stabiliteit en robuustheid

Processen met grote dode tijd en/of grote vertraging (lag) zullen zonder correct regelsysteem snel slechte robuustheid vertonen. Dit is een groot en veelvoorkomend probleem in de industriële setting. Denk bijvoorbeeld aan transportbanden, vloeistofleidingen of opwarmprocessen met grote thermische massa's. Intuïtie vertelt ons dat, hoe groter de tijd is tussen de controle actie en de meetbare reactie van die controle actie, hoe moeilijker het is om het proces te gaan regelen.

Belangrijk om te onthouden:

* Meer marge uit veiligheidsredenen betekent een tragere respons.
* Een snel reagerend controlesysteem zal een kleinere robuustheidsmarge hebben.

# Overzicht van enkele basisformules

PID controller:

$$G(s) = K_c (1 + \frac{1}{\tau_I s} + \tau_D s)$$

Verbanden:

$$K_I = \frac{K_c}{\tau_I}$$

$$K_D = K_c \tau_D$$

Een eerste orde procesmodel met dode tijd:

$$G^* (s) = \frac{Ke^{-\theta s}}{\tau_1 s +1}$$

De structuur van een PI controller is als volgt weergegeven:

$$G(s) = K_c (1+ \frac{1}{\tau_I s})$$

Een tweede orde model met dode tijd ziet er als volgt uit:

$$G^* (s) = \frac{Ke^{-\theta s}}{(\tau_1 s +1)(\tau_2 s +1)}$$

**Note:** *Keer regelmatig naar deze formules terug. Voor veel toepassingen zijn ze onmisbaar.*