# Drone per amico (DJI Neo 2 + portale relay) — Legal by Design & Checklist

Versione: 1.0  
Data: 2025-12-13

---

# 1) One-pager “Legal by design” — Drone per amico (DJI Neo 2 + portale relay)

## Scopo del servizio
Consentire a un utente (che opera il drone) di condividere **in tempo reale** il live (video + audio) con un **trusted circle** di contatti pre-approvati, tramite portale autenticato. Il servizio **non promette protezione o intervento**: è solo “condivisione real-time con persone fidate”.

## Architettura scelta
- Hardware: DJI Neo 2 (prodotto terzo).
- App/stream sorgente: DJI (o flusso equivalente).
- Piattaforma: portale proprietario che funge da **relay effimero** (transito), **zero storage**, + gestione profilo e "trusted circle".
- Registrazioni: **solo on-device** (smartphone dell’utente), non sul portale.

## Inquadramento UAS
- Operatività: **Specific-by-design**.
- **Utente = operatore/pilota remoto** (responsabile della condotta del volo e della compliance operativa UAS).
- Startup: fornisce servizio digitale (relay + access control), non “pilota” il drone.

## Assicurazione
- Modello “doppio livello”:
  1) assicurazione/RC utente (obbligo contrattuale dell’utente-operatore);
  2) copertura aziendale “residuale” per rischi della piattaforma (IT/relay, responsabilità di servizio, ecc.).

## GDPR: ruoli e basi
- **Contitolarità** tra startup e utente per il trattamento connesso a: autenticazione, gestione trusted circle, relay effimero, log tecnici minimi, sicurezza.
- Base giuridica principale: **legittimo interesse** (condivisione real-time a fini di “safety reassurance”), con bilanciamento e misure forti di minimizzazione.
- **DPIA sempre** (anche in beta), aggiornata a ogni change sostanziale (es. nuove feature, nuovi dati, nuove integrazioni).

## Minimizzazione e misure tecniche
- **Zero storage** sul portale (no video/audio registrati).
- Log tecnici minimi (signaling/relay): account, contatto trusted circle, start/stop sessione, esito connessione, error codes, IP, timestamp.
- Retention log: **30 giorni**.
- Sicurezza: autenticazione forte, sessioni a scadenza, controllo accessi, rate limiting, monitoring anomalie, revoca immediata dei contatti.
- Anti-abuso: pairing/controlli minimi lato portale (solo trusted circle), sospensione account su segnalazioni plausibili.

## Trusted circle
- Solo inviti manuali (email/telefono inseriti dall’utente), **niente import rubrica**.
- Accesso solo con account autenticato; **niente link pubblici**.

## Notice verso terzi (passanti)
- Informativa multilivello in app + pagina pubblica dedicata.
- Sul drone: **URL breve ben leggibile + pittogramma camera**, QR solo opzionale.
- Segnale “ripresa attiva”: si utilizza l’indicazione di stato del dispositivo DJI; in policy si vieta qualsiasi disattivazione di indicatori/luci di stato.

## Audio
- Audio in live sempre attivo (come feature), ma:
  - nessuna conservazione lato portale;
  - avviso persistente ai viewer: banner “Audio attivo”.
- Divieto di registrazione/redistribuzione per i contatti.

## Abusi e richieste
- Canale segnalazioni + sospensione account su elementi plausibili.
- Consegna dati solo su **richieste formalizzate dell’autorità**; per terzi si gestiscono i diritti GDPR nei limiti (senza investigare contenuti, che non si possiedono).

## AI/Tracking
- Follow **non biometrico**: ancorato al device dell’utente (no riconoscimento facciale, no template biometrici).

---

# 2) Checklist contrattuale e documentale (T&C + privacy + contitolarità + operative)

