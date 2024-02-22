Projekt gjort av: Mattias, Sandra, Marcus och Yousef


---


### TODO

Allmän design för alla komponenter 🆕

✅ React router - _Mattias + Sandra_

✅ Ett object där vi sparar kortdata i local storage - _MATTIAS_

## KOMPONENTER

✅ Kort-komponent - ta in text o färg o logga via props (alltså via kort-object) _MATTIAS_

### FRONT PAGE

✅ Active-card-komponent (där det aktiva kortet ligger) _MATTIAS_

--- Ta bort kort-text som tar bort det aktiva kortet. _YOSEF_

- Card stack (där alla kort vi har läggs på varandra på ett tufft sätt)
  Funktionalitet --- kunna klicka på ett kort för att göra det aktivt - o det nuvarande aktiva blir då inaktivt. _YOSEF_

Knapp - återanvända?

- En med funktionaliteten att den byter till ny sida "/addcard" _SANDRA_
- (Skicka med state via `<Link />`? 🆕

### /ADDCARD

- Formulär lägg till kort (card number, name, valid, ccv) - _MARCUS_
- Vendor-komponenten i formuläret - _SANDRA_

- "Add Card" ska hämta data ur formuläret - validera den - och spara den till local storage - och byta tillbaka till förstasidan. - _SANDRA_

- På "/addcard" --- Ngn liten knapp för att avbryta och inte lägga till card _MARCUS_

---

## Uppgiften

# E-wallet

Du ska bygga en digital plånbok som samlar alla kreditkort. Det ska gå och se sina kreditkort samt lägga till och ta bort nya.

## Tekniska krav

Tekniker du ska använda i denna app är följande:

- Components
- Props
- Hooks
- react-router
- LocalStorge ( VG )

## Funktionella krav

### /

- Viewn ska högst upp visa _active card_.

- Vid tryck på **Add new card** ska man routas vidare till `/addcard`.

- Varje nytt card som läggs till ska synas i en lista i denna vy.

- Vid klick på kort i listan så ska den läggas som _active card_ högst upp i vyn.

### /addcard

- Ett nytt kort ska kunna läggas till med följande information: _vendor, card number, cardholder, expire month, expire year, CCV_

## Design

Här har ni en mockup över färdiga appen.
**Figmaskiss:** https://www.figma.com/file/G4ep4nWFUplM8kXEntq83C/E-Wallet?node-id=11%3A2

![alt text](components-e-wallet.png)

## Betygskriterier

**Godkänt**

- Att ni gjort uppgiften med `vite react`
- Att ni designat uppgiften enligt Figma deisgn
- Att det är en single page application (SPA) som använder `react-router`
- Att ni använder modulär styling när ni stylar applikationen med SASS
- Att ni samarbetar i grupparbetet i par -och eller gruppprogrammering och tar ägandeskap över er del
- (Med fördel kan ni ha dagliga scrummöten med updates och retrospectives men inte ett krav)

**Väl godkänt:**

- Allt i godkänt
- Att ni sparar korten och alla nya kort som läggs till i local storage samt läsa från local storage
- Att det går att ta bort ett kort (som också tas bort från local storage)
- Fälten när ett kort läggs till ska valideras så du i fältet kortnummer enbart kan mata in siffror och max är 16 siffror. Fältet för namn ska enbart ta bokstäver.
- Att ni visar på att ni tydligt och konstruktivt kan läsa förstå och ge feedback på utvald del av era gruppmedlemmars kod.

## Inlämning

Inlämning sker senast _23 feb 23.59_ via en länk till DITT githubrepo med denna namngivningskonvention: namn_klassår_gruppnamn_projektnamn ex. john-doe_FU-JS23_gruppnamn_e-wallet på Azomo.
