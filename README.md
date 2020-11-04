<img src="/docs/rnsk-logo.jpg" alt="Webohjelmointi2" width="400" />

### 1.0 ajaminen

commands/run-web
commands/code

tai suoraan: https://webohjelmointi-2.web.app/
---

### 1.2 apukirjastot

- __React - JS kirjasto__

- Redux - React tilanhallinta
    - [Redux](https://redux.js.org/docs/introduction/)

- React router - React reititys sivujen välillä
    - [React Router](https://github.com/ReactTraining/react-router)

- Firebase - 'ilmainen' tietokanta & hostaus palvelu
    - [Firebase](https://firebase.google.com/)
    
---



## 3

- koodin toteutus
    - src kansio on juuri, josta löytyy kaikki tärkeä

        - actions sisältää kaikki API kutsut

        - constants sisältää yleisiä jaettuja tiedostoja, kuten config, ja messages (yleiset virheviestit yms.)

        - containers sisältää komponenttien "wrapperit"

        - reducers sisältää api kutsujen datan apumetodeja (esim hakee storesta jonkin oleutsarvon sillä välin kun api hakee tietoja, tai jos api kutsu epäonnistuu niin oletusarvo jää voimaan)

        - store sisältää oletusarvoja api kutsuille ja muulle datalle


        - __web__ sisältää kaiken muun (reititys, komponentit, templatet, tyylit, + index.js)
            - components sisältää komponentit
            - routes sisältää reitit