## A) Termini e Condizioni — Utente (Operatore/Pilota)
Clausole minime (da includere):
1) **Qualifica dell’utente**: l’utente dichiara di essere operatore/pilota remoto e di rispettare le norme UAS applicabili (Specific).  
2) **Assunzione responsabilità volo**: la startup non controlla l’aeromobile; responsabilità condotta volo in capo all’utente.  
3) **Autodichiarazione requisiti**: checkbox + dichiarazione di possesso requisiti/abilitazioni/registrazioni/assicurazione.  
4) **Assicurazione**: obbligo di mantenere copertura RC; manleva per danni da violazioni operative UAS.  
5) **Uso consentito**: solo condivisione real-time con persone fidate; divieti (molestie, stalking, riprese intrusive, inseguimenti, uso in aree vietate, ecc.).  
6) **Segnali di ripresa**: divieto di disattivare indicatori/luci; obbligo di mantenere modalità “notice”.  
7) **Audio**: informativa chiara che l’audio è attivo in live; obbligo di avvisare persone coinvolte quando ragionevolmente possibile.  
8) **Sospensione e risoluzione**: sospensione immediata in caso di segnalazioni plausibili o violazioni; escalation e recesso.  
9) **Limitazione di responsabilità**: nessuna promessa di protezione; nessun intervento di emergenza garantito; limitazioni coerenti con consumer law.  
10) **Prove e conservazione**: il portale non conserva contenuti; eventuale registrazione è sul device dell’utente; la startup non garantisce “valore probatorio” del contenuto.  
11) **Law enforcement requests**: consegna dati solo su richieste formalizzate; indicare tipologia dati disponibili (solo log).  
12) **Foro/legge applicabile**: Italia (o scelta), con sezione consumatori se B2C.

Frase modello (breve, utile):
- “Il Servizio consente esclusivamente la condivisione in tempo reale del flusso verso contatti autorizzati. Il Servizio non è un servizio di vigilanza, protezione o pronto intervento.”

## B) Termini e Condizioni — Viewer/Trusted Circle
Clausole minime:
1) **Divieto di registrazione/redistribuzione** (screen recording, screenshot, inoltri).  
2) **Watermark e tracciabilità**: accettazione che il live possa includere watermark/ID sessione/utente.  
3) **Obblighi di riservatezza**: non condividere accessi, non far vedere a terzi.  
4) **Account security**: obbligo di proteggere credenziali; responsabilità per accessi non autorizzati da negligenza.  
5) **Sospensione**: violazioni → ban immediato.  
6) **Audio notice**: accettazione esplicita “Audio attivo”.

## C) Privacy Notice multilivello (App + pagina pubblica)
Struttura minima:
- **Layer 1 (breve)**: chi siamo, cosa fa il servizio, cosa NON fa (no cloud storage), chi vede (trusted circle), retention log 30 gg, contatti privacy.
- **Layer 2 (completo)**:
  - contitolari e riparto essenziale;
  - basi giuridiche (legittimo interesse) + test di bilanciamento (riassunto);
  - categorie dati: account, contatti trusted circle, metadata sessioni, IP, error logs;
  - tempi conservazione (30 gg log);
  - destinatari (provider IT indispensabili);
  - diritti interessati e modalità esercizio;
  - sicurezza;
  - data breach procedure (sintesi).

## D) Accordo di contitolarità (art. 26 GDPR) — Schema essenziale
Punti da fissare:
1) Finalità comuni: autenticazione, gestione trusted circle, relay effimero, sicurezza, prevenzione abusi, assistenza tecnica.  
2) Mezzi: portale, logging, access control, policy sospensioni.  
3) Riparto obblighi:
   - informativa: chi pubblica cosa (app/sito), chi gestisce canale privacy;
   - gestione diritti: punto di contatto unico (consigliato);
   - misure tecniche: responsabilità della startup sul portale; utente sul device e sul drone;
   - data breach: chi notifica e come si coopera.  
4) Trasparenza: “essenza dell’accordo” resa disponibile nella privacy notice.

## E) DPIA — Indice minimo (investor-grade)
1) Descrizione trattamento (relay effimero, trusted circle, audio live).  
2) Necessità e proporzionalità (perché relay effimero/zero storage, perché log 30 gg).  
3) Rischi principali: riprese terzi, abuso, accesso non autorizzato, account takeover, redistribuzione non autorizzata.  
4) Misure: trusted circle, no link pubblici, zero storage, watermark, sospensione, sicurezza.  
5) Residual risk + decisione: go/no-go, piano miglioramenti.

## F) Policy “Segnalazioni e sospensioni”
- Canale segnalazioni (web form/email dedicata).
- Standard “plausibility”: quali elementi bastano (pattern accessi, abuso inviti, comportamenti ripetuti).
- Tempi: sospensione cautelare immediata, review, esiti, reclamo.
- Nessuna analisi contenuti (non posseduti).

## G) Specifiche UX legali (da dare al designer)
- Banner sempre visibile al viewer: “Audio attivo”.
- Watermark leggero con ID sessione/account (non invasivo).
- Schermata di invito trusted circle con accettazione T&C viewer.
- Pagina pubblica privacy raggiungibile da URL breve.
