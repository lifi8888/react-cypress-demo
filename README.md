# React + Cypress Demo

Ez a projekt egy bemutató célú React alkalmazás, amely Cypress end-to-end tesztekkel van ellátva.

## 🎯 Projekt célja

A cél egy egyszerű, jól strukturált példaprojekt létrehozása, amely:

- tartalmaz egy React frontendet belépéssel, egyenleg lekérdezéssel és kilépéssel
- demonstrálja az end-to-end tesztelést Cypress segítségével
- CI pipeline-t tartalmaz GitHub Actions segítségével

## 📦 Technológiák

- React (TypeScript)
- Cypress
- Bootstrap (UI komponensek és stílus)
- GitHub Actions

## 🎨 Stílus

A projekt jelenleg a [Bootstrap 5](https://getbootstrap.com/) keretrendszert használja az oldalak megjelenítésére. Ez biztosítja a konzisztens és reszponzív kinézetet, gyors fejlesztés mellett.
## 🚀 Funkciók

- 🔐 Bejelentkezés (form validációval)
- 💰 Egyenleg lekérdezés (mockolt adat)
- 🚪 Kijelentkezés
- ✅ Teljes E2E tesztlefedettség

## 🔧 Fejlesztési környezet

- Node.js
- VSCode ajánlott
- `npm install` a függőségek telepítéséhez

## ⚙️ Használat

```bash
npm install
npm start
```

## 🛠 Project létrehozása

Új vagy meglévő alkalmazás létrehozása esetén is nézzük át a verziókat és ellenőrizzük az aktuális környezeteket.

Package.json ellenőrzése!

### a. React alkalmazás létrehozása üres repository-ból
```bash
git clone https://github.com/lifi8888/react-cypress-demo.git
cd react-cypress-demo
npx create-react-app temp-app --template typescript
Copy-Item -Path ".\temp-app\*" -Destination "." -Recurse -Force
Remove-Item -Path ".\temp-app" -Recurse -Force
npm install
npm start
```

### b. React alkalmazás indítása clone-ozott repository-ból
```bash
git clone https://github.com/lifi8888/react-cypress-demo.git
cd react-cypress-demo
```

.env fájl létrehozása, példa tartalom:

```bash
PORT=3008
BASE_URL=http://localhost:3008
```

Függőségek telepítése:

```bash
npm install
```

Fejlesztői szerver + teszt + riport nyitása egyetlen paranccsal:

```bash
./run-tests.ps1
```

## Környezet telepítés és teljes projekt futtatása

A repository-ban található egy `install-and-run.ps1` powershell fájl. Első verziója egy scriptnek, amely a tesztelőknek, szervezőknek tud környezetet telepíteni/ellenőrizni.

A script bemutató jelleggel készült. Az adott vállalati környezet, szoftverek, szabályok, folyamatok meghatározzák szükségességét és pontos funkcionalitását.

A munka környezetekkel kapcsolatban is kialakítható egy helyreállítási forgatókönyv (DRP), amely hatékony és gyors környezet kialakítást vagy helyreállítást tesz lehetővé.

Nincs más teendő, mint az erre alkalmas gépen futtatni a scriptet. Egyéb opciók: virtuális környezetek, Windows Sandbox, VirtualBox stb.

## 🔧 Környezeti beállítások

Az `.env` fájlban adhatod meg a használt portot és a baseUrl-t:

```env
PORT=3008
BASE_URL=http://localhost:3008
```

## 🧪 Cypress telepítés és használat

A Cypress a projekt end-to-end tesztelésére szolgál.

### Telepítés

```bash
npm install cypress --save-dev
npx cypress open
```

Válaszd az „E2E Testing” opciót, majd a „Edge” browser-t.

El fog indulni a Cypress GUI.

### Első spec fájl (login.cy.ts)

A sablonkód helyett kezdjünk üres teszttel, ez a fájl automatikusan a cypress/e2e/ mappába kerül majd.

```ts
describe('Bejelentkezés', () => {
  it('megnyitja a bejelentkező oldalt', () => {
    // ide kerül majd az első teszt
  });
});
```

## 🧾 Tesztelési jegyzőkönyvek (manuálisan)

Minden egyes teszt futtatás után keletkezik egy jegyzőkönyv a `test-report/` mappában.

Példa: [`test-report/login.cy.ts-result.md`](./test-report/login.cy.ts-result.md)

## 🧾 Tesztelési jegyzőkönyvek (automatikusan)

A Cypress tesztek automatikus riportja `mochawesome` használatával történik. A riport minden tesztfuttatás után a `test-report/` mappába kerül.

### Riport jellemzői

- Egyéni fájlnév: `specname-YYYY-MM-DDTHHmmss.json`
- Tartalmazza az összes teszt eredményét
- Hiba esetén screenshot is generálódik
- HTML vagy más kimenet is engedélyezhető

### Futtatás példája

```bash
npx cypress run --spec "cypress/e2e/login.cy.ts"
```

## 🧪 Tesztek futtatása automatikusan

A `run-tests.ps1` futtatása után a legfrissebb tesztjelentés automatikusan megnyílik alapértelmezett böngészőben.

A `run-tests.ps1` automatikusan beolvassa a `.env` fájlt és használja a `PORT`, `BASE_URL` változókat.

A `run-tests-headless.ps1` script lehetővé teszi a Cypress tesztek fej nélküli (GUI nélküli) futtatását, ami ideális CI/CD pipeline-okhoz vagy automatikus teszteléshez. A script lefuttatja az összes tesztet, majd a generált riportokat a `test-report/` mappába helyezi. Ebben az üzemmódban a tesztek gyorsabban futnak le, és nincs szükség felhasználói beavatkozásra.

A `run-tests-headless-spec.ps1` script lehetőséget ad arra, hogy csak bizonyos tesztfájlokat futtassunk le. A kívánt spec fájlok felsorolhatóak a scriptben.

- Csak a megadott tesztek futnak le.
- Az eredmények a `test-report/` mappába kerülnek.
- Ideális, ha csak egy-egy tesztet vagy tesztcsoportot szeretnél gyorsan ellenőrizni.

### Futtatás `run-tests.ps1` fájl használatával

1. Futtasd:
```bash
.\run-tests.ps1
```

- Eredmények: `test-report/*.html`
- Automatikus nyitás az alapértelemeztt böngészőben.

## 📄 Dokumentáció

- [Bejelentkezés oldal – ügyfélkövetelmények](./docs/login-requirements.md)
- [404 oldal – ügyfélkövetelmények](./docs/notfound-requirements.md)

## 🔄 Opcionális de ajánlott fejlesztések

- ✅ 404 - Nem található oldal implementálva (`/valami-nem-letezik`)