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
- GitHub Actions

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

a. React alkalmazás létrehozása üres repository-ból
```bash
git clone https://github.com/lifi8888/react-cypress-demo.git
cd react-cypress-demo
npx create-react-app temp-app --template typescript
Copy-Item -Path ".\temp-app\*" -Destination "." -Recurse -Force
Remove-Item -Path ".\temp-app" -Recurse -Force
npm install
npm start
```

b. React alkalmazás indítása clone-ozott repository-ból
```bash
git clone https://github.com/lifi8888/react-cypress-demo.git
cd react-cypress-demo
npm install
npm start
```

## 🌐 Port módosítása

Alapértelmezetten az alkalmazás a `localhost:3000` címen fut.

Ha ez már foglalt, módosítható a `.env` fájlban: