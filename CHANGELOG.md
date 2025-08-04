# Changelog

## [v0.1.0] – 2025-08-04
### Added
- Teljes nulláról telepíthető TDD-ready demóprojekt
- Cypress integráció `cypress-mochawesome-reporter` használatával
- Automatikus teszt-jegyzőkönyv generálás a `test-report/` mappába
- Első sikertelen TDD teszt futtatása (`login.cy.ts`)
- `.env` alapú konfiguráció (`PORT`, `BASE_URL`)
- `run-tests.ps1` szkript szerver + teszt + riport futtatására

## [v0.1.1] – 2025-08-04

### Changed
- login-requirements.md: címsor szín kékeszöld → sötétkék 
- Layout: max-width 300px → 400px

### Added
- Verziószámozás a dokumentáció fejlécébe

## [v0.1.2] – 2025-08-04
### Added
- 404 oldal fejlesztés javaslat alapján
- `/valami-nem-letezik` route lekezeli az ismeretlen útvonalakat
- Cypress tesztek a megjelenésre és layout-ra

## [v0.1.3] – 2025-08-04

### Added
- run-tests-headless.ps1 és run-tests-headless-spec.ps1 szkriptek Cypress tesztfuttatáshoz
- `data-cy` attribútumok a LoginPage és NotFoundPage komponensekben Cypress teszteléshez

### Changed
- LoginPage és NotFoundPage átalakítva CSS Modules alapokra
- Tesztek módosítva az új moduláris CSS struktúra szerint
