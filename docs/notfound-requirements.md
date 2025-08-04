# ❓ 404 - Nem található oldal

Verzió: v0.1
Dátum: 2025-08-04

## 🎯 Cél

- Az alkalmazás kezelje az ismeretlen útvonalakat.
- A felhasználó világos visszajelzést kapjon, ha hibás útvonalra téved.

## 🧾 Elvárások

- Az oldal szövege legyen: `Az oldal nem található.`
- A szöveg legyen középre igazítva (függőlegesen is).
- Az oldal URL-je bármilyen ismeretlen route lehet (`/*`).
- Az oldalra visszanavigáló gomb legyen opcionálisan elérhető.

## 🔍 Tesztelési szempontok

- `/random-url` megnyitásakor a 404 oldal jelenik meg
- a szöveg ténylegesen szerepel az oldalon
- layout igazítás megfelel
