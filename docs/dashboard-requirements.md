# Egyenleg lekérdezés – Üzleti követelmények

## Verzió: v0.1 - Dátum: 2025-08-05

### 🎯 Funkció célja

A bejelentkezett felhasználó számára jelenjen meg az aktuális egyenlege és annak részletezése egy áttekinthető, vizuálisan letisztult felületen.

---

### 🧩 Oldal neve

`Dashboard` vagy `Egyenleg áttekintő`

Elérési útvonal: `/dashboard`

---

### 🖼️ Megjelenítés

- Az oldal legyen **csak bejelentkezés után** elérhető.
- Középen megjelenített dobozban szerepeljen:
  - `Üdvözlünk, [Felhasználónév]!`
  - `Aktuális egyenleg: 123 456 Ft`
  - Esetleges információ: pl. „Frissítve: 2025.08.05 10:45”
  - 🔄 `Egyenleg frissítése` gomb
  - 🚪 `Kijelentkezés` gomb

---

### 📦 Tartalom elemek

- 🧾 **Egyenleg összege**
  - Nagy méretű, kiemelt szöveg
  - Sötétzöld (`text-success`) stílus

- 📆 **Frissítési időpont**
  - Kis méretben, halványítottan (pl. `text-muted`, `small`)

- 👤 **Felhasználói név**
  - `localStorage` vagy mock adat alapján megjeleníthető

- 🔄 **Frissítés gomb**
  - Szöveg: `Egyenleg frissítése`
  - Gomb stílus: `btn btn-outline-primary`
  - Frissíti a „frissítési idő” értékét

- 🚪 **Kijelentkezés gomb**
  - Szöveg: `Kijelentkezés`
  - Gomb stílus: `btn btn-outline-danger`
  - Működés:
    - Törli a `localStorage`-ben tárolt felhasználói adatokat
    - Átirányít a `/login` oldalra

---

### ✅ Funkcionális követelmények

- Az oldal komponens renderelése után megjelennek a következő elemek:
  - Üdvözlő szöveg
  - Egyenleg összege
  - Frissítési idő
  - Frissítés gomb
  - Kijelentkezés gomb

- A „Frissítés” gombra kattintva a frissítési idő változik (mock logika is elég)
- A „Kijelentkezés” gombra kattintva:
  - Az alkalmazás visszatér a `/login` oldalra
  - A bejelentkezési állapot megszűnik

---

### 🔒 Jogosultság

- Bejelentkezés nélkül ne legyen elérhető (védett útvonal, pl. `PrivateRoute`)
- Ha a felhasználó nincs bejelentkezve, automatikus átirányítás a `/login` oldalra

---

### 🧪 Tesztelési szempontok

- Komponens betöltésekor minden szükséges elem látható
- A frissítési gomb működik (ellenőrizhető időbélyeg)
- A kijelentkezés után valóban átirányítás történik
- CSS stílusok ellenőrzése (pl. szín, betűméret)
- Route védelem ellenőrzése Cypress tesztben

---

### 📐 Design irányelvek

- Bootstrap alapú megjelenés (pl. `container`, `card`, `row`, `col`)
- Reszponzív elrendezés (mobilon is jól jelenjen meg)
- Színek:
  - Szövegek: `text-dark`, `text-success`, `text-muted`
  - Gombok:
    - `Egyenleg frissítése`: `btn-outline-primary`
    - `Kijelentkezés`: `btn-outline-danger`
