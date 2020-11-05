### 1.0 ajaminen

##### NOSQL

1. commands/run-web

2. commands/code

tai suoraan: https://webohjelmointi-2.web.app/


---

##### MySQL ( tehtävät 1,2,(3?) )

1. käynnistä resti -> REST/ komentorivi -> node server.js -> porttiin 3000

2. käynnistä käyttöliittymä -> commands/run-web -> porttiin 3001

(käy vaihtamassa portit jos käytät toisia.
-> .env
-> REST/app/config/portconfig
)

3. -> koodit commands/code

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



