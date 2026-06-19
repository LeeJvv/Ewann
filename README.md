# Ewann se Graad 4 Leer-apps

Afrikaanse iPad-vriendelike leer-apps vir Ewann se vakke.

Hooflink:

- `https://leejvv.github.io/Ewann/`

Aparte vaklinks:

- NWT: `https://leejvv.github.io/Ewann/nwt/`
- Geografie: `https://leejvv.github.io/Ewann/geografie/`
- PSW: `https://leejvv.github.io/Ewann/psw/`

Elke vak het sy eie mini-app, eie vordering en eie inhoud.

Fase 1 weeklikse scans:

- Elke vak het nou 'n `Scan Werk` tab.
- Ewann kan 'n foto neem of kies, 'n week/titel/notas byvoeg, en dit op die iPad stoor.
- Die fotos word lokaal in die browser se IndexedDB gestoor per vak.
- Die `Export scans` knoppie maak 'n JSON-leer wat later vir eksamen-prep gebruik kan word.

Huidige Geografie-inhoud:

- Syaansigte en planaansigte
- Simbole en sleutels
- Kompasrigtings
- Roosterverwysings
- Die 6 belangrikste behoeftes
- Geografie-woordelys en oefenvrae

Huidige PSW-inhoud:

- Afknouery
- Hoe om beter te word in iets
- Emosies
- Kinderregte en verantwoordelikhede
- Werk in groepe
- PSW-woordelys en oefenvrae

Wanneer daar nuwe opsommings, fotos of dokumente is, werk ons die betrokke vak se `app.js` data-afdelings by:

- `learningItems`
- `flashcards`
- `quiz`
- `examPractice`
- `timeline`
- `words`
