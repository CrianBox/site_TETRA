# Cursus systeem en controle theorie

## OptiPID+

Deze cursus is een onderdeel van het TETRA project OptiPID+ waarin de Vlaamse overheid, KU Leuven en Vives de industrie ondersteunen in het behalen van betere procesprestaties met behulp van parameteroptimalisatie en procesbeheersing.

## Probleemomschrijving

Meer dan 80 $\%$ van de procesindustrie maakt gebruik van PID regelaars waarbij het afstellen van de parameters naar suboptimale waarden vaak genegeerd wordt. Uit gesprekken kunnen we globaal afleiden dat de initiële probleemstelling, beschreven in de aanvraag van het TETRA project, correct is. 

Als eerste aspect komt het **tekort aan scholing** ter sprake. Deze veroorzaakt weinig onderbouwde kennis van de installatie en de dynamica van het proces. Als het proces ondermaats blijkt te presteren, dan zijn trial & error experimenten een veelgebruikte procedure om de procesprestaties te verbeteren door de PID waarden te manipuleren. Deze methode is niet alleen tijdsslopend en gevaarlijk maar ondermijnt ook het vertrouwen van de werknemers en van de klanten.
 
Een tweede aspect gaat over het soort proces waarbij problemen optreden. Trage processen waarbij **grote dode tijden** (bv. transportbanden) of grote tijdsconstanten (bv. pasteurisatie en ovensturing) optreden zorgen voor een groot tijdsverschil tussen parametervariatie en prestatiewijziging. Bij manuele bediening veroorzaakt dit een uitdaging die met de juiste procedure perfect aan te pakken valt. Dynamische processen zoals servo besturing en positieregelingen werden ook vernoemd. Het belang van stabiliteit bij korte takttijden is groot waardoor suboptimale controle parameters belangrijk worden.

Het derde aspect beslaat het **blinde vertrouwen in ingebouwde autotune functionaliteiten**. Niet alle geprogrammeerde afstelregels zorgen voor de vereiste procesprestaties. De gebruikersgroep moet ingelicht worden over de werking van een autotuner en de alternatieven ervan.

Een laatste gegeven lijkt niet het absorberen maar het duidelijk documenteren van kennis te zijn. Er zijn veel papers, boeken en sites beschikbaar met informatie over systeem controle design waardoor de partners de **samenhang missen** die in een goed gestructureerde cursus zal worden meegegeven. 

## Actuele kennis en methodieken

Door beperkte kennis van systeem theorie en regeltechniek valt men vaak terug op **trial & error methodes** bij het kiezen van PID waarden. Autotune functies zijn in bepaalde gevallen een goed alternatief maar zullen niet altijd de gewenste prestaties leveren. Daarom is de nood van **grondige basiskennis en een lijst van alternatieve afstelregels** hoog. Problemensituaties worden dan niet alleen sneller opgespoord maar ook opgelost.

## Typisch optredende systemen vanuit de industrie, 'geprojecteerd' op de gebruikersgroep

De gebruikersgroep bestaat hoofdzakelijk uit partners uit de proces- en de maakindustrie welke voldoende groot zijn om personeel aan te nemen of in te huren om hun processen te beheersen. Deze processen variëren in grootte van ruitenwissers met servo aandrijvingen tot ovens die tonnen gevelstenen volgens een specifieke temperatuurcurve moet afbakken. Hierin zien we twee grote categorieën die de problemen van de gebruikersgroep niet alleen representeert maar ook interesseert. 

Het eerste typisch optredend systeem dat vanuit de industrie problemen opwekt zijn van thermische aard. Thermische processen zijn van nature **traag en niet lineair**. Dit creëert problemen wanneer: het proces werkt over een groot domein, er geen modellen voor handen zijn, er meerdere parameters het proces beïnvloeden,… Het bepalen van de dode tijd en tijdscontantes geven inzicht in de dynamica van het proces waarmee uiteindelijk betere controle strategieën gekozen kunnen worden. Onder thermische systemen maken we het onderscheid tussen aan/uit en continue regelaars omdat beide in de industrie voorkomen en een verschillende aanpak vergen.

Een tweede typerend systeem waarover de industrie meer wenst te weten zijn **hoog dynamische processen**. Hieronder valt het aansturen van servomotoren, hydraulische actuatoren,... Servomotoren zijn breed toepasbaar en bekleden uiteenlopende functies, maar slecht afgestelde motorcontrollers zorgen bijvoorbeeld voor langere takttijden en versnelde slijtage. Dit komt op korte en lange termijn ten koste van de bedrijfswinsten.

Het laatste deel beslaat de meer geavanceerde systemen waarvoor een bredere en diepgaande kennis noodzakelijk is. Meer bepaald MIMO (Multiple Input Multiple Output) en niet-lineaire processen zijn problematisch om in de praktijk af te stellen. 

Een ondervertegenwoordigd deel van optredende systemen bevinden zich in kleinere bedrijven, waar meerdere expertises bij één personeelslid zitten. Daarom is de documentatie en een eenvoudige weergave van afstelprocedures van groot belang. Bedrijven met de focus op productontwikkeling krijgen te maken met systemen zoals target tracking en/of het volgen van een gewenste route. Denk hierbij aan producten zoals autonome rijdende, vliegende en varende systemen die zich zo efficiënt mogelijk van punt A naar B moeten verplaatsen. 

## Oplossing

Voor veel toepassingen zijn standaard afstelregels een goed startpunt om betere procesresultaten te verkrijgen. Ziegler en Nichols (1942), de paper van Rivera, Morari en Skogestad (1986), het boek van Smith $\&$ Corripio (1985) en Astrom $\&$ Hagglund (1995) zijn fundamentele bronnen waarin afstelregels werden onderzocht en geformuleerd. Geen van deze regels garanderen een algemene verbetering van het controleproces. Afhankelijk van de soort situatie en vereisten kan een specifieke procedure de prestatie van de regelaar verbeteren. Deze cursus geeft een overzicht van verschillende populaire procedures samen met hun voor- en nadelen.
