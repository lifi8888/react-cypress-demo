# 💼 Bejelentkezés oldal – Ügyfélkövetelmények

## Verzió: v0.2 - Dátum: 2025-08-05

### 🎯 Üzleti igény

A bemutató után az ügyfél kérte a Bootstrap 5 keretrendszer használatát a következetesebb és gyorsabb megjelenítés miatt.

### 💡 Javaslat

A felületet építsük újra Bootstrap 5 alapokon, így:

- Egyszerűbb stíluskezelés
- Modern és reszponzív UI komponensek
- Tesztekkel való kompatibilitás megtartása

### 📐 Funkcionális követelmények

- Oldal középre igazítva (függőlegesen és vízszintesen)
- Cím: **Bejelentkezés**
  - Szín: sötétkék (Bootstrap: `text-primary`)
  - Méret: `32px` vagy `display-6` osztály
- Bemeneti mezők:
  - **Email vagy felhasználónév** mező
  - **Jelszó** mező
- Bejelentkezés gomb:
  - Teljes szélességű (`w-100`)
  - Szín: Bootstrap elsődleges (`btn btn-primary`)
- Stílus:
  - `card` komponens használata a keret köré
  - `shadow`, `p-4`, `rounded`, stb.
- Bootstrap `vh-100`, `d-flex`, `justify-content-center`, `align-items-center` osztályokkal igazítás

### 🧪 Tesztelési elvárások

- Minden elem jelen van (h1, input, button)
- Helyes szövegek megjelennek
- A gomb színe, betűméret, és igazítás rendben van
- Tesztelendő a reszponzív viselkedés is (pl. mobilon)

## Verzió: v0.1 - Dátum: 2025-08-04

### 📐 Elrendezés

- Az oldal teljes tartalma legyen:
  - függőlegesen **és** vízszintesen is **középre igazítva**
  - maximális szélessége: **400px** (responsive legyen)

### 🧾 Elemei

1. **Címsor**: `Bejelentkezés`
   - Betűméret: `32px`
   - Szín: `sötétkék` (`#003366`)
   - Betűtípus: *még nincs meghatározva* (későbbi igény)
   - Igazítás: **középre**

2. **Űrlap mezők**:
   - `Felhasználónév vagy email cím` (text input)
   - `Jelszó` (password input)

3. **Gomb**:
   - Szöveg: `Bejelentkezés`
   - Igazítás: **középre**
   - Alapértelmezett stílus (később lesz testreszabva)

### 📋 Megjegyzések

- Az autentikáció logikája nem része ennek a lépésnek
- Tesztlefedettség csak a UI struktúrára, megjelenésre vonatkozik