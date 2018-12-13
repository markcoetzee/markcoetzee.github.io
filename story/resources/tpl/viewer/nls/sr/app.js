/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "Sačuvaj",
      "close": "Zatvori"
    },
    "errors": {
      "noConfigName": "Nema navedene konfiguracije u index.html > configOptions.story",
      "configFormatError": "Učitavanje navedene konfiguracije nije moguće zbog JSON greške u sintaksi.",
      "configNotFound": "Pronalaženje ili učitavanje konfiguracije nije moguće zbog JSON greške u sintaksi.",
      "boxTitle": "Došlo je do greške",
      "servedFromFile": "Aplikaciji se mora pristupiti preko veb servera. Pogledajte ${USER_GUIDE} za detalje.",
      "userGuide": "uputstvo za korisnike",
      "invalidConfig": "Nevažeća konfiguracija",
      "invalidConfigNoApp": "Identifikator aplikacije veb mape nije naveden u sadržaj.html.",
      "invalidConfigNoAppDev": "Identifikator aplikacije za veb mapiranje je određen u parametrima URL adrese (?appid=). U razvojnom režimu konfiguracija identifikacije aplikacije na sadržaj.html je zanemarena.",
      "unspecifiedConfigOwner": "Ovlašćeni vlasnik nije konfigurisan.",
      "invalidConfigOwner": "Vlasnik priče nije konfigurisan.",
      "invalidConfignoOAuth": "Ova priča zahteva potvrdu identiteta, konfigurišite ArcGIS OAuth ID u index.html ili učinite priču javno dostupnom.",
      "invalidApp": "Učitavanje ove priče nije moguće.",
      "appLoadingFail": "Došlo je do greške, {TPL_NAME} se nije učitao pravilno.",
      "notConfiguredDesktop": "Priča još nije konfigurisana.",
      "notConfiguredMobile": "Alatka za izradu {TPL_NAME} nije podržana na ovoj veličini ekrana. Ako je moguće, promenite veličinu pregledača da pristupite alatki za izradu ili izradite priču na uređaju sa većim ekranom.",
      "notConfiguredMobile2": "Rotirajte uređaj u položeni položaj da koristite alatku za izradu {TPL_NAME}.",
      "notAuthorized": "Nemate ovlašćenje da pristupite ovoj priči",
      "notAuthorizedBuilder": "Nemate ovlašćenje da koristite alatku za izradu {TPL_NAME}.",
      "noViewerIE": "Priča nije podržana na pregledaču Internet Explorer pre verzije ${VERSION}. ${UPGRADE}.",
      "noViewerIE2": "Pokušavate da vidite ovu priču korišćenjem starog, nepodržanog pregledača. Možda neka svojstva neće raditi ili će doći do drugih nepredviđenih problema. Predlažemo da nadogradite na Internet Explorer 11 ili da koristite drugi pregledač, kao što je Chrome.",
      "noViewerIE3": "Krajem 2017. godine, učitavanje ove priče na ovom pregledaču neće biti moguće. Tada ćete morati da koristite podržani pregledač kako biste videli priču.",
      "upgradeBrowser": "Ažurirajte pregledač",
      "mapLoadingFail": "Došlo je do greške, mapa se nije učitala pravilno.",
      "signOut": "Odjavite se",
      "builderSupportFirefox": "Story Map Cascade alatka za izradu sada je podržana na Firefox pregledaču!<br><br>Podrška za kreiranje Cascade priča u Firefox pregledači je trenutno u beta verziji. Isprobajte je i prijavite bilo kakve probleme na ${ESRI-SUPPORT} ili na ${ESRI-COMMUNITY}.",
      "builderSupportOther": "Cascade priče mogu da budu pregledane u bilo kom novijem veb pregledaču, ali Story Map Cascade alatka za izradu je podržana samo u pregledačima ${CHROME}, ${SAFARI} i ${FIREFOX}.<br><br>Ako vam je potrebno da Cascade alatka za izradu podržava drugi pregledač, obratite se ${ESRI-SUPPORT} ili ${BROWSER-SUPPORT-VOTE}.",
      "builderSupportIpad": "Alatka za izradu Story Map Cascade nije podržana na iPad uređaju. Kaskadne priče koje kreirate i podelite će raditi na iPad uređajima.",
      "launchBuilder": "Pokretanje Cascade alatke za izradu",
      "notAgain": "Ne prikazuj ovo ponovo",
      "sorry": "Napomena:"
    },
    "mobileWarning": {
      "message1": "Pročitali ste mobilnu verziju ove priče. Za punu verziju, sa bogatijim elementima medija, koristite stoni računar.",
      "email": "Pošalji e-poruku sa linkom za ovu priču"
    },
    "cover": {
      "iosEmbedLink": "Kliknite kako biste pročitali čitavu priču"
    },
    "media": {
      "captionPlaceholder": "Naslov ide ovde...",
      "loadingError": "Ovaj sadržaj je nepristupačan",
      "explore": "Istražite",
      "exploreMap": "Istražite mapu",
      "exploreStop": "Zaustavite istraživanje",
      "sceneNotSupported": "Ova 3D mapa nije podržana na vašem uređaju.",
      "loading1": "Učitavanje...",
      "loading2": "Učitavanje mape...",
      "videoPlayPause": "reprodukuj/pauziraj",
      "videoMuteUnmute": "priguši zvuk/uključi zvuk"
    },
    "headerFromCommon": {
      "defaultTagline": "${STORY_MAP}",
      "share": "Podelite ili štampajte",
      "tooltipAutoplayDisabled": "Ovo nije dostupno u režimu automatske reprodukcije"
    },
    "shareFromCommon": {
      "copy": "Kopiraj",
      "copied": "Kopirano",
      "open": "Otvori",
      "embed": "Ugradi u veb stranicu",
      "embedExplain": "Koristite sledeći HTML kôd da ugradite priču u veb stranicu.",
      "size": "Veličina (širina/visina):",
      "autoplayLabel": "Režim automatske reprodukcije",
      "autoplayExplain1": "Režim automatske reprodukcije će ići kroz priču uobičajenim intervalom. Ovo je idealno na terminalima ili javim ekranima, ali imajte u vidu da u drugim situacijama čitanje priče može da bude otežano. Ova funkcija nije podržana na ekranima malih dimenzija.",
      "autoplayExplain2": "Kada je ovaj režim aktiviran, postoje kontrole da se priča reprodukuje/pauzira i da se prilagodi brzina navigacije.",
      "linksupdated": "Linkovi su ažurirani!"
    },
    "theme": {
      "lightLabel": "Svetlo",
      "darkLabel": "Tamno"
    },
    "autoplay": {
      "speedFast": "Brzo",
      "speedMedium": "Srednje",
      "speedSlow": "Sporo"
    },
    "bannerNotification": {
      "learnMore": "Saznaj više",
      "close": "Zatvori",
      "dontShowAgain": "Ne prikazuj ponovo ovu poruku"
    },
    "embedBar": {
      "share": "Podeli",
      "fullScreen": "Ceo ekran",
      "exitFullScreen": "Izađi iz režima celog ekrana",
      "enlarge": "Uvećaj",
      "newTab": "Otvori u novoj kartici",
      "tagline": "Story mapa",
      "twitter": "Podelite na mreži Twitter",
      "facebook": "Podelite na mreži Facebook"
    }
  },
  "print": {
    "settings": {
      "pleaseWait": "Sačekajte da se čitava priča učita pre štampe",
      "printNotes": "Ako se ova stranica učitava sporo ili se neki mediji ne pojave, pokušajte da zamenite medije koji se emituju uživo slikama ili probajte sa štampom manjeg opsega odeljaka. Za bolje rezultate, možda ćete morati da omogućite štampanje pozadinskih elemenata u postavkama štampanja vašeg pregledača.",
      "printOptions": "Opcije",
      "makeTextBlack": "Učini sav tekst crnim",
      "showLinks": "Prikaži linkove URL adresa",
      "useAltMedia": "Zamenite medije koji se emituju uživo slikama, ako je to moguće",
      "pageBreaks": "Svaki odeljak počnite na novoj stranici",
      "printRange": "Odštampaj deo ove priče",
      "sectionStart": "Odeljci:",
      "go": "Primeni",
      "reset": "Resetuj na celu priču",
      "print": "Štampaj"
    },
    "page": {
      "appTagline": "Ova priča je napravljena pomoću ${CASCADE_LINK_TEXT}.",
      "cascadeLinkText": "Story Map Cascade kompanije Esri",
      "readItOnline": "Pročitajte na vebu ${STORY_URL}."
    },
    "sections": {
      "sectionLabel": "Odeljak ${SECTION_NUMBER}"
    },
    "media": {
      "websiteLabel": "Veb sajt:",
      "videoLabel": "Video zapis:",
      "audioLabel": "Audio:"
    }
  }
});