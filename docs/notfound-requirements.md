# ❓ 404 - Nem található oldal

## Verzió: v0.2 - Dátum: 2025-08-05

### 🎯 Üzleti igény

A rendszernek egyértelmű, felhasználóbarát visszajelzést kell adnia abban az esetben, ha a felhasználó nem létező útvonalra navigál. Ez az oldal vizuálisan is különbözzen az alkalmazás többi részétől.

A bemutató után az ügyfél kérte a Bootstrap keretrendszer használatát az egységes megjelenés érdekében.

### 📐 Funkcionális követelmények

- Az oldal teljes képernyőt foglaljon el (magasság: `100vh`)
- Tartalom középre igazítása (vízszintesen és függőlegesen):  
  `d-flex justify-content-center align-items-center`
- Megjelenő elemek:
  - **Címsor (h1)**:
    - Szöveg: `404 - Az oldal nem található`
    - Szín: sötétpiros (`text-danger`)
    - Méret: `display-4` (kb. 32px+)
  - **Kiegészítő szöveg (p)**:
    - Szöveg: `Ellenőrizze a címet vagy térjen vissza a főoldalra.`
    - Osztály: `lead`
- Háttérszín: világos (`bg-light`)

### 🧩 Technikai követelmények

- A Bootstrap osztályokat használjuk, saját CSS csak minimálisan szükséges
- A `NotFoundPage.tsx` komponens legyen önálló fájlban
- Router `*` útvonalra legyen irányítva

### 🧪 Tesztelési elvárások

- Nem létező útvonalra navigálva a 404 oldal jelenik meg
- A címsor és leírás szöveg pontosan megjelenik
- A címsor `text-danger` színű és `display-4` méretű
- Az oldal függőlegesen és vízszintesen is középre van igazítva
- Nem jelenik meg semmilyen más elem vagy funkció

### 📚 UI / UX Megfontolások

- A hibaüzenet legyen egyértelmű, de ne "informatikai" nyelvezetű
- Egyszerű, letisztult megjelenés, ami illeszkedik a login oldalhoz
- Opcionálisan: visszalépés link, ha szükséges (későbbi verzióban)

## Verzió: v0.1 - Dátum: 2025-08-04

### 🎯 Cél

- Az alkalmazás kezelje az ismeretlen útvonalakat.
- A felhasználó világos visszajelzést kapjon, ha hibás útvonalra téved.

### 🧾 Elvárások

- Az oldal szövege legyen: `Az oldal nem található.`
- A szöveg legyen középre igazítva (függőlegesen is).
- Az oldal URL-je bármilyen ismeretlen route lehet (`/*`).
- Az oldalra visszanavigáló gomb legyen opcionálisan elérhető.

### 🔍 Tesztelési szempontok

- `/random-url` megnyitásakor a 404 oldal jelenik meg
- a szöveg ténylegesen szerepel az oldalon
- layout igazítás megfelel
