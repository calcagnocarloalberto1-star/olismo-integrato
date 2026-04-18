// v202604131323
// ════════════════════════════════════════
// DATABASE COMPLETO
// ════════════════════════════════════════
const DB={
chakra:[
  {id:"c1",name:"Muladhara — Radice",short:"1° Chakra",color:"#a83232",pos:"Cintura in giù",elem:"Terra",nota:"Do / 396 Hz",ghiandola:"Surrenali",demone:"Paura",diritto:"Diritto di esistere",tema:"Sopravvivenza, Radicamento",cristalli:["cr6","cr4","cr14","cr1_2"],enneatipi:["e8","e9","e1"],frequenze:["f396"],esercizi:["ex1","ex2"],adattamenti:["ad1","ad4"],desc:"Centro della sopravvivenza e del radicamento fisico. Governa le fondamenta materiali, la sicurezza, il senso di appartenenza. Quando è equilibrato offre stabilità e presenza nel corpo. Quando è bloccato genera ansia, paura esistenziale e disconnessione fisica."},
  {id:"c2",name:"Svadhisthana — Dolcezza",short:"2° Chakra",color:"#c45a22",pos:"Sotto l'ombelico",elem:"Acqua",nota:"Re / 417 Hz",ghiandola:"Gonadi",demone:"Senso di colpa",diritto:"Diritto di sentire",tema:"Piacere, Creatività, Emozioni",cristalli:["cr9","cr6_2","cr13_2"],enneatipi:["e2","e3","e4"],frequenze:["f417"],esercizi:["ex3","ex4"],adattamenti:["ad2","ad5"],desc:"Centro delle emozioni, della sessualità e della creatività. Governa il piacere, i legami affettivi e la fluidità interiore. La sua disfunzione produce rigidità emotiva, blocchi creativi e senso di colpa profondo."},
  {id:"c3",name:"Manipura — Città dei Gioielli",short:"3° Chakra",color:"#c49a1a",pos:"Plesso solare",elem:"Fuoco",nota:"Mi / 528 Hz",ghiandola:"Pancreas",demone:"Rabbia, Ego",diritto:"Diritto di agire",tema:"Potere personale, Volontà",cristalli:["cr5","cr12","cr9"],enneatipi:["e2","e3","e4"],frequenze:["f528"],esercizi:["ex5","ex6"],adattamenti:["ad3","ad4"],desc:"Centro della volontà, dell'autostima e del potere personale. Governa la forza dell'Io e l'autoaffermazione sana. La disfunzione si manifesta come iperaggressività o sottomissione e vergogna."},
  {id:"c4",name:"Anahata — Inattaccabile",short:"4° Chakra",color:"#2e7d4f",pos:"Centro del petto",elem:"Aria",nota:"Fa / 639 Hz",ghiandola:"Timo",demone:"Odio, Dolore",diritto:"Diritto di amare",tema:"Amore, Relazioni, Empatia",cristalli:["cr2","cr8","cr3"],enneatipi:["e2","e4","e9"],frequenze:["f639","f432"],esercizi:["ex7","ex8"],adattamenti:["ad2","ad5"],desc:"Il trasformatore centrale: integra gli opposti, la dualità maschile-femminile, la ferita e la guarigione. La stella a sei punte (Shatkona) ne simboleggia l'integrazione. Governa l'amore incondizionato e l'empatia."},
  {id:"c5",name:"Vishuddha — Purezza",short:"5° Chakra",color:"#1565c0",pos:"Gola",elem:"Etere / Suono",nota:"Sol / 741 Hz",ghiandola:"Tiroide",demone:"Vergogna, Bugie",diritto:"Diritto di esprimersi",tema:"Espressione autentica, Verità",cristalli:["cr3","cr7_2","cr11_2","cr7"],enneatipi:["e5","e6","e7"],frequenze:["f741"],esercizi:["ex9","ex10"],adattamenti:["ad3","ad6"],desc:"Centro della comunicazione autentica e dell'espressione creativa. Governa la voce, l'ascolto profondo e l'assertività. La disfunzione si manifesta come timidezza patologica o comunicazione aggressiva."},
  {id:"c6",name:"Ajna — Terzo Occhio",short:"6° Chakra",color:"#4527a0",pos:"Tra le sopracciglia",elem:"Luce / Prana",nota:"La / 852 Hz",ghiandola:"Ipofisi",demone:"Dispercezione",diritto:"Diritto di vedere",tema:"Intuizione, Visione interiore",cristalli:["cr1","cr13","cr10"],enneatipi:["e5","e6","e7"],frequenze:["f852"],esercizi:["ex11","ex12"],adattamenti:["ad6"],desc:"Centro dell'intuizione, della saggezza interiore e della visione. Governa la percezione oltre il visibile, i sogni e gli archetipi. La disfunzione produce razionalismo rigido o, all'eccesso, pensiero magico."},
  {id:"c7",name:"Sahasrara — Mille Petali",short:"7° Chakra",color:"#7b2fa0",pos:"Sommità del capo",elem:"Universo / Pensiero",nota:"Si / 963 Hz",ghiandola:"Epifisi",demone:"Sfiducia, Pessimismo",diritto:"Diritto di conoscere",tema:"Spiritualità, Fede, Coscienza",cristalli:["cr10","cr11","cr14_2"],enneatipi:["e9","e5","e3"],frequenze:["f963"],esercizi:["ex12","ex13"],adattamenti:["ad6"],desc:"Centro della coscienza cosmica e della connessione con il divino. Governa la fede, il senso del sacro e l'integrazione totale di corpo-mente-spirito. È il punto di arrivo evolutivo di ogni percorso di crescita."}
],
cristalli:[
  {id:"cr1",name:"Ametista",color:"#7b2fa0",chakra:["c6","c1"],funzione:"Calma, purificazione, rilassamento mentale",disturbo:"Insonnia, Ansia, Stress cronico",enneatipi:["e5","e6","e1"],frequenze:["f852"],esercizi:["ex12"],desc:"Pietra di trasformazione spirituale. Calma la mente iperattiva e favorisce il sonno profondo. Indicata per i tipi mentali (5-6-7) e per chi attraversa fasi di stress intenso. Non abbinare con pietre radicanti."},
  {id:"cr2",name:"Quarzo Rosa",color:"#d4899a",chakra:["c4"],funzione:"Amore incondizionato, guarigione emotiva",disturbo:"Ferite del cuore, Perdita affettiva",enneatipi:["e2","e4","e9"],frequenze:["f639"],esercizi:["ex7"],desc:"La pietra dell'amore per eccellenza. Ammorbidisce le difese emotive e apre il cuore. Fondamentale nel percorso di guarigione delle ferite d'abbandono e di rifiuto."},
  {id:"cr3",name:"Lapis Lazuli",color:"#1565c0",chakra:["c5","c6"],funzione:"Verità, comunicazione autentica, saggezza",disturbo:"Blocco vocale, Timidezza, Paura del giudizio",enneatipi:["e5","e1","e6"],frequenze:["f741"],esercizi:["ex9"],desc:"Pietra della verità e della saggezza. Usata da faraoni e sacerdoti per il discernimento. Stimola l'espressione autentica e la comunicazione con chiarezza."},
  {id:"cr4",name:"Ossidiana Nera",color:"#3a3030",chakra:["c1"],funzione:"Protezione profonda, rispecchiamento della verità",disturbo:"Vulnerabilità, Mancanza di confini",enneatipi:["e8","e9"],frequenze:["f396"],esercizi:["ex1"],desc:"Specchio dell'anima: riflette senza filtri ciò che va trasformato. Pietra di protezione forte, ideale per chi lavora in campo energetico. Da usare con gradualità data la sua potenza."},
  {id:"cr5",name:"Citrino",color:"#c49a1a",chakra:["c3"],funzione:"Ottimismo, abbondanza, forza solare",disturbo:"Pessimismo, Scarsa autostima, Mancanza di motivazione",enneatipi:["e3","e7","e1"],frequenze:["f528"],esercizi:["ex6"],desc:"La pietra del sole e dell'abbondanza. Non accumula energie negative. Stimola l'autostima, la gioia e la capacità di manifestare i propri obiettivi nel mondo."},
  {id:"cr6",name:"Granato",color:"#a83232",chakra:["c1","c2"],funzione:"Vitalità, passione, forza istintiva",disturbo:"Calo energetico, Paura esistenziale, Mancanza di grounding",enneatipi:["e8","e1"],frequenze:["f396"],esercizi:["ex1","ex5"],desc:"Pietra del fuoco e dell'energia vitale. Rafforza il senso di sicurezza e la radicalizzazione nel corpo fisico. Ideale nelle fasi di stanchezza profonda o disconnessione fisica."},
  {id:"cr7",name:"Labradorite",color:"#4527a0",chakra:["c6","c7"],funzione:"Intuizione, protezione energetica, sincronicità",disturbo:"Dispersione energetica, Perdita di confini",enneatipi:["e5","e7","e4"],frequenze:["f852"],esercizi:["ex11"],desc:"Pietra della trasformazione e del mistero. Protegge il campo aurico e stimola le capacità intuitive. Indicata nei momenti di transizione evolutiva."},
  {id:"cr8",name:"Malachite",color:"#2e7d4f",chakra:["c4","c3"],funzione:"Trasformazione profonda, apertura emotiva",disturbo:"Rigidità emotiva, Schemi relazionali ripetitivi",enneatipi:["e4","e2","e1"],frequenze:["f639"],esercizi:["ex7","ex8"],desc:"La pietra della trasformazione profonda. Porta in superficie ciò che è nascosto nel cuore. Da usare con consapevolezza poiché accelera i processi di cambiamento."},
  {id:"cr9",name:"Corniola",color:"#c45a22",chakra:["c2","c3"],funzione:"Coraggio, azione, vitalità creativa",disturbo:"Insicurezza, Blocco creativo, Procrastinazione",enneatipi:["e3","e8","e2"],frequenze:["f417","f528"],esercizi:["ex3","ex5"],desc:"Pietra dell'azione e del coraggio. Stimola la motivazione e la determinazione. Ideale per chi attraversa fasi di stasi o blocco creativo."},
  {id:"cr10",name:"Howlite",color:"#b0a898",chakra:["c7","c6"],funzione:"Calma, pazienza, connessione spirituale",disturbo:"Rabbia, Impazienza, Autocritica",enneatipi:["e1","e6","e9"],frequenze:["f963"],esercizi:["ex12"],desc:"Pietra della calma e della mente silenziosa. Scioglie la tensione muscolare e mentale. Particolarmente indicata per i tipi con tendenza al perfezionismo e all'autocritica."},
  {id:"cr11",name:"Selenite",color:"#d8d0c8",chakra:["c7"],funzione:"Pulizia energetica, connessione superiore",disturbo:"Confusione mentale, Disconnessione spirituale",enneatipi:["e9","e5","e7"],frequenze:["f963"],esercizi:["ex13"],desc:"La grande purificatrice. Non ha bisogno di essere caricata e pulisce il campo energetico di sé e degli altri cristalli. Apre al silenzio interiore."},
  {id:"cr12",name:"Occhio di Tigre",color:"#b88a1a",chakra:["c3","c1"],funzione:"Protezione, discernimento, forza pratica",disturbo:"Indecisione, Mancanza di focus",enneatipi:["e8","e6","e3"],frequenze:["f528"],esercizi:["ex5","ex1"],desc:"Pietra del guerriero consapevole. Favorisce decisioni chiare e azioni efficaci. Riduce l'ansia e rafforza la capacità di discernere la realtà."},
  {id:"cr13",name:"Fluorite",color:"#4a7a9a",chakra:["c6","c7"],funzione:"Chiarezza mentale, ordine interiore",disturbo:"Confusione, Scatter mentale",enneatipi:["e5","e1","e6"],frequenze:["f852"],esercizi:["ex11","ex12"],desc:"La pietra dell'intelletto ordinato. Favorisce la concentrazione e la capacità di strutturare i pensieri. Utile per i tipi mentali in fase di studio o ricerca."},
  {id:"cr14",name:"Tormalina Nera",color:"#2a2a2a",chakra:["c1"],funzione:"Protezione assoluta, grounding",disturbo:"Vulnerabilità, Ansia, Dispersione energetica",enneatipi:["e6","e9","e8"],frequenze:["f396"],esercizi:["ex1"],desc:"Il più potente scudo energetico del regno minerale. Assorbe e neutralizza le energie negative. Ideale per terapeuti e mediatori che lavorano con persone in difficoltà."},
  {id:"cr15",name:"Quarzo Ialino",color:"#a8c8d8",chakra:["c7","c1"],funzione:"Amplificazione, chiarezza totale",disturbo:"Qualsiasi squilibrio energetico",enneatipi:["e5","e7","e9"],frequenze:["f963"],esercizi:["ex13","ex12"],desc:"Il maestro guaritore universale. Amplifica le intenzioni e le frequenze di tutti gli altri cristalli. Punto di partenza ideale in qualsiasi percorso di cristalloterapia."}
],
enneatipi:[
  {id:"e1",name:"Tipo 1 — Il Perfezionista",short:"Perfezionista",centro:"Istintivo",virtu:"Serenità",vizio:"Ira repressa",integrazione:"→ Tipo 7",disintegrazione:"→ Tipo 4",fasci:"0–30: rigidità moralistica · 30–60: saggezza disciplinata · 60+: integrazione gioiosa",chakra:["c1","c3"],cristalli:["cr10","cr3","cr5","cr6"],frequenze:["f528","f396"],adattamenti:["ad4","ad1"],esercizi:["ex5","ex1"],desc:"Il Perfezionista è mosso da un super-io intransigente. Cane da caccia: quando prende un impegno lo assolve ad ogni costo. Visivo in accesso, auditivo in elaborazione. Gesticola da accusatore. Il suo ribelle interiore si esprime come critica morale di sé e degli altri. Tre sottotipi: ansiogeno (autocritico, ipocondriaco), sociale (rigido, inadattabile), sessuale (geloso, moralizzatore). In stress va verso il 4 (depressione); in sicurezza verso il 7 (gioia senza giudizio).",areaCerebrale:"Amigdala",senso:"Mente",cervelloTripartito:"Emozionale — sistema limbico",musa:"Urania (astronomia e geometria)",pianeta:"Marte"},
  {id:"e2",name:"Tipo 2 — L'Altruista",short:"Altruista",centro:"Emotivo",virtu:"Umiltà",vizio:"Orgoglio",integrazione:"→ Tipo 4",disintegrazione:"→ Tipo 8",fasci:"0–30: aiuto compulsivo · 30–60: equilibrio dare/ricevere · 60+: amore incondizionato",chakra:["c4","c2"],cristalli:["cr2","cr8","cr9"],frequenze:["f639","f417"],adattamenti:["ad2","ad5"],esercizi:["ex7","ex3"],desc:"Il Carattere della Nutrice (Madre Teresa). Cenestesico in accesso: percepisce il mondo attraverso le sensazioni fisiche. Cane Sanbernardo: generoso e sempre disponibile. La sua trappola è la seduzione come strumento di aiuto. Tre sottotipi: conservativo (dedizione assoluta), sociale (ambizioso attraverso l\'altruismo), sessuale (seduttivo e magnetico). In stress va verso il 8 (aggressività); in sicurezza verso il 4 (autenticità).",areaCerebrale:"Talamo",senso:"Intelletto",cervelloTripartito:"Emozionale — sistema limbico",musa:"Polimnia (memoria e retorica)",pianeta:"Sole"},
  {id:"e3",name:"Tipo 3 — Il Manager",short:"Manager",centro:"Emotivo",virtu:"Autenticità",vizio:"Vanità",integrazione:"→ Tipo 6",disintegrazione:"→ Tipo 9",fasci:"0–30: identità nell'immagine · 30–60: efficienza autentica · 60+: servizio umile",chakra:["c3","c2"],cristalli:["cr5","cr9","cr12"],frequenze:["f528","f417"],adattamenti:["ad3","ad4"],esercizi:["ex5","ex6"],desc:"Il Manager-Trasformista (Berlusconi). Aquila: risolve problemi con efficacia. In accesso è visivo, in elaborazione cenestesico. Guarda in alto quando risponde. Tre sottotipi: conservativo (sicurezza materiale), sociale (modello di ruolo), sessuale (fascino personale). In stress va verso il 9 (inerzia); in sicurezza verso il 6 (lealtà autentica).",areaCerebrale:"Testa del nucleo caudato",senso:"Ragione",cervelloTripartito:"Rettiliano — gangli della base",musa:"Euterpe (musica)",pianeta:"Rahu"},
  {id:"e4",name:"Tipo 4 — Il Romantico",short:"Romantico",centro:"Emotivo",virtu:"Equanimità",vizio:"Invidia",integrazione:"→ Tipo 1",disintegrazione:"→ Tipo 2",fasci:"0–30: romanticismo drammatico · 30–60: creatività strutturata · 60+: bellezza nell'ordinario",chakra:["c4","c6"],cristalli:["cr2","cr7","cr8"],frequenze:["f639","f852"],adattamenti:["ad2","ad6"],esercizi:["ex7","ex11"],desc:"Il Romantico (Fabrizio De André). Personalità masochista: la vittima designata dalla vita. Basset-Hound: diverso dagli altri. Cenestesico in accesso, auditivo in elaborazione. Guarda in basso prima di rispondere. Tre sottotipi: conservativo (drammatico), sociale (vergogna e competizione), sessuale (rabbia e rivendicazione). In stress verso il 2 (dipendenza); in sicurezza verso il 1 (disciplina creativa).",areaCerebrale:"Nucleo subtalamico",senso:"Immaginazione",cervelloTripartito:"Rettiliano — diencefalo",musa:"Erato (canto corale e poesia amorosa)",pianeta:"Mercurio"},
  {id:"e5",name:"Tipo 5 — L'Eremita",short:"Eremita",centro:"Mentale",virtu:"Distacco sano",vizio:"Avarizia di sé",integrazione:"→ Tipo 8",disintegrazione:"→ Tipo 7",fasci:"0–30: accumulo di conoscenza · 30–60: condivisione del sapere · 60+: saggezza incarnata",chakra:["c5","c6","c7"],cristalli:["cr7","cr13","cr11","cr15"],frequenze:["f741","f852"],adattamenti:["ad6","ad1"],esercizi:["ex9","ex12"],desc:"Il Grande Saggio (Newton). Personalità schizoide. Appartiene alla triade del pensiero. Avaro di sé, difende la privacy strenuamente. Tre sottotipi: conservativo (minimalista), sociale (studioso sistematico), sessuale (confidente specialissimo). In stress verso il 7 (dispersione); in sicurezza verso il 8 (assertività incarnata).",areaCerebrale:"Putamen",senso:"Udito",cervelloTripartito:"Rettiliano — gangli della base",musa:"Melpomene (tragedia)",pianeta:"Saturno"},
  {id:"e6",name:"Tipo 6 — Il Leale",short:"Leale",centro:"Mentale",virtu:"Coraggio",vizio:"Paura",integrazione:"→ Tipo 9",disintegrazione:"→ Tipo 3",fasci:"0–30: dipendenza dall'autorità · 30–60: lealtà consapevole · 60+: fede in sé",chakra:["c5","c1"],cristalli:["cr14","cr12","cr10","cr13"],frequenze:["f741","f396"],adattamenti:["ad1","ad5"],esercizi:["ex1","ex9"],desc:"Lo Scettico (Cane Lupo). Personalità evitante e paranoide. Appartiene alla triade del pensiero. La sua risposta alla paura può essere sottomissione o controffobia (aggressività). Tre sottotipi: fobico (cerca protezione), controf obico (attacca la paura), sociale (dipendente dalle regole). In stress verso il 3 (prestazione ansiosa); in sicurezza verso il 9 (equanimità).",areaCerebrale:"Coda del nucleo caudato",senso:"Vista",cervelloTripartito:"Rettiliano — gangli della base",musa:"Tersicore (danza)",pianeta:"Ketu"},
  {id:"e7",name:"Tipo 7 — L'Entusiasta",short:"Entusiasta",centro:"Mentale",virtu:"Sobrietà",vizio:"Gola",integrazione:"→ Tipo 5",disintegrazione:"→ Tipo 1",fasci:"0–30: fuga nel piacere · 30–60: profondità gioiosa · 60+: gratitudine per il presente",chakra:["c5","c2"],cristalli:["cr5","cr7","cr15"],frequenze:["f741","f417"],adattamenti:["ad3","ad2"],esercizi:["ex3","ex9"],desc:"L\'Artista (Ulisse, Benigni). Sindrome narcisistica per Naranjo. Motto: vivere sulle ali della libertà. Evita il dolore moltiplicando le esperienze. Tre sottotipi: conservativo (gourmet di esperienze), sociale (leader visionario), sessuale (intensità romantica ideale). In stress verso il 1 (rigidità moralista); in sicurezza verso il 5 (profondità sobria).",areaCerebrale:"Globo pallido",senso:"Olfatto",cervelloTripartito:"Rettiliano — gangli della base",musa:"Calliope (poesia epica)",pianeta:"Giove"},
  {id:"e8",name:"Tipo 8 — Il Capo",short:"Capo",centro:"Istintivo",virtu:"Innocenza",vizio:"Lussuria di controllo",integrazione:"→ Tipo 2",disintegrazione:"→ Tipo 5",fasci:"0–25: espressione istintiva · 25–30: shock vulnerabilità · 30–60: protezione consapevole · 60+: autorità servente",chakra:["c1","c3"],cristalli:["cr4","cr6","cr12"],frequenze:["f396","f528"],adattamenti:["ad4","ad1"],esercizi:["ex1","ex5"],desc:"Il Capo (Tyson, Luther King). Mastino: nessuno controlla il territorio come me. Personalità antisociale e sadica per Naranjo. La vera paura: essere traditi. Tre sottotipi: conservativo (sopravvivenza fisica), sociale (leader carismatico), sessuale (passione e possesso). In stress verso il 5 (isolamento); in sicurezza verso il 2 (tenerezza e cura).",areaCerebrale:"Pars Reticolare e Substantia Nigra",senso:"Gusto",cervelloTripartito:"Rettiliano — mesencefalo",musa:"Clio (storia)",pianeta:"Venere"},
  {id:"e9",name:"Tipo 9 — Il Diplomatico",short:"Diplomatico",centro:"Istintivo",virtu:"Azione",vizio:"Pigrizia di sé",integrazione:"→ Tipo 3",disintegrazione:"→ Tipo 6",fasci:"0–30: pace nella fusione · 30–60: azione consapevole · 60+: mediatore saggio",chakra:["c1","c4","c7"],cristalli:["cr4","cr2","cr11"],frequenze:["f396","f639"],adattamenti:["ad5","ad2"],esercizi:["ex1","ex7"],desc:"Il Diplomatico. Personalità dipendente per Naranjo. Evita il conflitto fondendosi con l\'ambiente. La sfida: non perdersi negli altri. Tre sottotipi: conservativo (comfort e abitudini), sociale (partecipa senza essere al centro), sessuale (fusione con il partner). In stress verso il 6 (ansia); in sicurezza verso il 3 (efficacia e visibilità)."}
],
frequenze:[
  {id:"f396",name:"396 Hz — Liberazione dalla paura",short:"396 Hz",nota:"Do / Ut",chakra:["c1"],enneatipi:["e8","e9","e1","e6"],effetto:"Libera sensi di colpa e paure radicali, stabilizza il sistema nervoso",strumenti:"Cimbali tibetani gravi, tamburo a cornice, didgeridoo",esercizi:["ex1","ex2"],adattamenti:["ad1"],desc:"Frequenza Ut del sistema solfeggio. Scioglie i blocchi energetici profondi legati alla sopravvivenza e al senso di colpa ancestrale. Indicata nella pranoterapia per riattivare il senso di sicurezza."},
  {id:"f417",name:"417 Hz — Cambiamento e fluidità",short:"417 Hz",nota:"Re",chakra:["c2"],enneatipi:["e2","e3","e4","e7"],effetto:"Facilita il cambiamento, scioglie blocchi creativi, purifica dai traumi",strumenti:"Flauto, campane d'acqua, canto armonico",esercizi:["ex3","ex4"],adattamenti:["ad5"],desc:"Frequenza solfeggio del secondo chakra. Facilita la risoluzione delle situazioni bloccate e sostiene la trasformazione emotiva. Usata nelle fasi di transizione."},
  {id:"f528",name:"528 Hz — Riparazione del DNA",short:"528 Hz",nota:"Mi",chakra:["c3"],enneatipi:["e1","e3","e8"],effetto:"Rinforza l'autostima, stimola la guarigione cellulare, riattiva la gioia",strumenti:"Campana di cristallo in Do, piano accordato a 528",esercizi:["ex5","ex6"],adattamenti:["ad4"],desc:"La frequenza dell'amore e della riparazione. Stimola il plesso solare, rafforza l'identità personale e la capacità di agire con fiducia nel mondo."},
  {id:"f639",name:"639 Hz — Connessione e armonia",short:"639 Hz",nota:"Fa",chakra:["c4"],enneatipi:["e2","e4","e9"],effetto:"Migliora le relazioni, apre il cuore, favorisce empatia e riconciliazione",strumenti:"Campana di cristallo in Fa, arpa, canto devozionale",esercizi:["ex7","ex10"],adattamenti:["ad2","ad5"],desc:"Frequenza del cuore per eccellenza. Favorisce la comunicazione nelle relazioni, la riconciliazione e l'empatia. Ideale nelle sessioni di counseling di coppia."},
  {id:"f741",name:"741 Hz — Espressione e intuizione",short:"741 Hz",nota:"Sol",chakra:["c5","c6"],enneatipi:["e5","e6","e7"],effetto:"Libera l'espressione autentica, rafforza l'intuizione, dissolve blocchi vocali",strumenti:"Canto armonico tibetano, flauto alto, campana tibetana acuta",esercizi:["ex9","ex11"],adattamenti:["ad6"],desc:"Frequenza del quinto e sesto chakra. Stimola la chiarezza mentale e l'espressione della verità interiore."},
  {id:"f852",name:"852 Hz — Risveglio interiore",short:"852 Hz",nota:"La",chakra:["c6"],enneatipi:["e4","e5","e6"],effetto:"Amplifica l'intuizione, apre il terzo occhio, sostiene la visione interiore",strumenti:"Gong cristallino, campana tibetana acuta, mantra OM",esercizi:["ex11","ex12"],adattamenti:["ad6"],desc:"Frequenza del sesto chakra e del risveglio spirituale. Sostiene la meditazione profonda e l'accesso agli archetipi junghiani."},
  {id:"f963",name:"963 Hz — Coscienza cosmica",short:"963 Hz",nota:"Si",chakra:["c7"],enneatipi:["e9","e5","e3"],effetto:"Connette alla coscienza universale, produce stati contemplativi profondi",strumenti:"Canto gregoriano, OM prolungato, gong planetari",esercizi:["ex12","ex13"],adattamenti:["ad6"],desc:"La frequenza più elevata del sistema solfeggio. Apre alla dimensione transpersonale. Usata nelle pratiche contemplative avanzate e nella pranoterapia per il settimo chakra."},
  {id:"f432",name:"432 Hz — Accordatura della natura",short:"432 Hz",nota:"La naturale",chakra:["c4","c1"],enneatipi:["e9","e2","e6"],effetto:"Genera risonanza armonica naturale, riduce ansia e stress sistemico",strumenti:"Qualsiasi strumento riaccordato a 432 Hz",esercizi:["ex4","ex7"],adattamenti:["ad2"],desc:"L'accordatura basata sulla matematica della natura (Phi, spirale di Fibonacci). Produce stati di calma e coerenza cardiaca. Base per tutto il lavoro con le frequenze nel contesto olistico."}
],
adattamenti:[
  {id:"ad1",name:"Schizoide — Creativo-Sognatore",short:"Schizoide",categoria:"Adattamento AT (AT)",tipo:"Sopravvivenza",eta:"0–18 mesi",stile:"Esitante",spinta:"Sii forte",copione:"Mai + Sempre",portaAperta:"Comportamento",portaBersaglio:"Pensiero",portaTrappola:"Emozioni",vettori:"GN+, A",
    chakra:["c1","c5","c7"],enneatipi:["e5"],cristalli:["cr7","cr11","cr13"],esercizi:["ex1","ex9","ex12"],frequenze:["f396","f741"],
    desc:"Si sviluppa quando il bambino non si fida dell'ambiente nei primi 18 mesi (genitore esitante). Impara a fare da solo. Da adulto è creativo, visionario, ricco di mondo interiore ma tende alla solitudine come difesa. La porta d'accesso è il comportamento concreto; lavorare sulle emozioni troppo presto provoca chiusura. Il copione Mai-Sempre lo porta a credere che i suoi desideri non si realizzeranno mai e che la situazione dolorosa durerà sempre.",copione_vita:"Mai (non avrò mai quello di cui ho bisogno dagli altri) · Sempre (sarò sempre solo/incompreso)",stile_comunicazione:"Direttivo",giochi:["«Vediamo che mi fai» — aspetta che l'altro faccia il primo passo, poi lo valuta freddamente", "«Guarda che mi hai fatto fare» — si ritira quando qualcosa va storto, imputando la colpa all'altro", "«Tutta colpa tua» — raccoglie conferme che il mondo esterno è inaffidabile e pericoloso", "«Prendimi a calci» — si isola attirando inconsapevolmente rifiuto, confermando l'ingiunzione «non appartenere»"],racket:"Blocco emotivo · Senso di vuoto · Ansia (a copertura della rabbia, del dolore, della gioia e del desiderio sessuale)",ingiunzioni:"Non farlo · Non appartenere · Non essere sano · Non sentire · Non divertirti · Non crescere · Non pensare",rimedi:{"bach": "Water Violet (isolamento orgoglioso) · Cerato (sfiducia in sé) · Mimulus (paura del contatto)", "fes": "Shooting Star (senso di non appartenenza) · Pink Yarrow (barriere emotive)", "chakra": "1° (radicamento) · 5° (espressione autentica)", "frequenza": "396 Hz (liberazione dalla paura)", "meditazione": "Body Scan MBSR · ancoraggio sensoriale · respirazione 4-7-8"}},
  {id:"ad2",name:"Antisociale — Affascinante-Manipolatore",short:"Antisociale",categoria:"Adattamento AT (AT)",tipo:"Sopravvivenza",eta:"0–18 mesi",stile:"Anticipatorio",spinta:"Sii forte · Compiaci",copione:"Mai, Sempre, Quasi tipo I",portaAperta:"Comportamento",portaBersaglio:"Emozioni",portaTrappola:"Pensiero",vettori:"BL+, GA+, GN+",
    chakra:["c1","c3"],enneatipi:["e8"],cristalli:["cr4","cr6","cr12"],esercizi:["ex1","ex5"],frequenze:["f396","f528"],
    desc:"Il genitore anticipatorio agisce prima che il bambino abbia bisogno, poi quando è stanco lo lascia. Il bambino diventa affascinante e manipolatore per ottenere ciò che vuole. La porta d'accesso è il comportamento; il pensiero è la trappola perché razionalizza ogni manipolazione. Ha difficoltà a fidarsi genuinamente degli altri e tende a sfruttare le relazioni per i propri fini.",copione_vita:"Mai (non mi fiderò mai di nessuno) · Sempre (dovrò sempre controllarli prima che controllino me) · Quasi I (arriva vicino al legame e lo sabota)",stile_comunicazione:"Emotivo + Affettivo + Direttivo",giochi:["«Prendimi se ci riesci» — provoca sfide impossibili per dimostrare superiorità", "«Guardie e ladri» — crea situazioni dove qualcuno deve «perdere»"],racket:"Confusione · Rabbia (a copertura della paura e della tristezza)",ingiunzioni:"Non essere intimo · Non sentire (tristezza e paura) · Non farlo · Non pensare alle soluzioni a lungo termine",rimedi:{"bach": "Vine (prepotenza, dominio) · Beech (intolleranza) · Holly (gelosia, odio)", "fes": "Oregon Grape (sfiducia negli altri) · Blackberry (impulsività)", "chakra": "1° (sicurezza reale) · 3° (potere dal sé, non sugli altri)", "frequenza": "528 Hz (trasformazione, riparazione)", "meditazione": "Tonglen (compassione) · Loving-Kindness"}},
  {id:"ad3",name:"Paranoide — Brillante-Scettico",short:"Paranoide",categoria:"Adattamento AT (AT)",tipo:"Sopravvivenza",eta:"0–18 mesi",stile:"Inconsistente",spinta:"Sii perfetto = Sii forte",copione:"Finché + Mai",portaAperta:"Pensiero",portaBersaglio:"Emozioni",portaTrappola:"Comportamento",vettori:"A, GN+",
    chakra:["c1","c5","c6"],enneatipi:["e6"],cristalli:["cr14","cr13","cr12"],esercizi:["ex1","ex9","ex11"],frequenze:["f396","f741","f852"],
    desc:"Il genitore inconsistente alterna calore e freddezza senza logica. Il bambino impara a essere ipervigilante per anticipare le reazioni. Da adulto è brillante e analitico ma si aspetta sempre il peggio. Porta aperta: pensiero. È finché non sarò perfetto non sarò sicuro. La fiducia è il lavoro evolutivo centrale: imparare che non tutto è minaccia.",copione_vita:"Finché (non posso rilassarmi finché non ho verificato ogni pericolo) · Mai (non potrò mai fidarmi davvero)",stile_comunicazione:"Esplorativo + Direttivo",giochi:["«Ti ho beccato figlio di puttana» — cerca il momento in cui l'altro fa un errore per smascherarlo", "«Difetto» — raccoglie «segnali» che confermano le sue sospetti sull'inaffidabilità altrui", "«Prendimi a calci» — si mette in situazioni in cui si sente perseguitato o tradito"],racket:"Rabbia nei confronti degli altri (a coprire la paura) · Indignazione morale · Gelosia · Invidia · Sospettosità",ingiunzioni:"Non essere un bambino · Non essere intimo · Non fidarti · Non sentire · Non divertirti · Non appartenere",rimedi:{"bach": "Mimulus (paura concreta) · Aspen (paura vaga) · Holly (sospetto/odio) · Cherry Plum (perdita controllo)", "fes": "Oregon Grape (paranoia latente) · Golden Ear Drops (trauma infantile)", "chakra": "1° (sicurezza di base) · 6° (chiarezza intuitiva vs sospetto)", "frequenza": "741 Hz (espressione e dissoluzione dei blocchi)", "meditazione": "Visualizzazione protettiva · Meditazione sul Chakra 6°"}},
  {id:"ad4",name:"Passivo-Aggressivo — Scherzoso-Oppositivo",short:"Passivo-Aggressivo",categoria:"Adattamento AT (AT)",tipo:"Performance",eta:"18–36 mesi",stile:"Ipercontrollante",spinta:"Sforzati",copione:"Sempre, Quasi tipo II",portaAperta:"Comportamento",portaBersaglio:"Emozioni",portaTrappola:"Pensiero",vettori:"BL+",
    chakra:["c1","c2","c3"],enneatipi:["e9"],cristalli:["cr4","cr9","cr2"],esercizi:["ex1","ex3","ex7"],frequenze:["f396","f417","f528"],
    desc:"Il genitore ipercontrollante lotta con il bambino. Il bambino impara a resistere passivamente. Da adulto è scherzoso e creativo ma oppone resistenza indiretta. Il copione Sempre-Quasi lo porta a cambiare rotta proprio quando è vicino alla meta. Sforzarsi senza mai arrivare. La porta d'accesso è il comportamento concreto, che deve essere esplicitato e approvato. Lavoro evolutivo: esprimere il bisogno direttamente.",copione_vita:"Sempre (ripeterò sempre gli stessi schemi senza mai arrivare) · Quasi II (si ferma quando è a un passo dal traguardo)",stile_comunicazione:"Emotivo",giochi:["«Perché non… — Sì, ma…» — presenta problemi e rifiuta sistematicamente ogni soluzione proposta", "«Vediamo che mi fai» — aspetta passivamente che l'altro fallisca, poi resiste", "«Stupido» — finge di non capire come strategia di resistenza passiva", "«Prendimi a calci» — comportamenti autolesivi che attraggono punizione confermando l'ingiunzione «non riuscire»"],racket:"Frustrazione (a copertura del dolore) · Confusione (a copertura della rabbia) · Indignazione morale",ingiunzioni:"Non crescere · Non sentire · Non farlo · Non essere intimo · Non divertirti",rimedi:{"bach": "Wild Rose (rassegnazione passiva) · Agrimony (conflitto interno mascherato) · Willow (risentimento)", "fes": "Blackberry (azione diretta) · Tansy (procrastinazione)", "chakra": "1° (forza personale) · 2° (fluidità emotiva) · 3° (volontà)", "frequenza": "417 Hz (facilitazione del cambiamento)", "meditazione": "Respirazione del fuoco · Movimenti consapevoli · VAK kinestesico"}},
  {id:"ad5",name:"Ossessivo-Compulsivo — Responsabile-Stakanovista",short:"Ossessivo-Compulsivo",categoria:"Adattamento AT (AT)",tipo:"Performance",eta:"18 mesi–6 anni",stile:"Enfasi sul risultato",spinta:"Sii perfetto",copione:"Finché (Quasi tipo II)",portaAperta:"Pensiero",portaBersaglio:"Emozioni",portaTrappola:"Comportamento",vettori:"A, GN+",
    chakra:["c3","c5","c6"],enneatipi:["e1"],cristalli:["cr10","cr5","cr13"],esercizi:["ex5","ex6","ex9"],frequenze:["f528","f741"],
    desc:"Il genitore che valuta il bambino per i risultati. Impara che vale quanto produce. Da adulto è responsabile, preciso, affidabile ma non si ferma mai perché non è mai abbastanza perfetto. Copione Finché: non posso rilassarmi finché non ho finito. La porta aperta è il pensiero analitico. Porta trappola: non proporre azioni concrete troppo presto, prima bisogna esplorare i significati. Evoluzione: imparare a essere, non solo fare.",copione_vita:"Finché (non posso rilassarmi finché non è perfetto) · Quasi II (quasi perfetto non è mai abbastanza)",stile_comunicazione:"Esplorativo + Direttivo",giochi:["«Non è la volontà che mi manca» — dimostra sforzo senza risultato, raccogliendo conferme di non valere abbastanza", "«Tutta colpa tua» — quando qualcosa va storto trova un responsabile esterno invece di accettare l'imperfezione", "«Occupatissimo» — usa il lavoro incessante come scudo contro il contatto emotivo"],racket:"Ansia · Depressione · Senso di colpa (a copertura della rabbia, delle emozioni dolorose e del desiderio sessuale) · Rabbia (a coprire la tristezza)",ingiunzioni:"Non essere un bambino · Non sentire · Non essere intimo · Non essere importante · Non divertirti",rimedi:{"bach": "Rock Water (rigidità, autocontrollo estremo) · Vervain (fanatismo) · Pine (senso di colpa)", "fes": "Filaree (perfezionismo ossessivo) · Dill (sovraccarico sensoriale)", "chakra": "3° (allentare la volontà coercitiva) · 4° (apertura affettiva)", "frequenza": "528 Hz (trasformazione DNA, riparazione) · 639 Hz (relazioni)", "meditazione": "Rilassamento progressivo di Jacobson · Scrittura meditativa · Yoga nidra"}},
  {id:"ad6",name:"Istrionico — Entusiasta-Iperreattivo",short:"Istrionico",categoria:"Adattamento AT (AT)",tipo:"Performance",eta:"18 mesi–6 anni",stile:"Rendere felici gli altri",spinta:"Compiaci",copione:"Dopo (Quasi tipo I e II)",portaAperta:"Emozioni",portaBersaglio:"Pensiero",portaTrappola:"Comportamento",vettori:"GA+, BL+",
    chakra:["c2","c4","c5"],enneatipi:["e2","e3","e4"],cristalli:["cr2","cr8","cr3"],esercizi:["ex3","ex7","ex9"],frequenze:["f417","f639","f741"],
    desc:"Il bambino impara che rendere felici gli altri è la sua funzione. Da adulto è entusiasta, espressivo, magnetico ma dipende dall'approvazione. Porta aperta: le emozioni (parlare di come si sente). Porta trappola: il comportamento proposto troppo presto sembra giudicante. Il copione Dopo crea una spada di Damocle: posso divertirmi oggi, ma lo pagherò domani. Evoluzione: riconoscere i propri bisogni come legittimi.",stile_comunicazione:"Affettivo + Emotivo",giochi:["«Violenza carnale» — esagera o drammatizza una situazione fino a farla sembrare un sopruso", "«Tutta colpa tua» — attribuisce all'altro la responsabilità delle proprie emozioni intense", "«Stupido» — si fa carico di tutto poi si \"scopre\" incapace, raccogliendo cure e attenzioni"],racket:"Ansia · Tristezza · Confusione (a copertura della rabbia)",ingiunzioni:"Non crescere · Non pensare · Non essere importante · Non essere te stesso",rimedi:{"bach": "Chicory (possessività, manipolazione affettiva) · Heather (bisogno di attenzione) · Centaury (difficoltà a dire no)", "fes": "Pretty Face (bisogno di validazione esterna) · Bleeding Heart (dipendenza affettiva)", "chakra": "2° (emozioni fluide, non reattive) · 4° (amore sano vs dipendenza)", "frequenza": "639 Hz (armonia nelle relazioni)", "meditazione": "Heartfulness · Mindfulness delle emozioni · Meditazione del testimone neutro"}}
],
esercizi:[
  {id:"ex1",name:"Grounding radicato",short:"Grounding",tipo:"Corporeo",chakra:["c1"],enneatipi:["e8","e9","e6"],frequenze:["f396"],cristalli:["cr6","cr4","cr14"],adattamenti:["ad1"],desc:"Piedi nudi a terra, respiro addominale profondo, pressione consapevole sul pavimento. 5 minuti, 3 volte al giorno. Riattiva il senso di sicurezza e di appartenenza al corpo.",copione_vita:"Dopo (mi potrò divertire / sarò amato solo dopo aver soddisfatto tutti) · Quasi I e II (quasi abbastanza approvazione, ma mai del tutto)"},
  {id:"ex2",name:"Cammino meditativo",short:"Walking meditation",tipo:"Corporeo",chakra:["c1","c2"],enneatipi:["e9","e6","e5"],frequenze:["f396","f432"],cristalli:["cr6"],adattamenti:["ad2"],desc:"Camminare lentamente e in silenzio, prestando piena attenzione alle sensazioni dei piedi. 20 minuti in natura. Riattiva il collegamento corpo-terra."},
  {id:"ex3",name:"Danza creativa libera",short:"Danza libera",tipo:"Espressivo",chakra:["c2","c3"],enneatipi:["e4","e7","e2"],frequenze:["f417","f528"],cristalli:["cr9"],adattamenti:["ad5"],desc:"Movimento libero del corpo sulla musica scelta intuitivamente. L'obiettivo è permettere al corpo di esprimere ciò che le parole non possono."},
  {id:"ex4",name:"Bagno di suono",short:"Sound bath",tipo:"Sonoro",chakra:["c2","c4"],enneatipi:["e2","e9","e4"],frequenze:["f432","f639"],cristalli:["cr2"],adattamenti:["ad2"],desc:"Immersione in un campo sonoro creato da campane tibetane e gong. Il paziente è in posizione supina. Le vibrazioni penetrano nel corpo fisico e sottile."},
  {id:"ex5",name:"Kapalbhati",short:"Respiro del guerriero",tipo:"Pranayama",chakra:["c3","c1"],enneatipi:["e1","e8","e3"],frequenze:["f528","f396"],cristalli:["cr12","cr6"],adattamenti:["ad4"],desc:"Respiro a pompa forzato: inspirazione naturale ed espirazione potente e rapida. 30–60 cicli, 3 round. Purifica il terzo chakra e attiva il fuoco interiore."},
  {id:"ex6",name:"Giornale dei successi",short:"Successi quotidiani",tipo:"Riflessivo",chakra:["c3"],enneatipi:["e3","e1","e6"],frequenze:["f528"],cristalli:["cr5"],adattamenti:["ad4"],desc:"Ogni sera: scrivere tre azioni compiute efficacemente. Contrastare il critico interiore con prove concrete. Rinforza l'autostima e la percezione di efficacia personale."},
  {id:"ex7",name:"Loving-Kindness (Metta)",short:"Loving-Kindness",tipo:"Meditativo",chakra:["c4"],enneatipi:["e2","e9","e4","e1"],frequenze:["f639","f432"],cristalli:["cr2","cr8"],adattamenti:["ad2","ad6"],desc:"Generare intenzionalmente sentimenti di amore verso sé stessi, le persone care, quelle difficili, poi tutti gli esseri. 20 minuti."},
  {id:"ex8",name:"Voice Dialogue",short:"Dialogo con l'ombra",tipo:"Psicologico",chakra:["c4","c6"],enneatipi:["e1","e4","e8"],frequenze:["f639","f852"],cristalli:["cr8","cr7"],adattamenti:["ad6"],desc:"Tecnica di Hal & Sidra Stone: dare voce alle sub-personalità che si rifiutano di vedere. Il counselor facilita il dialogo tra parti opposte."},
  {id:"ex9",name:"Scrittura espressiva",short:"Scrittura della verità",tipo:"Creativo",chakra:["c5"],enneatipi:["e5","e1","e7"],frequenze:["f741"],cristalli:["cr3"],adattamenti:["ad3"],desc:"Scrivere senza censura per 20 minuti su un tema emotivo attivo. Non per comunicare agli altri, ma per dare voce alla propria verità interiore."},
  {id:"ex10",name:"Co-regolazione respiratoria",short:"Co-regolazione",tipo:"Relazionale",chakra:["c4","c5"],enneatipi:["e9","e2","e6"],frequenze:["f639","f432"],cristalli:["cr2"],adattamenti:["ad6","ad2"],desc:"Due persone sincronizzano il respiro per 5–10 minuti. Attiva i neuroni specchio e la co-regolazione del sistema nervoso. Potente in terapia di coppia e mediazione."},
  {id:"ex11",name:"Visualizzazione archetipica",short:"Visualizzazione",tipo:"Meditativo-immaginativo",chakra:["c6"],enneatipi:["e5","e4","e9"],frequenze:["f852"],cristalli:["cr7","cr13"],adattamenti:["ad6"],desc:"Meditazione guidata con immagini simboliche (il viaggio dell'eroe, l'incontro con l'Ombra). Lavora con il linguaggio del sesto chakra: simboli, sogni, miti."},
  {id:"ex12",name:"Zazen — Silenzio meditativo",short:"Zazen",tipo:"Contemplativo",chakra:["c6","c7"],enneatipi:["e5","e9","e4"],frequenze:["f852","f963"],cristalli:["cr1","cr11"],adattamenti:["ad6"],desc:"Sedersi in silenzio, schiena diritta, senza oggetto di meditazione. 20–40 minuti. Fondamentale per lo sviluppo del sesto e settimo chakra."},
  {id:"ex13",name:"Pranoterapia attiva",short:"Pranoterapia",tipo:"Energetico",chakra:["c7","c4"],enneatipi:["e9","e2","e5"],frequenze:["f963","f639"],cristalli:["cr11","cr15"],adattamenti:["ad6"],desc:"Trasmissione di energia pranale attraverso le mani. Il pranoterapeuta lavora sull'aura e sui chakra per ristabilire il flusso energetico. Richiede formazione specifica."}
],
fes:[
  {id:"fes1",name:"Agrimony",short:"Agrimony",color:"#e8a857",cat:"fes",funzione:"Pace interiore, onestà emotiva",disturbo:"Maschera di gioia, tensione nascosta",chakra:["c4"],enneatipi:["e3","e7"],desc:"Chi sorride sempre per nascondere l'angoscia interiore. Ripristina la pace autentica e la capacità di condividere i propri dolori."},
  {id:"fes2",name:"Alpine Lily",short:"Giglio Alpino",color:"#e8c4a0",cat:"fes",funzione:"Femminilità incarnata, accettazione del corpo",disturbo:"Rifiuto della femminilità, corporalità",chakra:["c2","c1"],enneatipi:["e4","e2"],desc:"Per donne con difficoltà ad accettare la propria fisicità e femminilità. Riconnette spirito e corpo femminile."},
  {id:"fes3",name:"Angelica",short:"Angelica",color:"#f5e6c8",cat:"fes",funzione:"Protezione spirituale, guida interiore",disturbo:"Senso di abbandono spirituale, solitudine",chakra:["c7"],enneatipi:["e5","e6"],desc:"Quando ci si sente soli e senza guida spirituale. Apre alla protezione angelica e alla fiducia nel cammino."},
  {id:"fes4",name:"Arnica",short:"Arnica",color:"#f0c040",cat:"fes",funzione:"Recupero dal trauma, reintegrazione del sé",disturbo:"Shock, trauma, dissociazione",chakra:["c1","c3"],enneatipi:["e6","e9"],desc:"Essenziale dopo traumi fisici e psichici. Riconnette la coscienza al corpo dopo esperienze di shock e separazione."},
  {id:"fes5",name:"Baby Blue Eyes",short:"Occhi di Bimbo",color:"#a8c8f0",cat:"fes",funzione:"Fiducia nel mondo, innocenza",disturbo:"Cinismo, sfiducia negli uomini",chakra:["c4","c6"],enneatipi:["e6","e5"],desc:"Per chi ha perso la fiducia nel padre e negli uomini in generale. Restaura l'innocenza e l'apertura del cuore."},
  {id:"fes6",name:"Black Cohosh",short:"Cimifuga",color:"#2a1a3a",cat:"fes",funzione:"Coraggio di fronte al buio",disturbo:"Relazioni oppressive, paura oscura",chakra:["c3","c1"],enneatipi:["e6","e8"],desc:"Per chi è intrappolato in relazioni violente o oppressive. Dà il coraggio di affrontare ciò che è oscuro e pesante."},
  {id:"fes7",name:"Black-Eyed Susan",short:"Rudbeckia",color:"#f0a030",cat:"fes",funzione:"Consapevolezza degli stati ombra",disturbo:"Negazione dell'ombra, inconsapevolezza",chakra:["c3","c6"],enneatipi:["e1","e3"],desc:"Per portare luce sulle parti negate di sé. Aiuta a integrare gli aspetti ombra della personalità con consapevolezza."},
  {id:"fes8",name:"Blackberry",short:"More",color:"#4a2060",cat:"fes",funzione:"Manifestazione concreta, volontà creativa",disturbo:"Procrastinazione, idee non realizzate",chakra:["c3","c1"],enneatipi:["e9","e5"],desc:"Quando le idee restano nel mondo dei sogni. Trasforma l'intenzione in azione concreta e determinata."},
  {id:"fes9",name:"Bleeding Heart",short:"Cuor Sanguinante",color:"#e060a0",cat:"fes",funzione:"Amore libero, distacco sano",disturbo:"Dipendenza affettiva, attaccamento ossessivo",chakra:["c4","c2"],enneatipi:["e2","e4"],desc:"Per chi soffre per amore in modo ossessivo. Insegna ad amare liberamente senza possedere né dipendere."},
  {id:"fes10",name:"Borage",short:"Borragine",color:"#6080f0",cat:"fes",funzione:"Coraggio del cuore, ottimismo",disturbo:"Pesantezza, scoraggiamento",chakra:["c4"],enneatipi:["e6","e9"],desc:"Per il coraggio del cuore nelle situazioni difficili. Libera dall'oppressione e dal senso di pesantezza emotiva."},
  {id:"fes11",name:"Buttercup",short:"Ranuncolo",color:"#f8e030",cat:"fes",funzione:"Autostima, luce interiore",disturbo:"Senso di inutilità, invisibilità",chakra:["c3","c2"],enneatipi:["e4","e6"],desc:"Per chi non riesce a riconoscere il proprio valore. Risveglia la luce interiore e la fiducia in sé."},
  {id:"fes12",name:"California Poppy",short:"Papavero Californiano",color:"#f04810",cat:"fes",funzione:"Valori autentici, spiritualità radicata",disturbo:"Dipendenze, evasione dalla realtà",chakra:["c6","c3"],enneatipi:["e7","e4"],desc:"Per chi cerca esperienze spirituali attraverso droghe o evasioni. Aiuta a trovare la bellezza nella vita ordinaria."},
  {id:"fes13",name:"California Wild Rose",short:"Rosa Selvatica California",color:"#e87080",cat:"fes",funzione:"Impegno nella vita, entusiasmo",disturbo:"Apatia, rassegnazione",chakra:["c4","c1"],enneatipi:["e9","e5"],desc:"Per chi ha abbandonato l'entusiasmo per la vita. Riaccende la passione e l'impegno nel quotidiano."},
  {id:"fes14",name:"Canyon Dudleya",short:"Dudleya",color:"#f0d060",cat:"fes",funzione:"Esperienza spirituale ordinaria",disturbo:"Drammatizzazione, sovraesposizione psichica",chakra:["c6","c7"],enneatipi:["e4","e2"],desc:"Per chi drammatizza le esperienze spirituali o ne è sopraffatto. Radica le esperienze interiori nella vita quotidiana."},
  {id:"fes15",name:"Cayenne",short:"Peperoncino",color:"#e02010",cat:"fes",funzione:"Forza di volontà, accelerazione",disturbo:"Inerzia, resistenza al cambiamento",chakra:["c3"],enneatipi:["e9","e5"],desc:"Rompe l'inerzia e la resistenza al cambiamento. Accende la fiamma della volontà quando tutto sembra bloccato."},
  {id:"fes16",name:"Chamomile",short:"Camomilla",color:"#f8e840",cat:"fes",funzione:"Calma solare, equilibrio emotivo",disturbo:"Irritabilità, tensione solare-plexus",chakra:["c3","c4"],enneatipi:["e1","e4"],desc:"Per la calma e la serenità solare. Scioglie la tensione nel plesso solare e regola le tempeste emotive."},
  {id:"fes17",name:"Chaparral",short:"Chaparral",color:"#608840",cat:"fes",funzione:"Pulizia psichica profonda",disturbo:"Incubi, inquinamento psichico",chakra:["c6","c3"],enneatipi:["e5","e6"],desc:"Purifica la mente da immagini disturbanti e incubi. Usata per la pulizia psichica profonda dopo traumi o esposizione a energie negative."},
  {id:"fes18",name:"Chrysanthemum",short:"Crisantemo",color:"#f0a010",cat:"fes",funzione:"Accettazione della mortalità",disturbo:"Paura della morte, attaccamento al sé",chakra:["c7","c4"],enneatipi:["e3","e1"],desc:"Per chi è terrorizzato dall'invecchiamento e dalla morte. Aiuta ad accettare la natura transitoria del sé personale."},
  {id:"fes19",name:"Cosmos",short:"Cosmos",color:"#e070e0",cat:"fes",funzione:"Fluidità del pensiero, eloquenza",disturbo:"Sopraffazione mentale, incomunicabilità",chakra:["c5","c6"],enneatipi:["e5","e7"],desc:"Quando i pensieri corrono troppo veloci per essere espressi. Porta chiarezza e fluidità nell'espressione verbale e nel pensiero."},
  {id:"fes20",name:"Deerbrush",short:"Ceanothus",color:"#f8f0f8",cat:"fes",funzione:"Purezza di intenzione",disturbo:"Motivazioni miste, auto-inganno",chakra:["c4","c6"],enneatipi:["e2","e1"],desc:"Per ripristinare la purezza e la semplicità delle motivazioni. Aiuta a capire le vere intenzioni dietro le proprie azioni."},
  {id:"fes21",name:"Dill",short:"Aneto",color:"#a8c840",cat:"fes",funzione:"Assimilazione delle esperienze",disturbo:"Sovraccarico sensoriale, iperstimolazione",chakra:["c3","c5"],enneatipi:["e7","e5"],desc:"Per chi è sopraffatto da troppi stimoli. Aiuta ad assimilare le esperienze senza essere travolti dalla loro intensità."},
  {id:"fes22",name:"Echinacea",short:"Echinacea",color:"#e080a0",cat:"fes",funzione:"Integrità del sé, resistenza",disturbo:"Frantumazione dell'identità, degradazione",chakra:["c3","c1"],enneatipi:["e4","e6"],desc:"Per ristabilire l'integrità del sé quando si è stati abusati o degradati. Ripristina la dignità e la forza interiore."},
  {id:"fes23",name:"Fairy Lantern",short:"Calochortus",color:"#f0f8e0",cat:"fes",funzione:"Maturità sana, responsabilità",disturbo:"Infantilismo, dipendenza psicologica",chakra:["c1","c3"],enneatipi:["e2","e7"],desc:"Per chi rimane bloccato in atteggiamenti infantili. Favorisce la crescita verso una maturità sana e responsabile."},
  {id:"fes24",name:"Fawn Lily",short:"Giglio Cerbiatto",color:"#f8e8e8",cat:"fes",funzione:"Partecipazione alla vita comunitaria",disturbo:"Ritiro dal mondo, eremitismo eccessivo",chakra:["c4","c7"],enneatipi:["e5","e4"],desc:"Per le nature sensibili e spirituali che tendono a ritirarsi dal mondo. Le aiuta a condividere i loro doni con gli altri."},
  {id:"fes25",name:"Filaree",short:"Erodio",color:"#c878c8",cat:"fes",funzione:"Prospettiva cosmica, leggerezza",disturbo:"Preoccupazione ossessiva per i dettagli",chakra:["c6","c3"],enneatipi:["e1","e6"],desc:"Per chi si perde nei dettagli dimenticando la visione d'insieme. Aiuta a mantenere la prospettiva su ciò che conta davvero."},
  {id:"fes26",name:"Forget-Me-Not",short:"Nontiscordardimé",color:"#80a0f0",cat:"fes",funzione:"Connessione con i defunti, continuità",disturbo:"Paura della morte, disconnessione dagli antenati",chakra:["c6","c4"],enneatipi:["e4","e9"],desc:"Per mantenere consapevolezza dei legami spirituali che trascendono la morte. Connette con le anime dei propri cari."},
  {id:"fes27",name:"Fuchsia",short:"Fucsia",color:"#e040a0",cat:"fes",funzione:"Autenticità emotiva, vitalità",disturbo:"Emozioni represse, psicosomatismo",chakra:["c4","c2"],enneatipi:["e4","e2"],desc:"Porta alla superficie le emozioni genuinamente represse che si esprimono come sintomi fisici. Libera la vitalità autentica."},
  {id:"fes28",name:"Goldenrod",short:"Verga d'Oro",color:"#f8c020",cat:"fes",funzione:"Identità forte, resistenza alla pressione sociale",disturbo:"Conformismo, perdita del sé nel gruppo",chakra:["c3","c5"],enneatipi:["e3","e6"],desc:"Per chi perde la propria identità sotto la pressione del gruppo. Rafforza il senso del sé mantenendo apertura sociale."},
  {id:"fes29",name:"Golden Yarrow",short:"Achillea Dorata",color:"#f0d020",cat:"fes",funzione:"Protezione con apertura, sensibilità difesa",disturbo:"Vulnerabilità alla pressione esterna",chakra:["c3","c4"],enneatipi:["e4","e6"],desc:"Per le nature sensibili che si espongono al mondo. Offre protezione senza chiudersi, permettendo di restare aperti e vulnerabili senza essere travolti."},
  {id:"fes30",name:"Hound's Tongue",short:"Cinoglossa",color:"#8050d0",cat:"fes",funzione:"Visione olistica, integrazione mente-corpo",disturbo:"Materialismo, riduzionismo",chakra:["c6","c1"],enneatipi:["e5","e1"],desc:"Per chi vede la realtà solo in termini materiali e meccanicistici. Apre alla comprensione spirituale e olistica dell'esistenza."},
  {id:"fes31",name:"Indian Paintbrush",short:"Castilleja",color:"#e83010",cat:"fes",funzione:"Creatività incarnata, vitalità artistica",disturbo:"Esaurimento creativo, disconnessione dalla forza vitale",chakra:["c2","c3"],enneatipi:["e4","e7"],desc:"Per gli artisti che sentono il proprio processo creativo disconnesso dalla forza vitale del corpo. Riaccende la fiamma creativa."},
  {id:"fes32",name:"Indian Pink",short:"Silene Californiana",color:"#f06070",cat:"fes",funzione:"Pace nel caos, centro nel movimento",disturbo:"Frammentazione sotto pressione",chakra:["c3","c1"],enneatipi:["e3","e7"],desc:"Per rimanere centrati e in pace durante attività intense e caotiche. Aiuta a mantenere il filo interiore tra mille sollecitazioni."},
  {id:"fes33",name:"Iris",short:"Iris",color:"#9060e0",cat:"fes",funzione:"Apertura alla bellezza, ispirazione",disturbo:"Grigiore, mancanza di ispirazione",chakra:["c6","c7"],enneatipi:["e4","e5"],desc:"Apre la percezione alla bellezza archetipica e alla creatività trascendente. Cura il grigiore dell'anima con la visione dell'iris spirituale."},
  {id:"fes34",name:"Lady's Slipper",short:"Scarpetta della Madonna",color:"#e8a0c0",cat:"fes",funzione:"Integrazione di forza spirituale",disturbo:"Nervosismo, energia non radicata",chakra:["c1","c7"],enneatipi:["e5","e4"],desc:"Quando la forza spirituale non è integrata nella vita quotidiana. Radica l'energia superiore nel corpo e nella terra."},
  {id:"fes35",name:"Larkspur",short:"Delfinio",color:"#6080e0",cat:"fes",funzione:"Leadership carismatica altruistica",disturbo:"Leadership autoritaria, egocentrismo",chakra:["c3","c4"],enneatipi:["e8","e3"],desc:"Per i leader che tendono all'autoritarismo. Trasforma il carisma in servizio autentico agli altri."},
  {id:"fes36",name:"Lavender",short:"Lavanda",color:"#c0a0e0",cat:"fes",funzione:"Equilibrio nervoso, spiritualità incarnata",disturbo:"Iperattività nervosa, eccesso spirituale",chakra:["c6","c5"],enneatipi:["e1","e5"],desc:"Per i tipi spirituali che sovraccollano il sistema nervoso. Calma e bilancia senza spegnere la sensibilità."},
  {id:"fes37",name:"Lotus",short:"Loto",color:"#f0c0e0",cat:"fes",funzione:"Sintesi spirituale, apertura cosmica",disturbo:"Separazione spirituale, egotismo spirituale",chakra:["c7","c4"],enneatipi:["e5","e7"],desc:"Il fiore della sintesi spirituale. Apre alla consapevolezza cosmica integrando tutte le esperienze di crescita."},
  {id:"fes38",name:"Love-Lies-Bleeding",short:"Amaranto",color:"#c03060",cat:"fes",funzione:"Accettazione del dolore universale",disturbo:"Dolore personale isolato, vittimismo",chakra:["c4","c7"],enneatipi:["e4","e9"],desc:"Per chi si isola nel proprio dolore. Espande la sofferenza personale alla compassione universale, trovando significato."},
  {id:"fes39",name:"Madia",short:"Madia",color:"#f0c000",cat:"fes",funzione:"Concentrazione, focalizzazione",disturbo:"Distrazione, dispersività",chakra:["c3","c6"],enneatipi:["e7","e5"],desc:"Per recuperare la capacità di concentrarsi su un compito alla volta. Cura la mente dispersiva e saltellante."},
  {id:"fes40",name:"Manzanita",short:"Manzanita",color:"#e86040",cat:"fes",funzione:"Radicamento nel corpo",disturbo:"Rifiuto del corpo, spiritualismo disincarnato",chakra:["c1","c2"],enneatipi:["e5","e1"],desc:"Per chi è molto spirituale ma disconnesso dal corpo. Aiuta ad abbracciare la materialità e il corpo come sacri."},
  {id:"fes41",name:"Mariposa Lily",short:"Giglio Mariposa",color:"#f8f0e0",cat:"fes",funzione:"Nutrimento materno, apertura",disturbo:"Carenza materna, difficoltà di ricevere amore",chakra:["c4","c2"],enneatipi:["e2","e4"],desc:"Per chi non ha ricevuto sufficiente calore materno. Riapre la capacità di ricevere nutrimento e amore."},
  {id:"fes42",name:"Milkweed",short:"Asclépias",color:"#f0e8c0",cat:"fes",funzione:"Autonomia sana, ego forte",disturbo:"Dipendenza estrema, regressione",chakra:["c3","c1"],enneatipi:["e9","e2"],desc:"Per chi ha un ego molto fragile e dipendente. Rafforza l'identità individuale e la capacità di funzionare in autonomia."},
  {id:"fes43",name:"Morning Glory",short:"Convolvolo",color:"#8090f8",cat:"fes",funzione:"Freschezza vitale, ritmo naturale",disturbo:"Abitudini autodistruttive, ritmi caotici",chakra:["c2","c1"],enneatipi:["e7","e5"],desc:"Per dipendenze e ritmi di vita caotici. Ripristina il naturale flusso vitale e la gioia dell'alba e del nuovo giorno."},
  {id:"fes44",name:"Mountain Pennyroyal",short:"Mentuccia Montana",color:"#80c070",cat:"fes",funzione:"Pulizia mentale, pensiero autonomo",disturbo:"Psichismo negativo altrui, pensieri invasivi",chakra:["c6","c5"],enneatipi:["e6","e5"],desc:"Per liberarsi da pensieri e psichismi negativi altrui. Purifica la mente dagli influssi esterni indesiderati."},
  {id:"fes45",name:"Mountain Pride",short:"Penstemon Montana",color:"#d040a0",cat:"fes",funzione:"Forza maschile spirituale, confronto diretto",disturbo:"Arrendevolezza, evitare i conflitti",chakra:["c3","c8"],enneatipi:["e9","e6"],desc:"Per il coraggio di affrontare le sfide sociali e spirituali con forza e determinazione. La forza guerriera al servizio del bene."},
  {id:"fes46",name:"Mugwort",short:"Artemisia",color:"#a0c060",cat:"fes",funzione:"Consapevolezza dei sogni, psiche lunare",disturbo:"Sogni disturbanti, inconsapevolezza psichica",chakra:["c6","c4"],enneatipi:["e4","e5"],desc:"Per integrare la vita onirica nella coscienza diurna. Porta chiarezza nella vita psichica e nei messaggi simbolici dei sogni."},
  {id:"fes47",name:"Mullein",short:"Verbasco",color:"#f0c840",cat:"fes",funzione:"Onestà con sé stessi, voce interiore",disturbo:"Autoingaono, essere sordi alla propria voce",chakra:["c5","c3"],enneatipi:["e3","e1"],desc:"Per chi si è abituato a mentire a sé stesso. Aiuta ad ascoltare la vera voce interiore con onestà e chiarezza."},
  {id:"fes48",name:"Nasturtium",short:"Nasturzio",color:"#f04000",cat:"fes",funzione:"Vitalità incarnata, calore vitale",disturbo:"Esaurimento intellettuale, freddezza vitale",chakra:["c3","c1"],enneatipi:["e5","e3"],desc:"Per chi vive troppo nella testa. Riporta calore e vitalità nel corpo quando l'intelletto ha esaurito le riserve."},
  {id:"fes49",name:"Oregon Grape",short:"Crespino Oregon",color:"#f8e820",cat:"fes",funzione:"Benevolenza, apertura verso gli altri",disturbo:"Paranoia, aspettarsi il peggio dagli altri",chakra:["c3","c4"],enneatipi:["e6","e5"],desc:"Per chi si aspetta ostilità dagli altri per difesa. Apre a fidarsi nella benevolenza fondamentale delle persone."},
  {id:"fes50",name:"Penstemon",short:"Penstemon",color:"#9060d0",cat:"fes",funzione:"Perseveranza, forza interiore",disturbo:"Lamentarsi, vittimismo",chakra:["c3","c1"],enneatipi:["e6","e9"],desc:"Per trovare la forza di andare avanti nonostante le difficoltà. Cura il vittimismo e sviluppa la perseveranza autentica."},
  {id:"fes51",name:"Pink Monkeyflower",short:"Mimolo Rosa",color:"#f080c0",cat:"fes",funzione:"Apertura del cuore, vulnerabilità",disturbo:"Vergogna, paura del rifiuto",chakra:["c4","c2"],enneatipi:["e4","e2"],desc:"Per chi si nasconde per paura del rifiuto e della vergogna. Aiuta a mostrarsi autenticamente rischiando la vulnerabilità."},
  {id:"fes52",name:"Pink Yarrow",short:"Achillea Rosa",color:"#f8c0d0",cat:"fes",funzione:"Amore senza simbiosi",disturbo:"Simbiosi emotiva, assorbire emozioni altrui",chakra:["c4"],enneatipi:["e2","e4"],desc:"Per chi assorbe involontariamente le emozioni degli altri. Mantiene la connessione amorevole con i propri confini intatti."},
  {id:"fes53",name:"Poison Oak",short:"Edera Velenosa",color:"#c0a030",cat:"fes",funzione:"Confini sani, invulnerabilità",disturbo:"Difese rigide, paura del contatto",chakra:["c1","c3"],enneatipi:["e1","e6"],desc:"Per chi si protegge dal contatto emotivo con difese rigide e ostilità. Aiuta a stabilire confini sani restando aperti."},
  {id:"fes54",name:"Pretty Face",short:" Triteleya",color:"#f8f060",cat:"fes",funzione:"Bellezza interiore, autaccettazione",disturbo:"Ossessione per l'aspetto fisico",chakra:["c4","c2"],enneatipi:["e4","e3"],desc:"Per chi non si sente abbastanza bello. Aiuta a riconoscere la bellezza interiore oltre i canoni esterni."},
  {id:"fes55",name:"Purple Monkeyflower",short:"Mimolo Viola",color:"#8040c0",cat:"fes",funzione:"Libertà spirituale, fede autonoma",disturbo:"Paura del soprannaturale, terrore religioso",chakra:["c6","c3"],enneatipi:["e6","e1"],desc:"Per chi è intrappolato da paure e dogmi religiosi. Aiuta a sviluppare una relazione personale e libera con il sacro."},
  {id:"fes56",name:"Quaking Grass",short:"Briza",color:"#a0c840",cat:"fes",funzione:"Armonia di gruppo, io nel noi",disturbo:"Individualismo rigido nel contesto di gruppo",chakra:["c4","c3"],enneatipi:["e3","e9"],desc:"Per trovare il proprio posto armonioso in un gruppo o comunità. Cura sia il conformismo che l'individualismo rigido."},
  {id:"fes57",name:"Queen Anne's Lace",short:"Carota Selvatica",color:"#f8f8f0",cat:"fes",funzione:"Visione psichica equilibrata",disturbo:"Confusione psichica, sessualizzazione della spiritualità",chakra:["c6","c2"],enneatipi:["e7","e4"],desc:"Per integrare la sensibilità psichica senza confonderla con la sessualità. Porta chiarezza alla visione interiore."},
  {id:"fes58",name:"Quince",short:"Cotogno",color:"#f0d040",cat:"fes",funzione:"Forza amorevole, fermezza gentile",disturbo:"Rigidità vs dolcezza, conflitto tra forza e amore",chakra:["c4","c3"],enneatipi:["e2","e8"],desc:"Per bilanciare la forza e la dolcezza nel prendersi cura degli altri. Particolarmente utile per genitori e insegnanti."},
  {id:"fes59",name:"Rabbitbrush",short:"Eriogono",color:"#f0d080",cat:"fes",funzione:"Attenzione ai dettagli e flessibilità",disturbo:"Rigidità mentale, incapacità di adattarsi",chakra:["c3","c6"],enneatipi:["e1","e5"],desc:"Sviluppa la capacità di essere flessibili e attenti ai dettagli allo stesso tempo. Cura la mente rigida e poco adattabile."},
  {id:"fes60",name:"Red Clover",short:"Trifoglio Rosso",color:"#e07080",cat:"fes",funzione:"Calma nel panico collettivo",disturbo:"Isteria di massa, contagio emotivo",chakra:["c3","c1"],enneatipi:["e6","e9"],desc:"Per restare autonomi emotivamente durante il panico collettivo. Aiuta a mantenere la calma quando tutti intorno a noi sono in preda all'isteria."},
  {id:"fes61",name:"Sagebrush",short:"Artemisia Californiana",color:"#a8c870",cat:"fes",funzione:"Purificazione, essenzialità",disturbo:"Attaccamento a identità false",chakra:["c3","c6"],enneatipi:["e5","e9"],desc:"Dissolve le false identificazioni e i condizionamenti accumulati. Porta all'essenziale di chi si è veramente."},
  {id:"fes62",name:"Sage",short:"Salvia",color:"#80a060",cat:"fes",funzione:"Saggezza della vita, visione retrospettiva",disturbo:"Rimpianto, incapacità di trovare senso",chakra:["c7","c6"],enneatipi:["e5","e1"],desc:"Per trovare senso e saggezza nelle esperienze di vita, specialmente nei momenti di revisione della propria storia."},
  {id:"fes63",name:"Saint John's Wort",short:"Iperico",color:"#f8d020",cat:"fes",funzione:"Protezione durante l'espansione cosciente",disturbo:"Paura del buio, sonno disturbato, vulnerabilità psichica",chakra:["c6","c1"],enneatipi:["e4","e6"],desc:"Offre protezione spirituale durante l'espansione della coscienza. Utile per disturbi del sonno e paura del buio."},
  {id:"fes64",name:"Scarlet Monkeyflower",short:"Mimolo Scarlatto",color:"#f02020",cat:"fes",funzione:"Integrazione della rabbia",disturbo:"Repressione della rabbia, paura del potere",chakra:["c3","c1"],enneatipi:["e1","e4"],desc:"Per integrare la rabbia e il potere personale. Aiuta chi ha paura della propria intensità emotiva e aggressività."},
  {id:"fes65",name:"Self-Heal",short:"Prunella",color:"#8060d0",cat:"fes",funzione:"Auto-guarigione, fiducia nella salute",disturbo:"Dipendenza da guaritori esterni",chakra:["c4","c3"],enneatipi:["e9","e6"],desc:"Risveglia la capacità auto-guarigente innata. Per chi cerca sempre la soluzione fuori di sé invece di attivare le proprie risorse."},
  {id:"fes66",name:"Shasta Daisy",short:"Margherita Shasta",color:"#f8f8e8",cat:"fes",funzione:"Sintesi integrata, pensiero olistico",disturbo:"Frammentazione intellettuale, specializzazione eccessiva",chakra:["c6","c3"],enneatipi:["e5","e7"],desc:"Per integrare molte informazioni in una comprensione unificata. Cura la mente che analizza senza mai sintetizzare."},
  {id:"fes67",name:"Shooting Star",short:"Dodecateon",color:"#e060d0",cat:"fes",funzione:"Incarnazione terrestre, scopo cosmico",disturbo:"Alienazione dal pianeta terra, senso di non appartenere",chakra:["c1","c7"],enneatipi:["e4","e5"],desc:"Per le anime che faticano a sentirsi a casa sulla Terra. Aiuta a trovare lo scopo cosmico del proprio incarnarsi qui."},
  {id:"fes68",name:"Snapdragon",short:"Bocca di Leone",color:"#f04030",cat:"fes",funzione:"Libido creativa, comunicazione assertiva",disturbo:"Aggressività verbale, sarcasmo, mordacità",chakra:["c5","c3"],enneatipi:["e8","e1"],desc:"Trasforma l'aggressività verbale e il sarcasmo in comunicazione assertiva e creativa. Cura il morso della parola."},
  {id:"fes69",name:"Star Thistle",short:"Centaurea Stellata",color:"#f8d040",cat:"fes",funzione:"Generosità, abbondanza",disturbo:"Avarizia per paura della scarsità",chakra:["c3","c4"],enneatipi:["e5","e1"],desc:"Per chi è avaro per paura che non ci sia abbastanza. Apre alla generosità fondata sulla fiducia nell'abbondanza della vita."},
  {id:"fes70",name:"Star Tulip",short:"Tulipano Stellare",color:"#e8d0f0",cat:"fes",funzione:"Ricezione spirituale, sensibilità",disturbo:"Chiusura alla percezione interiore",chakra:["c7","c6"],enneatipi:["e5","e9"],desc:"Sviluppa la sensibilità e la ricettività alle impressioni sottili. Per chi vuole aprirsi alla meditazione e alla vita interiore."},
  {id:"fes71",name:"Sticky Monkeyflower",short:"Mimolo Appiccicoso",color:"#f06020",cat:"fes",funzione:"Intimità sessuale integrata",disturbo:"Paura dell'intimità, sessualità scissa dall'amore",chakra:["c2","c4"],enneatipi:["e3","e5"],desc:"Per integrare sessualità e amore quando sono stati separati. Aiuta a vivere l'intimità fisica con apertura del cuore."},
  {id:"fes72",name:"Sunflower",short:"Girasole",color:"#f8c800",cat:"fes",funzione:"Sé solare equilibrato",disturbo:"Egotismo vs deflazione dell'ego",chakra:["c3","c7"],enneatipi:["e3","e8"],desc:"Bilancia l'ego tra grandiosità e deflazione. Coltiva il sé solare luminoso che risplende senza dominare."},
  {id:"fes73",name:"Sweet Pea",short:"Pisello Odoroso",color:"#f0b0d0",cat:"fes",funzione:"Appartenenza, comunità",disturbo:"Vagabondaggio, incapacità di creare casa",chakra:["c1","c4"],enneatipi:["e7","e3"],desc:"Per chi non riesce a creare un senso di casa e appartenenza. Aiuta a radicarsi in una comunità e in un luogo."},
  {id:"fes74",name:"Tansy",short:"Tanaceto",color:"#f0d020",cat:"fes",funzione:"Decisione, azione diretta",disturbo:"Procrastinazione, letargia",chakra:["c3"],enneatipi:["e9","e6"],desc:"Per la procrastinazione e la difficoltà a prendere decisioni. Trasforma la tendenza a ritardare in azione determinata."},
  {id:"fes75",name:"Tiger Lily",short:"Giglio Tigre",color:"#f06000",cat:"fes",funzione:"Cooperazione, armonia con l'altro sesso",disturbo:"Ostilità verso il sesso opposto, ipercompetitività",chakra:["c3","c4"],enneatipi:["e8","e6"],desc:"Trasforma l'aggressività verso l'altro sesso in cooperazione armoniosa. Cura la rigidità di genere e la competizione."},
  {id:"fes76",name:"Trillium",short:"Trillo",color:"#e0c0e0",cat:"fes",funzione:"Altruismo, distacco dal potere",disturbo:"Avidità, lotta per il potere e lo status",chakra:["c1","c3"],enneatipi:["e3","e8"],desc:"Per chi è eccessivamente orientato all'accumulo di potere e ricchezza. Riporta al senso del servizio e dell'essenziale."},
  {id:"fes77",name:"Trumpet Vine",short:"Trombettiera",color:"#f04018",cat:"fes",funzione:"Comunicazione vivace, espressione dinamica",disturbo:"Difficoltà di espressione, voce debole",chakra:["c5","c3"],enneatipi:["e9","e5"],desc:"Per chi ha difficoltà a esprimersi con vivacità e forza. Rafforza la voce e la capacità di comunicare con impatto."},
  {id:"fes78",name:"Violet",short:"Violetta",color:"#c090e0",cat:"fes",funzione:"Individuation nel gruppo, riservatezza sana",disturbo:"Timidezza estrema, paura di perdersi nel gruppo",chakra:["c4","c5"],enneatipi:["e5","e4"],desc:"Per le anime delicate e riservate che temono di perdersi nel gruppo. Permette di condividere la propria unicità con grazia."},
  {id:"fes79",name:"White Yarrow",short:"Achillea Bianca",color:"#f8f8f8",cat:"fes",funzione:"Protezione psichica, confini energetici",disturbo:"Vulnerabilità ambientale, assorbire energie esterne",chakra:["c4","c7"],enneatipi:["e6","e4"],desc:"Crea un campo protettivo intorno all'aura. Per chi è molto sensibile all'ambiente e assorbe energie esterne indesiderate."},
  {id:"fes80",name:"Yerba Santa",short:"Erba Santa",color:"#d0c0f0",cat:"fes",funzione:"Liberazione del dolore interiore",disturbo:"Dolore represso nel petto, malinconia",chakra:["c4","c5"],enneatipi:["e4","e9"],desc:"Per il dolore incapsulato nel petto che non riesce a uscire. Libera la tristezza e la malinconia represse permettendo la vera guarigione."},
  {id:"fes81",name:"Yellow Star Tulip",short:"Tulipano Stellare Giallo",color:"#f8f040",cat:"fes",funzione:"Empatia, sensibilità agli altri",disturbo:"Chiusura alle sofferenze altrui",chakra:["c4","c6"],enneatipi:["e2","e4"],desc:"Sviluppa la capacità di sentire e rispondere alle emozioni degli altri. Cura il disinteresse verso le sofferenze altrui."},
  {id:"fes82",name:"Zinnia",short:"Zinnia",color:"#f04080",cat:"fes",funzione:"Gioia, leggerezza, humor",disturbo:"Eccessiva serietà, dimenticanza della gioia",chakra:["c3","c4"],enneatipi:["e1","e3"],desc:"Risveglia la leggerezza, il gioco e la gioia di vivere. Per chi è diventato troppo serio e ha dimenticato di ridere."},
  {id:"fes83",name:"Calla Lily",short:"Calla",color:"#f8f8f0",cat:"fes",funzione:"Chiarezza sessuale, integrazione del genere",disturbo:"Confusione sull'identità sessuale",chakra:["c2","c1"],enneatipi:["e4","e3"],desc:"Per la confusione sull'identità di genere e la sessualità. Porta chiarezza e accettazione nella propria natura sessuale."},
  {id:"fes84",name:"Corn",short:"Mais",color:"#f8e840",cat:"fes",funzione:"Radicamento urbano, connessione con la terra",disturbo:"Alienazione dalla natura in città",chakra:["c1","c3"],enneatipi:["e3","e7"],desc:"Per chi vive in città e ha perso il contatto con la terra. Aiuta a trovare radicamento anche negli ambienti urbani."},
  {id:"fes85",name:"Easter Lily",short:"Giglio di Pasqua",color:"#f8f8f0",cat:"fes",funzione:"Purezza sessuale integrata",disturbo:"Conflitto tra sessualità e purezza spirituale",chakra:["c2","c4"],enneatipi:["e1","e4"],desc:"Per integrare la sessualità con la purezza spirituale. Cura il conflitto tra corpo e anima nell'area della sessualità."},
  {id:"fes86",name:"Evening Primrose",short:"Enotera",color:"#f8f040",cat:"fes",funzione:"Apertura alla vita, fiducia",disturbo:"Rifiuto dei propri bisogni, trauma del concepimento",chakra:["c2","c4"],enneatipi:["e4","e2"],desc:"Per i traumi avvenuti in grembo o nei primissimi mesi di vita. Porta guarigione al senso fondamentale di non essere voluti."},
  {id:"fes87",name:"Hibiscus",short:"Ibisco",color:"#f04060",cat:"fes",funzione:"Calore sessuale, ricettività",disturbo:"Freddezza sessuale, traumi",chakra:["c2","c1"],enneatipi:["e2","e4"],desc:"Risveglia il calore e la ricettività sessuale in chi ha subito traumi. Reintegra la sessualità come espressione gioiosa dell'anima."},
  {id:"fes88",name:"Larch",short:"Larice",color:"#d0a060",cat:"fes",funzione:"Autostima, fiducia creativa",disturbo:"Paura del fallimento, blocco creativo",chakra:["c3","c5"],enneatipi:["e3","e6"],desc:"Cura la paura di fallire che blocca l'espressione creativa. Sviluppa la fiducia in sé e la volontà di rischiare."},
  {id:"fes89",name:"Olive",short:"Olivo",color:"#a0b060",cat:"fes",funzione:"Rinnovo delle forze vitali",disturbo:"Esaurimento totale, stanchezza profonda",chakra:["c4","c1"],enneatipi:["e1","e3"],desc:"Per l'esaurimento totale, fisico e mentale. Ripristina le riserve di energia vitale dopo lunghi periodi di sforzo."},
  {id:"fes90",name:"Pomegranate",short:"Melograno",color:"#e04030",cat:"fes",funzione:"Creatività femminile, maternità",disturbo:"Conflitto tra carriera e maternità",chakra:["c2","c3"],enneatipi:["e2","e3"],desc:"Per le donne che vivono il conflitto tra realizzazione professionale e istinto materno. Integra entrambe le polarità."},
  {id:"fes91",name:"Rosemary",short:"Rosmarino",color:"#8090d0",cat:"fes",funzione:"Presenza nel corpo, memoria incarnata",disturbo:"Dimenticanza, fluttuazione fuori dal corpo",chakra:["c1","c6"],enneatipi:["e5","e9"],desc:"Per chi è spesso 'fuori' dal proprio corpo. Rafforza la presenza incarnata e la memoria come esperienza fisica."},
  {id:"fes92",name:"Walnut",short:"Noce",color:"#a06020",cat:"fes",funzione:"Transizioni, libertà dai condizionamenti",disturbo:"Difficoltà nel cambiare, influenza esterna",chakra:["c3","c1"],enneatipi:["e1","e9"],desc:"Protegge durante le grandi transizioni della vita. Aiuta a liberarsi dalle influenze esterne durante i cambiamenti."},
  {id:"fes93",name:"Dandelion",short:"Dente di Leone",color:"#f8d020",cat:"fes",funzione:"Rilascio delle tensioni corporee",disturbo:"Tensione muscolare cronica, stress somatizzato",chakra:["c3","c1"],enneatipi:["e1","e3"],desc:"Per liberare le tensioni croniche nel corpo causate dallo stress. Scioglie l'armatura muscolare e psichica accumulata."},
  {id:"fes94",name:"Calendula",short:"Calendula",color:"#f0a000",cat:"fes",funzione:"Comunicazione calda, ascolto",disturbo:"Parole taglienti, mancanza di calore nel dialogo",chakra:["c5","c4"],enneatipi:["e1","e8"],desc:"Per chi usa le parole in modo ferito o ferendo. Porta calore e guarigione alla comunicazione verbale."},
  {id:"fes95",name:"Nicotiana",short:"Nicotiana",color:"#f0f0e0",cat:"fes",funzione:"Pace profonda, connessione alla terra",disturbo:"Pace artificiale, dipendenza dalla nicotina",chakra:["c1","c4"],enneatipi:["e9","e3"],desc:"Per dipendenze che cercano pace artificiale. Aiuta a trovare la vera pace nella connessione con la terra e il corpo."},
  {id:"fes96",name:"Peppermint",short:"Menta Piperita",color:"#c0e8c0",cat:"fes",funzione:"Vigilanza mentale, freschezza",disturbo:"Apatia mentale, stanchezza cognitiva",chakra:["c6","c3"],enneatipi:["e5","e3"],desc:"Per la stanchezza mentale e la difficoltà a concentrarsi. Porta freschezza e vivacità al pensiero."},
  {id:"fes97",name:"Squash",short:"Zucca",color:"#f06820",cat:"fes",funzione:"Creatività dalla paura",disturbo:"Blocco creativo da paura",chakra:["c2","c3"],enneatipi:["e4","e6"],desc:"Per sbloccare la creatività che è stata bloccata dalla paura. Trasforma l'ansia creativa in libera espressione."},
  {id:"fes98",name:"Trumpet Lily",short:"Giglio Tromba",color:"#f8e8a0",cat:"fes",funzione:"Ricettività all'ispirazione",disturbo:"Chiusura all'ispirazione",chakra:["c5","c7"],enneatipi:["e5","e4"],desc:"Per aprirsi all'ispirazione e ai messaggi dell'anima. Sviluppa la ricettività alle intuizioni e alla creatività."},
  {id:"fes99",name:"Sweet Pea",short:"Pisello Odoroso",color:"#f0b0c0",cat:"fes",funzione:"Radici spirituali, comunità",disturbo:"Senza radici, nomadismo spirituale",chakra:["c4","c1"],enneatipi:["e7","e4"],desc:"Aiuta a trovare comunità e appartenenza spirituale. Per chi si sente sempre straniero ovunque vada."},
  {id:"fes100",name:"Wild Oat",short:"Avena Selvatica",color:"#d0c070",cat:"fes",funzione:"Scopo di vita, vocazione",disturbo:"Incertezza sulla propria missione",chakra:["c3","c5"],enneatipi:["e9","e7"],desc:"Per chi non riesce a trovare la propria vocazione o scopo di vita. Aiuta a identificare il percorso autentico."}
],
bush:[
  {id:"bush1",name:"Banksia Robur",short:"Banksia",color:"#c87820",cat:"bush",funzione:"Entusiasmo e slancio vitale",disturbo:"Frustrazione, esaurimento degli interessi",chakra:["c3","c1"],enneatipi:["e9","e5"],desc:"Per chi è frustrato e ha perso l'entusiasmo e l'energia per i propri interessi. Ripristina lo slancio vitale."},
  {id:"bush2",name:"Billy Goat Plum",short:"Billy Goat",color:"#d0a840",cat:"bush",funzione:"Accettazione del corpo e della sessualità",disturbo:"Disgusto per il corpo, vergogna sessuale",chakra:["c2","c1"],enneatipi:["e1","e4"],desc:"Per il senso di vergogna fisica e sessuale. Porta accettazione e piacere nell'essere incarnati."},
  {id:"bush3",name:"Black-Eyed Susan",short:"Susan Occhi Neri",color:"#f06000",cat:"bush",funzione:"Lentezza interiore, presenza",disturbo:"Fretta, impazienza, incapacità di fermarsi",chakra:["c3"],enneatipi:["e3","e7"],desc:"Per chi è sempre di fretta e non riesce a rallentare. Cura l'impazienza e la difficoltà a stare nel momento presente."},
  {id:"bush4",name:"Bluebell",short:"Campanella Blu",color:"#6080f0",cat:"bush",funzione:"Apertura del cuore, condivisione",disturbo:"Chiusura emotiva, paura della perdita",chakra:["c4"],enneatipi:["e5","e1"],desc:"Per aprire il cuore alla gioia e alla condivisione. Cura la chiusura emotiva causata dalla paura di perdere."},
  {id:"bush5",name:"Boab",short:"Boab",color:"#a07040",cat:"bush",funzione:"Liberazione da pattern familiari",disturbo:"Schemi familiari negativi ereditati",chakra:["c1","c3"],enneatipi:["e6","e9"],desc:"Per liberarsi dalle credenze e dai pattern negativi trasmessi di generazione in generazione nella famiglia."},
  {id:"bush6",name:"Boronia",short:"Boronia",color:"#e060e0",cat:"bush",funzione:"Chiarezza mentale, rilascio delle ossessioni",disturbo:"Pensieri ossessivi, mente incatenata",chakra:["c6","c4"],enneatipi:["e1","e6"],desc:"Per liberare la mente dai pensieri ossessivi e dalle idee fisse. Porta chiarezza e pace mentale."},
  {id:"bush7",name:"Bottlebrush",short:"Callistemon",color:"#e04000",cat:"bush",funzione:"Transizioni della vita, lasciar andare",disturbo:"Difficoltà nelle transizioni, attaccamento al passato",chakra:["c1","c4"],enneatipi:["e2","e9"],desc:"Per i grandi cambiamenti della vita. Aiuta a lasciare andare il passato e ad abbracciare il nuovo."},
  {id:"bush8",name:"Bush Fuchsia",short:"Fucsia Bush",color:"#f04080",cat:"bush",funzione:"Intuizione, fiducia in sé",disturbo:"Ignorare la propria voce interiore",chakra:["c6","c5"],enneatipi:["e5","e6"],desc:"Sviluppa la fiducia nell'intuizione e nei propri giudizi. Per chi ignora i messaggi del proprio istinto."},
  {id:"bush9",name:"Bush Gardenia",short:"Gardenia Bush",color:"#f8f0d0",cat:"bush",funzione:"Rinnovare le relazioni, interesse per il partner",disturbo:"Prendere per scontato il partner, distanza nel rapporto",chakra:["c4","c2"],enneatipi:["e9","e3"],desc:"Per rinnovare l'interesse e la passione nelle relazioni. Cura il senso di scontato e la distanza emotiva nel rapporto."},
  {id:"bush10",name:"Bush Iris",short:"Iris Bush",color:"#8060c0",cat:"bush",funzione:"Apertura spirituale, fede",disturbo:"Paura della morte, materialismo",chakra:["c7","c1"],enneatipi:["e5","e3"],desc:"Apre alla dimensione spirituale dell'esistenza. Cura il materialismo e la paura di ciò che va oltre il visibile."},
  {id:"bush11",name:"Christmas Bell",short:"Campanella di Natale",color:"#f8c000",cat:"bush",funzione:"Abbondanza, ricevere i doni della vita",disturbo:"Povertà di coscienza, difficoltà a ricevere",chakra:["c3","c2"],enneatipi:["e9","e2"],desc:"Per aprirsi all'abbondanza della vita e alla capacità di ricevere. Cura la mentalità di scarsità."},
  {id:"bush12",name:"Crowea",short:"Crowea",color:"#e060c0",cat:"bush",funzione:"Pace e benessere, fiducia",disturbo:"Preoccupazione, ansia, tensione",chakra:["c3","c4"],enneatipi:["e6","e1"],desc:"L'essenza della pace e del benessere. Scioglie la preoccupazione cronica e porta equilibrio e armonia profonda."},
  {id:"bush13",name:"Dagger Hakea",short:"Hakea Pugnale",color:"#f0d060",cat:"bush",funzione:"Perdono, rilascio del rancore",disturbo:"Rancore verso persone care",chakra:["c4","c3"],enneatipi:["e1","e4"],desc:"Per rilasciare il rancore verso le persone care (famiglia, amici intimi). Porta alla vera comprensione e al perdono."},
  {id:"bush14",name:"Dog Rose",short:"Rosa Canina Bush",color:"#f8c0b0",cat:"bush",funzione:"Coraggio, fiducia in sé",disturbo:"Timidezza, paure quotidiane, insicurezza",chakra:["c3","c1"],enneatipi:["e6","e2"],desc:"Per le paure quotidiane e la timidezza di fondo. Sviluppa il coraggio e la fiducia in sé nelle situazioni normali."},
  {id:"bush15",name:"Dog Rose Wild Forces",short:"Rosa Canina Forze Selvagge",color:"#f04060",cat:"bush",funzione:"Stabilità di fronte al caos",disturbo:"Panico, perdita di controllo, forze incontrollabili",chakra:["c1","c3"],enneatipi:["e6","e8"],desc:"Per panico e terrore di fronte a forze incontrollabili, interne o esterne. Ristabilisce la centratura."},
  {id:"bush16",name:"Five Corners",short:"Cinque Angoli",color:"#f8d0e0",cat:"bush",funzione:"Autostima e celebrazione di sé",disturbo:"Mancanza di rispetto di sé, vestirsi male",chakra:["c4","c3"],enneatipi:["e4","e6"],desc:"Per la bassa autostima e il non prendersi cura di sé. Porta al rispetto e alla celebrazione della propria unicità."},
  {id:"bush17",name:"Flannel Flower",short:"Fiore Flanella",color:"#f8f8f0",cat:"bush",funzione:"Gioia nel toccare e nell'essere toccati",disturbo:"Disagio con il contatto fisico, limiti nel tocco",chakra:["c4","c2"],enneatipi:["e5","e1"],desc:"Per chi ha difficoltà con il contatto fisico e l'intimità corporea. Porta gioia e facilità nel toccare e nell'essere toccati."},
  {id:"bush18",name:"Fringed Violet",short:"Violetta Frangiata",color:"#e070c0",cat:"bush",funzione:"Protezione dell'aura, ripristino dei confini",disturbo:"Aura danneggiata, vulnerabilità psichica",chakra:["c4","c7"],enneatipi:["e6","e4"],desc:"Ripara i danni all'aura causati da traumi, shock o chirurgia. Ristabilisce i confini energetici e protegge il campo aurico."},
  {id:"bush19",name:"Green Essence",short:"Essenza Verde",color:"#60a040",cat:"bush",funzione:"Armonizzazione con le essenze botaniche",disturbo:"Disarmonia con il regno vegetale",chakra:["c4","c1"],enneatipi:["e9","e2"],desc:"Usata per armonizzarsi con le essenze floreali. Aiuta l'organismo ad adattarsi alle vibrazioni delle essenze fioreali."},
  {id:"bush20",name:"Green Spider Orchid",short:"Orchidea Ragno Verde",color:"#50a060",cat:"bush",funzione:"Telepatia, connessione con la natura",disturbo:"Separazione dalla rete della vita",chakra:["c6","c4"],enneatipi:["e5","e4"],desc:"Per sviluppare la sensibilità telepatica e la connessione profonda con la natura e gli esseri viventi."},
  {id:"bush21",name:"Grey Spider Flower",short:"Fiore Ragno Grigio",color:"#c0c0d0",cat:"bush",funzione:"Calma in caso di terrore",disturbo:"Terrore e panico estremi, incubi",chakra:["c1","c6"],enneatipi:["e6","e4"],desc:"Per il terrore e il panico assoluti, anche notturni. Porta fede e calma di fronte alle paure più profonde."},
  {id:"bush22",name:"Gymea Lily",short:"Giglio Gymea",color:"#e02020",cat:"bush",funzione:"Umiltà, servizio agli altri",disturbo:"Arroganza, desiderio di dominio",chakra:["c3","c7"],enneatipi:["e8","e3"],desc:"Per le personalità forti e carismatiche che tendono all'arroganza. Trasforma il bisogno di dominio in servizio umile."},
  {id:"bush23",name:"Hibbertia",short:"Hibbertia",color:"#f0c000",cat:"bush",funzione:"Conoscenza interiore vs accumulo esterno",disturbo:"Studio compulsivo, fanatismo dell'apprendimento",chakra:["c3","c6"],enneatipi:["e5","e1"],desc:"Per chi accumula conoscenza compulsivamente senza applicarla. Aiuta a passare dalla teoria alla vita."},
  {id:"bush24",name:"Illawarra Flame Tree",short:"Albero della Fiamma",color:"#e02000",cat:"bush",funzione:"Approvazione di sé, indipendenza dall'apprezzamento",disturbo:"Paura del rifiuto, senso di esclusione",chakra:["c4","c3"],enneatipi:["e2","e4"],desc:"Per il profondo senso di rifiuto e di esclusione. Aiuta a trovare approvazione dentro sé stessi invece che fuori."},
  {id:"bush25",name:"Isopogon",short:"Isopogon",color:"#f0d080",cat:"bush",funzione:"Apprendere dal passato, memoria del cuore",disturbo:"Rigidità, difficoltà a imparare dalle esperienze",chakra:["c4","c6"],enneatipi:["e1","e5"],desc:"Per imparare dagli errori passati con saggezza del cuore, non dell'intelletto. Cura la rigidità che impedisce la crescita."},
  {id:"bush26",name:"Jacaranda",short:"Jacaranda",color:"#c080e0",cat:"bush",funzione:"Decisione e focalizzazione",disturbo:"Dispersività, cambiare continuamente direzione",chakra:["c3","c6"],enneatipi:["e7","e9"],desc:"Per chi cambia continuamente attività senza completarne nessuna. Porta focalizzazione e capacità di portare a termine."},
  {id:"bush27",name:"Kangaroo Paw",short:"Zampa di Canguro",color:"#f04030",cat:"bush",funzione:"Sensibilità sociale, grazia interpersonale",disturbo:"Goffaggine sociale, insensibilità agli altri",chakra:["c4","c3"],enneatipi:["e3","e8"],desc:"Per chi è socialmente goffo e insensibile ai bisogni altrui. Sviluppa la sensibilità e la grazia nelle interazioni."},
  {id:"bush28",name:"Kapok Bush",short:"Kapok Bush",color:"#f8e0a0",cat:"bush",funzione:"Perseveranza, non arrendersi",disturbo:"Rassegnazione, 'non vale la pena provare'",chakra:["c3"],enneatipi:["e9","e6"],desc:"Per la tendenza ad arrendersi di fronte alle difficoltà. Riaccende la perseveranza e la fede nei propri sforzi."},
  {id:"bush29",name:"Little Flannel Flower",short:"Piccolo Fiore Flanella",color:"#f8f0e8",cat:"bush",funzione:"Leggerezza, gioco, spontaneità del bambino",disturbo:"Bambino che ha perso la spensieratezza",chakra:["c4","c2"],enneatipi:["e1","e3"],desc:"Per i bambini troppo seri o per l'adulto che ha dimenticato il bambino interiore. Porta leggerezza e gioco."},
  {id:"bush30",name:"Macrocarpa",short:"Macrocarpa",color:"#f8c060",cat:"bush",funzione:"Energie fisiche rinnovate, entusiasmo",disturbo:"Esaurimento fisico, burn-out",chakra:["c1","c3"],enneatipi:["e1","e3"],desc:"Per il vero esaurimento fisico e l'esdaurimento da burnout. Ripristina l'energia e l'entusiasmo fondamentali."},
  {id:"bush31",name:"Mint Bush",short:"Cespuglio di Menta",color:"#a0d090",cat:"bush",funzione:"Chiarezza nel tumulto, purificazione spirituale",disturbo:"Tumulto interiore, confusione nel percorso spirituale",chakra:["c6","c3"],enneatipi:["e4","e6"],desc:"Per chi attraversa una crisi spirituale o un periodo di grande confusione interiore. Porta chiarezza nel caos."},
  {id:"bush32",name:"Mountain Devil",short:"Diavolo della Montagna",color:"#e03020",cat:"bush",funzione:"Amore incondizionato, perdono profondo",disturbo:"Odio, rabbia, sospetto",chakra:["c4","c3"],enneatipi:["e8","e4"],desc:"Per rabbia, odio e sospetti profondi. Trasforma queste emozioni in amore incondizionato e comprensione."},
  {id:"bush33",name:"Mulla Mulla",short:"Mulla Mulla",color:"#f08080",cat:"bush",funzione:"Comfort con il calore e il fuoco",disturbo:"Paura del calore, del fuoco, delle radiazioni",chakra:["c1","c3"],enneatipi:["e6","e5"],desc:"Per la paura del calore, del fuoco e delle radiazioni. Utile dopo esposizione a calore intenso o trattamenti radiologici."},
  {id:"bush34",name:"Old Man Banksia",short:"Vecchio Banksia",color:"#e08020",cat:"bush",funzione:"Rinnovamento dell'entusiasmo",disturbo:"Stanchezza cronica, lentezza",chakra:["c1","c3"],enneatipi:["e9","e5"],desc:"Per chi è cronicamente stanco e si muove lentamente. Rinvigorisce l'entusiasmo e la prontezza di risposta."},
  {id:"bush35",name:"Paw Paw",short:"Papaia Bush",color:"#f0c060",cat:"bush",funzione:"Assimilazione di nuove informazioni",disturbo:"Sopraffazione da nuovi problemi, incapacità di scegliere",chakra:["c3","c6"],enneatipi:["e6","e5"],desc:"Per quando ci si sente sopraffatti da nuove informazioni o problemi. Aiuta ad accedere alla saggezza superiore del sé."},
  {id:"bush36",name:"Peach-Flowered Tea-Tree",short:"Albero del Tè a Fiori di Pesca",color:"#f0c0a0",cat:"bush",funzione:"Stabilità emotiva, costanza",disturbo:"Umore ballerino, ipocondria",chakra:["c2","c3"],enneatipi:["e4","e7"],desc:"Per i cambiamenti di umore imprevedibili e l'ipocondria. Porta equilibrio emotivo e costanza nel benessere."},
  {id:"bush37",name:"Philotheca",short:"Philotheca",color:"#f0e0f0",cat:"bush",funzione:"Ricevere apprezzamento, generosità bilanciata",disturbo:"Incapacità di ricevere lodi, eccessiva generosità",chakra:["c4","c3"],enneatipi:["e2","e1"],desc:"Per chi dà continuamente senza riuscire a ricevere. Aiuta ad accettare con grazia i complimenti e il nutrimento degli altri."},
  {id:"bush38",name:"Pink Flannel Flower",short:"Fiore Flanella Rosa",color:"#f8c0d0",cat:"bush",funzione:"Gratitudine, apprezzamento per la vita",disturbo:"Incapacità di apprezzare, prendere per scontato",chakra:["c4"],enneatipi:["e9","e2"],desc:"Per aprirsi alla gratitudine e all'apprezzamento per i doni della vita. Cura l'ingratitudine e il senso di scontato."},
  {id:"bush39",name:"Pink Mulla Mulla",short:"Rosa Mulla Mulla",color:"#f090b0",cat:"bush",funzione:"Fiducia profonda, apertura del cuore",disturbo:"Sfiducia profonda, isolamento nel dolore",chakra:["c4","c1"],enneatipi:["e5","e6"],desc:"Per chi porta una ferita di abbandono molto antica. Scioglie l'isolamento emotivo profondo e riapre alla fiducia."},
  {id:"bush40",name:"Rough Bluebell",short:"Campanella Ruvida",color:"#8070e0",cat:"bush",funzione:"Espressione amorevole, liberare la compassione",disturbo:"Manipolazione deliberata, crudeltà",chakra:["c4","c5"],enneatipi:["e8","e3"],desc:"Per liberare la compassione in chi tende alla manipolazione o alla crudeltà. Porta a esprimere il potenziale amorevole."},
  {id:"bush41",name:"Red Grevillea",short:"Grevillea Rossa",color:"#e03040",cat:"bush",funzione:"Indipendenza, osare il cambiamento",disturbo:"Dipendenza dagli altri, bloccati dall'opinione altrui",chakra:["c3","c1"],enneatipi:["e2","e6"],desc:"Per chi è troppo dipendente dall'approvazione altrui per muoversi. Sviluppa l'indipendenza e il coraggio di scegliere."},
  {id:"bush42",name:"Red Helmet Orchid",short:"Orchidea Elmo Rosso",color:"#c02020",cat:"bush",funzione:"Relazione padre-figlio, rispetto dell'autorità",disturbo:"Ribellione, difficoltà con figure di autorità",chakra:["c1","c3"],enneatipi:["e8","e6"],desc:"Per le difficoltà nelle relazioni con figure di autorità, specialmente il padre. Porta comprensione e rispetto sani."},
  {id:"bush43",name:"Red Lily",short:"Giglio Rosso",color:"#e02030",cat:"bush",funzione:"Presenza nel momento, radicamento spirituale",disturbo:"Daydreaming, alienazione dalla realtà",chakra:["c7","c1"],enneatipi:["e4","e9"],desc:"Per chi è spirituale ma disconnesso dalla realtà quotidiana. Ancora la coscienza spirituale nel momento presente."},
  {id:"bush44",name:"Red Suva Frangipani",short:"Frangipani Rosso",color:"#f04070",cat:"bush",funzione:"Forza nelle crisi emotive, pace",disturbo:"Tumulto emotivo acuto, crisi nelle relazioni",chakra:["c4","c3"],enneatipi:["e4","e2"],desc:"Per i momenti di crisi emotiva intensa nelle relazioni. Porta calma e forza interiore durante le tempeste del cuore."},
  {id:"bush45",name:"She Oak",short:"Quercia Australiana",color:"#d0a040",cat:"bush",funzione:"Equilibrio ormonale femminile",disturbo:"Squilibri ormonali femminili, disidratazione",chakra:["c2","c1"],enneatipi:["e2","e4"],desc:"Per gli squilibri ormonali femminili e la disidratazione a livello cellulare. Armonizza il ciclo lunare della donna."},
  {id:"bush46",name:"Silver Princess",short:"Principessa d'Argento",color:"#e0e8f0",cat:"bush",funzione:"Direzione di vita, motivazione",disturbo:"Senso di deriva, senza meta chiara",chakra:["c3","c7"],enneatipi:["e9","e4"],desc:"Per chi non sa dove sta andando o ha perso il senso di direzione. Aiuta a scoprire il proprio scopo di vita."},
  {id:"bush47",name:"Slender Rice Flower",short:"Riso Fiore Esile",color:"#f8f0f8",cat:"bush",funzione:"Umiltà, cooperazione nel gruppo",disturbo:"Razzismo, pregiudizi, arroganza di gruppo",chakra:["c4","c3"],enneatipi:["e8","e1"],desc:"Per superare i pregiudizi e il razzismo. Porta umiltà e capacità di cooperare con persone diverse da noi."},
  {id:"bush48",name:"Southern Cross",short:"Croce del Sud",color:"#f8f0d0",cat:"bush",funzione:"Responsabilità personale, uscire dal vittimismo",disturbo:"Vittimismo, povertà di coscienza",chakra:["c3"],enneatipi:["e2","e9"],desc:"Per trasformare il senso di vittima e la povertà di coscienza. Porta la comprensione che siamo co-creatori della nostra realtà."},
  {id:"bush49",name:"Spinifex",short:"Spinifex",color:"#c0d060",cat:"bush",funzione:"Guarigione delle infezioni, responsabilità della salute",disturbo:"Senso di impotenza davanti alla malattia",chakra:["c1","c2"],enneatipi:["e4","e6"],desc:"Per il senso di impotenza di fronte alla malattia. Porta comprensione del messaggio della malattia e attiva l'auto-guarigione."},
  {id:"bush50",name:"Sturt Desert Pea",short:"Pisello del Deserto",color:"#e01020",cat:"bush",funzione:"Liberazione dal dolore profondo",disturbo:"Dolore profondo del cuore, tristezza non elaborata",chakra:["c4","c1"],enneatipi:["e4","e9"],desc:"Per il dolore più profondo del cuore. Libera il dolore incapsulato che non si è mai riusciti ad elaborare o esprimere."},
  {id:"bush51",name:"Sturt Desert Rose",short:"Rosa del Deserto",color:"#d04060",cat:"bush",funzione:"Integrità, seguire la propria coscienza",disturbo:"Senso di colpa, rimpianto, compromessi con la coscienza",chakra:["c3","c4"],enneatipi:["e1","e6"],desc:"Per liberarsi dal senso di colpa e dal rimpianto. Aiuta a vivere con integrità seguendo la propria coscienza."},
  {id:"bush52",name:"Sundew",short:"Drosera",color:"#f04040",cat:"bush",funzione:"Radicamento, presenza concreta",disturbo:"Dissociazione, disconnessione dalla realtà",chakra:["c1","c3"],enneatipi:["e4","e9"],desc:"Per chi tende a disconnettersi e a 'non essere presente'. Porta nella realtà concreta del qui e ora."},
  {id:"bush53",name:"Sunshine Wattle",short:"Acacia del Sole",color:"#f8d020",cat:"bush",funzione:"Ottimismo, fiducia nel futuro",disturbo:"Pessimismo, aspettarsi solo difficoltà",chakra:["c3","c4"],enneatipi:["e9","e6"],desc:"Per il pessimismo cronico e l'incapacità di vedere un futuro positivo. Porta speranza e apertura alle possibilità."},
  {id:"bush54",name:"Sydney Rose",short:"Rosa di Sydney",color:"#f0c0d8",cat:"bush",funzione:"Pace e unità, sentirsi parte del tutto",disturbo:"Senso di separazione, solitudine esistenziale",chakra:["c4","c7"],enneatipi:["e5","e4"],desc:"Per il senso profondo di separazione e solitudine. Porta la comprensione dell'unità fondamentale di tutto l'essere."},
  {id:"bush55",name:"Tall Yellow Top",short:"Sommità Gialla Alta",color:"#f8e040",cat:"bush",funzione:"Senso di appartenenza, identità",disturbo:"Alienazione, non sentirsi mai a casa",chakra:["c1","c4"],enneatipi:["e4","e5"],desc:"Per chi si sente alieno e senza radici. Aiuta a ritrovare il senso di appartenenza e di casa nel mondo."},
  {id:"bush56",name:"Turkey Bush",short:"Cespuglio di Tacchino",color:"#e08040",cat:"bush",funzione:"Creatività rinnovata, ispirazione artistica",disturbo:"Blocco creativo, senso di inadeguatezza artistica",chakra:["c3","c5"],enneatipi:["e4","e7"],desc:"Sblocca la creatività in chi si è convinto di non essere creativo. Aiuta artisti in blocco a ritrovare l'ispirazione."},
  {id:"bush57",name:"Waratah",short:"Waratah",color:"#e01040",cat:"bush",funzione:"Forza nelle crisi esistenziali, sopravvivenza",disturbo:"Disperazione nera, crisi profonda di sopravvivenza",chakra:["c1","c4"],enneatipi:["e4","e8"],desc:"Per la disperazione nera e le crisi esistenziali profonde. Dà la forza primordiale di sopravvivere e rinascere."},
  {id:"bush58",name:"Wedding Bush",short:"Cespuglio del Matrimonio",color:"#f8f8e8",cat:"bush",funzione:"Impegno, fedeltà agli impegni presi",disturbo:"Difficoltà a impegnarsi, relazioni superficiali",chakra:["c4","c1"],enneatipi:["e7","e3"],desc:"Per chi fatica a impegnarsi in relazioni o progetti. Porta la capacità di fedeltà e di impegno autentico."},
  {id:"bush59",name:"Wild Potato Bush",short:"Cespuglio Patata Selvatica",color:"#f0d090",cat:"bush",funzione:"Libertà, levità, liberarsi dai pesi",disturbo:"Sentirsi appesantiti e intrappolati nel fisico",chakra:["c1","c3"],enneatipi:["e9","e5"],desc:"Per sentirsi pesanti, intrappolati e limitati dal corpo. Libera dalla sensazione di essere prigionieri della fisicità."},
  {id:"bush60",name:"Wisteria",short:"Glicine",color:"#c090e0",cat:"bush",funzione:"Sessualità femminile integrata",disturbo:"Difficoltà sessuali nelle donne, dissociazione durante il sesso",chakra:["c2","c4"],enneatipi:["e2","e4"],desc:"Per le donne che si sentono sopraffatte o disconnesse durante l'intimità. Porta dolcezza e piacere nella sessualità."},
  {id:"bush61",name:"Yellow Cowslip Orchid",short:"Orchidea Gialla",color:"#f8e040",cat:"bush",funzione:"Intelletto e cuore integrati, umanità",disturbo:"Critica senza sentimento, burocrazia fredda",chakra:["c4","c6"],enneatipi:["e1","e5"],desc:"Per integrare la mente analitica con il cuore. Cura la critica fredda e il formalismo burocratico senza umanità."},
  {id:"bush62",name:"Bauhinia",short:"Bauhinia",color:"#d0a0d0",cat:"bush",funzione:"Apertura al cambiamento e al nuovo",disturbo:"Resistenza al cambiamento, rigidità",chakra:["c3","c1"],enneatipi:["e1","e9"],desc:"Per chi si oppone ai cambiamenti e alle novità. Porta apertura e flessibilità di fronte all'inevitabile cambiamento."},
  {id:"bush63",name:"Freshwater Mangrove",short:"Mangrovia d'Acqua Dolce",color:"#60a080",cat:"bush",funzione:"Apertura a nuove esperienze senza pregiudizi",disturbo:"Pregiudizi ereditati, rifiuto del nuovo",chakra:["c6","c4"],enneatipi:["e6","e1"],desc:"Per liberarsi dai pregiudizi ereditati che impediscono di sperimentare la vita liberamente e con mente aperta."},
  {id:"bush64",name:"Lichen",short:"Lichene",color:"#a8b880",cat:"bush",funzione:"Transizione tra vita e morte, accettazione",disturbo:"Attaccamento al corpo durante la transizione finale",chakra:["c7","c1"],enneatipi:["e5","e9"],desc:"Per chi sta attraversando la transizione verso la morte, o per i caregiver. Porta pace e accettazione nella transizione."},
  {id:"bush65",name:"Green Kangaroo Paw",short:"Zampa di Canguro Verde",color:"#80c040",cat:"bush",funzione:"Generosità autentica, dare senza bisogno di ritorno",disturbo:"Dare per ricevere, ingratitudine quando non si è ricambiati",chakra:["c4","c3"],enneatipi:["e2","e3"],desc:"Per trasformare il dare condizionato in vera generosità. Libera dalla necessità di ricevere in cambio di ciò che si dà."}
],
ingiunzioni: [
  {id:'ing1',nome:'Non esistere',origine:'Caso del marito geloso del figlio perché cattura tutte le attenzioni della moglie. Genitori che esprimono pentimento per la nascita o trasmettono che la presenza del bambino è un peso.',permesso:'Esisti, sei benvenuto al mondo, hai il diritto di occupare il tuo spazio.',decisione_bambino:'Non sono benvenuto. Sarebbe meglio se non ci fossi. Devo guadagnarmi il diritto di esistere.',manifestazione_adulta:'Pensieri suicidari ricorrenti, comportamenti autodistruttivi, incidenti ripetuti, dipendenze gravi, depressione cronica.',adattamenti:'Tutti, ma soprattutto Schizoide e Antisociale'},
  {id:'ing2',nome:'Non essere te stesso',origine:'Il papà voleva una femminuccia piuttosto che un maschio; oppure il paragone «sei tutto tuo zio Carlo». Genitori che proiettano sul figlio un ideale diverso da chi è.',permesso:'Sei perfetto così come sei. La tua identità autentica è benvenuta.',decisione_bambino:'Per essere amato devo essere qualcun altro. La mia vera identità è inaccettabile.',manifestazione_adulta:'Crisi di identità, falso sé, difficoltà a riconoscere desideri propri, conformismo cronico, sensazione di indossare una maschera.',adattamenti:'Istrionico'},
  {id:'ing3',nome:'Non essere bambino',origine:'«Io ti sopporterò sino a quando ti comporterai da adulto». Genitori che pretendono maturità precoce, responsabilizzazione eccessiva, divieto di gioco e leggerezza.',permesso:'Puoi essere bambino. Hai diritto al gioco, alla spontaneità, alla protezione.',decisione_bambino:'Devo essere subito grande. La mia infanzia è un disturbo. Non posso permettermi di giocare.',manifestazione_adulta:'Iperresponsabilità, incapacità di rilassarsi, difficoltà a giocare e divertirsi, senso di colpa per il piacere, parentificazione.',adattamenti:'Ossessivo-compulsivo · Paranoide'},
  {id:'ing4',nome:'Non crescere',origine:'I genitori che non si sentono più degni di valore se il bambino cresce perché li abbandona. Genitori che mantengono il figlio in posizione infantile per bisogno proprio.',permesso:'Puoi crescere. Sei capace di essere autonomo. Il tuo sviluppo è benvenuto.',decisione_bambino:'Se cresco perdo il loro amore. Devo restare piccolo per essere accettato.',manifestazione_adulta:'Difficoltà ad assumere responsabilità adulte, dipendenza prolungata dai genitori, ritardo nelle tappe vitali (carriera, autonomia, relazioni stabili), comportamenti regressivi.',adattamenti:'Istrionico · Passivo-aggressivo · Schizoide'},
  {id:'ing5',nome:'Non riuscire',origine:'Genitore geloso dei risultati del figlio perché non ebbe le stesse opportunità (auto-sabotazione del figlio). O genitori che svalutano sistematicamente i successi del bambino.',permesso:'Puoi riuscire. I tuoi successi sono un dono per tutti, non una minaccia.',decisione_bambino:'Non devo superarli o li ferirò. È pericoloso avere successo.',manifestazione_adulta:'Auto-sabotaggio sistematico, fallimenti ripetuti vicino al traguardo, paralisi sul punto di concludere progetti importanti, incapacità di ricevere riconoscimenti.',adattamenti:'Passivo-aggressivo'},
  {id:'ing6',nome:'Non farlo',origine:'«Qualunque cosa tu faccia può essere pericolosa» (un adulto che non sa scegliere). Genitori iperprotettivi che paralizzano l\'iniziativa del bambino.',permesso:'Puoi agire. Le tue iniziative sono valide. Sei competente nel mondo.',decisione_bambino:'Ogni azione è pericolosa. Meglio non muoversi. Non sono capace.',manifestazione_adulta:'Procrastinazione cronica, paralisi decisionale, paura di sbagliare, evitamento di rischi anche minimi, incapacità di iniziare cose nuove.',adattamenti:'Schizoide · Passivo-aggressivo · Antisociale'},
  {id:'ing7',nome:'Non essere importante',origine:'«Puoi stare qui fino a che non sei importante». Da grande non riuscirà a parlare in pubblico, non chiederà mai di essere promosso. Genitori che reprimono ogni manifestazione di centralità o protagonismo del bambino.',permesso:'Sei importante. Hai diritto di essere visto, ascoltato, riconosciuto.',decisione_bambino:'Non devo emergere. Devo restare in secondo piano. La visibilità è pericolosa.',manifestazione_adulta:'Timidezza patologica, paura di parlare in pubblico, incapacità di chiedere promozioni o riconoscimenti, sabotaggio della propria visibilità, falsa modestia rigida.',adattamenti:'Istrionico · Ossessivo-compulsivo'},
  {id:'ing8',nome:'Non appartenere',origine:'Genitori che fanno capire al figlio che è diverso dagli altri, difficile, timido. Famiglie isolate o che disprezzano il contesto sociale.',permesso:'Appartieni. Hai un posto in questo mondo. Sei parte di noi.',decisione_bambino:'Sono diverso dagli altri. Non c\'è un gruppo per me.',manifestazione_adulta:'Senso cronico di estraneità, isolamento sociale, difficoltà a entrare in gruppi, ricerca compulsiva di gruppi che però non sentirà mai propri.',adattamenti:'Schizoide · Paranoide'},
  {id:'ing9',nome:'Non essere intimo',origine:'Genitori che non toccano il bambino o lo toccano di rado; ne verrà fuori una persona sempre in guardia. Famiglie con tabù del contatto fisico ed emotivo.',permesso:'Puoi essere intimo. Il contatto è sicuro. Puoi fidarti dell\'altro.',decisione_bambino:'L\'intimità è pericolosa o non esiste. Devo mantenere le distanze.',manifestazione_adulta:'Difficoltà nelle relazioni intime, paura del contatto fisico ed emotivo, rapporti superficiali ripetuti, sabotaggio delle relazioni profonde appena diventano vicine.',adattamenti:'Paranoide · Ossessivo-compulsivo · Antisociale · Passivo-aggressivo'},
  {id:'ing10',nome:'Non stare bene (Non essere sano)',origine:'Caso del genitore che accorre dal bambino solo quando sta male; si ammala quando le cose vanno male sul lavoro. Attenzione condizionata alla malattia.',permesso:'Puoi stare bene. La salute è benvenuta. Hai diritto al benessere.',decisione_bambino:'Per essere amato devo essere malato o stare male. Il benessere è solitudine.',manifestazione_adulta:'Malattie ricorrenti, somatizzazioni, ipocondria, ricerca inconsapevole di sintomi, sabotaggio dei momenti di benessere, ansia quando le cose vanno bene.',adattamenti:'Schizoide'},
  {id:'ing11',nome:'Non pensare',origine:'Genitore che sminuisce sempre il pensiero del figlio. «Non capisci nulla», «sei stupido», o pensiero del bambino sistematicamente ignorato.',permesso:'Puoi pensare. La tua mente è valida. Le tue idee meritano ascolto.',decisione_bambino:'Il mio pensiero non vale. Devo affidarmi agli altri o alle emozioni per decidere.',manifestazione_adulta:'Difficoltà di concentrazione, scelte impulsive o emotive, dipendenza dal pensiero altrui, evitamento di compiti analitici, autosvalutazione cognitiva.',adattamenti:'Istrionico · Schizoide · Antisociale'},
  {id:'ing12',nome:'Non sentire',origine:'Genitori che soffocano le proprie emozioni («i bambini grandi non piangono»); non sentire la fame (problemi di alimentazione). Famiglie alessitimiche.',permesso:'Puoi sentire. Le tue emozioni e sensazioni sono valide e benvenute.',decisione_bambino:'Le emozioni sono pericolose. Devo congelarle. Non devo sentire i bisogni del corpo.',manifestazione_adulta:'Alessitimia, somatizzazioni, difficoltà a riconoscere fame/sazietà/stanchezza, distanza emotiva, depressione mascherata, dipendenze come automedicazione.',adattamenti:'Ossessivo-compulsivo · Paranoide · Schizoide · Passivo-aggressivo · Antisociale'}
],
spinte: [
  {id:'sp1',nome:'Sii perfetto',messaggio:'Sono ok se sono perfetto',copione_associato:'Finché',copione_descrizione:'Non posso divertirmi finché non ho finito il mio lavoro. Devo capirmi a fondo prima di cambiare. Dopo la pensione potrò viaggiare.',autorizzazione:'Sei abbastanza bravo così come sei',parole:'Usa le parentesi (sono qui, come ho detto, per parlarvi delle spinte); probabilmente, come se, possibilmente, certamente, completamente, si potrebbe dire, come abbiamo visto; enunciazione dei numeri o lettere dell\'alfabeto.',tono:'Né alto né basso (da adulto)',gesti:'Conta sulle dita della mano per accompagnare ciò che dice con lettere o numeri; massaggia il mento con la mano a V',postura:'Eretto, bilanciato intorno a una linea mediana',espressioni:'Occhi guardano in alto e di lato quando fa una pausa nel discorso; bocca tesa con angoli spinti in fuori',adattamenti:'Ossessivo-compulsivo · Paranoide'},
  {id:'sp2',nome:'Compiaci (Cerca di piacere)',messaggio:'Sono ok se rendo felici gli altri',copione_associato:'Dopo',copione_descrizione:'Posso divertirmi oggi, ma lo pagherò domani. Al mattino sono arzillo, ma alla sera sono stanco.',autorizzazione:'Piaci a te stesso',parole:'Nota alta-ma-nota bassa («Mi è piaciuto quel che hai detto, ma non so se lo ricorderò»); introduce domande interrogative («Va bene per te? Che tipo?»)',tono:'Voce alta, tono stridente',gesti:'Porta le mani in avanti, di solito con le palme in alto; annuisce col capo',postura:'Spalle tirate in su e in avanti',espressioni:'Guarda col volto inclinato leggermente in avanti; alza le sopracciglia, aggrotta la fronte; mentre sorride si vedono denti superiori e inferiori',adattamenti:'Istrionico · Antisociale'},
  {id:'sp3',nome:'Sforzati',messaggio:'Sono ok se mi sforzo (ma non devo riuscire — sto già facendo il massimo)',copione_associato:'Sempre',copione_descrizione:'Perché mi succede sempre questo? Ripercorre sempre la stessa vicenda di cui è insoddisfatta. Quando parla può saltare di palo in frasca.',autorizzazione:'Fallo',parole:'Usa spesso «cerca» («Quello che cerco di dirti», «cercherò di farlo»); difficile, non posso, cosa?, di nuovo, non ti capisco, è difficile, huh huh.',tono:'I suoni sono come strozzati',gesti:'Mani vicine agli occhi o agli orecchi come per vedere/sentire qualcosa, pugni chiusi',postura:'Si china in avanti, mani sulle ginocchia, posizione curva',espressioni:'Aggrotta le sopracciglia, sopra il naso appaiono delle linee verticali, gli occhi possono essere solcati da rughe',adattamenti:'Passivo-aggressivo'},
  {id:'sp4',nome:'Sii forte',messaggio:'Sono ok se sono forte e non sento (le emozioni non sono di mia responsabilità)',copione_associato:'Mai',copione_descrizione:'Io non posso mai avere quello che desidero (non tengo però mai il comportamento per procurarmi ciò che desidero). Ogni giorno raccontano i loro guai come un disco rotto, come se fosse la prima volta.',autorizzazione:'Sii aperto ed esprimi i tuoi desideri',parole:'«Le mie azioni ed emozioni non sono di mia responsabilità, ma sono causate da fattori esterni» («tu mi fai arrabbiare», «il suo atteggiamento mi ha portato a reagire»). Quando parla di sé stesso si distanzia con parole: tu, uno, la gente, questo.',tono:'Piatto, monotono, basso',gesti:'Assenza di gesti',postura:'Chiuso, braccia e gambe incrociate, immobilità',espressioni:'Privo di espressioni',adattamenti:'Schizoide · Paranoide · Antisociale'},
  {id:'sp5',nome:'Sbrigati',messaggio:'Sono ok se faccio in fretta (il tempo non basta mai)',copione_associato:'Quasi',copione_descrizione:'Quasi finito, manca poco. Comincia mille cose ma non le porta a termine; o le finisce di corsa senza rendersene conto e ne inizia un\'altra.',autorizzazione:'Prenditi il tempo necessario',parole:'Sbriga il discorso, salta parole o intere frasi; «veloce», «subito», «al volo», «ho fretta», «non c\'è tempo»; interrompe gli altri prima che finiscano',tono:'Veloce, accelerato, talvolta soffocato dalla fretta',gesti:'Movimenti rapidi, batte le dita, guarda spesso l\'orologio, tamburella',postura:'Tesa, in avanti, instabile (sembra sempre sul punto di alzarsi)',espressioni:'Sguardo che si muove rapido, fronte tesa, espressione di urgenza',adattamenti:'Trasversale (può accompagnare qualsiasi adattamento)'}
],
combinazioni_copione: [
  {id:'comb_ing1_sp1',ingiunzione_id:'ing1',ingiunzione_nome:'Non esistere',spinta_id:'sp1',spinta_nome:'Sii perfetto',copione:'Sino a che sono perfetto, posso esistere',adattamenti_tipici:'Paranoide, Ossessivo-compulsivo'},
  {id:'comb_ing1_sp2',ingiunzione_id:'ing1',ingiunzione_nome:'Non esistere',spinta_id:'sp2',spinta_nome:'Compiaci (Cerca di piacere)',copione:'Sino a che compiaccio gli altri, posso esistere',adattamenti_tipici:'Antisociale'},
  {id:'comb_ing1_sp3',ingiunzione_id:'ing1',ingiunzione_nome:'Non esistere',spinta_id:'sp3',spinta_nome:'Sforzati',copione:'Sino a che mi sforzo, posso esistere',adattamenti_tipici:'Passivo-aggressivo'},
  {id:'comb_ing1_sp4',ingiunzione_id:'ing1',ingiunzione_nome:'Non esistere',spinta_id:'sp4',spinta_nome:'Sii forte',copione:'Sino a che sono forte (e non sento), posso esistere',adattamenti_tipici:'Schizoide, Antisociale'},
  {id:'comb_ing1_sp5',ingiunzione_id:'ing1',ingiunzione_nome:'Non esistere',spinta_id:'sp5',spinta_nome:'Sbrigati',copione:'Sino a che mi sbrigo (faccio tutto in fretta), posso esistere',adattamenti_tipici:'Trasversale'},
  {id:'comb_ing2_sp1',ingiunzione_id:'ing2',ingiunzione_nome:'Non essere te stesso',spinta_id:'sp1',spinta_nome:'Sii perfetto',copione:'Sino a che sono perfetto, posso essere me stesso',adattamenti_tipici:'Paranoide, Ossessivo-compulsivo'},
  {id:'comb_ing2_sp2',ingiunzione_id:'ing2',ingiunzione_nome:'Non essere te stesso',spinta_id:'sp2',spinta_nome:'Compiaci (Cerca di piacere)',copione:'Sino a che compiaccio gli altri, posso essere me stesso',adattamenti_tipici:'Istrionico'},
  {id:'comb_ing2_sp3',ingiunzione_id:'ing2',ingiunzione_nome:'Non essere te stesso',spinta_id:'sp3',spinta_nome:'Sforzati',copione:'Sino a che mi sforzo, posso essere me stesso',adattamenti_tipici:'Passivo-aggressivo'},
  {id:'comb_ing2_sp4',ingiunzione_id:'ing2',ingiunzione_nome:'Non essere te stesso',spinta_id:'sp4',spinta_nome:'Sii forte',copione:'Sino a che sono forte (e non sento), posso essere me stesso',adattamenti_tipici:'Schizoide, Paranoide, Antisociale'},
  {id:'comb_ing2_sp5',ingiunzione_id:'ing2',ingiunzione_nome:'Non essere te stesso',spinta_id:'sp5',spinta_nome:'Sbrigati',copione:'Sino a che mi sbrigo (faccio tutto in fretta), posso essere me stesso',adattamenti_tipici:'Trasversale'},
  {id:'comb_ing3_sp1',ingiunzione_id:'ing3',ingiunzione_nome:'Non essere bambino',spinta_id:'sp1',spinta_nome:'Sii perfetto',copione:'Sino a che sono perfetto, posso essere bambino (giocare, divertirmi)',adattamenti_tipici:'Paranoide, Ossessivo-compulsivo'},
  {id:'comb_ing3_sp2',ingiunzione_id:'ing3',ingiunzione_nome:'Non essere bambino',spinta_id:'sp2',spinta_nome:'Compiaci (Cerca di piacere)',copione:'Sino a che compiaccio gli altri, posso essere bambino (giocare, divertirmi)',adattamenti_tipici:'Antisociale, Istrionico'},
  {id:'comb_ing3_sp3',ingiunzione_id:'ing3',ingiunzione_nome:'Non essere bambino',spinta_id:'sp3',spinta_nome:'Sforzati',copione:'Sino a che mi sforzo, posso essere bambino (giocare, divertirmi)',adattamenti_tipici:'Passivo-aggressivo'},
  {id:'comb_ing3_sp4',ingiunzione_id:'ing3',ingiunzione_nome:'Non essere bambino',spinta_id:'sp4',spinta_nome:'Sii forte',copione:'Sino a che sono forte (e non sento), posso essere bambino (giocare, divertirmi)',adattamenti_tipici:'Paranoide'},
  {id:'comb_ing3_sp5',ingiunzione_id:'ing3',ingiunzione_nome:'Non essere bambino',spinta_id:'sp5',spinta_nome:'Sbrigati',copione:'Sino a che mi sbrigo (faccio tutto in fretta), posso essere bambino (giocare, divertirmi)',adattamenti_tipici:'Trasversale'},
  {id:'comb_ing4_sp1',ingiunzione_id:'ing4',ingiunzione_nome:'Non crescere',spinta_id:'sp1',spinta_nome:'Sii perfetto',copione:'Sino a che sono perfetto, posso crescere',adattamenti_tipici:'Paranoide, Ossessivo-compulsivo'},
  {id:'comb_ing4_sp2',ingiunzione_id:'ing4',ingiunzione_nome:'Non crescere',spinta_id:'sp2',spinta_nome:'Compiaci (Cerca di piacere)',copione:'Sino a che compiaccio gli altri, posso crescere',adattamenti_tipici:'Istrionico'},
  {id:'comb_ing4_sp3',ingiunzione_id:'ing4',ingiunzione_nome:'Non crescere',spinta_id:'sp3',spinta_nome:'Sforzati',copione:'Sino a che mi sforzo, posso crescere',adattamenti_tipici:'Passivo-aggressivo'},
  {id:'comb_ing4_sp4',ingiunzione_id:'ing4',ingiunzione_nome:'Non crescere',spinta_id:'sp4',spinta_nome:'Sii forte',copione:'Sino a che sono forte (e non sento), posso crescere',adattamenti_tipici:'Schizoide'},
  {id:'comb_ing4_sp5',ingiunzione_id:'ing4',ingiunzione_nome:'Non crescere',spinta_id:'sp5',spinta_nome:'Sbrigati',copione:'Sino a che mi sbrigo (faccio tutto in fretta), posso crescere',adattamenti_tipici:'Trasversale'},
  {id:'comb_ing5_sp1',ingiunzione_id:'ing5',ingiunzione_nome:'Non riuscire',spinta_id:'sp1',spinta_nome:'Sii perfetto',copione:'Sino a che sono perfetto, posso riuscire',adattamenti_tipici:'Paranoide, Ossessivo-compulsivo'},
  {id:'comb_ing5_sp2',ingiunzione_id:'ing5',ingiunzione_nome:'Non riuscire',spinta_id:'sp2',spinta_nome:'Compiaci (Cerca di piacere)',copione:'Sino a che compiaccio gli altri, posso riuscire',adattamenti_tipici:'Antisociale, Istrionico'},
  {id:'comb_ing5_sp3',ingiunzione_id:'ing5',ingiunzione_nome:'Non riuscire',spinta_id:'sp3',spinta_nome:'Sforzati',copione:'Sino a che mi sforzo, posso riuscire',adattamenti_tipici:'Passivo-aggressivo'},
  {id:'comb_ing5_sp4',ingiunzione_id:'ing5',ingiunzione_nome:'Non riuscire',spinta_id:'sp4',spinta_nome:'Sii forte',copione:'Sino a che sono forte (e non sento), posso riuscire',adattamenti_tipici:'Schizoide, Paranoide, Antisociale'},
  {id:'comb_ing5_sp5',ingiunzione_id:'ing5',ingiunzione_nome:'Non riuscire',spinta_id:'sp5',spinta_nome:'Sbrigati',copione:'Sino a che mi sbrigo (faccio tutto in fretta), posso riuscire',adattamenti_tipici:'Trasversale'},
  {id:'comb_ing6_sp1',ingiunzione_id:'ing6',ingiunzione_nome:'Non farlo',spinta_id:'sp1',spinta_nome:'Sii perfetto',copione:'Sino a che sono perfetto, posso agire',adattamenti_tipici:'Paranoide, Ossessivo-compulsivo'},
  {id:'comb_ing6_sp2',ingiunzione_id:'ing6',ingiunzione_nome:'Non farlo',spinta_id:'sp2',spinta_nome:'Compiaci (Cerca di piacere)',copione:'Sino a che compiaccio gli altri, posso agire',adattamenti_tipici:'Antisociale'},
  {id:'comb_ing6_sp3',ingiunzione_id:'ing6',ingiunzione_nome:'Non farlo',spinta_id:'sp3',spinta_nome:'Sforzati',copione:'Sino a che mi sforzo, posso agire',adattamenti_tipici:'Passivo-aggressivo'},
  {id:'comb_ing6_sp4',ingiunzione_id:'ing6',ingiunzione_nome:'Non farlo',spinta_id:'sp4',spinta_nome:'Sii forte',copione:'Sino a che sono forte (e non sento), posso agire',adattamenti_tipici:'Schizoide, Antisociale'},
  {id:'comb_ing6_sp5',ingiunzione_id:'ing6',ingiunzione_nome:'Non farlo',spinta_id:'sp5',spinta_nome:'Sbrigati',copione:'Sino a che mi sbrigo (faccio tutto in fretta), posso agire',adattamenti_tipici:'Trasversale'},
  {id:'comb_ing7_sp1',ingiunzione_id:'ing7',ingiunzione_nome:'Non essere importante',spinta_id:'sp1',spinta_nome:'Sii perfetto',copione:'Sino a che sono perfetto, posso essere importante',adattamenti_tipici:'Ossessivo-compulsivo'},
  {id:'comb_ing7_sp2',ingiunzione_id:'ing7',ingiunzione_nome:'Non essere importante',spinta_id:'sp2',spinta_nome:'Compiaci (Cerca di piacere)',copione:'Sino a che compiaccio gli altri, posso essere importante',adattamenti_tipici:'Istrionico'},
  {id:'comb_ing7_sp3',ingiunzione_id:'ing7',ingiunzione_nome:'Non essere importante',spinta_id:'sp3',spinta_nome:'Sforzati',copione:'Sino a che mi sforzo, posso essere importante',adattamenti_tipici:'Passivo-aggressivo'},
  {id:'comb_ing7_sp4',ingiunzione_id:'ing7',ingiunzione_nome:'Non essere importante',spinta_id:'sp4',spinta_nome:'Sii forte',copione:'Sino a che sono forte (e non sento), posso essere importante',adattamenti_tipici:'Schizoide, Paranoide, Antisociale'},
  {id:'comb_ing7_sp5',ingiunzione_id:'ing7',ingiunzione_nome:'Non essere importante',spinta_id:'sp5',spinta_nome:'Sbrigati',copione:'Sino a che mi sbrigo (faccio tutto in fretta), posso essere importante',adattamenti_tipici:'Trasversale'},
  {id:'comb_ing8_sp1',ingiunzione_id:'ing8',ingiunzione_nome:'Non appartenere',spinta_id:'sp1',spinta_nome:'Sii perfetto',copione:'Sino a che sono perfetto, posso appartenere',adattamenti_tipici:'Paranoide'},
  {id:'comb_ing8_sp2',ingiunzione_id:'ing8',ingiunzione_nome:'Non appartenere',spinta_id:'sp2',spinta_nome:'Compiaci (Cerca di piacere)',copione:'Sino a che compiaccio gli altri, posso appartenere',adattamenti_tipici:'Antisociale, Istrionico'},
  {id:'comb_ing8_sp3',ingiunzione_id:'ing8',ingiunzione_nome:'Non appartenere',spinta_id:'sp3',spinta_nome:'Sforzati',copione:'Sino a che mi sforzo, posso appartenere',adattamenti_tipici:'Passivo-aggressivo'},
  {id:'comb_ing8_sp4',ingiunzione_id:'ing8',ingiunzione_nome:'Non appartenere',spinta_id:'sp4',spinta_nome:'Sii forte',copione:'Sino a che sono forte (e non sento), posso appartenere',adattamenti_tipici:'Schizoide, Paranoide'},
  {id:'comb_ing8_sp5',ingiunzione_id:'ing8',ingiunzione_nome:'Non appartenere',spinta_id:'sp5',spinta_nome:'Sbrigati',copione:'Sino a che mi sbrigo (faccio tutto in fretta), posso appartenere',adattamenti_tipici:'Trasversale'},
  {id:'comb_ing9_sp1',ingiunzione_id:'ing9',ingiunzione_nome:'Non essere intimo',spinta_id:'sp1',spinta_nome:'Sii perfetto',copione:'Sino a che sono perfetto, posso essere intimo',adattamenti_tipici:'Paranoide, Ossessivo-compulsivo'},
  {id:'comb_ing9_sp2',ingiunzione_id:'ing9',ingiunzione_nome:'Non essere intimo',spinta_id:'sp2',spinta_nome:'Compiaci (Cerca di piacere)',copione:'Sino a che compiaccio gli altri, posso essere intimo',adattamenti_tipici:'Antisociale'},
  {id:'comb_ing9_sp3',ingiunzione_id:'ing9',ingiunzione_nome:'Non essere intimo',spinta_id:'sp3',spinta_nome:'Sforzati',copione:'Sino a che mi sforzo, posso essere intimo',adattamenti_tipici:'Passivo-aggressivo'},
  {id:'comb_ing9_sp4',ingiunzione_id:'ing9',ingiunzione_nome:'Non essere intimo',spinta_id:'sp4',spinta_nome:'Sii forte',copione:'Sino a che sono forte (e non sento), posso essere intimo',adattamenti_tipici:'Paranoide, Antisociale'},
  {id:'comb_ing9_sp5',ingiunzione_id:'ing9',ingiunzione_nome:'Non essere intimo',spinta_id:'sp5',spinta_nome:'Sbrigati',copione:'Sino a che mi sbrigo (faccio tutto in fretta), posso essere intimo',adattamenti_tipici:'Trasversale'},
  {id:'comb_ing10_sp1',ingiunzione_id:'ing10',ingiunzione_nome:'Non stare bene (Non essere sano)',spinta_id:'sp1',spinta_nome:'Sii perfetto',copione:'Sino a che sono perfetto, posso stare bene',adattamenti_tipici:'Paranoide, Ossessivo-compulsivo'},
  {id:'comb_ing10_sp2',ingiunzione_id:'ing10',ingiunzione_nome:'Non stare bene (Non essere sano)',spinta_id:'sp2',spinta_nome:'Compiaci (Cerca di piacere)',copione:'Sino a che compiaccio gli altri, posso stare bene',adattamenti_tipici:'Antisociale, Istrionico'},
  {id:'comb_ing10_sp3',ingiunzione_id:'ing10',ingiunzione_nome:'Non stare bene (Non essere sano)',spinta_id:'sp3',spinta_nome:'Sforzati',copione:'Sino a che mi sforzo, posso stare bene',adattamenti_tipici:'Passivo-aggressivo'},
  {id:'comb_ing10_sp4',ingiunzione_id:'ing10',ingiunzione_nome:'Non stare bene (Non essere sano)',spinta_id:'sp4',spinta_nome:'Sii forte',copione:'Sino a che sono forte (e non sento), posso stare bene',adattamenti_tipici:'Schizoide'},
  {id:'comb_ing10_sp5',ingiunzione_id:'ing10',ingiunzione_nome:'Non stare bene (Non essere sano)',spinta_id:'sp5',spinta_nome:'Sbrigati',copione:'Sino a che mi sbrigo (faccio tutto in fretta), posso stare bene',adattamenti_tipici:'Trasversale'},
  {id:'comb_ing11_sp1',ingiunzione_id:'ing11',ingiunzione_nome:'Non pensare',spinta_id:'sp1',spinta_nome:'Sii perfetto',copione:'Sino a che sono perfetto, posso pensare',adattamenti_tipici:'Paranoide, Ossessivo-compulsivo'},
  {id:'comb_ing11_sp2',ingiunzione_id:'ing11',ingiunzione_nome:'Non pensare',spinta_id:'sp2',spinta_nome:'Compiaci (Cerca di piacere)',copione:'Sino a che compiaccio gli altri, posso pensare',adattamenti_tipici:'Antisociale, Istrionico'},
  {id:'comb_ing11_sp3',ingiunzione_id:'ing11',ingiunzione_nome:'Non pensare',spinta_id:'sp3',spinta_nome:'Sforzati',copione:'Sino a che mi sforzo, posso pensare',adattamenti_tipici:'Passivo-aggressivo'},
  {id:'comb_ing11_sp4',ingiunzione_id:'ing11',ingiunzione_nome:'Non pensare',spinta_id:'sp4',spinta_nome:'Sii forte',copione:'Sino a che sono forte (e non sento), posso pensare',adattamenti_tipici:'Schizoide, Antisociale'},
  {id:'comb_ing11_sp5',ingiunzione_id:'ing11',ingiunzione_nome:'Non pensare',spinta_id:'sp5',spinta_nome:'Sbrigati',copione:'Sino a che mi sbrigo (faccio tutto in fretta), posso pensare',adattamenti_tipici:'Trasversale'},
  {id:'comb_ing12_sp1',ingiunzione_id:'ing12',ingiunzione_nome:'Non sentire',spinta_id:'sp1',spinta_nome:'Sii perfetto',copione:'Sino a che sono perfetto, posso sentire',adattamenti_tipici:'Paranoide, Ossessivo-compulsivo'},
  {id:'comb_ing12_sp2',ingiunzione_id:'ing12',ingiunzione_nome:'Non sentire',spinta_id:'sp2',spinta_nome:'Compiaci (Cerca di piacere)',copione:'Sino a che compiaccio gli altri, posso sentire',adattamenti_tipici:'Antisociale'},
  {id:'comb_ing12_sp3',ingiunzione_id:'ing12',ingiunzione_nome:'Non sentire',spinta_id:'sp3',spinta_nome:'Sforzati',copione:'Sino a che mi sforzo, posso sentire',adattamenti_tipici:'Passivo-aggressivo'},
  {id:'comb_ing12_sp4',ingiunzione_id:'ing12',ingiunzione_nome:'Non sentire',spinta_id:'sp4',spinta_nome:'Sii forte',copione:'Sino a che sono forte (e non sento), posso sentire',adattamenti_tipici:'Schizoide, Paranoide, Antisociale'},
  {id:'comb_ing12_sp5',ingiunzione_id:'ing12',ingiunzione_nome:'Non sentire',spinta_id:'sp5',spinta_nome:'Sbrigati',copione:'Sino a che mi sbrigo (faccio tutto in fretta), posso sentire',adattamenti_tipici:'Trasversale'}
]

};

const CMETA={
  chakra:{label:"Chakra",color:"#7b2fa0",icon:"◉"},
  cristalli:{label:"Cristalli",color:"#1565c0",icon:"◆"},
  enneatipi:{label:"Enneatipi",color:"#a83232",icon:"⬟"},
  frequenze:{label:"Musica Curativa",color:"#2e7d4f",icon:"♬"},
  adattamenti:{label:"Adattamenti AT",color:"#6366f1",icon:"⚙"},
  esercizi:{label:"Esercizi",color:"#00695c",icon:"◎"},
  fes:{label:"Fiori Californiani",color:"#c87820",icon:"✿"},
  bush:{label:"Fiori Australiani",color:"#4a8040",icon:"❋"},
  ingiunzioni:{label:"Ingiunzioni AT",color:"#7c3aed",icon:"⊘"},
  spinte:{label:"Spinte (Driver) AT",color:"#0891b2",icon:"➤"},
  combinazioni_copione:{label:"Combinazioni di Copione",color:"#9333ea",icon:"✦"}
};

function getAll(){return Object.entries(DB).flatMap(([cat,items])=>items.map(i=>({...i,cat})))}
function byId(id){return getAll().find(x=>x.id===id)}
function gc(item){if(!item)return"#888";if(item.cat==="chakra"||item.color)return item.color||CMETA[item.cat]?.color||"#888";return CMETA[item.cat]?.color||"#888"}

// ── SEARCH ──
function openSearch(){document.getElementById("search-overlay").classList.add("open");setTimeout(()=>document.getElementById("s-input").focus(),50)}
function closeSearch(){document.getElementById("search-overlay").classList.remove("open");document.getElementById("s-input").value="";document.getElementById("s-list").innerHTML=""}
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeSearch()});
(function(){
  const sInput = document.getElementById("s-input");
  if(sInput) sInput.addEventListener("input",function(){
  const q=this.value.trim().toLowerCase();
  const el=document.getElementById("s-list");
  if(!q){el.innerHTML="";return}
  const res=getAll().filter(i=>[i.name,i.desc,i.funzione,i.effetto,i.tema,i.disturbo,i.categoria].filter(Boolean).some(s=>s.toLowerCase().includes(q))).slice(0,20);
  if(!res.length){el.innerHTML='<p style="padding:1.5rem;color:var(--ink4);text-align:center;font-style:italic">Nessun risultato</p>';return}
  const bc={};res.forEach(r=>{if(!bc[r.cat])bc[r.cat]=[];bc[r.cat].push(r)});
  el.innerHTML=Object.entries(bc).map(([cat,its])=>`
    <div class="s-cat-lbl">${CMETA[cat].icon} ${CMETA[cat].label}</div>
    ${its.map(i=>`<div class="s-item" onclick="goTo('${i.id}','${i.cat}')">
      <span class="s-dot" style="background:${gc(i)}"></span>
      <div><div class="s-name">${i.name}</div><div class="s-meta">${(i.funzione||i.tema||i.categoria||i.tipo||"").slice(0,65)}</div></div>
    </div>`).join("")}
  `).join("")
  });
})();
function goTo(id,cat){
  closeSearch();curCat=cat;selId=id;
  renderTabs();renderList();renderPanel(byId(id));
  st("explorer");
}

// ── EXPLORER ──
let curCat="chakra",selId=null;

// ── AT ADATTAMENTI ──
const AT_COLORS = {
  "ad1":"#6366f1","ad2":"#ef4444","ad3":"#f59e0b",
  "ad4":"#10b981","ad5":"#3b82f6","ad6":"#ec4899"
};

// ══════════════════════════════════════════════════════════
// TEST DEL VETTORE COMUNICATIVO — 20 scenari AT
// ══════════════════════════════════════════════════════════

const VETTORI_TEST_QS = [
  {
    id:'v01', scenario:'Stai spiegando qualcosa e l\'altro capisce male. Come reagisci?',
    opts:[
      {t:'Rifaccio la spiegazione in modo diverso, più chiaro e metodico.', v:'A'},
      {t:'Dico: «Non ha importanza, sono io che mi sono spiegato male» e lo rassicuro.', v:'GA+'},
      {t:'Sento un filo d\'impazienza ma aspetto che capisca.', v:'BA-'},
      {t:'Gli dico direttamente: «Devi prestare più attenzione quando ti parlo.»', v:'GN-'},
    ]
  },
  {
    id:'v02', scenario:'Un collega ti chiede aiuto su un problema che sai risolvere.',
    opts:[
      {t:'Gli spiego il procedimento passo dopo passo, assicurandomi che capisca.', v:'A'},
      {t:'Lo aiuto subito con entusiasmo, ci metto del mio.', v:'BL+'},
      {t:'Lo guido ma aspetto che trovi da solo la soluzione.', v:'GA+'},
      {t:'Penso: «Dovrebbe già saperlo» ma lo aiuto lo stesso, un po\' seccato.', v:'GN-'},
    ]
  },
  {
    id:'v03', scenario:'Qualcuno ti critica davanti ad altri. Come ti senti e come reagisci?',
    opts:[
      {t:'Mi irrigidisco, non rispondo. Internamente la rimugino.', v:'BA-'},
      {t:'Rispondo calmamente: «Grazie, ci penso. Hai qualche suggerimento specifico?»', v:'A'},
      {t:'Mi sento ferito/a ma sorrido per mantenere l\'armonia.', v:'BA+'},
      {t:'Contrattacco immediatamente o cambio argomento con una battuta.', v:'BL-'},
    ]
  },
  {
    id:'v04', scenario:'Devi dare un feedback negativo a qualcuno che rispetti.',
    opts:[
      {t:'Parto da quello che funziona, poi dico cosa migliorare con esempi concreti.', v:'A'},
      {t:'Faccio fatica a dirlo, metto tanti "però" e "ma" per ammorbidire.', v:'GA+'},
      {t:'Lo dico chiaramente, senza giri di parole: meglio così per tutti.', v:'GN+'},
      {t:'Rimando finché non sono "sicuro/a del momento giusto".', v:'BA-'},
    ]
  },
  {
    id:'v05', scenario:'Sei in una riunione che si allunga oltre il previsto. Cosa pensi?',
    opts:[
      {t:'«Dobbiamo definire i prossimi passi e chiudere entro 15 minuti.»', v:'A'},
      {t:'«Tutti sembrano stanchi, forse è meglio rimandare.»', v:'GA+'},
      {t:'Guardo l\'orologio, tamburello con le dita, mi agito.', v:'BL-'},
      {t:'«Questa riunione è un disastro, nessuno sa gestire il tempo.»', v:'GN-'},
    ]
  },
  {
    id:'v06', scenario:'Un amico ti racconta un problema serio. Come rispondi?',
    opts:[
      {t:'Ascolto, poi propongo possibili soluzioni concrete.', v:'A'},
      {t:'Mi immedesimo, lo faccio sentire capito prima di qualsiasi soluzione.', v:'GA+'},
      {t:'Mi coinvolgo emotivamente, mi sento anche io agitato/a.', v:'BL+'},
      {t:'Penso: «Ha sbagliato lui/lei, doveva agire diversamente.»', v:'GN-'},
    ]
  },
  {
    id:'v07', scenario:'Stai lavorando su un progetto e qualcuno cambia i piani all\'ultimo.',
    opts:[
      {t:'Analizzo le nuove informazioni e mi adatto rapidamente.', v:'A'},
      {t:'Mi arrabbio internamente ma accetto per non creare problemi.', v:'BA+'},
      {t:'Dico chiaramente che questo crea difficoltà e propongo un piano B.', v:'A'},
      {t:'Scoppio: «Non si fanno le cose così!»', v:'GN-'},
    ]
  },
  {
    id:'v08', scenario:'Qualcuno ti fa un complimento inaspettato. Come reagisci?',
    opts:[
      {t:'Ringrazio semplicemente e vado avanti.', v:'A'},
      {t:'Mi illumino, mi fa davvero piacere e lo esprimo.', v:'BL+'},
      {t:'Mi imbarazzo un po\', lo relativizzo: «Non ho fatto niente di speciale.»', v:'BA-'},
      {t:'Penso: «Cosa vuole in cambio?»', v:'GN-'},
    ]
  },
  {
    id:'v09', scenario:'Devi prendere una decisione importante senza avere tutte le informazioni.',
    opts:[
      {t:'Valuto i pro e i contro con le informazioni disponibili e decido.', v:'A'},
      {t:'Chiedo consiglio a chi mi è vicino prima di scegliere.', v:'BA+'},
      {t:'Seguo l\'intuizione, mi fido del mio senso delle cose.', v:'BL+'},
      {t:'Rimando finché non ho tutti i dati necessari.', v:'BA-'},
    ]
  },
  {
    id:'v10', scenario:'In una discussione accesa, il tono si alza. Come intervieni?',
    opts:[
      {t:'Dico: «Fermiamoci un momento. Qual è il vero problema?»', v:'A'},
      {t:'Cerco di calmare tutti, propongo una pausa.', v:'GA+'},
      {t:'Mi alzo di livello anche io, non lascio l\'ultima parola agli altri.', v:'BL-'},
      {t:'Mi chiudo in silenzio finché non si calmano.', v:'BA-'},
    ]
  },
  {
    id:'v11', scenario:'Stai insegnando qualcosa e l\'allievo sbaglia più volte.',
    opts:[
      {t:'Analizzo dove avviene l\'errore e cambio il metodo di spiegazione.', v:'A'},
      {t:'Lo incoraggi: «Stai migliorando, ci sei quasi.»', v:'GA+'},
      {t:'Penso: «Non ci arriverà mai.» ma continui pazientemente.', v:'GN-'},
      {t:'Ti senti frustrato/a e fai capire che ti aspettavi di più.', v:'GN-'},
    ]
  },
  {
    id:'v12', scenario:'Hai fatto un errore che ha avuto conseguenze su altri. Come ti comporti?',
    opts:[
      {t:'Lo ammetti, analizzi cosa è andato storto e proponi una soluzione.', v:'A'},
      {t:'Ti scusi profusamente, ti senti molto in colpa.', v:'BA+'},
      {t:'Cerchi inconsciamente di minimizzare o trovare attenuanti.', v:'BL-'},
      {t:'Ti autoaccusi duramente: «Sono sempre lo/la stesso/a.»', v:'BA-'},
    ]
  },
  {
    id:'v13', scenario:'Qualcuno ti chiede di fare qualcosa che non vuoi fare.',
    opts:[
      {t:'Dico tranquillamente: «Non posso farlo, ma potrei aiutarti in un altro modo.»', v:'A'},
      {t:'Accetto per non deluderlo/la, anche se dentro mi dispiace.', v:'BA+'},
      {t:'Trovo una scusa plausibile per declinare.', v:'BA-'},
      {t:'Dico chiaramente: «No, non è una cosa che rientra nei miei impegni.»', v:'GN+'},
    ]
  },
  {
    id:'v14', scenario:'Ti trovi in una situazione nuova e stimolante. Come ti senti?',
    opts:[
      {t:'Curioso/a, energico/a, mi butto con entusiasmo.', v:'BL+'},
      {t:'Un po\' ansioso/a — preferisco sapere cosa mi aspetta.', v:'BA-'},
      {t:'Valuto subito rischi e opportunità, poi procedo.', v:'A'},
      {t:'Guardo prima come si comportano gli altri.', v:'BA+'},
    ]
  },
  {
    id:'v15', scenario:'Qualcuno piange davanti a te. Come reagisci?',
    opts:[
      {t:'Mi avvicino, lo/la abbraccio, sto in silenzio con lui/lei.', v:'GA+'},
      {t:'Mi commuovo anche io, ci sento molto.', v:'BL+'},
      {t:'Cerco di capire cosa è successo e cosa si può fare.', v:'A'},
      {t:'Mi irrigidisco un po\', non so come gestire le emozioni altrui.', v:'BA-'},
    ]
  },
  {
    id:'v16', scenario:'Devi coordinare un gruppo su un compito urgente.',
    opts:[
      {t:'Definisco ruoli, tempi e obiettivi chiari per ognuno.', v:'A'},
      {t:'Motivo il gruppo, mi assicuro che tutti stiano bene.', v:'GA+'},
      {t:'Prendo il comando in modo diretto e deciso.', v:'GN+'},
      {t:'Aspetto che qualcuno prenda l\'iniziativa, poi mi adeguo.', v:'BA+'},
    ]
  },
  {
    id:'v17', scenario:'Qualcuno non rispetta un accordo preso con te.',
    opts:[
      {t:'Gliene parlo direttamente: «Avevamo detto X, cosa è successo?»', v:'A'},
      {t:'Mi arrabbio e glielo faccio pesare, anche con sarcasmo.', v:'GN-'},
      {t:'Rimango deluso/a ma non lo dico per non creare conflitto.', v:'BA-'},
      {t:'Cerco di capire se ha avuto difficoltà e gli/le vengo incontro.', v:'GA+'},
    ]
  },
  {
    id:'v18', scenario:'Sei di buon umore. Come lo esprimi nel quotidiano?',
    opts:[
      {t:'Sono produttivo/a, tutto scorre, lavoro bene.', v:'A'},
      {t:'Sono solare, faccio complimenti, condivido l\'energia con gli altri.', v:'BL+'},
      {t:'Sono gentile, mi preoccupo degli altri più del solito.', v:'GA+'},
      {t:'Quasi non lo dico — non voglio "bruciarlo" mostrandolo troppo.', v:'BA-'},
    ]
  },
  {
    id:'v19', scenario:'Una persona nuova entra nel tuo gruppo di lavoro.',
    opts:[
      {t:'La accogliere, le spiego come funzionano le cose, mi rendo disponibile.', v:'GA+'},
      {t:'Osservo prima come si comporta, poi decido quanto aprirmi.', v:'BA-'},
      {t:'Le do subito le informazioni essenziali, poi lavoro.', v:'A'},
      {t:'Mi entusiasmo, voglio conoscerla subito, creo subito connessione.', v:'BL+'},
    ]
  },
  {
    id:'v20', scenario:'Stai per concludere un lavoro importante. Come ti senti?',
    opts:[
      {t:'Soddisfatto/a, verifico che tutto sia a posto prima di dichiararlo finito.', v:'A'},
      {t:'Euforico/a, non vedo l\'ora di condividerlo con gli altri.', v:'BL+'},
      {t:'Penso già al prossimo: «Si potrebbe migliorare ancora...»', v:'GN-'},
      {t:'Un po\' vuoto/a: finché dura il processo mi sento utile, poi…', v:'BA-'},
    ]
  }
];

const VETTORI_LABELS = {
  'GN+': {name:'Genitore Normativo positivo', short:'GN+', color:'#ef4444', desc:'Dai regole chiare, guidi, proteggi. In eccesso: controllo, giudizio.'},
  'GN-': {name:'Genitore Normativo negativo', short:'GN−', color:'#b91c1c', desc:'Critica, punisce, svaluta. Rompe le transazioni.'},
  'GA+': {name:'Genitore Affettivo positivo', short:'GA+', color:'#f59e0b', desc:'Nutre, supporta, accudisce. In eccesso: salvataggio.'},
  'GA-': {name:'Genitore Affettivo negativo', short:'GA−', color:'#b45309', desc:'Iperprotegge, soffoca, genera dipendenza.'},
  'A':   {name:'Adulto', short:'A', color:'#3b82f6', desc:'Elabora il qui e ora, razionale, informativo. Vettore ideale.'},
  'BL+': {name:'Bambino Libero positivo', short:'BL+', color:'#10b981', desc:'Spontaneo, creativo, curioso, vitale.'},
  'BL-': {name:'Bambino Libero negativo', short:'BL−', color:'#059669', desc:'Egoistico, impulsivo, manipolativo.'},
  'BA+': {name:'Bambino Adattato positivo', short:'BA+', color:'#8b5cf6', desc:'Coopera, rispetta, negozia, sa adattarsi.'},
  'BA-': {name:'Bambino Adattato negativo', short:'BA−', color:'#6d28d9', desc:'Compiacente, ritirato, soppresso, evitante.'},
};

// Transazioni incrociate da vettore dominante
const TRANS_RISCHIO = {
  'GN-': {
    incrociata:'Invii messaggi G→B (critici) attendendoti A→A. L\'altro percepisce un giudizio e risponde con difesa (B→G) o silenzio (BA-). Stallo.',
    enneatipo:'Tipico di T1 (perfezione/critica) e T6 (ipervigilanza). Il controllo rompe le conversazioni.',
    correzione:'Sostituisci la critica con la domanda: «Cosa ne pensi?» invece di «Dovresti fare così».',
  },
  'GA+': {
    incrociata:'Offri supporto (G→B) quando l\'altro non lo ha chiesto (A→A). L\'altro si sente infantilizzato o in debito.',
    enneatipo:'Tipico di T2 (dare/aiutare) e T9 (armonia a tutti i costi). Il salvataggio genera dipendenza.',
    correzione:'Prima di aiutare, chiedi: «Vuoi che ti aiuti o vuoi che ascolti solo?»',
  },
  'A': {
    incrociata:'Raramente. Rischio: freddo/distaccato quando l\'altro ha bisogno di un vettore emotivo (GA+ o BL+).',
    enneatipo:'Tipico di T5 (analisi), T1 (logica), T6 (ragionamento). L\'eccessivo distacco emotivo isola.',
    correzione:'Integra il vettore GA+ nelle situazioni emotive: «Capisco come ti senti» prima dei dati.',
  },
  'BL+': {
    incrociata:'Entusiasmo (B→B) in contesti che richiedono A→A. L\'altro si sente non ascoltato o distratto.',
    enneatipo:'Tipico di T7 (entusiasmo) e T4 (espressività). L\'impulsività può saltare le fasi di ascolto.',
    correzione:'Prima di rispondere con l\'energia, fai una pausa: «Lasciami capire bene la situazione.»',
  },
  'BL-': {
    incrociata:'Risposte impulsive/sarcasmo (BL−→GN−) a stimoli neutri (A→A). L\'altro si irrigidisce o si chiude.',
    enneatipo:'Tipico di T8 (forza/dominio) e T4 in stress. La reattività escalation i conflitti.',
    correzione:'Identifica il trigger. Pratica il \'timeout\': esci fisicamente 5 minuti prima di rispondere.',
  },
  'BA+': {
    incrociata:'Compliance (BA+) quando l\'altro si aspetta una risposta diretta (A→A). Crei confusione: «Sei d\'accordo o no?»',
    enneatipo:'Tipico di T2 (piacere) e T9 (pace). La compiacenza sistematica alimenta risentimenti silenti.',
    correzione:'Allena il diritto a dissentire: «Non sono d\'accordo su questo specifico punto.»',
  },
  'BA-': {
    incrociata:'Ritiro o silenzio (BA−) a qualsiasi stimolo. L\'altro non sa mai a cosa aggrapparsi. Frustrazione.',
    enneatipo:'Tipico di T5 (ritiro) e T6 (paura). L\'evitamento sistematico non permette la risoluzione.',
    correzione:'Pratiche di espressione graduale: inizia con piccole opinioni, poi aumenta la consistenza.',
  },
};

let transAnswers = {};
let transStarted = false;

function startTransTest(){
  transStarted = true;
  transAnswers = {};
  document.getElementById('trans-test-welcome').style.display='none';
  document.getElementById('trans-test-progress').style.display='block';
  renderTransQuestion(0);
}

function renderTransQuestion(qi){
  const q = VETTORI_TEST_QS[qi];
  if(!q) return showTransResult();

  const progress = Math.round((qi/VETTORI_TEST_QS.length)*100);
  const prog = document.getElementById('trans-test-progress');

  // Shuffle options
  const shuffled = [...q.opts].sort(()=>Math.random()-0.5);

  prog.innerHTML = `
    <div class="trans-q-bar">
      <div class="trans-q-bar-fill" style="width:${progress}%"></div>
    </div>
    <div class="trans-q-num">Scenario ${qi+1} di ${VETTORI_TEST_QS.length}</div>
    <div class="trans-q-scenario">${q.scenario}</div>
    <div class="trans-q-opts">
      ${shuffled.map((o,i)=>`
        <button class="trans-q-opt" onclick="selectTransOpt('${q.id}','${o.v}',${qi})">
          <span class="trans-q-letter">${String.fromCharCode(65+i)}</span>
          ${o.t}
        </button>
      `).join('')}
    </div>
    <div class="trans-q-nav">
      ${qi>0?`<button class="trans-back-btn" onclick="renderTransQuestion(${qi-1})">← Indietro</button>`:''}
    </div>
  `;
}

function selectTransOpt(qid, vettore, qi){
  transAnswers[qid] = vettore;
  // Highlight selected briefly then advance
  setTimeout(()=>renderTransQuestion(qi+1), 300);
}

function showTransResult(){
  // Count vettori scores
  const scores = {'GN+':0,'GN-':0,'GA+':0,'GA-':0,'A':0,'BL+':0,'BL-':0,'BA+':0,'BA-':0};
  Object.values(transAnswers).forEach(v=>{ if(scores[v]!==undefined) scores[v]++; });

  // Group: positive vs negative
  const positive = {
    'A': scores['A'],
    'GN+': scores['GN+'],
    'GA+': scores['GA+'],
    'BL+': scores['BL+'],
    'BA+': scores['BA+'],
  };
  const negative = {
    'GN-': scores['GN-'],
    'BL-': scores['BL-'],
    'BA-': scores['BA-'],
  };

  const sorted = Object.entries(scores).sort((a,b)=>b[1]-a[1]);
  const primary = sorted[0][0];
  const second  = sorted[1][0];
  const total   = Object.values(scores).reduce((s,v)=>s+v,0)||1;

  const pv = VETTORI_LABELS[primary]||VETTORI_LABELS['A'];
  const sv = VETTORI_LABELS[second]||VETTORI_LABELS['A'];
  const risk = TRANS_RISCHIO[primary]||TRANS_RISCHIO['A'];

  // Bar chart data — top 5
  const top5 = sorted.slice(0,5);

  // Save to profile
  saveProfileResult('trans',{
    vettore_primario: primary,
    vettore_sec: second,
    scores,
    pct_primario: Math.round((sorted[0][1]/total)*100)
  });

  const prog = document.getElementById('trans-test-progress');
  prog.innerHTML = `
    <div class="trans-res-header" style="border-top:4px solid ${pv.color}">
      <div class="trans-res-label">Il tuo vettore comunicativo primario</div>
      <div class="trans-res-primary" style="color:${pv.color}">${pv.short}</div>
      <div class="trans-res-name">${pv.name}</div>
      <div class="trans-res-desc">${pv.desc}</div>
    </div>

    <div class="trans-res-bars">
      ${top5.map(([v,s])=>{
        const vd = VETTORI_LABELS[v]||{};
        const pct = Math.round((s/total)*100);
        return `<div class="trans-res-bar-row">
          <span class="trans-res-bar-label" style="color:${vd.color||'#888'}">${v}</span>
          <div class="trans-res-bar-wrap">
            <div class="trans-res-bar-fill" style="width:${pct}%;background:${vd.color||'#888'}"></div>
          </div>
          <span class="trans-res-bar-pct">${pct}%</span>
        </div>`;
      }).join('')}
    </div>

    ${risk?`<div class="trans-res-risk">
      <div class="trans-res-risk-title">⚡ Rischio transazione incrociata</div>
      <p>${risk.incrociata}</p>
      <div class="trans-res-risk-meta">
        <span>Enneatipi correlati: ${risk.enneatipo}</span>
      </div>
    </div>
    <div class="trans-res-fix">
      <div class="trans-res-fix-title">✦ Strategia correttiva</div>
      <p>${risk.correzione}</p>
    </div>`:''}

    <div class="trans-res-actions">
      <button onclick="startTransTest()" class="trans-restart-btn">↩ Rifai il test</button>
      <button onclick="st('consulente');setTimeout(()=>document.getElementById('chat-input').value='Ho completato il Test del Vettore Comunicativo: vettore primario ${primary}. Analizza il mio stile comunicativo e collega alla mia personalità AT.',150)" style="padding:.5rem 1.4rem;background:var(--gold);color:white;border:none;border-radius:20px;font-size:.78rem;font-weight:600;cursor:pointer">✦ Chiedi all\'AI una lettura</button>
    </div>
  `;

  prog.scrollIntoView({behavior:'smooth', block:'start'});
}

// ── Comunicazione Transazionale ──
const TRANS_INCROCIATA = {
  ad1: {
    tipica: "A→A (richiesta neutra) / risposta: silenzio o GN→BA (chiusura fredda) — l'altro si sente rifiutato e interrompe il contatto",
    enneatipo: "T5: l'Investigatore si ritira nel silenzio invece di rispondere dall'Adulto"
  },
  ad2: {
    tipica: "A→A (proposta di collaborazione) / risposta: BL−→BA (manipolazione charm) — l'altro non capisce se la risposta è vera o tattica",
    enneatipo: "T8: il Capo usa il Bambino Libero negativo per ribaltare la dinamica di potere"
  },
  ad3: {
    tipica: "A→A (informazione neutrale) / risposta: GN→BA (accusa o sospetto) — l'altro si trova a dover difendere una cosa mai messa in discussione",
    enneatipo: "T6: il Leale ipervigilante trasforma le transazioni A→A in scontri G→B"
  },
  ad4: {
    tipica: "G→G (decisione condivisa) / risposta: BL−→BL+ (sì ma..., opposizione) — l'altro si sente bloccato senza capire perché",
    enneatipo: "T9: il Pacificatore usa la resistenza passiva (BL−) invece di esprimere un Adulto assertivo"
  },
  ad5: {
    tipica: "B→G (richiesta di rassicurazione emotiva) / risposta: A→A o GN→BA (analisi fredda) — l'altro non riceve il supporto emotivo richiesto",
    enneatipo: "T1: il Perfezionista risponde all'emozione con logica, svalutando il bisogno affettivo"
  },
  ad6: {
    tipica: "A→A (informazione pratica) / risposta: BL→GA (dramma, iperreazione) — l'altro si sente responsabile di un'emozione che non ha causato",
    enneatipo: "T2/3/4: l'Istrionico amplifica il messaggio sociale attraverso il canale emotivo, provocando confusione"
  }
};

function renderTransCards(){
  const grid = document.getElementById("trans-cards-grid");
  if(!grid) return;
  grid.innerHTML = DB.adattamenti.map(a => {
    const t = TRANS_INCROCIATA[a.id]||{};
    const col = AT_COLORS[a.id]||"#888";
    const ennames = (a.enneatipi||[]).map(id=>{const e=byId(id);return e?e.short:id}).join(", ");
    const giochi3 = (a.giochi||[]).slice(0,3);
    const rimedi = a.rimedi||{};

    return `<div class="trans-card" id="tc-${a.id}">
      <div class="trans-card-header" onclick="toggleTransCard('${a.id}')">
        <div style="display:flex;align-items:center;gap:.6rem">
          <div style="width:10px;height:10px;border-radius:50%;background:${col};flex-shrink:0"></div>
          <div>
            <div class="trans-adatt-label">${a.name}</div>
            <div style="font-size:.7rem;color:var(--ink4)">Enneatipo: ${ennames}</div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:.4rem">
          <span class="trans-vettore-tag">${a.vettori||''}</span>
          <span class="trans-chevron">▼</span>
        </div>
      </div>
      <div class="trans-card-body">
        <div class="trans-body-section">
          <div class="trans-bs-title">⚡ Transazione incrociata tipica</div>
          <div class="trans-incrociata">${t.tipica||'—'}</div>
          <div style="font-size:.73rem;color:var(--ink4);margin-top:.3rem;font-style:italic">Enneatipo correlato: ${t.enneatipo||'—'}</div>
        </div>
        <div class="trans-body-section">
          <div class="trans-bs-title">♟ Giochi psicologici attivati</div>
          ${giochi3.map(g=>`<div class="trans-gioco">${g}</div>`).join('')}
        </div>
        <div class="trans-body-section">
          <div class="trans-bs-title">😤 Emozione parassita (racket)</div>
          <div class="trans-racket">${a.racket||'—'}</div>
        </div>
        ${rimedi.bach || rimedi.chakra ? `<div class="trans-body-section">
          <div class="trans-bs-title">🌿 Correzione con strumenti olistici</div>
          <div class="trans-rimedi">
            ${rimedi.bach?`<div class="trans-rimedio"><span class="trans-rimedio-icon">🌸</span><div><strong>Bach:</strong> ${rimedi.bach}</div></div>`:''}
            ${rimedi.fes?`<div class="trans-rimedio"><span class="trans-rimedio-icon">✿</span><div><strong>FES:</strong> ${rimedi.fes}</div></div>`:''}
            ${rimedi.chakra?`<div class="trans-rimedio"><span class="trans-rimedio-icon">◉</span><div><strong>Chakra:</strong> ${rimedi.chakra}</div></div>`:''}
            ${rimedi.frequenza?`<div class="trans-rimedio"><span class="trans-rimedio-icon">🎵</span><div><strong>Frequenza:</strong> ${rimedi.frequenza}</div></div>`:''}
            ${rimedi.meditazione?`<div class="trans-rimedio"><span class="trans-rimedio-icon">🧘</span><div><strong>Meditazione:</strong> ${rimedi.meditazione}</div></div>`:''}
          </div>
        </div>` : ''}
      </div>
    </div>`;
  }).join('');
}

function toggleTransCard(id){
  const card = document.getElementById('tc-'+id);
  if(!card) return;
  card.classList.toggle('open');
}

function renderAtCards(){
  const grid = document.getElementById("at-cards-grid");
  if(!grid) return;
  grid.innerHTML = DB.adattamenti.map(a => {
    const col = AT_COLORS[a.id]||"#888";
    const ennames = (a.enneatipi||[]).map(id=>{const e=byId(id);return e?e.short:id}).join(", ");

    // ── Giochi psicologici ──
    const giochiHtml = (a.giochi||[]).map(g =>
      `<div class="at-gioco"><span class="at-gioco-icon">♟</span><span>${g}</span></div>`
    ).join('');

    return `<div class="at-card" style="--ac:${col}">
      <div style="position:absolute;top:0;left:0;right:0;height:3px;background:${col};border-radius:var(--rxl) var(--rxl) 0 0"></div>
      <div class="at-card-tipo">
        <span class="at-tipo-badge ${a.tipo==='Sopravvivenza'?'at-sopravv':'at-perf'}">${a.tipo||''}</span>
        <span style="color:var(--ink4);font-size:.7rem">${a.eta||''}</span>
      </div>
      <div class="at-card-name">${a.name}</div>
      <div class="at-card-alt">${a.short}</div>

      <!-- Spinte e Porte -->
      <div class="at-props">
        <div class="at-prop"><div class="at-pl">Spinta/e</div><div class="at-pv">${a.spinta||''}</div></div>
        <div class="at-prop"><div class="at-pl">Copione</div><div class="at-pv at-copione">${a.copione||''}</div></div>
        <div class="at-prop"><div class="at-pl">Stile genitoriale</div><div class="at-pv">${a.stile||''}</div></div>
        <div class="at-prop"><div class="at-pl">Enneagramma</div><div class="at-pv">${ennames}</div></div>
        <div class="at-prop"><div class="at-pl">Vettori comunicaz.</div><div class="at-pv">${a.vettori||''}</div></div>
      </div>

      <!-- Porte -->
      <div class="at-porte">
        <span class="at-porta aperta">✓ Porta aperta: ${a.portaAperta||''}</span>
        <span class="at-porta bersaglio">◎ Bersaglio: ${a.portaBersaglio||''}</span>
        <span class="at-porta trappola">⚠ Trappola: ${a.portaTrappola||''}</span>
      </div>

      <!-- Giochi psicologici -->
      ${giochiHtml ? `<div class="at-section-title">♟ Giochi psicologici tipici</div>
      <div class="at-giochi">${giochiHtml}</div>` : ''}

      <!-- Copione di vita e Credenza core -->
      ${a.copione_vita ? `<div class="at-section-title">📜 Copione di vita</div>
      <div class="at-copione-vita">${a.copione_vita}</div>` : ''}

      ${a.credenza ? `<div class="at-credenza">
        <span class="at-credenza-icon">💭</span>
        <em>${a.credenza}</em>
      </div>` : ''}

      <!-- Permesso terapeutico -->
      ${a.permesso ? `<div class="at-permesso">
        <span class="at-permesso-icon">✦</span>
        <div><strong>Permesso terapeutico:</strong> ${a.permesso}</div>
      </div>` : ''}

      <div class="at-desc">${a.desc}</div>
    </div>`;
  }).join("");
}

// ── EGOGRAMMA ──
const EGO = [
  {key:"GN",label:"Genitore\nNormativo",col:"#ef4444",desc:"Critica, dà norme, comanda, vieta. È ok quando protegge; non ok quando svaluta l'altro con giudizi rigidi."},
  {key:"GA",label:"Genitore\nAffettivo",col:"#f59e0b",desc:"Accudisce, mostra affetto, protegge e dà i permessi. Non ok quando è iperprotettivo o svalutante."},
  {key:"A",label:"Adulto",col:"#3b82f6",desc:"Elabora informazioni in modo obiettivo, nel qui ed ora. È il centro decisionale consapevole. Va 'allenato' come un muscolo."},
  {key:"BL",label:"Bambino\nLibero",col:"#10b981",desc:"Spontaneità, creatività, gioia. È ok quando esprime energia vitale; non ok quando ignora le conseguenze sociali."},
  {key:"BA",label:"Bambino\nAdattato",col:"#8b5cf6",desc:"Rispetta le aspettative esterne. Ok quando l'adattamento è funzionale da adulto; non ok quando ripropone comportamenti infantili."}
];
let egoVals = {GN:5,GA:6,A:7,BL:6,BA:4};

function renderEgogramma(){
  const barsEl = document.getElementById("ego-bars");
  const slidersEl = document.getElementById("ego-sliders");
  const statesEl = document.getElementById("ego-states-desc");
  if(!barsEl) return;

  barsEl.innerHTML = EGO.map(e=>`
    <div class="ego-bar-col">
      <span class="ego-bar-val" id="egov-${e.key}">${egoVals[e.key]}</span>
      <div class="ego-bar-outer" style="height:170px" title="${e.key}">
        <div class="ego-bar-inner" id="ebar-${e.key}" style="background:${e.col};height:${egoVals[e.key]*17}px"></div>
      </div>
      <span class="ego-bar-label">${e.key}</span>
    </div>`).join("");

  slidersEl.innerHTML = EGO.map(e=>`
    <div class="ego-slider-row">
      <label>${e.key} — ${e.label.replace('\n',' ')}</label>
      <input type="range" min="1" max="10" value="${egoVals[e.key]}" class="ego-slider"
        oninput="updateEgo('${e.key}',+this.value)" style="accent-color:${e.col}">
    </div>`).join("");

  statesEl.innerHTML = EGO.map(e=>`
    <div class="ego-state-card">
      <h4 style="color:${e.col}">${e.key} — ${e.label.replace('\n',' ')}</h4>
      <p>${e.desc}</p>
    </div>`).join("");

  updateEgoDesc();
}

function updateEgo(key, val){
  egoVals[key]=val;
  const bar = document.getElementById("ebar-"+key);
  const lbl = document.getElementById("egov-"+key);
  if(bar) bar.style.height = (val*17)+"px";
  if(lbl) lbl.textContent = val;
  updateEgoDesc();
}

function updateEgoDesc(){
  const sorted = Object.entries(egoVals).sort((a,b)=>b[1]-a[1]);
  const top = sorted[0];
  const low = sorted[sorted.length-1];
  const descs = {
    GN:"Tendi a dare molte norme e a esercitare controllo. Assicurati che sia al servizio dell'altro.",
    GA:"Sei molto presente con cura e affetto. Attenzione all'iperprotezione.",
    A:"Sei fortemente ancorato alla realtà e alle decisioni razionali. Ottimo.",
    BL:"Sei spontaneo e creativo. La gioia è la tua forza principale.",
    BA:"Ti adatti facilmente alle aspettative. Verifica che sia una scelta consapevole."
  };
  const lowDescs = {
    GN:"Potresti avere difficoltà a stabilire confini e regole chiare.",
    GA:"Potresti mantenere distanza emotiva nelle relazioni.",
    A:"Potresti prendere decisioni guidate dal Genitore o dal Bambino invece che dall'Adulto.",
    BL:"Potresti non consentirti abbastanza spontaneità e piacere.",
    BA:"Potresti avere difficoltà ad adattarti alle aspettative sociali quando necessario."
  };
  document.getElementById("ego-desc-box").innerHTML = 
    `<strong style="color:var(--gold)">${top[0]} predominante (${top[1]}/10):</strong> ${descs[top[0]]}<br>
     <strong style="color:var(--dusty)">${low[0]} da sviluppare (${low[1]}/10):</strong> ${lowDescs[low[0]]}`;
}

// ── CAREZZE ──
function updateCarezza(el){
  const val = el.value;
  const type = el.dataset.type;
  const mode = el.dataset.mode;
  const display = document.getElementById("cv-"+type+"-"+mode);
  if(display) display.textContent = val;
  analyzeCarezze(type);
}

function analyzeCarezze(type){
  const getVal = (t,m) => {
    const el = document.querySelector(`.carezza-slider[data-type="${t}"][data-mode="${m}"]`);
    return el ? +el.value : 5;
  };
  if(type==="pos"){
    const dare = getVal("pos","dare"), prendere = getVal("pos","prendere");
    const chiedere = getVal("pos","chiedere"), rifiutare = getVal("pos","rifiutare");
    let msg = "";
    if(dare >= 8 && prendere <= 4) msg = "Dai molto ma ricevi poco: potresti avere un adattamento Istrionico o un copione di sacrificio. Prova ad aprirsi a ricevere.";
    else if(chiedere <= 3) msg = "Non chiedi mai carezze direttamente: potresti seguire la spinta 'Sii forte' o 'Sforzati'. Le carezze si possono anche chiedere.";
    else if(dare >= 8 && prendere >= 8) msg = "Scambio ricco e reciproco: eccellente base per relazioni nutrienti.";
    else if(rifiutare >= 7) msg = "Ti rifiuti spesso di dare carezze positive: potrebbe indicare esaurimento emotivo o confini rigidi.";
    else msg = `Profilo positivo: dare ${dare}/10 · ricevere ${prendere}/10 · chiedere ${chiedere}/10. Una carezza condizionata positiva riconosce ciò che fai; quella incondizionata riconosce ciò che sei.`;
    const el = document.getElementById("carezza-pos-result");
    if(el) el.innerHTML = msg;
  } else {
    const dare = getVal("neg","dare"), prendere = getVal("neg","prendere");
    let msg = "";
    if(dare >= 7 && prendere >= 7) msg = "Alto scambio di carezze negative: pattern relazionale conflittuale. Qualsiasi carezza è meglio che nessuna — ma il percorso evolutivo è migrare verso quelle positive.";
    else if(dare <= 2 && prendere <= 2) msg = "Basso scambio di negatività: ottimo equilibrio. Attenzione però: una leggera negatività strutturata aiuta a stabilire confini sani.";
    else msg = `Profilo negativo: dare ${dare}/10 · ricevere ${prendere}/10. Le carezze negative condizionate ('Non mi piace il tuo comportamento') sono più sane di quelle incondizionate ('Ti odio').`;
    const el = document.getElementById("carezza-neg-result");
    if(el) el.innerHTML = msg;
  }
}

// ── FAQ ──
const FAQ_DATA = [
  // ── AT ──
  {cat:"AT",q:"Cos'è l'Analisi Transazionale?",a:"L'AT è una teoria della personalità e della comunicazione sviluppata da Eric Berne negli anni '60. Studia come le persone interagiscono (transazioni), i copioni di vita e i tre stati dell'Io (Genitore, Adulto, Bambino). È uno strumento pratico per il counseling, la terapia e la crescita personale."},
  {cat:"AT",q:"Cosa sono i 6 adattamenti di personalità AT?",a:"Sono i 6 stili adattativi che sviluppiamo nei primi 6 anni di vita. Tre di sopravvivenza (Schizoide, Antisociale, Paranoide — 0-18 mesi) e tre di performance (Passivo-Aggressivo, Ossessivo-Compulsivo, Istrionico — 18 mesi-6 anni). Ogni adattamento ha una porta aperta, un bersaglio e una trappola comunicativa. Non indicano patologia, ma lo stile adattivo."},
  {cat:"AT",q:"Come funzionano le porte di accesso nell'AT?",a:"Ogni adattamento ha tre porte: la porta aperta (dove investiamo più energia: emozioni, pensiero o comportamento), la porta bersaglio (su cui lavorare per il cambiamento) e la porta trappola (da evitare nelle prime fasi, perché blocca la relazione). Es: con un Istrionico si parte sempre dalle emozioni; proporre subito azioni concrete è la trappola."},
  {cat:"AT",q:"Cosa sono le spinte del copione?",a:"Le 5 spinte (Sii perfetto, Sii forte, Sforzati, Cerca di piacere, Sbrigati) sono messaggi genitoriali interiori. Ognuna corrisponde a un copione di vita: 'Finché non finisco non mi diverto' (Sii perfetto), 'Non otterrò mai ciò che voglio' (Sii forte), 'Mi succede sempre questo' (Sforzati), 'Lo pagherò domani' (Cerca di piacere). Sbrigati rinforza le altre."},
  {cat:"AT",q:"Cos'è l'Egogramma?",a:"L'Egogramma (Dusay, 1977) rappresenta graficamente i 5 stati dell'Io funzionali: GN (Genitore Normativo), GA (Genitore Affettivo), A (Adulto), BL (Bambino Libero), BA (Bambino Adattato). La somma tende a essere costante: alzare uno stato spesso ne abbassa un altro. Sposta i cursori nella sezione Egogramma del sito per esplorare il tuo profilo."},
  {cat:"AT",q:"Cosa sono le carezze nell'AT?",a:"Le carezze sono unità di riconoscimento dell'altro. Possono essere positive o negative, condizionate (per ciò che fai) o incondizionate (per ciò che sei). Qualsiasi carezza è meglio che nessuna carezza: da bambini, se non ottenevamo carezze positive, imparavamo a ottenere quelle negative. Nella sezione Carezze puoi valutare quanto liberamente dai, ricevi, chiedi e rifiuti riconoscimento."},
  {cat:"AT",q:"Cosa misura il Test degli Adattamenti AT?",a:"Il test misura l'intensità e la polarità Estroversa/Introversa dei 6 adattamenti di personalità AT. 40 domande Sì/No (29 originali + 11 migliorative), circa 8-10 minuti. Il risultato mostra l'adattamento primario e secondario, le porte di accesso e le connessioni a chakra, cristalli e frequenze solfeggio."},
  {cat:"AT",q:"Cosa significa E e I nel test degli adattamenti?",a:"E (Estroverso) = l'adattamento si esprime verso l'esterno: azione visibile, relazione, comportamento osservabile. I (Introverso) = si esprime verso l'interno: ritiro, elaborazione silenziosa, difesa nascosta. Conoscere la propria polarità aiuta a capire come l'adattamento si manifesta nelle relazioni e nel lavoro."},
  {cat:"AT",q:"Come si usa la porta aperta nel counseling AT?",a:"Vai sempre alla porta aperta prima di tutto. Istrionico → parti dalle emozioni. Ossessivo-Compulsivo e Paranoide → parti dal pensiero. Schizoide, Antisociale, Passivo-Aggressivo → parti dal comportamento concreto. Dalla porta aperta spostati verso il bersaglio. Evita la trappola soprattutto nelle prime sessioni."},
  {cat:"AT",q:"Cosa sono le carezze false e di plastica?",a:"La carezza falsa inizia con qualcosa di positivo e finisce con una critica ('Vedo che capisci, più o meno'). La carezza di plastica è insincera, esagerata, svuotata di significato. Entrambe distorcono la comunicazione e alimentano copioni negativi. Riconoscerle è il primo passo per costruire relazioni più autentiche."},
  // ── Enneagramma ──
  {cat:"Enneagramma",q:"Cos'è l'Enneagramma Evolutivo?",a:"L'Enneagramma Evolutivo di Carlo Alberto Calcagno non è solo un sistema di classificazione ma una mappa di percorsi di trasformazione. Integra le Dignità di Raimondo Lullo, le gerarchie angeliche, le muse greche, i chakra e i percorsi evolutivi per fascia d'età. I 9 tipi attraversano fasi diverse a seconda dell'età (0-3, 3-12, 12-19, 19-30, 30-60, 60+)."},
  {cat:"Enneagramma",q:"Cosa sono i 9 Frutti dell'Albero della Vita?",a:"I 9 Frutti sono il sistema simbolico originale di Carlo Alberto Calcagno: Mela (T1-Il Perfezionista), Pera (T2-L'Altruista), Ciliegia (T3-Il Manager), Nespola (T4-Il Romantico), Uva (T5-L'Eremita), Mirtillo (T6-Il Leale), Ananas (T7-L'Entusiasta), Albicocca (T8-Il Capo), Fragola (T9-Il Diplomatico). Ogni frutto porta attributi spirituali unici."},
  {cat:"Enneagramma",q:"Come funziona il Test dei 9 Frutti?",a:"180 domande Sì/No (20 per ciascun frutto), circa 15-20 minuti. Risposta istintiva, non ragionata. Il frutto con il punteggio più alto determina il tuo enneatipo principale. Il secondo più alto tra i due adiacenti determina l'ala. Il risultato si connette automaticamente a chakra, cristalli, frequenze, adattamenti AT e Fiori di Bach."},
  {cat:"Enneagramma",q:"Cosa sono le Dignità di Raimondo Lullo?",a:"Raimondo Lullo (XIII sec.) identificò 9 perfezioni divine: Grandezza, Eternità, Potenza, Sapienza, Volontà, Verità, Gloria, Bontà, Perfezione. Nell'Enneagramma Evolutivo ognuna corrisponde a un enneatipo come 'missione spirituale': T1-Volontà, T2-Eternità, T3-Sapienza, T4-Sapienza, T5-Verità, T6-Grandezza, T7-Grandezza, T8-Gloria, T9-Perfezione."},
  {cat:"Enneagramma",q:"Come funziona il percorso evolutivo per fascia d'età?",a:"I tipi 3-6-9 hanno un ciclo breve (3 fasi); i tipi 1-2-4-5-7-8 hanno un ciclo lungo (6 fasi). Es. il Tipo 1 passa da 1→7→5→8→2→4 nel percorso di integrazione. Ogni fase porta una diversa dignità, gerarchia angelica, musa e chakra. Clicca su un enneatipo nella sezione Enneatipi per vedere il percorso completo."},
  {cat:"Enneagramma",q:"Come si individuano i 3 sottotipi di ogni enneatipo?",a:"Ogni enneatipo ha 3 sottotipi: conservativo (autoconservazione), sociale (appartenenza al gruppo) e sessuale (relazione duale intensa). Lo stesso Tipo 2 sarà molto diverso: il conservativo è dedizione assoluta, il sociale è ambizione attraverso l'altruismo, il sessuale è seduzione magnetica."},
  {cat:"Enneagramma",q:"Come si usa la matrice di compatibilità di coppia?",a:"Vai alla sezione 'Compatibilità di Coppia'. Seleziona i due enneatipi dai menu. Il sistema mostra percentuale di compatibilità, livello (eccellente/ottima/buona/media/difficile), punti di forza, sfide e consigli pratici basati sulla ricerca di Carlo Alberto Calcagno sui 81 possibili abbinamenti."},
  // ── Chakra ──
  {cat:"Chakra",q:"Come si usa il sistema dei chakra in terapia?",a:"I 7 chakra mappano lo sviluppo psico-emotivo: ogni centro governa un diritto fondamentale, uno stadio evolutivo e una ghiandola endocrina. Un chakra 'bloccato' si manifesta come pattern emotivo negativo ricorrente. Si lavora con cristalli, frequenze sonore, esercizi corporei e alimentazione mirata. Il Database del sito mostra tutte le connessioni."},
  {cat:"Chakra",q:"Qual è la connessione tra chakra ed enneatipi?",a:"1° chakra (sopravvivenza) → T8-9-1; 2°-3° (emozioni/potere) → T2-3-4; 5°-6°-7° (pensiero/intuizione) → T5-6-7. Questa correlazione permette percorsi integrati: un T5 con blocco al 5° chakra beneficia delle stesse frequenze (741Hz) sia energeticamente che psicologicamente."},
  // ── Cristalli ──
  {cat:"Cristalli",q:"Come si scelgono i cristalli per un lavoro terapeutico?",a:"Si parte dal chakra coinvolto, dal disturbo presentato e dall'enneatipo. Nel Database seleziona 'Cristalli' e cerca per nome, chakra o disturbo. Ogni cristallo ha funzione primaria, disturbi correlati e frequenza solfeggio abbinata. Es: Ametista per il 6°-7° chakra, ansia e insonnia; Granato per il 1° chakra, paura e mancanza di radicamento."},
  // ── Bach ──
  {cat:"Bach",q:"Come si scelgono i Fiori di Bach?",a:"I Fiori di Bach si scelgono dallo stato emotivo negativo presente, non dal sintomo fisico. Ogni rimedio trasforma uno stato negativo nella sua qualità positiva (Larch: scarsa autostima → fiducia). Correlano ai chakra attraverso il piano emotivo. Il Rescue Remedy è la combinazione d'emergenza per shock e traumi acuti."},
  {cat:"Bach",q:"I Fiori di Bach sono compatibili con altri trattamenti?",a:"Sì. Sono sicuri, non tossici e compatibili con qualsiasi trattamento medico, psicologico o olistico. Non sostituiscono il parere del medico ma agiscono sul terreno emotivo da cui i sintomi emergono. Utili come supporto complementare nei percorsi di counseling e terapia."},
  // ── Pranoterapia ──
  {cat:"Pranoterapia",q:"Cos'è la pranoterapia?",a:"La pranoterapia è la trasmissione consapevole di energia pranale attraverso le mani. A differenza del Reiki che usa energia universale, la pranoterapia utilizza l'energia personale dell'operatore formato. Agisce su quattro livelli: fisico, emotivo, mentale e spirituale. Utile come complemento a cristalloterapia e frequenze solfeggio."},
  {cat:"Pranoterapia",q:"Chi può praticare la pranoterapia?",a:"Potenzialmente chiunque: siamo tutti esseri energetici. L'impulso è innato — una madre che posa la mano sul bambino ferito fa pranoterapia. Un trattamento formale richiede formazione specifica per leggere il campo energetico, trasmettere consapevolmente e proteggersi dall'esaurimento."},
  // ── Test ──
  {cat:"Test",q:"Come funziona il Test dei 9 Frutti?",a:"180 domande Sì/No in 9 sezioni da 20 domande ciascuna. Puoi navigare liberamente tra i frutti con i pulsanti emoji in cima. Quando completi un frutto si avanza automaticamente. Il risultato mostra il tuo profilo completo a barre e collega il tuo tipo a chakra, cristalli, frequenze, AT e Bach."},
  {cat:"Test",q:"Come funziona il Test degli Adattamenti AT?",a:"40 domande Sì/No in 6 sezioni (una per adattamento). Risposta istintiva, non ragionata. Il risultato mostra l'intensità di ogni adattamento e se si esprime in modo estroverso o introverso. Tre pulsanti finali: vedi la scheda AT completa, scopri la compatibilità relazionale con il tuo tipo, oppure chiedi alla Consulente AI un percorso personalizzato."},
  {cat:"Test",q:"Posso fare entrambi i test?",a:"Sì, anzi è consigliato. Il Test dei 9 Frutti identifica il tuo enneatipo principale; il Test degli Adattamenti AT rivela il tuo stile relazionale e comunicativo. I due risultati sono complementari: conoscere sia il tuo enneatipo che il tuo adattamento primario ti dà una mappa molto più precisa per il lavoro su di te."},
  // ── Sito ──
  {cat:"Sito",q:"Come funziona la ricerca nel database?",a:"Premi 'Cerca' in alto o nell'hero. Digita qualsiasi parola: un cristallo, un disturbo, un enneatipo, una frequenza. Il sistema cerca in tutti i campi di tutti i domini e raggruppa i risultati per categoria. Clicca su un risultato per aprirlo nel Database Explorer con tutte le sue connessioni."},
  {cat:"Sito",q:"Come usa il database la Consulente AI?",a:"La Consulente AI ha accesso all'intero database via system prompt: 7 chakra, 15 cristalli, 9 enneatipi, 8 frequenze, 6 adattamenti AT, 15 Fiori di Bach, 7 schede alimentazione, 13 esercizi. Su GitHub Pages è necessaria una API Key Anthropic personale (gratuita al primo utilizzo). Il banner nella chat guida la configurazione."},
  {cat:"Sito",q:"Come funziona il Database Explorer?",a:"Seleziona un dominio nelle schede (Chakra, Cristalli, Enneatipi, Musica, Adattamenti, Esercizi). Clicca un elemento nella lista. Il pannello di destra mostra tutti i campi e le connessioni con gli altri domini — ogni chip è cliccabile e porta al dettaglio dell'elemento correlato."},
  {cat:"Sito",q:"Come funziona la Consulente AI?",a:"La Consulente AI è integrata direttamente nel sito e non richiede nessuna configurazione. Puoi usarla immediatamente su qualsiasi dispositivo. Basta descrivere la tua situazione — un disturbo fisico, una difficoltà emotiva, il tuo enneatipo — e la consulente olistica ti risponde attingendo all'intero database di chakra, cristalli, enneatipi, frequenze, fiori di Bach e AT."},
  {cat:"Sito",q:"Cosa sono i percorsi consigliati nella Guida?",a:"Sequenze di utilizzo ottimizzate per diversi profili: primo approccio olistico, approfondimento AT, cristalloterapia pratica, fiori di Bach. Ogni percorso suggerisce i passi nel sito per ottenere il massimo. Accessibile dalla sezione Guida nel menu."}
,

  // ── Neuroscienze ──
  {cat:"Neuroscienze",q:"Cosa sono le aree cerebrali degli enneatipi?",a:"Secondo Tony Nader (ricercatore vedico) ogni enneatipo corrisponde a una specifica area del cervello: T1→Amigdala, T2→Talamo, T3→Testa del nucleo caudato, T4→Nucleo subtalamico, T5→Putamen, T6→Coda del nucleo caudato, T7→Globo pallido, T8→Pars Reticolare e Substantia Nigra, T9→Ipotalamo. Queste aree sono collegate anche ai Chakra e ai pianeti vedici."},
  {cat:"Neuroscienze",q:"Cos'è il cervello tripartito e come si collega all'Enneagramma?",a:"Paul MacLean (neuroscienziato) ha descritto tre cervelli sovrapposti: il Rettiliano (sopravvivenza, territorio, gangli della base), il Paleomammaliano/Limbico (emozioni, memoria, attaccamento) e il Neomammaliano/Corticale (ragione, linguaggio). Gli enneatipi T3, T4, T5, T6, T7, T8 hanno la loro area nel cervello rettiliano; T1, T2, T9 nel sistema limbico. Nell'AT il Bambino corrisponde al limbico, l'Adulto alla corteccia prefrontale."},
  {cat:"Neuroscienze",q:"Cosa sono le Muse di Kircher e come si collegano agli enneatipi?",a:"Athanasius Kircher (1665) correlò le 9 gerarchie angeliche, le facoltà umane e le 9 Muse greche agli enneatipi: T1→Urania (astronomia/geometria), T2→Polimnia (memoria/retorica), T3→Euterpe (musica), T4→Erato (poesia amorosa), T5→Melpomene (tragedia), T6→Tersicore (danza), T7→Calliope (poesia epica), T8→Clio (storia), T9→Talia (poesia bucolica). Ogni enneatipo porta nel mondo una specifica 'conoscenza' legata alla propria Musa."},
  {cat:"Neuroscienze",q:"Come si collega il cervello rettiliano all'Analisi Transazionale?",a:"Il cervello rettiliano (gangli della base, tronco encefalico) corrisponde al Bambino Somatico nell'AT — gli istinti primari di sopravvivenza, territorialità e riproduzione. Il sistema limbico (amigdala, talamo, ipotalamo) corrisponde al Bambino Emotivo — emozioni, attaccamento, memoria affettiva. La corteccia prefrontale corrisponde all'Adulto AT — razionalità, pianificazione, coscienza. Il Genitore AT risiede nella neocorteccia dove sono immagazzinati i valori introiettati."},
  // ── Update Sito FAQ ──
  {cat:"Sito",q:"La Consulente AI ha bisogno di una chiave API?",a:"No. La Consulente AI è ora integrata direttamente nel sito senza bisogno di inserire nessuna chiave. È disponibile automaticamente a tutti gli utenti su tutti i dispositivi."}
,
  {cat:"FES",q:"Cosa sono i Fiori Californiani FES?",a:"Le essenze floreali FES (Flower Essence Society) sono state sviluppate in California da Richard e Patricia Kaminski negli anni '70, ampliando il sistema di Bach con 100 nuove essenze. Si concentrano su temi contemporanei: creatività, sessualità integrata, relazioni, crescita spirituale incarnata. Agiscono sul campo bioenergetico trasformando pattern emotivi e mentali profondi."},
  {cat:"FES",q:"Qual è la differenza tra fiori di Bach e FES?",a:"I 38 fiori di Bach di Edward Bach (1930s) coprono i principali stati emotivi negativi con un sistema semplice e universale. I 100 fiori FES ampliano questo con essenze californiane per stati più complessi e sfumati, con maggiore attenzione alla sessualità, alla spiritualità incarnata e alla creatività. Le FES integrano i fiori di Bach senza sostituirli."},
  {cat:"Bush",q:"Cosa sono le Australian Bush Flower Essences?",a:"Le Bush Essences (ABFE) sono state sviluppate da Ian White, naturopata australiano di quinta generazione, dagli anni '80. Le 65 essenze provengono dalle piante selvatiche australiane — le più antiche del pianeta — che hanno sviluppato straordinarie qualità vibrazionali in milioni di anni di evoluzione isolata. Si caratterizzano per azione diretta, rapida e profonda."},
  {cat:"Bush",q:"Per cosa sono particolarmente indicate le Bush Essences?",a:"Le Bush Essences sono eccellenti per: chiarezza spirituale e apertura (Bush Iris), pattern familiari ereditati (Boab), crisi spirituali (Mint Bush), dolore profondo del cuore (Sturt Desert Pea), disperazione nera (Waratah), squilibri ormonali femminili (She Oak), pensieri ossessivi (Boronia), bassa autostima (Five Corners), traumi dell'aura (Fringed Violet) e senso di scopo (Silver Princess)."},
  {cat:"Psicodinamica",q:"Cosa sono i meccanismi di difesa?",a:"Sono strategie inconsce che l'Io attiva per fronteggiare l'angoscia quando un impulso inaccettabile preme per emergere alla coscienza. I principali sono: Rimozione (dimenticare), Proiezione (attribuire ad altri le proprie emozioni), Razionalizzazione (giustificarsi), Formazione reattiva (trasformare odio in amore), Diniego (negare la realtà), Idealizzazione, Annullamento, Isolamento affettivo, Sublimazione, Intellettualizzazione. In mediazione le parti usano spesso proiezione ('la colpa è sua') e razionalizzazione."},
  {cat:"Psicodinamica",q:"Cosa sono Es, Io e Super Io?",a:"La seconda topica freudiana descrive tre istanze. L'Es è il serbatoio delle pulsioni inconsce, opera secondo il principio di piacere e vuole la soddisfazione immediata. L'Io media tra Es e realtà esterna, opera secondo il principio di realtà. Il Super Io è il giudice interiore interiorizzato dai genitori: in forma sana è guida etica, in forma patologica perseguita l'Io fino alla depressione. In AT: Es→Bambino, Io→Adulto, Super Io→Genitore."},
  {cat:"Psicodinamica",q:"Come si collegano le fasi di sviluppo di Freud agli enneatipi?",a:"Le fasi freudiane lasciano tracce nel carattere adulto correlabili agli enneatipi. La fase Orale (0-1.5a) produce dipendenza/fiducia correlata ai tipi 2 e 9. La fase Anale (1.5-3a) produce controllo/autonomia correlata ai tipi 1 e 8. La fase Fallica (3a-pubertà) con il complesso di Edipo e l'angoscia di castrazione è correlata ai tipi 6 e 3. La fissazione in una fase produce un adattamento di personalità specifico."},
  {cat:"Rogers",q:"Cos'è la tendenza attualizzante di Rogers?",a:"È la spinta innata in ogni organismo verso la crescita, l'autonomia, la maturità e la piena realizzazione. Per Rogers non è necessario 'riparare' le persone: la crescita avviene naturalmente quando si creano le condizioni giuste (congruenza, accettazione incondizionata, empatia). È analoga alla spinta evolutiva dell'Enneagramma Evolutivo di Calcagno."},
  {cat:"Rogers",q:"Cosa sono le tre condizioni di Rogers?",a:"Le condizioni necessarie e sufficienti per la crescita terapeutica (e per una buona mediazione): 1) Congruenza: il terapeuta/mediatore è autentico, non nasconde sé stesso dietro una maschera professionale. 2) Accettazione incondizionata: accettare la persona nella sua globalità, senza giudicarla. 3) Empatia: capire il frame interno dell'altro dall'interno, non dall'esterno. Queste condizioni creano un clima non minaccioso che permette esplorazione e cambiamento."},
  {cat:"Neuroscienze",q:"Come si attivano i tre cervelli in mediazione?",a:"Quando una parte è arrabbiata o spaventata il cervello rettiliano/limbico è dominante: il linguaggio si blocca (regola del blocco), la neocorteccia va offline. Il mediatore deve prima riportare il sistema nervoso allo Stato 1 (sicurezza/connessione) prima di qualsiasi dialogo razionale. I 6 stimoli che attivano il cervello rettiliano: sorpresa, egocentrismo, contrasto, concretezza, inizio/fine, immagini visive. La legge di Fechner spiega perché alzare la voce viene percepito molto più intensamente di quanto si creda."}
,
  {cat:"VAK",q:"Cosa sono i canali VAK?",a:"VAK è l'acronimo di Visivo, Auditivo, Cinestetico (Kinesthetic in inglese). Secondo la Programmazione Neuro-Linguistica (PNL), ogni persona elabora la realtà preferenzialmente attraverso uno di questi tre canali sensoriali. Il Visivo pensa per immagini, l'Auditivo per suoni e parole, il Cenestesico per sensazioni fisiche ed emozioni. Il canale dominante si rivela nel linguaggio usato, nella postura, nei movimenti degli occhi e nel tono di voce."},
  {cat:"VAK",q:"Come si correlano VAK, Enneagramma e AT?",a:"Secondo Calcagno esiste una corrispondenza: Visivo → enneatipi 3,7,8 (tipi d'azione) → Asta/Accusatore di Satir → Genitore Normativo/Adulto AT; Auditivo → enneatipi 1,5,6 (tipi intellettuali) → Cerchio/Superlogico → Adulto AT; Cenestesico → enneatipi 2,4,9 (tipi emotivi) → Triangolo/Propiziatore → Bambino AT. Queste non sono correlazioni assolute ma tendenze frequenti che aiutano il mediatore/counselor a calibrare la comunicazione."},
  {cat:"VAK",q:"Cos'è la Time Line nella PNL?",a:"La Time Line è uno strumento PNL in cui si traccia una linea immaginaria con passato, presente e futuro. Il soggetto si posiziona fisicamente su ciascun punto e risponde a domande usando il linguaggio del suo canale VAK (visivo: 'come visualizza il futuro?'; auditivo: 'cosa si dice?'; cenestesico: 'come si sente?'). In mediazione viene usata nella sessione privata per portare il mediant a ricordare un passato positivo e a costruire una visione di futuro che motivi l'accordo."},

  // ── Frequenze Solfeggio ──
  {cat:"Frequenze",q:"Cos'è la scala solfeggio e a cosa serve?",a:"Le frequenze solfeggio sono una scala di 9 toni (174Hz–963Hz) usata in musica terapeutica. Ogni frequenza è associata a uno stato emotivo e a un chakra specifico: 396Hz scioglie la paura (chakra radice), 528Hz è nota per la trasformazione (plesso solare), 639Hz favorisce le relazioni (chakra del cuore), 852Hz attiva l'intuizione (terzo occhio). Non sono frequenze magiche, ma strumenti di supporto meditativo e rilassamento profondo."},
  {cat:"Frequenze",q:"Come si usano le frequenze solfeggio in pratica?",a:"Si ascoltano preferibilmente con cuffie, durante meditazione, rilassamento o lavoro creativo. 20-40 minuti al giorno sono sufficienti. Puoi abbinarle ai cristalli corrispondenti (es. 528Hz + Citrino per il plesso solare) oppure usarle come sottofondo durante pratiche corporee. Su frequenze-evolutive.it puoi generare prompt musicali personalizzati basati sul tuo enneatipo e sulla frequenza scelta."},
  {cat:"Frequenze",q:"Cosa lega le frequenze solfeggio ai chakra?",a:"Ogni frequenza risuona con un centro energetico: 174Hz (dolore fisico, radice), 285Hz (rigenerazione, radice-sacrale), 396Hz (paura/colpa, radice), 417Hz (cambiamento, sacrale), 528Hz (trasformazione/DNA, plesso solare), 639Hz (relazioni, cuore), 741Hz (espressione, gola), 852Hz (intuizione, terzo occhio), 963Hz (connessione spirituale, corona). Trovi le schede complete nella sezione Frequenze del database."},
  // ── Percorsi ──
  {cat:"Percorsi",q:"Come si usa la Mappa del Viaggio?",a:"La Mappa del Viaggio (in home page) guida il tuo percorso in 5 fasi: Fase 0 Accoglienza (chi sono), Fase 1 Conosci te stesso (Check, Enneatipo, AT, VAK), Fase 2 Approfondisci (Enneagramma, AT, discipline), Fase 3 Esplora il database (chakra, cristalli, fiori), Fase 4 Integra (consulente AI, percorso di coppia), Fase 5 Pratica (esercizi, meditazione, alimentazione). Puoi seguire l'ordine o saltare dove ti serve."},
  {cat:"Percorsi",q:"Qual è il percorso consigliato per chi inizia da zero?",a:"Parti dal Check Integrato: risponde a 5 domande rapide e ti indirizza nella sezione più adatta. Se preferisci autonomia, segui questo ordine: (1) Test dei 9 Frutti per l'enneatipo, (2) Test Adattamenti AT per lo stile relazionale, (3) Test VAK per il canale sensoriale preferito, (4) Database per esplorare chakra e cristalli del tuo profilo, (5) Consulente AI per domande personalizzate."},
  {cat:"Percorsi",q:"Come funziona il Check Integrato?",a:"Il Check Integrato (bottone ✦ in alto nella nav e nell'hero) è un wizard in 5 passi che ti chiede cosa stai cercando — lavoro su te stesso, relazioni, benessere fisico, spiritualità o crescita professionale — e ti propone il percorso più adatto tra le sezioni del sito. È il punto di ingresso consigliato per chi non sa da dove partire."},
  // ── Sito aggiuntive ──
  {cat:"Sito",q:"Cosa fa la Consulente AI e come si attiva?",a:"La Consulente AI conosce l'intero database (chakra, cristalli, enneatipi, AT, Bach, FES, Bush, frequenze, esercizi). Rispondi alle tue domande integrando sempre più sistemi. Per attivarla hai bisogno di una API Key Anthropic (gratuita al primo utilizzo su console.anthropic.com). Inseriscila nel banner che compare nella sezione Consulente AI. La chiave è salvata solo nel tuo browser."},
  {cat:"Sito",q:"Il sito raccoglie dati personali?",a:"No. Olismo Integrato non usa cookie di tracciamento, non raccoglie dati personali, non richiede registrazione. I risultati dei test rimangono nel tuo browser (sessionStorage). La chiave API, se inserita, è salvata solo nel tuo localStorage locale. Nessun dato viene inviato a server propri del sito."},
  {cat:"Sito",q:"Cosa sono i portali gemelli di Olismo Integrato?",a:"Carlo Alberto Calcagno gestisce 6 portali specializzati: frequenze-evolutive.it (prompt musicali con Suno AI), guarigionequantica.eu (pranoterapia e guarigione energetica), mediaresenzaconfini.org (mediazione familiare), percorsidicrescitalucca.it (corsi e percorsi pratici), ladanzadelconflitto.it (danza del conflitto), tieniinmanolaluce.me (percorso spirituale). Tutti sono linkati nel footer."},
  // ── Enneagramma: incroci ──
  {cat:"Enneagramma",q:"Cosa sono integrazione e disintegrazione nell'Enneagramma?",a:"Ogni enneatipo ha DUE percorsi possibili. Il percorso di integrazione (crescita, salute) porta a sviluppare le qualità positive dei tipi incontrati lungo le frecce: es. il T1 in integrazione diventa progressivamente più spontaneo (→7), poi più profondo (→5), poi più assertivo (→8), poi più generoso (→2), poi più autentico (→4). Il percorso di disintegrazione (stress, regressione) percorre le stesse frecce in senso opposto, manifestando le qualità negative di ciascun tipo. Gli incroci chiave di integrazione: 8→2 (forza→tenerezza), 5→8 (mente→azione), 1→7 (rigidità→spontaneità), 9→3 (inerzia→azione). Il percorso automatico tende verso la disintegrazione; l'integrazione richiede lavoro consapevole."},
  {cat:"Enneagramma",q:"Cosa sono i punti di shock nell'Enneagramma evolutivo?",a:"I punti di shock (Gurdjieff) sono momenti critici della vita in cui le strategie abituali non funzionano più: lutti, nascite, separazioni, crisi ai 30-40-50-60 anni, incontri con un mentore. In questi momenti si può scegliere (consciamente o no) tra Percorso 1 (crescita graduale) o Percorso 2 (regressione). Sono momenti delicati ma potentissimi: la persona è più aperta al cambiamento del solito e piccoli interventi del mediatore/counselor hanno grande impatto. Riconoscerli permette di 'cavalcare' la crisi invece di subirla."},
  {cat:"Enneagramma",q:"Perché il percorso evolutivo del T8 è più complesso di quello del T9?",a:"Il T8 appartiene al ciclo lungo (1-7-5-8-2-4) e percorre 6 tipi con 6 fasi evolutive intensive: 8(0-3)→2(3-12)→4(12-19)→1(19-30)→7(30-60)→5(60+) in integrazione. Il T9 appartiene al ciclo breve (3-6-9) e percorre solo 3 tipi con 3 grandi fasi: 9(0-30)→3(30-60)→6(60+). Questo significa che Sempronia (T8) vive più crisi evolutive e cambiamenti di personalità nel corso della vita — non è instabilità, è una struttura più complessa. Ha già superato 5 transizioni mentre Tizio (T9) ne ha affrontata solo una a 30 anni. La differenza spiega perché in coppia il T8 'sente' il cambiamento molto più intensamente."},
  // ── Neuroscienze: Teoria Polivagale ──
  {cat:"Neuroscienze",q:"Cosa sono i 3 stati del sistema nervoso nella Teoria Polivagale?",a:"La Teoria Polivagale di Stephen Porges descrive tre stati del sistema nervoso autonomo. Stato 1 CONNESSIONE (ventrovagale): viso rilassato, voce calma, occhi presenti, curiosità e apertura — l'unico stato in cui mediazione e crescita sono davvero possibili. Stato 2 MOBILITAZIONE (simpatico/combatti o fuggi): voce alta o gelida, muscoli tesi, pensieri accelerati — il T8 in conflitto è tipicamente in questo stato. Stato 3 IMMOBILIZZAZIONE (dorsovagale/congelamento): silenzio, sguardo vuoto, monosillabi 'va bene/come vuoi', pesantezza emotiva — il T9 in conflitto è tipicamente in questo stato. Se il sistema nervoso non è in Stato 1, nessun dialogo razionale funziona: prima regola il corpo, poi lavora con la mente."},
  {cat:"Neuroscienze",q:"Cos'è la co-regolazione e perché è fondamentale in mediazione?",a:"La co-regolazione è il fenomeno per cui i sistemi nervosi si sincronizzano automaticamente: quando parli con qualcuno calmo ti calmi, quando parli con qualcuno agitato ti agiti. Non è psicologia — è neurobiologia. In mediazione questo significa che lo stato interno del mediatore è il primo strumento di lavoro: un mediatore in Stato 1 (connessione) porta sicurezza nella stanza; un mediatore ansioso amplifica il conflitto. La prima regola prima di ogni sessione è regolare sé stessi: 5 respiri profondi, sciogliere le tensioni corporee, ricordare 'non sono qui per giudicare, sono qui per creare sicurezza'."},
  // ── Enneagramma: danza del conflitto ──
  {cat:"Enneagramma",q:"Come si svolge la danza del conflitto tra T8 e T9?",a:"La danza T8-T9 ha 5 passi sempre uguali: (1) TRIGGER — un evento piccolo attiva il copione (Tizio dimentica una richiesta, Sempronia fa un commento critico). (2) LEI SI ATTIVA — Sempronia (T8) sente 'non gli importo' e va in Stato 2: alza il tono, attacca. (3) LUI SI CONGELA — Tizio (T9) sente 'sono sotto attacco' e va in Stato 3: silenzio, monosillabi, distacco emotivo. (4) CIRCOLO VIZIOSO — lei spinge di più vedendo il silenzio, lui si ritira ancora. (5) ESPLOSIONE O MURO — dopo settimane Tizio esplode improvvisamente, oppure si crea un muro gelido per giorni. Il mediatore interviene al passo 2 e 3, prima che il circolo si chiuda. Script universale: 'Sotto questa intensità, cosa temi?'"}
];

let activeFaqCat = "Tutti";
function renderFaq(){
  const cats = ["Tutti", ...new Set(FAQ_DATA.map(f=>f.cat))];
  const catsEl = document.getElementById("faq-cats");
  if(!catsEl) return;
  catsEl.innerHTML = cats.map(c=>`<button class="faq-cat-btn${c===activeFaqCat?' active':''}" onclick="filterFaq('${c}')">${c}</button>`).join("");
  
  const list = document.getElementById("faq-list");
  const items = activeFaqCat==="Tutti" ? FAQ_DATA : FAQ_DATA.filter(f=>f.cat===activeFaqCat);
  list.innerHTML = items.map((f,i)=>`
    <div class="faq-item" id="faq-item-${i}">
      <button class="faq-q" onclick="toggleFaq(${i})">
        <span>${f.q}</span><span class="faq-arrow">▼</span>
      </button>
      <div class="faq-a" id="faq-a-${i}"><div class="faq-a-inner">${f.a}</div></div>
    </div>`).join("");
}
function filterFaq(cat){activeFaqCat=cat;renderFaq();}
function toggleFaq(i){
  const item=document.getElementById("faq-item-"+i);
  const ans=document.getElementById("faq-a-"+i);
  if(!item)return;
  const isOpen=item.classList.contains("open");
  document.querySelectorAll(".faq-item.open").forEach(el=>{
    el.classList.remove("open");
    el.querySelector(".faq-a").style.maxHeight="0";
  });
  if(!isOpen){item.classList.add("open");ans.style.maxHeight=ans.scrollHeight+"px";}
}

const ENNEAGRAMMA_EXTRA = {"1":{"frutto":"🍎 Mela","dignita":"Volontà","gerarchia":"Serafini","musa":"Urania (astronomia e geometria)","pianeta":"Marte","ali":[9,2],"seqIntegr":[1,7,5,8,2,4],"fasiIntegr":[{"eta":"0-3","punto":1,"nome":"L'innocenza perfetta","desc":"Perfezionismo innato, senso del giusto/sbagliato"},{"eta":"3-12","punto":7,"nome":"L'esplorazione gioiosa","desc":"Spontaneità, gioco, curiosità"},{"eta":"12-19","punto":5,"nome":"L'osservatore critico","desc":"Introspezione, analisi, ricerca di conoscenza"},{"eta":"19-30","punto":8,"nome":"Il guerriero giusto","desc":"Assertività, forza, azione nel mondo"},{"eta":"30-60","punto":2,"nome":"Il servitore compassionevole","desc":"Cura degli altri, generosità, relazioni"},{"eta":"60+","punto":4,"nome":"Il saggio autentico","desc":"Autenticità emotiva, profondità, saggezza"}],"incroci":[{"da_a":"1→7","trasf":"Rigidità → Spontaneità gioiosa"},{"da_a":"7→5","trasf":"Dispersione → Profondità contemplativa"},{"da_a":"5→8","trasf":"Ritiro → Azione potente"},{"da_a":"8→2","trasf":"Forza → Tenerezza"}],"pietre":["Ametista","Quarzo rosa","Sodalite"],"cibi":["Cereali integrali","Verdure verdi","Tisane rilassanti"],"attivita":["Yoga","Meditazione mindfulness","Passeggiate nella natura"],"areaCerebrale":"Amigdala","senso":"Mente","cervelloTripartito":"Emozionale — sistema limbico","cervelloAT":"Bambino — emozioni, memoria, attaccamento"},"2":{"frutto":"🍐 Pera","dignita":"Eternità","gerarchia":"Cherubini","musa":"Polimnia (memoria e retorica)","pianeta":"Sole","ali":[1,3],"seqIntegr":[2,4,1,7,5,8],"fasiIntegr":[{"eta":"0-3","punto":2,"nome":"L'amore bisognoso","desc":"Dipendenza affettiva, dare per ricevere"},{"eta":"3-12","punto":4,"nome":"L'unicità ferita","desc":"Individualità emergente, emozioni"},{"eta":"12-19","punto":1,"nome":"L'idealista responsabile","desc":"Perfezionismo adolescenziale, principi"},{"eta":"19-30","punto":7,"nome":"L'avventuriero libero","desc":"Libertà dalle aspettative altrui"},{"eta":"30-60","punto":5,"nome":"Il contemplativo saggio","desc":"Distacco salutare, saggezza"},{"eta":"60+","punto":8,"nome":"Il patriarca/matriarca potente","desc":"Autodeterminazione, forza autentica"}],"incroci":[{"da_a":"2→4","trasf":"Dare compulsivo → Autenticità personale"},{"da_a":"4→1","trasf":"Emozione → Disciplina interiore"},{"da_a":"1→7","trasf":"Dovere → Piacere genuino"},{"da_a":"7→5","trasf":"Esperienza → Comprensione profonda"}],"pietre":["Quarzo rosa","Rodonite","Giada verde"],"cibi":["Frutta dolce","Miele","Alimenti nutrienti"],"attivita":["Danza","Canto","Volontariato"],"areaCerebrale":"Talamo","senso":"Intelletto","cervelloTripartito":"Emozionale — sistema limbico","cervelloAT":"Bambino — emozioni, memoria, attaccamento"},"3":{"frutto":"🍒 Ciliegia","dignita":"Sapienza","gerarchia":"Troni","musa":"Euterpe (musica)","pianeta":"Rahu","ali":[2,4],"seqIntegr":[3,6,9],"fasiIntegr":[{"eta":"0-30","punto":3,"nome":"Il costruttore","desc":"Successo, immagine, realizzazione, costruzione dell'identità sociale"},{"eta":"30-60","punto":6,"nome":"Il leale autentico","desc":"Lealtà autentica, cooperazione, fiducia"},{"eta":"60+","punto":9,"nome":"Il pacificatore saggio","desc":"Pace interiore, valore oltre il successo"}],"incroci":[{"da_a":"3→6","trasf":"L'ambizione si trasforma in lealtà verso comunità/famiglia"},{"da_a":"6→9","trasf":"L'ansia si dissolve in serenità"},{"da_a":"9→3","trasf":"La quiete si riattiva nell'azione consapevole"}],"pietre":["Citrino","Topazio","Ambra"],"cibi":["Proteine magre","Noci","Frutta energetica"],"attivita":["Sport competitivi","Networking","Public speaking"],"areaCerebrale":"Testa del nucleo caudato","senso":"Ragione","cervelloTripartito":"Rettiliano — gangli della base","cervelloAT":"Bambino Somatico (istinti, sopravvivenza)"},"4":{"frutto":"🍊 Nespola","dignita":"Sapienza","gerarchia":"Dominazioni","musa":"Erato (canto corale e poesia amorosa)","pianeta":"Mercurio","ali":[3,5],"seqIntegr":[4,1,7,5,8,2],"fasiIntegr":[{"eta":"0-3","punto":4,"nome":"La sensibilità primordiale","desc":"Intensità emotiva, unicità"},{"eta":"3-12","punto":1,"nome":"L'artista disciplinato","desc":"Canalizzazione delle emozioni in struttura"},{"eta":"12-19","punto":7,"nome":"Il bohémien ribelle","desc":"Sperimentazione, apertura al mondo"},{"eta":"19-30","punto":5,"nome":"L'intellettuale profondo","desc":"Analisi delle emozioni, comprensione"},{"eta":"30-60","punto":8,"nome":"Il creatore potente","desc":"Affermazione artistica, forza creativa"},{"eta":"60+","punto":2,"nome":"Il mentore generoso","desc":"Trasmissione della bellezza, dono di sé"}],"incroci":[{"da_a":"4→1","trasf":"Caos emotivo → Disciplina creativa"},{"da_a":"1→7","trasf":"Rigore → Gioia esplorativa"},{"da_a":"7→5","trasf":"Dispersione → Profondità"},{"da_a":"5→8","trasf":"Contemplazione → Azione potente"}],"pietre":["Lapislazzuli","Ametista","Tormalina nera"],"cibi":["Cibi ricchi di omega-3","Frutti di bosco","Cioccolato fondente"],"attivita":["Arte terapia","Scrittura creativa","Musica"],"areaCerebrale":"Nucleo subtalamico","senso":"Immaginazione","cervelloTripartito":"Rettiliano — diencefalo","cervelloAT":"Bambino Somatico (istinti, sopravvivenza)"},"5":{"frutto":"🍇 Uva","dignita":"Verità","gerarchia":"Potestà","musa":"Melpomene (tragedia)","pianeta":"Saturno","ali":[4,6],"seqIntegr":[5,8,2,4,1,7],"fasiIntegr":[{"eta":"0-3","punto":5,"nome":"L'osservatore silenzioso","desc":"Ritiro, conservazione energia, osservazione"},{"eta":"3-12","punto":8,"nome":"Il bambino potente","desc":"Assertività fisica sorprendente"},{"eta":"12-19","punto":2,"nome":"L'adolescente empatico","desc":"Apertura emotiva verso gli altri"},{"eta":"19-30","punto":4,"nome":"L'artista tormentato","desc":"Espressione creativa profonda"},{"eta":"30-60","punto":1,"nome":"Il maestro integro","desc":"Disciplina matura, insegnamento"},{"eta":"60+","punto":7,"nome":"Il saggio gioioso","desc":"Libertà totale, saggezza leggera"}],"incroci":[{"da_a":"5→8","trasf":"Ritiro → Azione nel mondo"},{"da_a":"8→2","trasf":"Forza → Empatia"},{"da_a":"2→4","trasf":"Connessione → Autenticità"},{"da_a":"4→1","trasf":"Emozione → Principi"}],"pietre":["Ossidiana","Ematite","Quarzo fumé"],"cibi":["Alimenti ricchi di proteine","Verdure radice","Tè verde"],"attivita":["Lettura","Studio","Passeggiate solitarie"],"areaCerebrale":"Putamen","senso":"Udito","cervelloTripartito":"Rettiliano — gangli della base","cervelloAT":"Bambino Somatico (istinti, sopravvivenza)"},"6":{"frutto":"🫐 Mirtillo","dignita":"Grandezza","gerarchia":"Virtù","musa":"Tersicore (danza)","pianeta":"Ketu","ali":[5,7],"seqIntegr":[6,9,3],"fasiIntegr":[{"eta":"0-30","punto":6,"nome":"Il vigilante leale","desc":"Sicurezza, lealtà, vigilanza, costruzione di alleanze"},{"eta":"30-60","punto":9,"nome":"Il pacificatore fiducioso","desc":"Pace interiore, fiducia, serenità"},{"eta":"60+","punto":3,"nome":"Il realizzatore saggio","desc":"Realizzazione personale, efficacia, autostima matura"}],"incroci":[{"da_a":"6→9","trasf":"La paura giovanile si calma, la mente inquieta trova pace"},{"da_a":"9→3","trasf":"La pace si trasforma in azione saggia"},{"da_a":"3→6","trasf":"Il successo maturo riconosce il valore della comunità"}],"pietre":["Turchese","Agata blu","Celestina"],"cibi":["Alimenti calmanti","Camomilla","Banane"],"attivita":["Tai chi","Esercizi di respirazione","Gruppi di supporto"],"areaCerebrale":"Coda del nucleo caudato","senso":"Vista","cervelloTripartito":"Rettiliano — gangli della base","cervelloAT":"Bambino Somatico (istinti, sopravvivenza)"},"7":{"frutto":"🍍 Ananas","dignita":"Grandezza","gerarchia":"Principati","musa":"Calliope (poesia epica)","pianeta":"Giove","ali":[6,8],"seqIntegr":[7,5,8,2,4,1],"fasiIntegr":[{"eta":"0-3","punto":7,"nome":"La gioia pura","desc":"Curiosità infinita, esplorazione gioiosa"},{"eta":"3-12","punto":5,"nome":"Il piccolo filosofo","desc":"Profondità sorprendente, concentrazione"},{"eta":"12-19","punto":8,"nome":"Il leader ribelle","desc":"Forza adolescenziale, assertività"},{"eta":"19-30","punto":2,"nome":"L'attivista compassionevole","desc":"Servizio agli altri, generosità"},{"eta":"30-60","punto":4,"nome":"L'artista maturo","desc":"Profondità emotiva integrata"},{"eta":"60+","punto":1,"nome":"Il maestro completo","desc":"Integrità totale, disciplina gioiosa"}],"incroci":[{"da_a":"7→5","trasf":"Dispersione → Concentrazione profonda"},{"da_a":"5→8","trasf":"Contemplazione → Azione decisa"},{"da_a":"8→2","trasf":"Forza → Compassione"},{"da_a":"2→4","trasf":"Servizio → Autenticità"}],"pietre":["Citrino","Corniola","Avventurina"],"cibi":["Frutta esotica","Spezie","Alimenti colorati"],"attivita":["Viaggi","Nuove esperienze","Sport avventurosi"],"areaCerebrale":"Globo pallido","senso":"Olfatto","cervelloTripartito":"Rettiliano — gangli della base","cervelloAT":"Bambino Somatico (istinti, sopravvivenza)"},"8":{"frutto":"🍑 Albicocca","dignita":"Gloria","gerarchia":"Arcangeli","musa":"Clio (storia)","pianeta":"Venere","ali":[7,9],"seqIntegr":[8,2,4,1,7,5],"fasiIntegr":[{"eta":"0-3","punto":8,"nome":"La forza istintiva","desc":"Controllo, protezione, energia vitale"},{"eta":"3-12","punto":2,"nome":"Il protettore tenero","desc":"Cura, generosità infantile, tenerezza"},{"eta":"12-19","punto":4,"nome":"L'adolescente vulnerabile","desc":"Profondità emotiva sorprendente"},{"eta":"19-30","punto":1,"nome":"Il guerriero di giustizia","desc":"Principi chiari, integrità morale"},{"eta":"30-60","punto":7,"nome":"Il leader gioioso","desc":"Potere leggero, generosità, gioia"},{"eta":"60+","punto":5,"nome":"Il saggio distaccato","desc":"Saggezza contemplativa, visione ampia"}],"incroci":[{"da_a":"8→2","trasf":"Durezza → Tenerezza aperta"},{"da_a":"2→4","trasf":"Dare → Autenticità vulnerabile"},{"da_a":"4→1","trasf":"Emozione → Principi solidi"},{"da_a":"1→7","trasf":"Rigore → Gioia di vivere"}],"pietre":["Granato","Rubino","Diaspro rosso"],"cibi":["Carni rosse","Alimenti proteici","Cibi piccanti"],"attivita":["Arti marziali","Sollevamento pesi","Leadership training"],"areaCerebrale":"Pars Reticolare e Substantia Nigra","senso":"Gusto","cervelloTripartito":"Rettiliano — mesencefalo","cervelloAT":"Bambino Somatico (istinti, sopravvivenza)"},"9":{"frutto":"🍓 Fragola","dignita":"Perfezione","gerarchia":"Angeli","musa":"Talia (poesia bucolica)","pianeta":"Luna","ali":[8,1],"seqIntegr":[9,3,6],"fasiIntegr":[{"eta":"0-30","punto":9,"nome":"L'armonizzatore","desc":"Pace, armonia, fusione con l'ambiente, evitamento conflitti"},{"eta":"30-60","punto":3,"nome":"Il realizzatore attivo","desc":"Azione, realizzazione, presenza, affermazione nel mondo"},{"eta":"60+","punto":6,"nome":"Il leale responsabile","desc":"Lealtà profonda, responsabilità verso comunità"}],"incroci":[{"da_a":"9→3","trasf":"L'inerzia giovanile si attiva nell'azione"},{"da_a":"3→6","trasf":"Il successo si trasforma in servizio"},{"da_a":"6→9","trasf":"La responsabilità matura si dissolve nella pace"}],"pietre":["Ametista","Quarzo chiaro","Selenite"],"cibi":["Alimenti leggeri","Tisane","Cibi integrali"],"attivita":["Meditazione","Massaggi","Passeggiate tranquille"],"areaCerebrale":"Ipotalamo","senso":"Tatto","cervelloTripartito":"Emozionale — sistema limbico","cervelloAT":"Bambino — emozioni, memoria, attaccamento"}};

const COMPAT_MATRIX = {"1-1":{"pct":75,"livello":"buona","desc":"Due Perfezionisti insieme condividono alti standard morali e desiderio di miglioramento. Possono sostenersi reciprocamente nella crescita, ma rischiano di essere eccessivamente critici l'uno verso l'a","forza":["Valori condivisi","Integrità morale","Impegno reciproco"],"sfide":["Eccessiva critica","Rigidità"],"consigli":"Imparate a perdonarvi reciprocamente gli errori e a celebrare i successi senza cercare sempre la perfezione. Dedicate tempo al divertimento senza giudizio."},"1-2":{"pct":85,"livello":"ottima","desc":"Il Perfezionista e l'Altruista formano una coppia complementare: l'1 porta struttura e principi, il 2 porta calore e supporto emotivo. Insieme possono creare una relazione equilibrata e orientata al s","forza":["Complementarità","Valori etici condivisi","Supporto reciproco"],"sfide":["L'1 può sembrare freddo al 2","Il 2 può sentirsi non apprezzato"],"consigli":"L'1 deve imparare a esprimere apprezzamento verbalmente, il 2 deve rispettare i confini e i tempi dell'1. Comunicate apertamente i vostri bisogni."},"2-1":{"pct":85,"livello":"ottima","desc":"Il Perfezionista e l'Altruista formano una coppia complementare: l'1 porta struttura e principi, il 2 porta calore e supporto emotivo. Insieme possono creare una relazione equilibrata e orientata al s","forza":["Complementarità","Valori etici condivisi","Supporto reciproco"],"sfide":["L'1 può sembrare freddo al 2","Il 2 può sentirsi non apprezzato"],"consigli":"L'1 deve imparare a esprimere apprezzamento verbalmente, il 2 deve rispettare i confini e i tempi dell'1. Comunicate apertamente i vostri bisogni."},"1-3":{"pct":70,"livello":"buona","desc":"Perfezionista e Manager condividono orientamento al successo e disciplina. Possono costruire insieme grandi progetti, ma rischiano di trascurare l'intimità emotiva concentrandosi troppo sugli obi","forza":["Produttività","Ambizione condivisa","Efficienza"],"sfide":["Competitività","Mancanza di intimità emotiva"],"consigli":"Programmate tempo di qualità insieme senza parlare di lavoro o obiettivi. Imparate a essere vulnerabili l'uno con l'altro."},"3-1":{"pct":70,"livello":"buona","desc":"Perfezionista e Manager condividono orientamento al successo e disciplina. Possono costruire insieme grandi progetti, ma rischiano di trascurare l'intimità emotiva concentrandosi troppo sugli obi","forza":["Produttività","Ambizione condivisa","Efficienza"],"sfide":["Competitività","Mancanza di intimità emotiva"],"consigli":"Programmate tempo di qualità insieme senza parlare di lavoro o obiettivi. Imparate a essere vulnerabili l'uno con l'altro."},"1-4":{"pct":60,"livello":"media","desc":"L'incontro tra il Perfezionista razionale e l'Romantico emotivo può essere arricchente ma impegnativo. L'1 porta stabilità, il 4 porta profondità emotiva e creatività.","forza":["Crescita reciproca","Bilanciamento razionalità-emozione","Profondità"],"sfide":["Conflitto tra logica ed emozione","L'1 può sembrare insensibile"],"consigli":"L'1 deve accogliere le emozioni del 4 senza giudicarle, il 4 deve apprezzare la stabilità che l'1 offre. Trovate un linguaggio comune per esprimere i sentimenti"},"4-1":{"pct":60,"livello":"media","desc":"L'incontro tra il Perfezionista razionale e l'Romantico emotivo può essere arricchente ma impegnativo. L'1 porta stabilità, il 4 porta profondità emotiva e creatività.","forza":["Crescita reciproca","Bilanciamento razionalità-emozione","Profondità"],"sfide":["Conflitto tra logica ed emozione","L'1 può sembrare insensibile"],"consigli":"L'1 deve accogliere le emozioni del 4 senza giudicarle, il 4 deve apprezzare la stabilità che l'1 offre. Trovate un linguaggio comune per esprimere i sentimenti"},"1-5":{"pct":72,"livello":"buona","desc":"Perfezionista e Osservatore condividono bisogno di competenza e autonomia. Entrambi apprezzano la privacy e possono rispettare reciprocamente gli spazi personali.","forza":["Rispetto reciproco","Indipendenza","Profondità intellettuale"],"sfide":["Distacco emotivo","Mancanza di spontaneità"],"consigli":"Sforzatevi di condividere le emozioni, non solo i pensieri. Create rituali di connessione emotiva regolari."},"5-1":{"pct":72,"livello":"buona","desc":"Perfezionista e Osservatore condividono bisogno di competenza e autonomia. Entrambi apprezzano la privacy e possono rispettare reciprocamente gli spazi personali.","forza":["Rispetto reciproco","Indipendenza","Profondità intellettuale"],"sfide":["Distacco emotivo","Mancanza di spontaneità"],"consigli":"Sforzatevi di condividere le emozioni, non solo i pensieri. Create rituali di connessione emotiva regolari."},"1-6":{"pct":80,"livello":"ottima","desc":"Perfezionista e Leale formano una coppia stabile e responsabile. Condividono senso del dovere e desiderio di sicurezza, creando una base solida per una relazione duratura.","forza":["Affidabilità","Lealtà","Valori condivisi"],"sfide":["Ansia condivisa","Eccessiva preoccupazione"],"consigli":"Imparate a rilassarvi insieme e a fidarvi del processo. Non lasciate che l'ansia domini la relazione."},"6-1":{"pct":80,"livello":"ottima","desc":"Perfezionista e Leale formano una coppia stabile e responsabile. Condividono senso del dovere e desiderio di sicurezza, creando una base solida per una relazione duratura.","forza":["Affidabilità","Lealtà","Valori condivisi"],"sfide":["Ansia condivisa","Eccessiva preoccupazione"],"consigli":"Imparate a rilassarvi insieme e a fidarvi del processo. Non lasciate che l'ansia domini la relazione."},"1-7":{"pct":65,"livello":"media","desc":"L'incontro tra il Perfezionista serio e l'Entusiasta gioioso può portare equilibrio o tensione. Il 7 insegna all'1 a divertirsi, l'1 porta struttura al 7.","forza":["Complementarità","Bilanciamento serietà-leggerezza","Crescita reciproca"],"sfide":["Diversi ritmi di vita","L'1 può sembrare noioso al 7"],"consigli":"Trovate attività che soddisfino entrambi: avventure pianificate per il 7, momenti di riflessione per l'1. Apprezzate le differenze."},"7-1":{"pct":65,"livello":"media","desc":"L'incontro tra il Perfezionista serio e l'Entusiasta gioioso può portare equilibrio o tensione. Il 7 insegna all'1 a divertirsi, l'1 porta struttura al 7.","forza":["Complementarità","Bilanciamento serietà-leggerezza","Crescita reciproca"],"sfide":["Diversi ritmi di vita","L'1 può sembrare noioso al 7"],"consigli":"Trovate attività che soddisfino entrambi: avventure pianificate per il 7, momenti di riflessione per l'1. Apprezzate le differenze."},"1-8":{"pct":73,"livello":"buona","desc":"Perfezionista e Leader condividono forza di carattere e senso di giustizia. Possono essere una coppia potente, ma devono gestire la tendenza al controllo di entrambi.","forza":["Forza","Integrità","Capacità di azione"],"sfide":["Lotte di potere","Testardaggine"],"consigli":"Imparate a scegliere le vostre battaglie e a cedere quando non è essenziale. Rispettate la forza dell'altro senza competere."},"8-1":{"pct":73,"livello":"buona","desc":"Perfezionista e Leader condividono forza di carattere e senso di giustizia. Possono essere una coppia potente, ma devono gestire la tendenza al controllo di entrambi.","forza":["Forza","Integrità","Capacità di azione"],"sfide":["Lotte di potere","Testardaggine"],"consigli":"Imparate a scegliere le vostre battaglie e a cedere quando non è essenziale. Rispettate la forza dell'altro senza competere."},"1-9":{"pct":82,"livello":"ottima","desc":"Perfezionista e Diplomatico formano una coppia armoniosa. Il 9 porta calma e accettazione, l'1 porta direzione e motivazione. Si bilanciano naturalmente.","forza":["Armonia","Complementarità","Stabilità"],"sfide":["Il 9 può evitare i conflitti necessari","L'1 può essere troppo critico"],"consigli":"Il 9 deve imparare ad affrontare i problemi direttamente, l'1 deve accettare l'imperfezione. Comunicate con gentilezza."},"9-1":{"pct":82,"livello":"ottima","desc":"Perfezionista e Diplomatico formano una coppia armoniosa. Il 9 porta calma e accettazione, l'1 porta direzione e motivazione. Si bilanciano naturalmente.","forza":["Armonia","Complementarità","Stabilità"],"sfide":["Il 9 può evitare i conflitti necessari","L'1 può essere troppo critico"],"consigli":"Il 9 deve imparare ad affrontare i problemi direttamente, l'1 deve accettare l'imperfezione. Comunicate con gentilezza."},"2-2":{"pct":70,"livello":"buona","desc":"Due Altruisti insieme creano una relazione calorosa e premurosa. Entrambi sono attenti ai bisogni dell'altro, ma rischiano di trascurare i propri bisogni personali.","forza":["Empatia","Calore","Supporto reciproco"],"sfide":["Difficoltà a chiedere per sé","Competizione nel dare"],"consigli":"Imparate a ricevere quanto date. Dedicate tempo ai vostri bisogni individuali senza sensi di colpa."},"2-3":{"pct":85,"livello":"ottima","desc":"Altruista e Manager formano una coppia dinamica e orientata al successo. Il 2 supporta emotivamente il 3, il 3 valorizza e riconosce il 2.","forza":["Supporto reciproco","Successo condiviso","Energia positiva"],"sfide":["Superficialità emotiva","Focus eccessivo sull'immagine"],"consigli":"Create spazi di autenticità dove potete essere voi stessi senza maschere. Il 3 deve rallentare per connettersi emotivamente."},"3-2":{"pct":85,"livello":"ottima","desc":"Altruista e Manager formano una coppia dinamica e orientata al successo. Il 2 supporta emotivamente il 3, il 3 valorizza e riconosce il 2.","forza":["Supporto reciproco","Successo condiviso","Energia positiva"],"sfide":["Superficialità emotiva","Focus eccessivo sull'immagine"],"consigli":"Create spazi di autenticità dove potete essere voi stessi senza maschere. Il 3 deve rallentare per connettersi emotivamente."},"2-4":{"pct":75,"livello":"buona","desc":"Altruista e Romantico condividono profondità emotiva e sensibilità. Il 2 offre supporto pratico, il 4 porta autenticità e profondità alla relazione.","forza":["Profondità emotiva","Empatia","Creatività"],"sfide":["Intensità emotiva","Il 2 può sentirsi rifiutato"],"consigli":"Il 2 deve rispettare i momenti di solitudine del 4, il 4 deve apprezzare la presenza costante del 2. Bilanciate vicinanza e spazio."},"4-2":{"pct":75,"livello":"buona","desc":"Altruista e Romantico condividono profondità emotiva e sensibilità. Il 2 offre supporto pratico, il 4 porta autenticità e profondità alla relazione.","forza":["Profondità emotiva","Empatia","Creatività"],"sfide":["Intensità emotiva","Il 2 può sentirsi rifiutato"],"consigli":"Il 2 deve rispettare i momenti di solitudine del 4, il 4 deve apprezzare la presenza costante del 2. Bilanciate vicinanza e spazio."},"2-5":{"pct":58,"livello":"media","desc":"L'incontro tra l'Altruista emotivo e l'Osservatore cerebrale può essere difficile. Il 2 cerca connessione, il 5 cerca spazio. Richiedono molta comprensione reciproca.","forza":["Complementarità","Crescita reciproca","Il 2 porta calore"],"sfide":["Bisogni opposti di vicinanza/distanza","Il 2 si sente respinto"],"consigli":"Negoziate chiaramente i bisogni di spazio e vicinanza. Il 2 deve rispettare i confini, il 5 deve fare sforzi per connettersi emotivamente."},"5-2":{"pct":58,"livello":"media","desc":"L'incontro tra l'Altruista emotivo e l'Osservatore cerebrale può essere difficile. Il 2 cerca connessione, il 5 cerca spazio. Richiedono molta comprensione reciproca.","forza":["Complementarità","Crescita reciproca","Il 2 porta calore"],"sfide":["Bisogni opposti di vicinanza/distanza","Il 2 si sente respinto"],"consigli":"Negoziate chiaramente i bisogni di spazio e vicinanza. Il 2 deve rispettare i confini, il 5 deve fare sforzi per connettersi emotivamente."},"2-6":{"pct":83,"livello":"ottima","desc":"Altruista e Leale formano una coppia affettuosa e leale. Entrambi valorizzano la sicurezza relazionale e sono pronti a impegnarsi profondamente.","forza":["Lealtà","Affetto","Sicurezza"],"sfide":["Ansia condivisa","Dipendenza reciproca"],"consigli":"Coltivate l'indipendenza individuale all'interno della coppia. Non lasciate che l'ansia domini la relazione."},"6-2":{"pct":83,"livello":"ottima","desc":"Altruista e Leale formano una coppia affettuosa e leale. Entrambi valorizzano la sicurezza relazionale e sono pronti a impegnarsi profondamente.","forza":["Lealtà","Affetto","Sicurezza"],"sfide":["Ansia condivisa","Dipendenza reciproca"],"consigli":"Coltivate l'indipendenza individuale all'interno della coppia. Non lasciate che l'ansia domini la relazione."},"2-7":{"pct":78,"livello":"buona","desc":"Altruista ed Entusiasta creano una coppia energica e sociale. Il 2 porta profondità emotiva, il 7 porta gioia e avventura. Insieme si divertono molto.","forza":["Energia","Socialità","Ottimismo"],"sfide":["Il 7 evita la profondità emotiva","Il 2 può sentirsi trascurato"],"consigli":"Il 7 deve rallentare per connettersi emotivamente, il 2 deve unirsi alle avventure del 7 senza aspettarsi sempre profondità."},"7-2":{"pct":78,"livello":"buona","desc":"Altruista ed Entusiasta creano una coppia energica e sociale. Il 2 porta profondità emotiva, il 7 porta gioia e avventura. Insieme si divertono molto.","forza":["Energia","Socialità","Ottimismo"],"sfide":["Il 7 evita la profondità emotiva","Il 2 può sentirsi trascurato"],"consigli":"Il 7 deve rallentare per connettersi emotivamente, il 2 deve unirsi alle avventure del 7 senza aspettarsi sempre profondità."},"2-8":{"pct":80,"livello":"ottima","desc":"Altruista e Leader formano una coppia potente e protettiva. Il 2 ammorbidisce l'8, l'8 protegge e valorizza il 2. Si completano bene.","forza":["Protezione reciproca","Forza","Passione"],"sfide":["Lotte di potere sottili","Il 2 può manipolare"],"consigli":"Siate diretti nei vostri bisogni invece di manipolare o dominare. Rispettate la forza dell'altro."},"8-2":{"pct":80,"livello":"ottima","desc":"Altruista e Leader formano una coppia potente e protettiva. Il 2 ammorbidisce l'8, l'8 protegge e valorizza il 2. Si completano bene.","forza":["Protezione reciproca","Forza","Passione"],"sfide":["Lotte di potere sottili","Il 2 può manipolare"],"consigli":"Siate diretti nei vostri bisogni invece di manipolare o dominare. Rispettate la forza dell'altro."},"2-9":{"pct":88,"livello":"ottima","desc":"Altruista e Diplomatico formano una delle coppie più armoniose. Entrambi sono orientati agli altri e cercano pace e connessione. Creano un ambiente relazionale caloroso e accogliente.","forza":["Armonia","Accettazione","Calore"],"sfide":["Difficoltà ad affrontare conflitti","Bisogni personali trascurati"],"consigli":"Imparate ad affrontare i conflitti in modo costruttivo. Dedicate tempo ai vostri bisogni individuali."},"9-2":{"pct":88,"livello":"ottima","desc":"Altruista e Diplomatico formano una delle coppie più armoniose. Entrambi sono orientati agli altri e cercano pace e connessione. Creano un ambiente relazionale caloroso e accogliente.","forza":["Armonia","Accettazione","Calore"],"sfide":["Difficoltà ad affrontare conflitti","Bisogni personali trascurati"],"consigli":"Imparate ad affrontare i conflitti in modo costruttivo. Dedicate tempo ai vostri bisogni individuali."},"3-3":{"pct":72,"livello":"buona","desc":"Due Realizzatori insieme creano una coppia dinamica e di successo. Condividono ambizione e energia, ma rischiano di competere e di trascurare l'intimità emotiva.","forza":["Successo","Energia","Efficienza"],"sfide":["Competizione","Workaholism"],"consigli":"Create spazi di vulnerabilità dove potete essere autentici. Non lasciate che il lavoro domini completamente la relazione."},"3-4":{"pct":65,"livello":"media","desc":"Manager e Romantico hanno approcci molto diversi alla vita. Il 3 è orientato all'esterno e al successo, il 4 all'interno e all'autenticità. Possono arricchirsi reciprocamente o scontrarsi.","forza":["Complementarità","Crescita reciproca","Il 3 porta praticità"],"sfide":["Valori diversi","Il 4 vede il 3 come superficiale"],"consigli":"Apprezzate le differenze invece di giudicarle. Il 3 deve rallentare per la profondità emotiva, il 4 deve apprezzare i successi del 3."},"4-3":{"pct":65,"livello":"media","desc":"Manager e Romantico hanno approcci molto diversi alla vita. Il 3 è orientato all'esterno e al successo, il 4 all'interno e all'autenticità. Possono arricchirsi reciprocamente o scontrarsi.","forza":["Complementarità","Crescita reciproca","Il 3 porta praticità"],"sfide":["Valori diversi","Il 4 vede il 3 come superficiale"],"consigli":"Apprezzate le differenze invece di giudicarle. Il 3 deve rallentare per la profondità emotiva, il 4 deve apprezzare i successi del 3."},"3-5":{"pct":62,"livello":"media","desc":"Manager e Osservatore hanno ritmi di vita molto diversi. Il 3 è attivo e sociale, il 5 è riservato e riflessivo. Richiedono molta comprensione reciproca.","forza":["Competenza condivisa","Rispetto reciproco","Il 3 porta azione"],"sfide":["Ritmi diversi","Bisogni sociali opposti"],"consigli":"Rispettate i diversi bisogni di socialità e solitudine. Trovate attività che soddisfino entrambi."},"5-3":{"pct":62,"livello":"media","desc":"Manager e Osservatore hanno ritmi di vita molto diversi. Il 3 è attivo e sociale, il 5 è riservato e riflessivo. Richiedono molta comprensione reciproca.","forza":["Competenza condivisa","Rispetto reciproco","Il 3 porta azione"],"sfide":["Ritmi diversi","Bisogni sociali opposti"],"consigli":"Rispettate i diversi bisogni di socialità e solitudine. Trovate attività che soddisfino entrambi."},"3-6":{"pct":74,"livello":"buona","desc":"Manager e Leale formano una coppia produttiva e responsabile. Il 3 porta ottimismo e azione, il 6 porta lealtà e previdenza.","forza":["Produttività","Lealtà","Complementarità"],"sfide":["Ansia del 6 vs ottimismo del 3","Il 6 dubita"],"consigli":"Il 3 deve prendere sul serio le preoccupazioni del 6, il 6 deve fidarsi dell'ottimismo del 3. Bilanciate cautela e azione."},"6-3":{"pct":74,"livello":"buona","desc":"Manager e Leale formano una coppia produttiva e responsabile. Il 3 porta ottimismo e azione, il 6 porta lealtà e previdenza.","forza":["Produttività","Lealtà","Complementarità"],"sfide":["Ansia del 6 vs ottimismo del 3","Il 6 dubita"],"consigli":"Il 3 deve prendere sul serio le preoccupazioni del 6, il 6 deve fidarsi dell'ottimismo del 3. Bilanciate cautela e azione."},"3-7":{"pct":85,"livello":"ottima","desc":"Manager ed Entusiasta formano una coppia energica, ottimista e orientata al successo. Condividono amore per la vita e l'azione, creando una relazione dinamica e divertente.","forza":["Energia","Ottimismo","Avventura"],"sfide":["Evitamento delle emozioni difficili","Superficialità"],"consigli":"Create spazi per la vulnerabilità e l'intimità emotiva. Non evitate sempre le emozioni difficili."},"7-3":{"pct":85,"livello":"ottima","desc":"Manager ed Entusiasta formano una coppia energica, ottimista e orientata al successo. Condividono amore per la vita e l'azione, creando una relazione dinamica e divertente.","forza":["Energia","Ottimismo","Avventura"],"sfide":["Evitamento delle emozioni difficili","Superficialità"],"consigli":"Create spazi per la vulnerabilità e l'intimità emotiva. Non evitate sempre le emozioni difficili."},"3-8":{"pct":82,"livello":"ottima","desc":"Manager e Leader formano una coppia potente e dinamica. Entrambi sono orientati all'azione e al successo, con grande energia e determinazione.","forza":["Potere","Successo","Energia"],"sfide":["Lotte di potere","Competizione"],"consigli":"Collaborate invece di competere. Create spazi di vulnerabilità dove potete abbassare le difese."},"8-3":{"pct":82,"livello":"ottima","desc":"Manager e Leader formano una coppia potente e dinamica. Entrambi sono orientati all'azione e al successo, con grande energia e determinazione.","forza":["Potere","Successo","Energia"],"sfide":["Lotte di potere","Competizione"],"consigli":"Collaborate invece di competere. Create spazi di vulnerabilità dove potete abbassare le difese."},"3-9":{"pct":76,"livello":"buona","desc":"Manager e Diplomatico si bilanciano bene. Il 3 porta energia e direzione, il 9 porta calma e accettazione. Insieme creano equilibrio.","forza":["Equilibrio","Complementarità","Il 3 motiva il 9"],"sfide":["Ritmi diversi","Il 9 può sentirsi pressato"],"consigli":"Il 3 deve rallentare e apprezzare il ritmo del 9, il 9 deve comunicare i propri bisogni chiaramente."},"9-3":{"pct":76,"livello":"buona","desc":"Manager e Diplomatico si bilanciano bene. Il 3 porta energia e direzione, il 9 porta calma e accettazione. Insieme creano equilibrio.","forza":["Equilibrio","Complementarità","Il 3 motiva il 9"],"sfide":["Ritmi diversi","Il 9 può sentirsi pressato"],"consigli":"Il 3 deve rallentare e apprezzare il ritmo del 9, il 9 deve comunicare i propri bisogni chiaramente."},"4-4":{"pct":60,"livello":"media","desc":"Due Individualisti insieme creano una relazione intensa e profonda. Condividono sensibilità e creatività, ma rischiano di amplificare drammi e instabilità emotiva.","forza":["Profondità","Autenticità","Creatività"],"sfide":["Intensità eccessiva","Drammi"],"consigli":"Cercate stabilità esterna e supporto. Non alimentate reciprocamente i drammi. Praticate gratitudine insieme."},"4-5":{"pct":73,"livello":"buona","desc":"Romantico e Osservatore condividono profondità e bisogno di autenticità. Entrambi apprezzano l'intimità selettiva e possono creare una connessione unica.","forza":["Profondità","Autenticità","Rispetto reciproco"],"sfide":["Distacco emotivo","Isolamento condiviso"],"consigli":"Bilanciate l'intimità profonda con connessioni esterne. Non isolatevi troppo dal mondo."},"5-4":{"pct":73,"livello":"buona","desc":"Romantico e Osservatore condividono profondità e bisogno di autenticità. Entrambi apprezzano l'intimità selettiva e possono creare una connessione unica.","forza":["Profondità","Autenticità","Rispetto reciproco"],"sfide":["Distacco emotivo","Isolamento condiviso"],"consigli":"Bilanciate l'intimità profonda con connessioni esterne. Non isolatevi troppo dal mondo."},"4-6":{"pct":70,"livello":"buona","desc":"Romantico e Leale possono formare una coppia profonda e leale. Il 4 porta creatività e profondità emotiva, il 6 porta stabilità e impegno.","forza":["Lealtà","Profondità","Impegno"],"sfide":["Ansia e malinconia condivise","Intensità emotiva"],"consigli":"Bilanciate l'intensità emotiva con stabilità pratica. Non alimentate reciprocamente ansia e malinconia."},"6-4":{"pct":70,"livello":"buona","desc":"Romantico e Leale possono formare una coppia profonda e leale. Il 4 porta creatività e profondità emotiva, il 6 porta stabilità e impegno.","forza":["Lealtà","Profondità","Impegno"],"sfide":["Ansia e malinconia condivise","Intensità emotiva"],"consigli":"Bilanciate l'intensità emotiva con stabilità pratica. Non alimentate reciprocamente ansia e malinconia."},"4-7":{"pct":64,"livello":"media","desc":"Romantico ed Entusiasta hanno approcci opposti alle emozioni. Il 4 le approfondisce, il 7 le evita. Possono bilanciarsi o scontrarsi.","forza":["Complementarità","Il 4 porta profondità","Il 7 porta leggerezza"],"sfide":["Approcci emotivi opposti","Il 4 vede il 7 come superficiale"],"consigli":"Apprezzate le differenze. Il 7 deve permettere momenti di profondità, il 4 deve unirsi alla leggerezza del 7."},"7-4":{"pct":64,"livello":"media","desc":"Romantico ed Entusiasta hanno approcci opposti alle emozioni. Il 4 le approfondisce, il 7 le evita. Possono bilanciarsi o scontrarsi.","forza":["Complementarità","Il 4 porta profondità","Il 7 porta leggerezza"],"sfide":["Approcci emotivi opposti","Il 4 vede il 7 come superficiale"],"consigli":"Apprezzate le differenze. Il 7 deve permettere momenti di profondità, il 4 deve unirsi alla leggerezza del 7."},"4-8":{"pct":75,"livello":"buona","desc":"Romantico e Leader formano una coppia intensa e appassionata. Entrambi sono autentici e diretti, creando una connessione profonda e potente.","forza":["Intensità","Autenticità","Passione"],"sfide":["Conflitti intensi","Testardaggine"],"consigli":"Canalizzate l'intensità in modo costruttivo. Imparate a de-escalare i conflitti prima che diventino distruttivi."},"8-4":{"pct":75,"livello":"buona","desc":"Romantico e Leader formano una coppia intensa e appassionata. Entrambi sono autentici e diretti, creando una connessione profonda e potente.","forza":["Intensità","Autenticità","Passione"],"sfide":["Conflitti intensi","Testardaggine"],"consigli":"Canalizzate l'intensità in modo costruttivo. Imparate a de-escalare i conflitti prima che diventino distruttivi."},"4-9":{"pct":80,"livello":"ottima","desc":"Romantico e Diplomatico si complementano bene. Il 4 porta profondità e autenticità, il 9 porta calma e accettazione. Insieme creano un ambiente sicuro per l'espressione emotiva.","forza":["Accettazione","Profondità","Calma"],"sfide":["Il 9 può evitare l'intensità del 4","Il 4 può frustrarsi con la passività del 9"],"consigli":"Il 9 deve affrontare le emozioni del 4 invece di evitarle, il 4 deve apprezzare la stabilità del 9."},"9-4":{"pct":80,"livello":"ottima","desc":"Romantico e Diplomatico si complementano bene. Il 4 porta profondità e autenticità, il 9 porta calma e accettazione. Insieme creano un ambiente sicuro per l'espressione emotiva.","forza":["Accettazione","Profondità","Calma"],"sfide":["Il 9 può evitare l'intensità del 4","Il 4 può frustrarsi con la passività del 9"],"consigli":"Il 9 deve affrontare le emozioni del 4 invece di evitarle, il 4 deve apprezzare la stabilità del 9."},"5-5":{"pct":68,"livello":"buona","desc":"Due Osservatori insieme creano una relazione intellettuale e rispettosa. Condividono bisogno di privacy e autonomia, ma rischiano distacco emotivo eccessivo.","forza":["Rispetto reciproco","Indipendenza","Profondità intellettuale"],"sfide":["Distacco emotivo","Isolamento"],"consigli":"Sforzatevi di creare momenti di connessione emotiva e fisica. Non lasciate che l'intelletto domini completamente."},"5-6":{"pct":72,"livello":"buona","desc":"Osservatore e Leale condividono bisogno di sicurezza e tendenza all'analisi. Possono formare una coppia stabile e intellettualmente stimolante.","forza":["Stabilità","Profondità intellettuale","Lealtà"],"sfide":["Ansia condivisa","Eccessiva analisi"],"consigli":"Bilanciate l'analisi con l'azione. Create rituali di connessione emotiva per bilanciare l'intellettualizzazione."},"6-5":{"pct":72,"livello":"buona","desc":"Osservatore e Leale condividono bisogno di sicurezza e tendenza all'analisi. Possono formare una coppia stabile e intellettualmente stimolante.","forza":["Stabilità","Profondità intellettuale","Lealtà"],"sfide":["Ansia condivisa","Eccessiva analisi"],"consigli":"Bilanciate l'analisi con l'azione. Create rituali di connessione emotiva per bilanciare l'intellettualizzazione."},"5-7":{"pct":63,"livello":"media","desc":"Osservatore ed Entusiasta hanno bisogni energetici molto diversi. Il 5 cerca solitudine, il 7 cerca stimolazione. Richiedono molta comprensione reciproca.","forza":["Curiosità intellettuale","Complementarità","Il 5 porta profondità"],"sfide":["Bisogni energetici opposti","Il 5 si sente sopraffatto"],"consigli":"Negoziate chiaramente i bisogni di solitudine e socialità. Trovate attività intellettuali che soddisfino entrambi."},"7-5":{"pct":63,"livello":"media","desc":"Osservatore ed Entusiasta hanno bisogni energetici molto diversi. Il 5 cerca solitudine, il 7 cerca stimolazione. Richiedono molta comprensione reciproca.","forza":["Curiosità intellettuale","Complementarità","Il 5 porta profondità"],"sfide":["Bisogni energetici opposti","Il 5 si sente sopraffatto"],"consigli":"Negoziate chiaramente i bisogni di solitudine e socialità. Trovate attività intellettuali che soddisfino entrambi."},"5-8":{"pct":70,"livello":"buona","desc":"Osservatore e Leader si rispettano reciprocamente per la loro forza. Il 5 porta riflessione, l'8 porta azione. Possono completarsi se rispettano le differenze.","forza":["Rispetto reciproco","Indipendenza","Complementarità"],"sfide":["Distacco del 5 vs intensità dell'8","Conflitti su intimità"],"consigli":"Il 5 deve fare sforzi per connettersi emotivamente, l'8 deve rispettare i bisogni di spazio del 5."},"8-5":{"pct":70,"livello":"buona","desc":"Osservatore e Leader si rispettano reciprocamente per la loro forza. Il 5 porta riflessione, l'8 porta azione. Possono completarsi se rispettano le differenze.","forza":["Rispetto reciproco","Indipendenza","Complementarità"],"sfide":["Distacco del 5 vs intensità dell'8","Conflitti su intimità"],"consigli":"Il 5 deve fare sforzi per connettersi emotivamente, l'8 deve rispettare i bisogni di spazio del 5."},"5-9":{"pct":78,"livello":"ottima","desc":"Osservatore e Diplomatico formano una coppia tranquilla e armoniosa. Entrambi apprezzano la pace e rispettano lo spazio dell'altro, creando un ambiente sereno.","forza":["Pace","Rispetto reciproco","Armonia"],"sfide":["Passività condivisa","Difficoltà con l'azione"],"consigli":"Sforzatevi di prendere iniziative e affrontare i problemi. Non lasciate che la passività domini completamente."},"9-5":{"pct":78,"livello":"ottima","desc":"Osservatore e Diplomatico formano una coppia tranquilla e armoniosa. Entrambi apprezzano la pace e rispettano lo spazio dell'altro, creando un ambiente sereno.","forza":["Pace","Rispetto reciproco","Armonia"],"sfide":["Passività condivisa","Difficoltà con l'azione"],"consigli":"Sforzatevi di prendere iniziative e affrontare i problemi. Non lasciate che la passività domini completamente."},"6-6":{"pct":70,"livello":"buona","desc":"Due Leali insieme creano una relazione stabile e affidabile. Condividono valori di lealtà e impegno, ma rischiano di amplificare reciprocamente l'ansia.","forza":["Lealtà","Affidabilità","Impegno"],"sfide":["Ansia amplificata","Eccessiva preoccupazione"],"consigli":"Cercate supporto esterno per gestire l'ansia. Non alimentate reciprocamente le preoccupazioni."},"6-7":{"pct":82,"livello":"ottima","desc":"Leale ed Entusiasta si bilanciano perfettamente. Il 6 porta stabilità e previdenza, il 7 porta ottimismo e avventura. Insieme creano equilibrio tra sicurezza e spontaneità.","forza":["Equilibrio","Complementarità","Il 6 porta stabilità"],"sfide":["Ansia del 6 vs evitamento del 7","Bisogni di sicurezza diversi"],"consigli":"Il 7 deve rassicurare il 6 con impegno concreto, il 6 deve unirsi alle avventure del 7 senza eccessive preoccupazioni."},"7-6":{"pct":82,"livello":"ottima","desc":"Leale ed Entusiasta si bilanciano perfettamente. Il 6 porta stabilità e previdenza, il 7 porta ottimismo e avventura. Insieme creano equilibrio tra sicurezza e spontaneità.","forza":["Equilibrio","Complementarità","Il 6 porta stabilità"],"sfide":["Ansia del 6 vs evitamento del 7","Bisogni di sicurezza diversi"],"consigli":"Il 7 deve rassicurare il 6 con impegno concreto, il 6 deve unirsi alle avventure del 7 senza eccessive preoccupazioni."},"6-8":{"pct":80,"livello":"ottima","desc":"Leale e Leader formano una coppia forte e protettiva. Il 6 trova sicurezza nella forza dell'8, l'8 apprezza la lealtà del 6. Insieme sono una squadra potente.","forza":["Protezione reciproca","Lealtà","Forza"],"sfide":["Il 6 può testare l'8","L'8 può dominare"],"consigli":"Il 6 deve fidarsi invece di testare continuamente, l'8 deve essere paziente con le insicurezze del 6."},"8-6":{"pct":80,"livello":"ottima","desc":"Leale e Leader formano una coppia forte e protettiva. Il 6 trova sicurezza nella forza dell'8, l'8 apprezza la lealtà del 6. Insieme sono una squadra potente.","forza":["Protezione reciproca","Lealtà","Forza"],"sfide":["Il 6 può testare l'8","L'8 può dominare"],"consigli":"Il 6 deve fidarsi invece di testare continuamente, l'8 deve essere paziente con le insicurezze del 6."},"6-9":{"pct":85,"livello":"ottima","desc":"Leale e Diplomatico formano una coppia stabile e armoniosa. Entrambi valorizzano la sicurezza e la pace, creando un ambiente relazionale confortevole e duraturo.","forza":["Stabilità","Armonia","Lealtà"],"sfide":["Evitamento dei conflitti","Ansia del 6 vs passività del 9"],"consigli":"Affrontate i problemi invece di evitarli. Il 9 deve essere più assertivo, il 6 deve fidarsi di più."},"9-6":{"pct":85,"livello":"ottima","desc":"Leale e Diplomatico formano una coppia stabile e armoniosa. Entrambi valorizzano la sicurezza e la pace, creando un ambiente relazionale confortevole e duraturo.","forza":["Stabilità","Armonia","Lealtà"],"sfide":["Evitamento dei conflitti","Ansia del 6 vs passività del 9"],"consigli":"Affrontate i problemi invece di evitarli. Il 9 deve essere più assertivo, il 6 deve fidarsi di più."},"7-7":{"pct":80,"livello":"ottima","desc":"Due Entusiasti insieme creano una relazione energica, divertente e piena di avventure. Condividono amore per la vita e l'esplorazione, vivendo intensamente insieme.","forza":["Divertimento","Avventura","Energia"],"sfide":["Evitamento delle responsabilità","Superficialità"],"consigli":"Create momenti di profondità e intimità emotiva. Affrontate le responsabilità insieme invece di evitarle."},"7-8":{"pct":83,"livello":"ottima","desc":"Entusiasta e Leader formano una coppia energica e potente. Entrambi sono orientati all'azione e all'intensità, creando una relazione dinamica e appassionata.","forza":["Energia","Passione","Avventura"],"sfide":["Eccessiva intensità","Conflitti esplosivi"],"consigli":"Create spazi di calma e vulnerabilità. Imparate a rallentare e a processare le emozioni invece di agire sempre."},"8-7":{"pct":83,"livello":"ottima","desc":"Entusiasta e Leader formano una coppia energica e potente. Entrambi sono orientati all'azione e all'intensità, creando una relazione dinamica e appassionata.","forza":["Energia","Passione","Avventura"],"sfide":["Eccessiva intensità","Conflitti esplosivi"],"consigli":"Create spazi di calma e vulnerabilità. Imparate a rallentare e a processare le emozioni invece di agire sempre."},"7-9":{"pct":84,"livello":"ottima","desc":"Entusiasta e Diplomatico si complementano meravigliosamente. Il 7 porta energia e avventura, il 9 porta calma e accettazione. Insieme creano una relazione equilibrata e piacevole.","forza":["Equilibrio","Armonia","Divertimento"],"sfide":["Il 9 può sentirsi sopraffatto","Il 7 può frustrarsi con la passività del 9"],"consigli":"Il 7 deve rallentare per il 9, il 9 deve comunicare i propri bisogni chiaramente. Affrontate i problemi insieme."},"9-7":{"pct":84,"livello":"ottima","desc":"Entusiasta e Diplomatico si complementano meravigliosamente. Il 7 porta energia e avventura, il 9 porta calma e accettazione. Insieme creano una relazione equilibrata e piacevole.","forza":["Equilibrio","Armonia","Divertimento"],"sfide":["Il 9 può sentirsi sopraffatto","Il 7 può frustrarsi con la passività del 9"],"consigli":"Il 7 deve rallentare per il 9, il 9 deve comunicare i propri bisogni chiaramente. Affrontate i problemi insieme."},"8-8":{"pct":65,"livello":"media","desc":"Due Leader insieme creano una coppia potente ma potenzialmente conflittuale. Entrambi sono forti e dominanti, il che può portare a lotte di potere intense.","forza":["Forza","Passione","Onestà"],"sfide":["Lotte di potere","Conflitti intensi"],"consigli":"Imparate a scegliere le battaglie e a cedere quando non è essenziale. Collaborate invece di competere."},"8-9":{"pct":88,"livello":"ottima","desc":"Leader e Diplomatico formano una delle coppie più complementari. L'8 porta forza e direzione, il 9 porta calma e accettazione. Si bilanciano perfettamente.","forza":["Complementarità perfetta","Equilibrio","L'8 protegge il 9"],"sfide":["L'8 può dominare","Il 9 può essere troppo passivo"],"consigli":"L'8 deve essere paziente e gentile, il 9 deve essere più assertivo e comunicare i propri bisogni."},"9-8":{"pct":88,"livello":"ottima","desc":"Leader e Diplomatico formano una delle coppie più complementari. L'8 porta forza e direzione, il 9 porta calma e accettazione. Si bilanciano perfettamente.","forza":["Complementarità perfetta","Equilibrio","L'8 protegge il 9"],"sfide":["L'8 può dominare","Il 9 può essere troppo passivo"],"consigli":"L'8 deve essere paziente e gentile, il 9 deve essere più assertivo e comunicare i propri bisogni."},"9-9":{"pct":75,"livello":"buona","desc":"Due Pacificatori insieme creano una relazione armoniosa e tranquilla. Condividono amore per la pace e l'accettazione, ma rischiano passività eccessiva.","forza":["Armonia","Pace","Accettazione"],"sfide":["Passività estrema","Difficoltà con decisioni"],"consigli":"Sforzatevi di prendere iniziative e affrontare i problemi. Cercate supporto esterno per la motivazione."}};

const TEST_FRUTTI = [{"tipo":1,"nome":"Mela","emoji":"🍎","domande":["Alberghi in te un critico severo/a, che controlla tutto quello che fai e ti sorveglia praticamente sempre.","Sei sensibile alle critiche altrui.","Ti viene naturale dividere le cose in \"buone e cattive\" oppure in \"giuste e sbagliate\".","Fai del tuo meglio per essere buono/a e fare sempre ciò che è giusto.","Se osservi una certa cosa, capisci quasi sempre -e subito – in che modo potrebbe essere migliorata.","Ti accorgi facilmente se esistono errori e sei tentato/a di correggerli.","Segui sempre o quasi sempre le regole e pensi che il mondo sarebbe migliore se tutti facessero come te.","Pensi e parli basandoti sul \"si dovrebbe\" o \"si deve\".","Ritieni che prima venga il dovere e poi il piacere.","Ritieni molto importante essere buono, responsabile e affidabile.","Poni dei traguardi molto elevati sia a te stesso/a che agli altri.","Sei un sostenitore/una sostenitrice del miglioramento personale.","Tieni fin troppo a freno le tue emozioni perché ritieni che esprimerle – o agire tenendone conto – sia inutile e sbagliato.","Controlli eccessivamente le tue pulsioni, se ti spingono a cercare divertimento e piacere.","Pensi che esista un unico modo giusto di fare le cose: il tuo.","Hai delle opinioni forti e le esprimi volentieri.","Dai grande importanza alle rare occasioni in cui una cosa che fai, o a cui assisti, ti sembra davvero perfetta.","Eviti di provare o di esprimere rabbia.","Ti permetti raramente di riposarti e di rilassarti.","Reprimi inconsciamente la rabbia a tal punto da esprimere esattamente il contrario, risultando una persona molto cortese e amichevole."]},{"tipo":2,"nome":"Pera","emoji":"🍐","domande":["Per te sono molto importanti i rapporti con gli altri e i feedback che ricevi da loro.","Ti preoccupi di essere approvato/a e apprezzato/a dagli altri.","Entri in sintonia con le persone che ti circondano per capire come si sentono e che cosa amano di più; dopodiché assumi una forma che ti permetta di essere sulla loro stessa lunghezza d'onda e di avere un rapporto positivo con loro.","Di solito anticipi i bisogni delle altre persone, specialmente nel caso che per te siano importanti.","Per te è complicato capire di che cosa hai bisogno e ti viene difficile domandare aiuto.","Vuoi essere apprezzato/a dagli altri ed essere importante per le persone fondamentali della tua vita.","Crei connessioni positive con gli altri, ma sei molto selettivo/a quando devi scegliere coloro cui vuoi essere vicino/a.","Anche se vuoi piacere a tutti, alcune persone, per te, sono più importanti di altre.","Pensi di poter piacere agli altri grazie al tuo charme, alla tua generosità e al fatto che offri sostegno alle persone.","Sei bravissimo/a a mostrarti cordiale, allegro/a e positivo/a, e sei fiero/a di essere una persona su cui gli altri possono contare e di cui si possono fidare.","Hai una tendenza a vedere le relazioni come scambi di favori.","Il tuo livello di autostima dipende dall'approvazione che ricevi -o meno- dagli altri.","Neghi i tuoi bisogni e temi che gli altri pensino che tu sia una persona troppo bisognosa.","Dai per scontato che tutti ti possano apprezzare.","Cerchi di essere indispensabile per gli altri lavorando sodo e dimostrando competenza, generosità e spirito di sacrificio.","Pensi di saperla lunga e di capire quali sono le cose a cui bisognerebbe dare importanza.","Ti senti molto avvilito/a, deluso/a e offeso/a ogni volta che qualcuno ti critica, non ti gradisce o non ti apprezza.","Puoi diventare asfissiante, ipersensibile ed eccessivamente attaccato/a ad una specifica relazione.","Hai paura se qualcuno con cui entri in relazione è davvero disposto/a ad amarti.","Ti capita di aiutare gli altri perché così puoi controllarli e manipolarli."]},{"tipo":3,"nome":"Ciliegia","emoji":"🍒","domande":["Sei bravissimo/a ad interpretare gli altri. Entri automaticamente in sintonia con le persone che ti circondano, capisci a che cosa danno importanza e adatti la tua immagine in modo da riuscire ad impressionarli.","Ami porti degli obiettivi e fare tutto il necessario per realizzarli. Una volta che hai definito un certo risultato, elabori senza fatica un percorso per riuscire a raggiungerlo.","Vuoi che gli altri ti percepiscano come una persona competente e di successo.","Ti senti sicuro/a della tua immagine pubblica, perché fai tutto il possibile per lavorare duro ed offrire dei risultati.","In modo totalmente spontaneo, intuisci ciò che devi fare per essere – e sembrare – una persona di successo in campi diversi della vita.","Ti viene spontaneo portare a termine qualsiasi compito, ti piace essere produttivo e finire quello che hai da fare. Può sembrarti invece difficile frenare o non fare nulla.","Anche se non lo fai in modo cosciente, probabilmente modifichi con efficacia la tua immagine per poter presentare quella più adatta ad ogni circostanza.","Eviti a tutti i costi il fallimento. Se pensi di poter fallire in una certa cosa, non provi nemmeno a farla.","A volte le relazioni – benché per te siano importanti – passano in secondo piano rispetto al lavoro perché, per natura, sei portato/a a concentrarti su tutti i compiti che devono essere svolti.","Anche se nel profondo potresti essere molto emotivo/a, inconsciamente eviti di mostrare le tue emozioni in modo da riuscire a portare a termine i tuoi compiti.","Riconoscere le tue emozioni può sembrarti difficile, e quindi tendi a negarle o a rifiutarle.","Fai tutto il possibile per evitare il fallimento, perché temi che ti definirà come persona.","Fin da bambino/a intuivi ciò che i tuoi genitori volevano che tu fossi.","Ti capita spesso di pensare di essere quello che fai.","Ti costruisci un'identità che possa essere accettata socialmente.","Sai vendere benissimo un'immagine o un prodotto perché li sai confezionare bene.","Pensi di poter fare qualsiasi lavoro o assumere qualsiasi aspetto per guadagnare l'ammirazione altrui, anche se è una cosa difficile ed estenuante.","Trovi delle giustificazioni per il fatto che sei sempre occupato/a.","Provi dolore ad essere consapevole delle tue emozioni.","Hai paura che esprimere le emozioni possa danneggiare l'immagine che gli altri hanno di te."]},{"tipo":4,"nome":"Nespola","emoji":"🍊","domande":["Ti concentri molto sul meccanismo con cui funzionano le tue emozioni e ne sperimenti una vasta gamma.","Ti senti a tuo agio con le sensazioni forti.","Noti facilmente che cosa manca in una certa situazione e altrettanto noti che cosa manca in te stesso/a.","Ti paragoni spesso agli altri, uscendo a volte bene e a volte male da questo confronto.","Senti di non essere adeguato/a, sia in senso positivo sia negativo.","La tristezza per te è un'emozione familiare.","Nei rapporti tra persone ti accorgi facilmente di quello che accade al livello più profondo e noti ciò che avviene sotto la superficie anche quando non viene espresso.","Dai molto valore all'autenticità, sia per quanto riguarda te stesso/a sia per quanto riguarda gli altri.","Senti il bisogno di dire la verità, ma è una cosa che le persone a volte apprezzano e a volte no.","Ti rendi immediatamente conto se fra te e un'altra persona c'è sintonia.","Hai un forte desiderio di essere compreso/a, ma spesso ti senti frainteso/a.","Tendi ad idealizzare ciò che è lontano e a notare, nel presente, quello che non hai.","Può darsi che tu ti senta inferiore o superiore, ma non hai mai la sensazione di sentirti uguale agli altri.","Hai difficoltà ad accettare i feedback positivi degli altri e sei sicuro/a di valutare te stesso/a nel modo giusto.","Credi al principio: \"Sento dunque sono\".","Ti capita di riconoscere e ammirare gli altri in modo eccessivo, di sperticarti in complimenti.","In alcune situazioni provi una tristezza o un'esaltazione eccessive.","Hai bisogno di sentirti speciale e di essere riconosciuto/a tale dagli altri.","Usi spesso un linguaggio troppo sofisticato, astratto o metaforico.","Tendi a focalizzarti sul fatto che gli altri non soddisfano i tuoi bisogni."]},{"tipo":5,"nome":"Uva","emoji":"🍇","domande":["Ti impegni particolarmente ad apprendere cose nuove perché lo consideri un fine in sé, e non un mezzo per approdare a qualcos'altro.","Ti preoccupi molto di conservare spazi e momenti solo per te, ed eviti le richieste che provengono dal mondo esterno.","Ti distacchi per osservare cose e persone da una certa distanza, e poter così capire che cosa sta succedendo.","Di solito ti nutri di informazione e conoscenza più della media delle persone.","Per te è difficile sia entrare, sia restare in contatto con le emozioni e con le altre persone.","Per te è importante che le cose siano logiche e abbiano un senso.","Fai uno sforzo attivo per avere un controllo sul tuo tempo. Non ami avere interazioni più lunghe di quanto vorresti.","Pensi che, se le persone continuano a domandarti cose o a condividere con te le proprie emozioni, finirai per essere esaurito/a.","Sei specializzato/a nello specializzarti. Ti piace essere esperto/a e andare a fondo in campi specifici.","Ogni volta che hai la sensazione di non ricevere abbastanza cura ed amore, rifiuti di concedere attenzione ed amore anche agli altri.","Non ami che le persone invadano il tuo spazio.","Hai sviluppato la capacità di stare bene (o addirittura molto bene) quando sei da solo/a con te stesso/a.","Consideri la tua capacità di isolarti un'abitudine innocua o un tuo stile personale.","Reagisci male se qualcuno se la spassa eccessivamente, se c'è troppo piacere, se c'è \"troppo amore\".","Sei orgoglioso/a di essere una persona giudiziosa e riservata.","Sei riluttante a parlare dei tuoi sentimenti o a svelare informazioni personali.","Ti impegni molto per essere razionale, logico/a e assennato/a.","Tendi a razionalizzare tutto perché in fondo hai paura delle emozioni.","Provi scontento ogni volta che sei obbligato/a a fare una cosa che sai già fare.","Le persone ti dicono talvolta che hanno l'impressione che tu sia assente."]},{"tipo":6,"nome":"Mirtillo","emoji":"🫐","domande":["Concentri l'attenzione soprattutto su rischi, pericoli e minacce.","Permetti ad un venti per cento di rischio reale di occupare l'ottanta per cento dei tuoi pensieri.","Ti preoccupi di non riuscire a prevedere possibili pericoli.","Cerchi di anticipare tutti i potenziali problemi in modo da poterli evitare o essere preparato/a a gestirli.","Metti automaticamente in dubbio quello che viene detto e dici tutto il contrario.","Di solito hai un atteggiamento vigile, in modo da poter analizzare i potenziali problemi. Questo fa sì che tu sia più teso/a e in ansia della maggior parte delle persone.","Per te è difficile fidarti degli altri e a volte anche di te stesso/a.","Cerchi di migliorare il livello delle tue certezze mettendo in dubbio ciò che accade.","Tenti di controllare quello che succede nella vita immaginando tutti gli scenari possibili prima di entrare in azione.","Pensi che, se non elabori mentalmente i peggiori scenari, non ti sentirai abbastanza preparato/a ad affrontarli.","Quando accade effettivamente qualcosa di brutto, tendi a sentirti calmo/a, preparato/a e, di punto in bianco, coraggioso/a.","Hai un bisogno costante di sentirti al sicuro.","Continui a concentrarti su ciò che è complicato e ciò aumenta la tua ansia.","Cerchi di costruire rapporti basati sulla fiducia ma sottoponi le persone a molte prove prima di concederla.","Osservi le persone attentamente per poter scovare tutte le loro incoerenze.","Ti capita di ribellarti all'autorità e di assumere un ruolo controcorrente.","Ti capita di affrontare l'autorità per proteggere gli oppressi.","Trovi difficile rilassarti.","Sei sorpreso o preoccupato quando accadono cose belle.","Sei estremamente leale con alcune persone per dimostrare che le consideri degne di fiducia."]},{"tipo":7,"nome":"Ananas","emoji":"🍍","domande":["Ti concentri molto su attività interessanti, idee stimolanti e future possibilità.","Cerchi attivamente modi per prendere parte ad attività piacevoli e divertenti, e temi di lasciarti sfuggire occasioni di piacere e di divertimento.","Eviti situazioni potenzialmente sgradevoli, tenendoti sempre aperte altre opzioni, trovando delle opportunità per vivere avventure sempre preservando la tua libertà.","Sei solito scovare programmi e progetti positivi che ti mantengono concentrato/a su possibilità future.","Dai valore al fatto di vivere una vita senza limitazioni. Non vuoi sentirti costretto/a dagli altri o dalle circostanze.","Cerchi di fare in modo che tutti abbiano la medesima autorità e non ami le gerarchie, perché non ti piace che ti dicano che cosa devi fare, né ami dire agli altri che cosa debbano fare loro.","Sei una persona decisamente ottimista. Pensi che il futuro possa essere sempre luminoso.","Nutri interessi variegati e non sei uno/a specialista: sei specializzato/a nel non specializzarti.","Nella vita ti è difficile affrontare il dolore e la sofferenza.","Non capisci perché dovresti mettere in dubbio la tua attitudine ad essere sempre positivo/a.","Hai paura di restare intrappolato/a in emozioni negative da cui non puoi scappare.","Tendi ad ammaliare tutti coloro che pensi potrebbero limitarti in qualche modo, e così li neutralizzi.","Potresti idealizzare alcune esperienze e svalutarne altre, così da giustificare le scelte che fai per sperimentare maggiormente ciò che ti fa sentire bene piuttosto che ciò che non lo fa.","Sei un/a bravo/a raccontatore/raccontatrice di storie che offrono una giustificazione a ciò che vuoi fare o pensare.","Vedi sempre il bicchiere mezzo pieno.","Non capisci assolutamente perché provare dolore possa essere una buona idea.","Preferisci avere diversi tipi di esperienze lavorative, piuttosto che specializzarti in un'area sola.","Quando diventi bravo/a in qualcosa senti l'urgenza di passare ad altro perché non vuoi annoiarti.","Fai connessioni e associazioni mentali tra cose diverse. Pensi \"fuori dagli schemi\".","Ti dedichi prima a ciò che ti piace di più e non a ciò che è più importante."]},{"tipo":8,"nome":"Albicocca","emoji":"🍑","domande":["Di solito sei considerato/a diretto/a e determinato/a.","Sei particolarmente bravo/a ad entrare in azione in fretta e con decisione, a volte in maniera impulsiva.","Ritieni particolarmente importante il fatto di impegnarti per assicurare giustizia ed equità, e cerchi di mettere verità e ordine in tutto quello che fai.","Se sei arrabbiato/a per te è difficile trattenerti.","Apprezzi l'onestà, la franchezza e l'autenticità. Dici la verità e vuoi che gli altri facciano altrettanto.","Con te quello che si vede corrisponde al vero.","Hai molta energia e ti piace intraprendere grandi sfide.","Non ti tiri indietro di fronte ad una situazione difficile.","Si può dire che non ami sempre il conflitto ma, se serve, sei pronto/a ad affrontarlo.","A volte puoi essere eccessivo/a in ciò che fai; per esempio mangi, bevi o lavori troppo.","Tendi ad essere protettivo/a nei confronti delle persone a cui tieni.","Cerchi di manifestare forza e potere nelle cose che fai, ed eviti in tutti i modi di passare per un/a debole.","Eserciti un controllo sulle cose e imponi agli altri la tua volontà.","Non riesci mai ad abbassare la guardia.","Hai un talento naturale per assumere ruoli guida.","Esprimi con facilità il tuo disaccordo in merito alle opinioni e ai comportamenti altrui.","Gli altri possono vederti come polemico/a, complicato/a e dominante.","La tua filosofia di vita può essere \"o tutto o niente\".","A volte agisci animato/a dal tuo bisogno di vendetta anche se la preferisci a lungo termine.","Sei spesso impaziente di soddisfare i tuoi desideri: ne senti quasi l'urgenza."]},{"tipo":9,"nome":"Fragola","emoji":"🍓","domande":["Sei contento/a quando attorno a te tutti vanno d'accordo, vivono in armonia senza nessuna tensione.","Vai piuttosto d'accordo con la maggior parte delle persone e trovi semplice adattarti ai programmi altrui.","Non ami turbare la pace e sei bravissimo/a a mediare e a evitare i conflitti.","Solo di rado esprimi la tua rabbia in modo aperto e diretto.","Riesci a vedere molti lati diversi di una stessa questione e capisci facilmente i punti di vista.","Collabori in modo naturale con le persone che ti circondano, e non per essere riconosciuto/a, ma semplicemente per essere d'aiuto e promuovere un'atmosfera pacifica.","Le persone ti dicono che ti trovano accomodante e amichevole, che sei uno/a che semplifica le cose.","Spesso per te è difficile capire che cosa vuoi. Puoi percepire che attorno a te ci sia una \"nebbia\" che non ti permette di identificare quello che desideri (ti risulta invece un po' più semplice capire quello che non desideri).","Anche se non dici sempre la tua opinione – o non la esprimi apertamente – non ti piace quando le persone ti ignorano e ti escludono.","Non ti piace quando le persone sono autoritarie e ti dicono che cosa fare.","Ti metti spesso all'ultimo posto.","A volte ti sembra di vivere l'esistenza come un/a sonnambulo/a.","Presti poca attenzione a te stesso/a e ai tuoi programmi.","Hai difficoltà a mantenere la concentrazione e l'energia quando agisci per te stesso/a.","Se una persona ti chiede di fare una cosa per lei difficilmente riesci a dire di no.","Hai il dono di aiutare le persone a capirsi le une con le altre.","Tendi sempre a cercare di stare comodo/a, ad evitare qualsiasi situazione scomoda.","Non vuoi essere consapevole di essere in collera.","Credi di non poter avere alcun ruolo nel cambiamento del mondo.","Se qualcuno ti domanda che cosa vuoi (ad es. banalmente, che cosa vorresti mangiare per cena), spesso non sai rispondere."]}];

// ── TEST DEI 9 FRUTTI ──
let testAnswers = {}; // {tipo: [true/false/null x20]}
let testCurrentTipo = 1;
let testStarted = false;

const TIPO_COLORS = {
  1:"#a83232",2:"#c45a22",3:"#c49a1a",4:"#1565c0",5:"#452780",
  6:"#4a5a6a",7:"#2e7d4f",8:"#c45a22",9:"#5a7a6a"
};

function startTest(){
  testAnswers={};
  for(let i=1;i<=9;i++) testAnswers[i]=Array(20).fill(null);
  testStarted=true;
  document.getElementById("test-welcome").style.display="none";
  document.getElementById("test-in-progress").style.display="block";
  renderFruttiNav();
  showFrutto(1);
}

function renderFruttiNav(){
  const nav=document.getElementById("frutti-nav");
  nav.innerHTML=TEST_FRUTTI.map(f=>`
    <button class="test-nav-btn ${f.tipo===testCurrentTipo?'active':''} ${isFruttoComplete(f.tipo)?'done':hasSomeAnswers(f.tipo)?'partial':''}"
      onclick="showFrutto(${f.tipo})" title="${f.nome} (Tipo ${f.tipo})">${f.emoji}</button>
  `).join("");
}

function isFruttoComplete(tipo){
  return testAnswers[tipo]&&testAnswers[tipo].every(a=>a!==null);
}
function hasSomeAnswers(tipo){
  return testAnswers[tipo]&&testAnswers[tipo].some(a=>a!==null);
}
function countAnswered(){
  let n=0;
  for(let i=1;i<=9;i++) n+=(testAnswers[i]||[]).filter(a=>a!==null).length;
  return n;
}

function showFrutto(tipo){
  testCurrentTipo=tipo;
  const f=TEST_FRUTTI.find(x=>x.tipo===tipo);
  if(!f)return;
  renderFruttiNav();
  updateProgress();
  
  const col=TIPO_COLORS[tipo]||"#888";
  const card=document.getElementById("test-card");
  const answers=testAnswers[tipo]||Array(20).fill(null);
  const done=isFruttoComplete(tipo);
  
  card.innerHTML=`
    <div class="test-card-header" style="background:linear-gradient(135deg,${col} 0%,${col}cc 100%)">
      <h3>${f.emoji} ${f.nome} — Tipo ${f.tipo}</h3>
      <p>${answers.filter(a=>a!==null).length} / 20 domande risposte</p>
    </div>
    <div class="test-questions" id="test-q-list">
      ${f.domande.map((q,i)=>{
        const ans=answers[i];
        return`<div class="test-question ${ans===true?'answered-v':ans===false?'answered-f':''}" id="q-${tipo}-${i}">
          <span class="test-q-num">${i+1}</span>
          <span class="test-q-text">${q}</span>
          <div class="test-q-btns">
            <button class="test-btn v ${ans===true?'sel':''}" onclick="setAnswer(${tipo},${i},true)" title="Vero">✓</button>
            <button class="test-btn f ${ans===false?'sel':''}" onclick="setAnswer(${tipo},${i},false)" title="Falso">✗</button>
          </div>
        </div>`;
      }).join("")}
    </div>
    <div class="test-nav-footer">
      <button onclick="prevFrutto()">← Precedente</button>
      <span class="test-counter">${done?'✓ Completo':'Rispondi a tutte'}</span>
      ${tipo<9?`<button class="btn-gold" onclick="nextFrutto()">Successivo →</button>`:
        `<button class="btn-gold" onclick="calculateResult()" ${countAnswered()<180?'style="opacity:.5"':''}>Calcola risultato 🌳</button>`}
    </div>`;
}

function setAnswer(tipo, idx, val){
  testAnswers[tipo][idx]=val;
  // Update question styling
  const q=document.getElementById(`q-${tipo}-${idx}`);
  if(q){
    q.className=`test-question ${val?'answered-v':'answered-f'}`;
    const btns=q.querySelectorAll('.test-btn');
    btns[0].className=`test-btn v ${val===true?'sel':''}`;
    btns[1].className=`test-btn f ${val===false?'sel':''}`;
  }
  // Update header count
  const answers=testAnswers[tipo];
  const answered=answers.filter(a=>a!==null).length;
  const header=document.querySelector(".test-card-header p");
  if(header) header.textContent=answered+" / 20 domande risposte";
  // Update nav
  renderFruttiNav();
  updateProgress();
  // Auto-advance when complete
  if(isFruttoComplete(tipo) && tipo<9){
    setTimeout(()=>nextFrutto(),600);
  }
}

function prevFrutto(){if(testCurrentTipo>1)showFrutto(testCurrentTipo-1);}
function nextFrutto(){if(testCurrentTipo<9)showFrutto(testCurrentTipo+1);}

function updateProgress(){
  const done=countAnswered();
  const pct=Math.round(done/180*100);
  const fill=document.getElementById("prog-fill");
  const lbl=document.getElementById("prog-label");
  const cnt=document.getElementById("prog-count");
  if(fill) fill.style.width=pct+"%";
  if(lbl) lbl.textContent=`Frutto ${testCurrentTipo} di 9`;
  if(cnt) cnt.textContent=`${done} / 180 risposte`;
}

function calculateResult(){
  const scores={};
  for(let i=1;i<=9;i++){
    scores[i]=(testAnswers[i]||[]).filter(a=>a===true).length;
  }
  
  // Find top type
  let topTipo=1, topScore=0;
  for(let i=1;i<=9;i++){
    if(scores[i]>topScore){topScore=scores[i];topTipo=i;}
  }
  
  // Find ala (second highest adjacent)
  const adj=[topTipo-1||9, topTipo+1>9?1:topTipo+1];
  let ala = adj[0];
  if(scores[adj[1]]>scores[adj[0]]) ala=adj[1];
  
  showResult(scores, topTipo, ala);
}

function showResult(scores, topTipo, ala){
  document.getElementById("test-in-progress").style.display="none";
  const resEl=document.getElementById("test-result");
  resEl.classList.add("active");
  
  const f=TEST_FRUTTI.find(x=>x.tipo===topTipo)||{};
  // Save to profile
  saveProfileResult('frutti',{tipo:topTipo, nome:f.nome||'', tipo2:sorted[1]?Number(sorted[1][0]):null, ala:ala||null});

  const e=DB.enneatipi.find(x=>x.id==="e"+topTipo)||{};
  const ex=ENNEAGRAMMA_EXTRA[String(topTipo)]||{};
  const col=TIPO_COLORS[topTipo]||"#888";
  
  // Sorted scores for chart
  const sorted=Object.entries(scores).sort((a,b)=>b[1]-a[1]);
  const barsHtml=sorted.map(([tipo,score])=>{
    const ft=TEST_FRUTTI.find(x=>x.tipo==tipo)||{};
    const pct=Math.round(score/20*100);
    const c=TIPO_COLORS[tipo]||"#888";
    return`<div class="result-bar-row">
      <span class="result-bar-label">${ft.emoji||''} Tipo ${tipo}</span>
      <div class="result-bar-outer"><div class="result-bar-fill" style="width:${pct}%;background:${c}"></div></div>
      <span class="result-bar-pct">${score}/20</span>
    </div>`;
  }).join("");
  
  // Connections to rest of site
  const chakraNames=((e.chakra||[]).map(cid=>{const c=byId(cid);return c?c.name.split('–')[0].trim():cid})).join(", ");
  const cristNames=((e.cristalli||[]).slice(0,3).map(id=>{const c=byId(id);return c?c.name:id})).join(", ");
  const freqNames=((e.frequenze||[]).slice(0,2).map(id=>{const c=byId(id);return c?c.short:id})).join(", ");
  const bachNames=BACH.filter(b=>b.enneatipi&&b.enneatipi.includes("Tipo "+topTipo)).map(b=>b.name).slice(0,2).join(", ");
  const adNames=((e.adattamenti||[]).map(id=>{const a=byId(id);return a?a.short:id})).join(", ");
  const alaE=DB.enneatipi.find(x=>x.id==="e"+ala)||{};
  
  resEl.innerHTML=`
    <div class="result-hero" style="background:linear-gradient(135deg,${col} 0%,${col}aa 100%)">
      <div class="result-emoji">${f.emoji||'🌳'}</div>
      <div class="result-tipo">Tipo ${topTipo} — ${e.name||f.nome}</div>
      <div style="font-size:.9rem;color:rgba(249,245,239,.8);margin-top:.3rem;font-style:italic">${f.nome} · ${ex.frutto||''}</div>
      ${ex.dignita?`<div style="font-size:.78rem;color:rgba(249,245,239,.55);margin-top:.25rem">Dignità: ${ex.dignita} · ${ex.gerarchia||''}</div>`:''}
      <div class="result-sub">Ala ${ala}: ${alaE.short||'T'+ala}</div>
    </div>
    
    <div class="result-chart">
      <h4>Il tuo profilo completo</h4>
      <div class="result-bars">${barsHtml}</div>
    </div>
    
    <div class="result-connections">
      <h4>Le tue connessioni nel database</h4>
      <div class="result-conn-grid">
        ${chakraNames?`<div class="result-conn-card" onclick="goTo('e${topTipo}','enneatipi');st('chakra-sec')"><div class="result-conn-label">Chakra correlati</div><div class="result-conn-val">${chakraNames}</div></div>`:''}
        ${cristNames?`<div class="result-conn-card" onclick="goTo('${(e.cristalli||['cr1'])[0]}','cristalli');st('explorer')"><div class="result-conn-label">Cristalli curativi</div><div class="result-conn-val">${cristNames}</div></div>`:''}
        ${freqNames?`<div class="result-conn-card" onclick="st('musica')"><div class="result-conn-label">Frequenze solfeggio</div><div class="result-conn-val">${freqNames}</div></div>`:''}
        ${bachNames?`<div class="result-conn-card" onclick="st('bach')"><div class="result-conn-label">Fiori di Bach</div><div class="result-conn-val">${bachNames}</div></div>`:''}
        ${adNames?`<div class="result-conn-card" onclick="st('at-adattamenti')"><div class="result-conn-label">Adattamento AT</div><div class="result-conn-val">${adNames}</div></div>`:''}
        ${ex.musa?`<div class="result-conn-card"><div class="result-conn-label">Musa</div><div class="result-conn-val">${ex.musa}</div></div>`:''}
        ${ex.pietre?`<div class="result-conn-card" onclick="st('explorer')"><div class="result-conn-label">Pietre curative</div><div class="result-conn-val">${ex.pietre.join(', ')}</div></div>`:''}
        ${ex.cibi?`<div class="result-conn-card" onclick="st('alimentazione')"><div class="result-conn-label">Cibi consigliati</div><div class="result-conn-val">${ex.cibi.join(', ')}</div></div>`:''}
      </div>
      
      <div class="result-actions" style="margin-top:1.5rem">
        <button class="btn-gold" onclick="goTo('e${topTipo}','enneatipi');st('enneagram')">Vedi percorso evolutivo →</button>
        <button class="btn-ghost" onclick="showCompatFromResult(${topTipo})">Compatibilità →</button>
        <button class="btn-ghost" onclick="askAiAboutResult(${topTipo})">Chiedi alla AI →</button>
        <button onclick="resetTest()" style="padding:.6rem 1.2rem;border:1.5px solid var(--border);border-radius:var(--r);background:transparent;color:var(--ink3);cursor:pointer;font-family:'Outfit',sans-serif;font-size:.82rem">Rifai il test</button>
      </div>
    </div>`;
  
  resEl.scrollIntoView({behavior:"smooth",block:"start"});
}

function showCompatFromResult(tipo){
  document.getElementById("compat-t1").value=tipo;
  st("compatibilita");
  setTimeout(()=>{document.getElementById("compat-t2").focus();},600);
}

function askAiAboutResult(tipo){
  const e=DB.enneatipi.find(x=>x.id==="e"+tipo)||{};
  const f=TEST_FRUTTI.find(x=>x.tipo===tipo)||{};
  const msg=`Ho appena completato il test dei 9 Frutti e sono risultato Tipo ${tipo} (${f.nome||e.short||''}). ${e.name||''}. Puoi darmi un percorso personalizzato integrando chakra, cristalli, adattamento AT e ciò che mi serve per evolvermi?`;
  document.getElementById("chat-input").value=msg;
  st("consulente");
  setTimeout(()=>sendMsg(),400);
}

function resetTest(){
  testAnswers={};
  testStarted=false;
  const res=document.getElementById("test-result");
  res.classList.remove("active");
  res.innerHTML='';
  document.getElementById("test-welcome").style.display="block";
  document.getElementById("test-in-progress").style.display="none";
}

const AT_TEST_QUESTIONS = [{"q":"Ti capita spesso di dubitare delle intenzioni degli altri anche in situazioni neutre?","ad":"paranoide","dir":"I","extra":false},{"q":"Interpreti gesti o parole come possibili minacce o critiche?","ad":"paranoide","dir":"E","extra":false},{"q":"Preferisci non condividere confidenze per timore che vengano usate contro di te?","ad":"paranoide","dir":"I","extra":false},{"q":"Controlli le versioni degli eventi raccontate da altri?","ad":"paranoide","dir":"E","extra":false},{"q":"Noti dettagli che altri ignorano e li interpreti come segnali di ostilità nascosta?","ad":"paranoide","dir":"I","extra":true},{"q":"Preferisci la solitudine anche quando potresti stare in compagnia?","ad":"schizoide","dir":"I","extra":false},{"q":"Ti senti spesso spettatore nelle tue relazioni?","ad":"schizoide","dir":"I","extra":false},{"q":"Vivi le emozioni con distacco, come se non ti appartenessero?","ad":"schizoide","dir":"I","extra":false},{"q":"Eviti coinvolgimenti emotivi profondi per mantenere indipendenza?","ad":"schizoide","dir":"I","extra":false},{"q":"Ti capita di sentirti \"fuori posto\" o \"fuori dal mondo\" in contesti sociali?","ad":"schizoide","dir":"I","extra":false},{"q":"Ti senti più a tuo agio con le idee e i concetti che con le persone?","ad":"schizoide","dir":"I","extra":true},{"q":"Hai difficoltà a capire spontaneamente le aspettative sociali degli altri?","ad":"schizoide","dir":"I","extra":true},{"q":"Infrangi deliberatamente regole o convenzioni che ritieni inutili?","ad":"antisociale","dir":"E","extra":false},{"q":"Ti diverte provocare reazioni sfidando norme sociali?","ad":"antisociale","dir":"E","extra":false},{"q":"Preferisci agire piuttosto che discutere regole o procedure?","ad":"antisociale","dir":"E","extra":false},{"q":"Ti senti in competizione anche quando non è richiesto?","ad":"antisociale","dir":"E","extra":false},{"q":"Ti è stato detto che metti in discussione valori sacri per altri?","ad":"antisociale","dir":"E","extra":false},{"q":"Le regole ti sembrano principalmente ostacoli da aggirare piuttosto che guide utili?","ad":"antisociale","dir":"E","extra":true},{"q":"Ti senti intrappolato quando devi seguire procedure stabilite da altri?","ad":"antisociale","dir":"E","extra":true},{"q":"Pianifichi le tue giornate in modo molto strutturato?","ad":"oc","dir":"E","extra":false},{"q":"Controlli più volte il tuo lavoro per essere sicuro che sia perfetto?","ad":"oc","dir":"E","extra":false},{"q":"Usi punteggi, classifiche o medie per valutare le tue esperienze?","ad":"oc","dir":"E","extra":false},{"q":"Rimugini a lungo su errori minori?","ad":"oc","dir":"E","extra":false},{"q":"Eviti di parlare se non sei certo al 100% della correttezza di ciò che dirai?","ad":"oc","dir":"I","extra":false},{"q":"Rinvii le decisioni finché non hai analizzato ogni possibile scenario?","ad":"oc","dir":"I","extra":true},{"q":"Hai difficoltà a delegare perché temi che gli altri non facciano le cose come si deve?","ad":"oc","dir":"E","extra":true},{"q":"Ti piace raccontare di te per coinvolgere chi ti ascolta?","ad":"istrionico","dir":"E","extra":false},{"q":"Ti capita di esprimere emozioni in modo evidente o teatrale?","ad":"istrionico","dir":"E","extra":false},{"q":"Preferisci condividere i tuoi successi piuttosto che tenerli per te?","ad":"istrionico","dir":"E","extra":false},{"q":"Amplifichi volontariamente le emozioni per renderle più interessanti agli altri?","ad":"istrionico","dir":"E","extra":false},{"q":"Ti senti a disagio se non ricevi attenzione dagli altri?","ad":"istrionico","dir":"E","extra":false},{"q":"Il tuo umore cambia rapidamente in base alle reazioni delle persone intorno a te?","ad":"istrionico","dir":"E","extra":true},{"q":"Ti piace essere al centro dell'attenzione in situazioni sociali?","ad":"istrionico","dir":"E","extra":true},{"q":"Eviti un confronto diretto quando sei in disaccordo?","ad":"pa","dir":"I","extra":false},{"q":"Usi il silenzio o l'assenza come forma di protesta?","ad":"pa","dir":"I","extra":false},{"q":"Rimandi un compito o una risposta per mostrare disaccordo?","ad":"pa","dir":"I","extra":false},{"q":"Saboti di proposito un'attività per sottrarti a una responsabilità?","ad":"pa","dir":"I","extra":false},{"q":"Esprimi disagio con gesti ambigui invece che con parole esplicite?","ad":"pa","dir":"I","extra":false},{"q":"Quando deluso, preferisci far capire il tuo disagio indirettamente piuttosto che dirlo?","ad":"pa","dir":"I","extra":true},{"q":"Ti senti spesso frustrato da richieste che percepisci come ingiuste, ma non lo dici apertamente?","ad":"pa","dir":"I","extra":true}];

const AT_AD_META = {"paranoide":{"label":"Paranoide","alias":"Brillante-Scettico","icon":"🔍","color":"#f59e0b","tipo":"Sopravvivenza"},"schizoide":{"label":"Schizoide","alias":"Creativo-Sognatore","icon":"🌙","color":"#6366f1","tipo":"Sopravvivenza"},"antisociale":{"label":"Antisociale","alias":"Affascinante-Manipolatore","icon":"⚡","color":"#ef4444","tipo":"Sopravvivenza"},"oc":{"label":"Ossessivo-Compulsivo","alias":"Responsabile-Stakanovista","icon":"📋","color":"#3b82f6","tipo":"Performance"},"istrionico":{"label":"Istrionico","alias":"Entusiasta-Iperreattivo","icon":"✨","color":"#ec4899","tipo":"Performance"},"pa":{"label":"Passivo-Aggressivo","alias":"Scherzoso-Oppositivo","icon":"🌊","color":"#10b981","tipo":"Performance"}};

const AT_AD_MAP = {"paranoide":"ad3","schizoide":"ad1","antisociale":"ad2","oc":"ad5","istrionico":"ad6","pa":"ad4"};

// ── TEST ADATTAMENTI AT ──
const AT_GROUPS = ["paranoide","schizoide","antisociale","oc","istrionico","pa"];
let atAnswers = {}; // {idx: true/false/null}
let atCurrentGroup = "paranoide";

function startAtTest(){
  atAnswers = {};
  AT_TEST_QUESTIONS.forEach((_,i)=>atAnswers[i]=null);
  document.getElementById("at-test-welcome").style.display="none";
  document.getElementById("at-test-progress").style.display="block";
  renderAtGroupsNav();
  showAtGroup("paranoide");
}

function getGroupQuestions(grp){
  return AT_TEST_QUESTIONS.map((q,i)=>({...q,idx:i})).filter(q=>q.ad===grp);
}

function isGroupComplete(grp){
  return getGroupQuestions(grp).every(q=>atAnswers[q.idx]!==null);
}
function hasGroupSome(grp){
  return getGroupQuestions(grp).some(q=>atAnswers[q.idx]!==null);
}
function countAtAnswered(){
  return Object.values(atAnswers).filter(v=>v!==null).length;
}

function renderAtGroupsNav(){
  const nav=document.getElementById("at-groups-nav");
  nav.innerHTML=AT_GROUPS.map(g=>{
    const m=AT_AD_META[g];
    const done=isGroupComplete(g);
    const partial=!done&&hasGroupSome(g);
    return`<button class="at-group-btn ${g===atCurrentGroup?'active':''} ${done?'done':''}"
      style="${g===atCurrentGroup?('border-color:'+m.color+';background:'+m.color+'15'):''}${done?';opacity:.6':''}"
      onclick="showAtGroup('${g}')">
      ${m.icon} ${m.label}
      ${done?'✓':partial?'…':''}
    </button>`;
  }).join("");
}

function showAtGroup(grp){
  atCurrentGroup=grp;
  const m=AT_AD_META[grp];
  const qs=getGroupQuestions(grp);
  renderAtGroupsNav();
  updateAtProgress();
  
  const grpIdx=AT_GROUPS.indexOf(grp);
  const prevGrp=grpIdx>0?AT_GROUPS[grpIdx-1]:null;
  const nextGrp=grpIdx<AT_GROUPS.length-1?AT_GROUPS[grpIdx+1]:null;
  const isLast=grpIdx===AT_GROUPS.length-1;
  
  const answered=qs.filter(q=>atAnswers[q.idx]!==null).length;
  
  const card=document.getElementById("at-test-card2");
  card.innerHTML=`
    <div class="at-card2-hdr" style="background:linear-gradient(135deg,${m.color} 0%,${m.color}bb 100%)">
      <h3>${m.icon} ${m.label} <span style="font-size:.8em;opacity:.7">— ${m.alias}</span></h3>
      <p>${answered} / ${qs.length} domande risposte · ${m.tipo}</p>
      <div class="at-card2-extra">* Le domande contrassegnate sono state aggiunte per migliorare la discriminazione del test</div>
    </div>
    <div class="at-q-list" id="at-q-list">
      ${qs.map((q,i)=>{
        const ans=atAnswers[q.idx];
        return`<div class="at-q-row ${ans===true?'yes':ans===false?'no':''}" id="atq-${q.idx}">
          <span class="at-q-num">${i+1}</span>
          <span class="at-q-txt">${q.q}${q.extra?'<span class="at-q-extra-tag">*</span>':''}</span>
          <div class="at-yn-btns">
            <button class="at-yn si ${ans===true?'sel':''}" onclick="setAtAnswer(${q.idx},true)">Sì</button>
            <button class="at-yn no ${ans===false?'sel':''}" onclick="setAtAnswer(${q.idx},false)">No</button>
          </div>
        </div>`;
      }).join("")}
    </div>
    <div class="at-card2-footer">
      ${prevGrp?`<button onclick="showAtGroup('${prevGrp}')">← Precedente</button>`:`<span></span>`}
      <span style="font-size:.75rem;color:var(--ink4)">${isGroupComplete(grp)?'✓ Sezione completa':'Rispondi a tutte'}</span>
      ${isLast
        ?`<button class="btn-gold" onclick="calculateAtResult()" ${countAtAnswered()<40?'style="opacity:.55"':''}>Calcola →</button>`
        :`<button class="btn-gold" onclick="showAtGroup('${nextGrp}')">Avanti →</button>`
      }
    </div>`;
}

function setAtAnswer(idx, val){
  atAnswers[idx]=val;
  const row=document.getElementById("atq-"+idx);
  if(row){
    row.className=`at-q-row ${val?'yes':'no'}`;
    const btns=row.querySelectorAll('.at-yn');
    btns[0].className=`at-yn si ${val===true?'sel':''}`;
    btns[1].className=`at-yn no ${val===false?'sel':''}`;
  }
  updateAtProgress();
  renderAtGroupsNav();
  // Auto-advance
  const grpQs=getGroupQuestions(atCurrentGroup);
  if(isGroupComplete(atCurrentGroup)){
    const grpIdx=AT_GROUPS.indexOf(atCurrentGroup);
    if(grpIdx<AT_GROUPS.length-1){
      setTimeout(()=>showAtGroup(AT_GROUPS[grpIdx+1]),500);
    }
  }
}

function updateAtProgress(){
  const done=countAtAnswered();
  const pct=Math.round(done/40*100);
  const fill=document.getElementById("at-prog-fill");
  const lbl=document.getElementById("at-prog-lbl");
  const cnt=document.getElementById("at-prog-cnt");
  if(fill) fill.style.width=pct+"%";
  if(lbl) lbl.textContent=`Sezione ${AT_GROUPS.indexOf(atCurrentGroup)+1} di 6`;
  if(cnt) cnt.textContent=`${done} / 40 risposte`;
}

function calculateAtResult(){
  // For each adaptation: count Sì, count E-Sì, count I-Sì
  const results={};
  AT_GROUPS.forEach(grp=>{
    const qs=getGroupQuestions(grp);
    const total=qs.length;
    let si=0, E=0, I=0;
    qs.forEach(q=>{
      const ans=atAnswers[q.idx];
      if(ans===true){
        si++;
        if(q.dir==="E") E++; else I++;
      } else if(ans===false){
        // No contribuisce 0 punti per entrambe le direzioni
      }
    });
    results[grp]={total,si,E,I,pct:Math.round(si/total*100),prevalenza:E>I?"E":I>E?"I":"="};
  });
  
  // Overall E/I
  let totalE=0,totalI=0;
  AT_GROUPS.forEach(g=>{totalE+=results[g].E;totalI+=results[g].I;});
  
  // Top 2 adaptations
  const sorted=AT_GROUPS.map(g=>({g,pct:results[g].pct})).sort((a,b)=>b.pct-a.pct);
  const primary=sorted[0].g;
  const secondary=sorted[1].g;
  
  showAtResult(results, primary, secondary, totalE, totalI);
}

function showAtResult(results, primary, secondary, totalE, totalI){
  document.getElementById("at-test-progress").style.display="none";
  const resEl=document.getElementById("at-result");
  // Save to profile
  const _pm = AT_AD_META[primary]||{};
  const _sm = AT_AD_META[secondary]||{};
  const _pRes = results[primary]||{};
  const _sRes = results[secondary]||{};
  saveProfileResult('at',{
    primario: _pm.name||primary,
    primario_pct: Math.round(_pRes.pct||0),
    secondario: _sm.name||secondary,
    secondario_pct: Math.round(_sRes.pct||0),
    prevalenza: totalE>totalI?'Estroversione (E)':totalI>totalE?'Introversione (I)':'Equilibrata'
  });

  resEl.classList.add("active");
  
  const pm=AT_AD_META[primary];
  const sm=AT_AD_META[secondary];
  const pRes=results[primary];
  const prevalenzaGlobal=totalE>totalI?"E":totalI>totalE?"I":"=";
  
  // Bar rows
  const sorted=AT_GROUPS.map(g=>({g,r:results[g]})).sort((a,b)=>b.r.pct-a.r.pct);
  const barsHtml=sorted.map(({g,r})=>{
    const m=AT_AD_META[g];
    const eiClass=r.prevalenza==="E"?"at-ei-E":r.prevalenza==="I"?"at-ei-I":"at-ei-eq";
    const eiLabel=r.prevalenza==="E"?"Estroverso":r.prevalenza==="I"?"Introverso":"Bilanciato";
    return`<div class="at-adapt-row">
      <div class="at-adapt-name"><span style="color:${m.color}">${m.icon}</span> ${m.label}</div>
      <div class="at-adapt-bar-wrap">
        <div class="at-adapt-bar" style="width:${r.pct}%;background:${m.color}"></div>
      </div>
      <div class="at-adapt-ei">
        <span class="at-ei-badge ${eiClass}">${eiLabel}</span>
        <div style="font-size:.65rem;color:var(--ink4);margin-top:.15rem">${r.si}/${r.total} Sì</div>
      </div>
    </div>`;
  }).join("");
  
  // Connections to DB
  const primDbId=AT_AD_MAP[primary];
  const primDb=byId(primDbId)||{};
  const secDbId=AT_AD_MAP[secondary];
  const secDb=byId(secDbId)||{};
  const ennNames=((primDb.enneatipi||[]).map(id=>{const e=byId(id);return e?e.short:id})).join(", ");
  const chakraNames=((primDb.chakra||[]).map(id=>{const c=byId(id);return c?c.name.split('–')[0].trim():id})).join(", ");
  const cristNames=((primDb.cristalli||[]).slice(0,3).map(id=>{const c=byId(id);return c?c.name:id})).join(", ");
  const freqNames=((primDb.frequenze||[]).slice(0,2).map(id=>{const f=byId(id);return f?f.short:id})).join(", ");
  
  // Porta aperta
  const portaAperta=primDb.portaAperta||"";
  const portaBersaglio=primDb.portaBersaglio||"";
  const portaTrappola=primDb.portaTrappola||"";
  const spinta=primDb.spinta||"";
  const copione=primDb.copione||"";
  
  resEl.innerHTML=`
    <div class="at-result-top">
      <div style="font-size:2.2rem;margin-bottom:.5rem">${pm.icon}</div>
      <h3>Adattamento primario: ${pm.label}</h3>
      <div style="font-size:.9rem;color:rgba(249,245,239,.75);margin:.2rem 0;font-style:italic">${pm.alias} · ${pm.tipo}</div>
      <div style="font-size:.78rem;color:rgba(249,245,239,.45);margin-top:.3rem">
        Secondario: ${sm.icon} ${sm.label} (${sm.alias}) · 
        Tendenza globale: ${totalE>totalI?"Estroverso":"Introverso"} (E:${totalE} / I:${totalI})
      </div>
    </div>
    
    <div class="at-radar-section">
      <h4>Profilo completo dei 6 adattamenti</h4>
      <div class="at-adapt-bars">${barsHtml}</div>
      <div class="at-overall-ei">
        <div class="at-overall-ei-block">
          <div class="big" style="color:#1d4ed8">${totalE}</div>
          <div class="lbl">Punteggio E</div>
        </div>
        <div class="at-overall-ei-block">
          <div class="big" style="color:var(--gold)">${totalE>totalI?"E":totalI>totalE?"I":"="}</div>
          <div class="lbl">Prevalenza</div>
        </div>
        <div class="at-overall-ei-block">
          <div class="big" style="color:#4c1d95">${totalI}</div>
          <div class="lbl">Punteggio I</div>
        </div>
      </div>
    </div>
    
    <div class="at-result-conns">
      <h4>Le tue connessioni nel database</h4>
      <div class="at-conn-grid2">
        ${portaAperta?`<div class="at-conn-card2" onclick="st('at-adattamenti')"><div class="at-conn-lbl2">Porta aperta</div><div class="at-conn-val2">✓ ${portaAperta}</div></div>`:''}
        ${portaBersaglio?`<div class="at-conn-card2" onclick="st('at-adattamenti')"><div class="at-conn-lbl2">Porta bersaglio</div><div class="at-conn-val2">◎ ${portaBersaglio}</div></div>`:''}
        ${spinta?`<div class="at-conn-card2" onclick="st('at-adattamenti')"><div class="at-conn-lbl2">Spinta del copione</div><div class="at-conn-val2">${spinta}</div></div>`:''}
        ${copione?`<div class="at-conn-card2" onclick="st('at-adattamenti')"><div class="at-conn-lbl2">Copione</div><div class="at-conn-val2">${copione}</div></div>`:''}
        ${ennNames?`<div class="at-conn-card2" onclick="st('enneagram')"><div class="at-conn-lbl2">Enneatipi correlati</div><div class="at-conn-val2">${ennNames}</div></div>`:''}
        ${chakraNames?`<div class="at-conn-card2" onclick="st('chakra-sec')"><div class="at-conn-lbl2">Chakra coinvolti</div><div class="at-conn-val2">${chakraNames}</div></div>`:''}
        ${cristNames?`<div class="at-conn-card2" onclick="st('explorer')"><div class="at-conn-lbl2">Cristalli curativi</div><div class="at-conn-val2">${cristNames}</div></div>`:''}
        ${freqNames?`<div class="at-conn-card2" onclick="st('musica')"><div class="at-conn-lbl2">Frequenze solfeggio</div><div class="at-conn-val2">${freqNames}</div></div>`:''}
      </div>
      
      ${portaTrappola?`<div style="margin-top:1rem;padding:.9rem 1rem;background:#fee2e2;border-radius:var(--r);border:1px solid #fecaca;font-size:.82rem;color:#9b1c1c">
        <strong>⚠ Porta trappola: ${portaTrappola}</strong> — Evita di aprire questo canale nelle prime fasi di relazione o terapia.
      </div>`:''}
      
      <div style="display:flex;gap:.75rem;flex-wrap:wrap;justify-content:center;margin-top:1.5rem;padding-top:1.25rem;border-top:1px solid var(--ivory3)">
        <button class="btn-gold" onclick="goTo('${AT_AD_MAP[primary]}','adattamenti');st('at-adattamenti')">Vedi scheda completa →</button>
        <button class="btn-ghost" onclick="askAiAboutAtResult('${primary}','${secondary}')">Chiedi alla AI →</button>
        <button class="btn-ghost" onclick="st('egogramma')">Egogramma →</button>
        <button onclick="resetAtTest()" style="padding:.6rem 1.2rem;border:1.5px solid var(--border);border-radius:var(--r);background:transparent;color:var(--ink3);cursor:pointer;font-family:'Outfit',sans-serif;font-size:.82rem">Rifai il test</button>
      </div>
    </div>`;
  
  resEl.scrollIntoView({behavior:"smooth",block:"start"});
}

function askAiAboutAtResult(primary, secondary){
  const pm=AT_AD_META[primary]||{};
  const sm=AT_AD_META[secondary]||{};
  const pd=byId(AT_AD_MAP[primary])||{};
  const msg=`Ho appena completato il test degli adattamenti AT. Il mio adattamento primario è ${pm.label} (${pm.alias}), il secondario è ${sm.label} (${sm.alias}). La porta aperta è "${pd.portaAperta||''}", la spinta è "${pd.spinta||''}". Puoi spiegarmi come questi adattamenti influenzano le mie relazioni e darmi indicazioni pratiche per lavorarci? Collegami anche ai chakra, cristalli e frequenze correlate.`;
  document.getElementById("chat-input").value=msg;
  st("consulente");
  setTimeout(()=>sendMsg(),400);
}

function resetAtTest(){
  atAnswers={};
  const res=document.getElementById("at-result");
  res.classList.remove("active");
  res.innerHTML='';
  document.getElementById("at-test-welcome").style.display="block";
  document.getElementById("at-test-progress").style.display="none";
}

function renderTabs(){
  document.getElementById("exp-tabs").innerHTML=Object.entries(CMETA).map(([c,m])=>
    `<button class="exp-tab${c===curCat?" active":""}" onclick="swCat('${c}')">${m.icon} ${m.label}</button>`
  ).join("");
}
function swCat(cat){curCat=cat;selId=null;renderTabs();renderList();renderPanel(null)}
function renderList(){
  document.getElementById("exp-list").innerHTML=(DB[curCat]||[]).map(item=>{
    const col=gc({...item,cat:curCat});
    const sub=item.nota||item.centro||item.tipo||item.categoria||"";
    return`<div class="exp-card${item.id===selId?" sel":""}" onclick="selItem('${item.id}')">
      <div class="exp-card-name"><span class="cdot" style="background:${col}"></span>${item.name}</div>
      ${sub?`<div class="exp-card-sub">${sub}</div>`:""}
    </div>`;
  }).join("");
}
function selItem(id){selId=id;renderList();renderPanel(byId(id))}
function renderPanel(item){
  const el=document.getElementById("exp-panel");
  if(!item){el.innerHTML='<div class="panel-empty"><div class="panel-empty-icon">◈</div><p>Seleziona un elemento per esplorare le sue connessioni</p></div>';return}
  const col=gc(item);const cat=item.cat;const meta=CMETA[cat];
  const connIds=[...(item.chakra||[]),...(item.cristalli||[]),...(item.enneatipi||[]),...(item.frequenze||[]),...(item.adattamenti||[]),...(item.esercizi||[])];
  const groups={};
  connIds.forEach(id=>{const c=byId(id);if(!c||c.id===item.id)return;if(!groups[c.cat])groups[c.cat]=[];if(!groups[c.cat].find(x=>x.id===id))groups[c.cat].push(c)});
  const pp=[];
  if(item.pos)pp.push({l:"Posizione",v:item.pos});
  if(item.elem)pp.push({l:"Elemento",v:item.elem});
  if(item.nota)pp.push({l:"Nota / Hz",v:item.nota});
  if(item.ghiandola)pp.push({l:"Ghiandola",v:item.ghiandola});
  if(item.demone)pp.push({l:"Blocco",v:item.demone});
  if(item.diritto)pp.push({l:"Diritto",v:item.diritto});
  if(item.virtu)pp.push({l:"Virtù",v:item.virtu});
  if(item.vizio)pp.push({l:"Vizio",v:item.vizio});
  if(item.integrazione)pp.push({l:"Integrazione",v:item.integrazione});
  if(item.disintegrazione)pp.push({l:"Disintegrazione",v:item.disintegrazione});
  if(item.fasci)pp.push({l:"Fasi evolutive",v:item.fasci});
  if(item.areaCerebrale)pp.push({l:"🧠 Area cerebrale",v:item.areaCerebrale+' ('+item.cervelloTripartito+')'});
  if(item.senso)pp.push({l:"Senso / Facoltà",v:item.senso});
  if(item.musa)pp.push({l:"Musa",v:item.musa});
  if(item.pianeta)pp.push({l:"Pianeta",v:item.pianeta});
  if(item.centro)pp.push({l:"Centro",v:item.centro});
  if(item.effetto)pp.push({l:"Effetto",v:item.effetto});
  if(item.strumenti)pp.push({l:"Strumenti",v:item.strumenti});
  if(item.tipo)pp.push({l:"Tipo",v:item.tipo});
  if(item.categoria)pp.push({l:"Categoria",v:item.categoria});
  if(item.disturbo)pp.push({l:"Disturbi",v:item.disturbo});
  if(item.funzione)pp.push({l:"Funzione",v:item.funzione});
  el.innerHTML=`
    <div class="panel-top">
      <div class="panel-stripe" style="background:${col}"></div>
      <div class="panel-title">${item.name}<span class="panel-badge">${meta.icon} ${meta.label}</span></div>
      ${item.desc?`<p class="panel-desc">${item.desc}</p>`:""}
    </div>
    <div class="panel-body">
      ${pp.length?`<div class="props">${pp.map(p=>`<div class="prop"><div class="prop-l">${p.l}</div><div class="prop-v">${p.v}</div></div>`).join("")}</div>`:""}
      ${Object.entries(groups).map(([c,its])=>`
        <div class="conn-blk">
          <div class="conn-lbl">${CMETA[c].icon} ${CMETA[c].label}</div>
          <div class="chips">${its.map(ci=>`<span class="chip" onclick="goTo('${ci.id}','${ci.cat}')">
            <span class="chip-dot" style="background:${gc(ci)}"></span>${ci.name}
          </span>`).join("")}</div>
        </div>`).join("")}
    </div>`;
}
function openExp(cat){curCat=cat;renderTabs();renderList();renderPanel(null);
renderAtCards();
  renderTransCards();renderFaq();
// Test is self-initializing
analyzeCarezze("pos");analyzeCarezze("neg");
// Egogramma: chiamata all'init E tramite IntersectionObserver per sicurezza
renderEgogramma();
const _egoObserver = new IntersectionObserver((entries)=>{
  if(entries[0].isIntersecting){
    if(!document.getElementById("ego-bars").children.length) renderEgogramma();
    _egoObserver.disconnect();
  }
},{threshold:0.1});
const _egoSection = document.getElementById("egogramma");
if(_egoSection) _egoObserver.observe(_egoSection);st("explorer")}

// ── CHAKRA ──
function renderChakra(){
  document.getElementById("chakra-rows").innerHTML=DB.chakra.map(c=>`
    <div class="cRow" id="cr-${c.id}" onclick="selChakra('${c.id}')">
      <div class="cRow-num">${c.id.replace("c","")}</div>
      <span class="cRow-sw" style="background:${c.color}"></span>
      <div class="cRow-info">
        <div class="cRow-name">${c.name}</div>
        <div class="cRow-theme">${c.tema}</div>
      </div>
    </div>`).join("");
  selChakra("c1");
}
function selChakra(id){
  document.querySelectorAll(".cRow").forEach(r=>r.classList.remove("act"));
  const row=document.getElementById("cr-"+id);if(row)row.classList.add("act");
  const c=DB.chakra.find(x=>x.id===id);if(!c)return;
  const crNames=c.cristalli.map(cid=>{const cr=byId(cid);return cr?cr.name:cid});
  const ennNames=c.enneatipi.map(eid=>{const e=byId(eid);return e?e.short:eid});
  document.getElementById("c-detail").innerHTML=`
    <div class="cd-strip" style="background:${c.color}"></div>
    <div class="cd-num">${c.id.replace("c","°")} chakra · ${c.elem}</div>
    <div class="cd-name">${c.name}</div>
    <p class="cd-desc">${c.desc}</p>
    <div class="cd-grid">
      <div class="cd-cell"><div class="cd-cl">Frequenza</div><div class="cd-cv">${c.nota}</div></div>
      <div class="cd-cell"><div class="cd-cl">Ghiandola</div><div class="cd-cv">${c.ghiandola}</div></div>
      <div class="cd-cell"><div class="cd-cl">Diritto</div><div class="cd-cv">${c.diritto}</div></div>
      <div class="cd-cell"><div class="cd-cl">Blocco</div><div class="cd-cv">${c.demone}</div></div>
    </div>
    <div class="cd-sub" style="color:${c.color}">Enneatipi correlati</div>
    <div class="crystal-tags">${ennNames.map(n=>`<span class="ctag">${n}</span>`).join("")}</div>
    <div class="cd-sub" style="color:${c.color};margin-top:.75rem">Cristalli</div>
    <div class="crystal-tags">${crNames.map(n=>`<span class="ctag">${n}</span>`).join("")}</div>`;
}

// ── ENNEAGRAM ──
function renderEnn(){
  const cc={"Istintivo":"#a83232","Emotivo":"#c45a22","Mentale":"#1565c0"};
  document.getElementById("enn-grid").innerHTML=DB.enneatipi.map(e=>{
    const ex=ENNEAGRAMMA_EXTRA[e.id.replace('e','')]||{};
    return`
    <div class="enn-card" onclick="showEnnDetail('${e.id}')">
      <div class="enn-big-num">${e.id.replace("e","")}</div>
      <div class="enn-centro" style="border-color:${cc[e.centro]||"#ccc"}40;color:${cc[e.centro]||"#888"}">${e.centro}</div>
      ${ex.frutto?`<div class="evo-badge" style="background:var(--gold-pale);color:var(--gold)">${ex.frutto}</div>`:''}
      <div class="enn-name">${e.name}</div>
      <div class="enn-italic">${e.virtu} · ${e.vizio}</div>
      ${ex.dignita?`<div style="font-size:.7rem;color:var(--gold);margin-top:.3rem;font-family:'Cormorant Garamond',serif;font-style:italic">Dignità: ${ex.dignita}</div>`:''}
      ${ex.gerarchia?`<div style="font-size:.68rem;color:var(--ink4)">☩ ${ex.gerarchia}</div>`:''}
      <div class="enn-line"><span class="enn-ll">Integrazione</span><span class="enn-lr">${e.integrazione}</span></div>
      <div class="enn-line"><span class="enn-ll">Disintegrazione</span><span class="enn-lr">${e.disintegrazione}</span></div>
      <div class="enn-path">${e.fasci}</div>
    </div>`;
  }).join("");
  
  // Add detail panel
  const grid = document.getElementById("enn-grid");
  if(!document.getElementById("enn-detail-panel")){
    const panel = document.createElement("div");
    panel.id="enn-detail-panel";
    panel.className="enn-detail-panel";
    panel.style.gridColumn="1 / -1";
    grid.appendChild(panel);
  }
}

function showEnnDetail(eid){
  const e = DB.enneatipi.find(x=>x.id===eid);
  if(!e) return;
  const num = eid.replace('e','');
  const ex = ENNEAGRAMMA_EXTRA[num]||{};
  const panel = document.getElementById("enn-detail-panel");
  if(!panel) return;
  
  // Toggle
  if(panel.classList.contains("active") && panel.dataset.current===eid){
    panel.classList.remove("active"); return;
  }
  panel.dataset.current = eid;
  panel.classList.add("active");
  
  const fasiHtml = (ex.fasiIntegr||[]).map(f=>`
    <div class="evo-fase-row">
      <span class="evo-fase-eta">${f.eta}</span>
      <div><div class="evo-fase-nome">T${f.punto} — ${f.nome}</div><div class="evo-fase-desc">${f.desc}</div></div>
    </div>`).join("");
  
  const incrociHtml = (ex.incroci||[]).map(i=>`
    <span class="incrocio-chip"><span class="incrocio-arrow">${i.da_a}</span> ${i.trasf}</span>`).join("");
  
  panel.innerHTML = `
    <div class="evo-header">
      <h3>${ex.frutto||''} ${e.name}</h3>
      <p>${e.desc}</p>
    </div>
    <div class="evo-attrs">
      ${ex.dignita?`<div class="evo-attr"><div class="evo-attr-l">Dignità (Lullo)</div><div class="evo-attr-v">${ex.dignita}</div></div>`:''}
      ${ex.gerarchia?`<div class="evo-attr"><div class="evo-attr-l">Gerarchia angelica</div><div class="evo-attr-v">${ex.gerarchia}</div></div>`:''}
      ${ex.musa?`<div class="evo-attr"><div class="evo-attr-l">Musa</div><div class="evo-attr-v">${ex.musa}</div></div>`:''}
      ${ex.pianeta?`<div class="evo-attr"><div class="evo-attr-l">Pianeta</div><div class="evo-attr-v">${ex.pianeta}</div></div>`:''}
      ${ex.ali&&ex.ali.length?`<div class="evo-attr"><div class="evo-attr-l">Ali</div><div class="evo-attr-v">T${ex.ali.join(' · T')}</div></div>`:''}
      ${ex.seqIntegr&&ex.seqIntegr.length?`<div class="evo-attr"><div class="evo-attr-l">Percorso evolutivo</div><div class="evo-attr-v">${ex.seqIntegr.join(' → ')}</div></div>`:''}
      ${ex.pietre&&ex.pietre.length?`<div class="evo-attr"><div class="evo-attr-l">Pietre curative</div><div class="evo-attr-v">${ex.pietre.join(', ')}</div></div>`:''}
      ${ex.cibi&&ex.cibi.length?`<div class="evo-attr"><div class="evo-attr-l">Cibi consigliati</div><div class="evo-attr-v">${ex.cibi.join(', ')}</div></div>`:''}
    </div>
    ${fasiHtml?`<div class="evo-fasi"><h4>Percorso evolutivo per fascia d'età (integrazione)</h4>${fasiHtml}</div>`:''}
    ${incrociHtml?`<div class="evo-incroci"><h4>Trasformazioni lungo il percorso</h4>${incrociHtml}</div>`:''}`;
    
  panel.scrollIntoView({behavior:"smooth",block:"nearest"});
}

// ── COMPATIBILITÀ ──
const COMPAT_COLORS = {
  eccellente:"#059669",ottima:"#10b981",buona:"#3b82f6",
  media:"#f59e0b",bassa:"#f97316",difficile:"#ef4444"
};
const FRUITS_NAMES = {
  1:"🍎 Il Perfezionista",2:"🍐 L\'Altruista",3:"🍒 Il Manager",
  4:"🍊 Il Romantico",5:"🍇 L\'Eremita",6:"🫐 Il Leale",
  7:"🍍 L\'Entusiasta",8:"🍑 Il Capo",9:"🍓 Il Diplomatico"
};

// ── CONFLICT DYNAMICS PER TYPE ──
const CONFLICT_DYNAMICS = {
  "1": {
    attivazione: "Sistema simpatico — critica e correzione",
    inConflitto: "Diventa rigido, critica i dettagli, usa il silenzio gelido o l\'argomentazione infinita",
    sotto: "«Devo che le cose siano fatte bene — ho paura del caos e del giudizio»",
    sfida: "Dire 'sono deluso' invece di elencare gli errori",
    regolazione: "Respiro diaframmatico 4-4-4, scrittura, ordine fisico",
    segnale: "Inizia a contare gli errori altrui o a correggere in modo ripetitivo"
  },
  "2": {
    attivazione: "Sistema simpatico — risentimento da sacrificio",
    inConflitto: "Si offre ancora di più, poi esplode con accuse di ingratitudine",
    sotto: "«Non sono abbastanza importante, nessuno mi vede davvero»",
    sfida: "Dire 'ho bisogno di...' senza aspettare che l\'altro lo intuisca",
    regolazione: "Contatto fisico gentile, riconoscimento verbale esplicito",
    segnale: "Inizia a fare di più (iperattività affettiva) prima dell\'esplosione"
  },
  "3": {
    attivazione: "Sistema simpatico — minaccia all\'immagine o all\'efficacia",
    inConflitto: "Diventa freddo, task-oriented, razionalizza tutto, nega le emozioni",
    sotto: "«Sto fallendo. Non sono abbastanza bravo/a»",
    sfida: "Fermarsi e sentire prima di agire",
    regolazione: "Pausa strutturata, riconoscimento dell\'emozione sottostante",
    segnale: "Aumenta il lavoro o le attività per evitare il confronto emotivo"
  },
  "4": {
    attivazione: "Sistema limbico — dolore dell\'abbandono o della non-unicità",
    inConflitto: "Si ritira nel dolore, amplifica l\'intensità emotiva, può diventare accusatorio",
    sotto: "«Non sono abbastanza speciale/a. Sarò abbandonato/a»",
    sfida: "Esprimere il bisogno senza amplificazione drammatica",
    regolazione: "Arte, musica, movimento corporeo, rispecchiamento emotivo",
    segnale: "Inizia a paragonarsi agli altri o a sottolineare cosa manca"
  },
  "5": {
    attivazione: "Sistema parasimpatico dorsovagale — sovraccarico sensoriale",
    inConflitto: "Si ritira fisicamente o mentalmente, monosillabi, sguardo distante",
    sotto: "«Sono sopraffatto/a. Ho bisogno di spazio per elaborare»",
    sfida: "Dire 'ho bisogno di tempo, torno entro X ore' invece di sparire",
    regolazione: "Solitudine strutturata, scrittura, spazio fisico garantito",
    segnale: "Inizia a rispondere con fatti e teorie invece di emozioni"
  },
  "6": {
    attivazione: "Sistema simpatico/dorsovagale — ipervigilanza alla minaccia",
    inConflitto: "Oscilla tra attacco (combatti) e congelamento (shutdown), anticipa scenari peggiori",
    sotto: "«Non mi fido. Qualcosa andrà storto. Non sono al sicuro»",
    sfida: "Distinguere la paura reale dalla proiezione",
    regolazione: "Routine di sicurezza, rassicurazione concreta, respiro",
    segnale: "Inizia a fare domande 'e se...' oppure a ripetere le stesse preoccupazioni"
  },
  "7": {
    attivazione: "Sistema simpatico — minaccia alla libertà o contatto col dolore",
    inConflitto: "Cambia argomento, minimizza, usa l\'umorismo come difesa, scappa fisicamente o mentalmente",
    sotto: "«Sto per essere intrappolato/a nel dolore. Devo uscirne»",
    sfida: "Restare presente nel momento difficile senza fuggire",
    regolazione: "Movimento fisico breve, poi ritorno al dialogo",
    segnale: "Inizia a parlare di altri piani, progetti futuri, cambia canale"
  },
  "8": {
    attivazione: "Sistema simpatico — percezione di ingiustizia o debolezza altrui",
    inConflitto: "Voce alta, gesti espansivi, linguaggio assoluto (mai/sempre), frontalità",
    sotto: "«Ho paura di non contare nulla. Mi sta lasciando solo/a»",
    sfida: "Dire 'ho paura' invece di 'sono arrabbiato/a'",
    regolazione: "Movimento fisico intenso, pausa da 20 minuti, poi ritorno",
    segnale: "Aumenta il volume e la direttività prima dell\'esplosione"
  },
  "9": {
    attivazione: "Sistema dorsovagale — sovraccarico da conflitto, shutdown",
    inConflitto: "Silenzio, sguardo nel vuoto, risposte automatiche ('va bene', 'come vuoi')",
    sotto: "«Sono sopraffatto/a. Se reagisco, peggiora. Meglio aspettare che passi»",
    sfida: "Dire 'questo mi ferisce' prima di disconnettersi",
    regolazione: "Segnale di pausa fisico, spazio garantito con tempo preciso di rientro",
    segnale: "Inizia a dare risposte sempre più brevi e vaghe"
  }
};

function showCompat(){
  const t1 = document.getElementById("compat-t1").value;
  const t2 = document.getElementById("compat-t2").value;
  const res = document.getElementById("compat-result");
  if(!t1||!t2){res.classList.remove("active");return;}
  
  const key = t1+"-"+t2;
  const c = COMPAT_MATRIX[key];
  if(!c){res.classList.remove("active");return;}
  
  const col = COMPAT_COLORS[c.livello]||"#888";
  const forze = (c.forza||[]).map(f=>`<span class="compat-chip forza">${f}</span>`).join("");
  const sfide = (c.sfide||[]).map(s=>`<span class="compat-chip sfida">${s}</span>`).join("");
  
  const d1 = CONFLICT_DYNAMICS[t1]||{};
  const d2 = CONFLICT_DYNAMICS[t2]||{};
  const n1 = FRUITS_NAMES[t1], n2 = FRUITS_NAMES[t2];
  const isSame = t1 === t2;

  const conflictHtml = `
    <div class="compat-conflict">
      <h4>⚡ Dinamica del conflitto</h4>
      <p class="compat-conflict-intro">In una situazione di tensione, questi due tipi attivano sistemi neurobiologici specifici che si influenzano reciprocamente. Conoscere la "danza" aiuta a interrompere il ciclo prima della rottura.</p>
      <div class="conflict-cards">
        <div class="conflict-card">
          <div class="conflict-card-name">${n1}</div>
          ${d1.attivazione ? `<div class="conflict-row"><span class="conflict-lbl">Attivazione</span><span>${d1.attivazione}</span></div>` : ''}
          ${d1.inConflitto ? `<div class="conflict-row"><span class="conflict-lbl">In conflitto</span><span>${d1.inConflitto}</span></div>` : ''}
          ${d1.sotto ? `<div class="conflict-row sotto"><span class="conflict-lbl">💛 Sotto</span><span>${d1.sotto}</span></div>` : ''}
          ${d1.sfida ? `<div class="conflict-row"><span class="conflict-lbl">Sfida</span><span>${d1.sfida}</span></div>` : ''}
          ${d1.regolazione ? `<div class="conflict-row"><span class="conflict-lbl">Regolazione</span><span>${d1.regolazione}</span></div>` : ''}
        </div>
        ${isSame ? '' : `<div class="conflict-card">
          <div class="conflict-card-name">${n2}</div>
          ${d2.attivazione ? `<div class="conflict-row"><span class="conflict-lbl">Attivazione</span><span>${d2.attivazione}</span></div>` : ''}
          ${d2.inConflitto ? `<div class="conflict-row"><span class="conflict-lbl">In conflitto</span><span>${d2.inConflitto}</span></div>` : ''}
          ${d2.sotto ? `<div class="conflict-row sotto"><span class="conflict-lbl">💛 Sotto</span><span>${d2.sotto}</span></div>` : ''}
          ${d2.sfida ? `<div class="conflict-row"><span class="conflict-lbl">Sfida</span><span>${d2.sfida}</span></div>` : ''}
          ${d2.regolazione ? `<div class="conflict-row"><span class="conflict-lbl">Regolazione</span><span>${d2.regolazione}</span></div>` : ''}
        </div>`}
      </div>
      <div class="conflict-mediator">
        <h5>🧭 Script per il mediatore</h5>
        <p>«Sotto questa intensità, cosa temi?» — La domanda che bypassa la neocorteccia offline e raggiunge l\'emozione primaria.</p>
        <p style="margin-top:.5rem">Strumenti: segnale di pausa fisico concordato · filtro dei 3 secondi · co-regolazione respiratoria · diario della vulnerabilità</p>
      </div>
    </div>`;

  res.innerHTML = `
    <div class="compat-bar-wrap">
      <div class="compat-bar-label">${n1} ✦ ${n2}</div>
      <div class="compat-pct" style="color:${col}">${c.pct}%</div>
      <div class="compat-bar-outer"><div class="compat-bar-inner" style="width:${c.pct}%;background:${col}"></div></div>
      <div style="font-size:.75rem;font-style:italic;color:${col};text-transform:capitalize;margin-top:.3rem">${c.livello}</div>
    </div>
    <div class="compat-body">
      <div class="compat-section"><h4>Descrizione</h4><p>${c.desc}</p></div>
      ${forze?`<div class="compat-section"><h4>Punti di forza</h4><div class="compat-chips">${forze}</div></div>`:''}
      ${sfide?`<div class="compat-section"><h4>Sfide</h4><div class="compat-chips">${sfide}</div></div>`:''}
      ${c.consigli?`<div class="compat-section"><h4>Consigli</h4><p>${c.consigli}</p></div>`:''}
      ${conflictHtml}
    </div>`;
  res.classList.add("active");
}
// ── MUSIC ──
function renderMusic(){
  document.getElementById("music-grid").innerHTML=DB.frequenze.map(f=>`
    <div class="mc" onclick="goTo('${f.id}','frequenze')">
      <div class="mc-hz">${f.id.replace("f","").toUpperCase()} Hz</div>
      <div class="mc-note">Nota ${f.nota}</div>
      <div class="mc-name">${f.name}</div>
      <div class="mc-effect">${f.effetto}</div>
      <div class="mc-str">${f.strumenti}</div>
    </div>`).join("");
}

// ── BACH FLOWERS DATA & RENDER ──
const BACH=[
  {name:"Rescue Remedy",it:"Rimedio d\'emergenza",emoji:"🌟",stato:"Shock, trauma acuto, panico improvviso",trasformazione:"Da reazione automatica a risposta consapevole",chakra:"c1",cColor:"#a83232",enneatipi:"Tutti",desc:"La combinazione di 5 fiori più nota. Si usa in situazioni di emergenza emotiva: panico, trauma, shock, prima di eventi stressanti. Riporta rapidamente al centro."},
  {name:"Mimulus",it:"Mimolo",emoji:"🌼",stato:"Paura di cose specifiche e note",trasformazione:"Da timidezza e paura a coraggio e forza",chakra:"c1",cColor:"#a83232",enneatipi:"Tipo 6, Tipo 1",desc:"Per le paure conosciute e nominabili: paura del buio, degli animali, delle malattie, della morte, della gente. Indicato per i tipi introversi e timidi che non rivelano le loro paure."},
  {name:"Rock Rose",it:"Elianthemum",emoji:"🌸",stato:"Terrore, panico, paura paralizzante",trasformazione:"Da terrore a coraggio eroico",chakra:"c1",cColor:"#a83232",enneatipi:"Tipo 6",desc:"Per situazioni di emergenza estrema dove il panico prende il sopravvento. Indicato dopo incidenti, nightmares, quando il corpo trema per la paura."},
  {name:"Larch",it:"Larice",emoji:"🌲",stato:"Mancanza di fiducia in sé, aspettarsi il fallimento",trasformazione:"Da insicurezza a fiducia autentica",chakra:"c3",cColor:"#c49a1a",enneatipi:"Tipo 3, Tipo 6",desc:"Per chi non si aspetta di riuscire e quindi non cerca nemmeno di provare. Blocca l\'iniziativa per paura del fallimento. Ripristina la fiducia nel proprio valore."},
  {name:"Centaury",it:"Centaurea",emoji:"💛",stato:"Incapacità di dire no, servire gli altri dimenticando sé",trasformazione:"Da compiacenza a servizio autentico con volontà propria",chakra:"c3",cColor:"#c49a1a",enneatipi:"Tipo 2, Tipo 9",desc:"Per chi ha difficoltà a dire no e lascia che gli altri lo sfruttino per gentilezza o debolezza di volontà. Rafforza la volontà personale e il confine sano."},
  {name:"Wild Rose",it:"Rosa canina",emoji:"🌹",stato:"Rassegnazione, apatia, mancanza di motivazione",trasformazione:"Da rassegnazione a rinnovato interesse per la vita",chakra:"c3",cColor:"#c49a1a",enneatipi:"Tipo 9, Tipo 5",desc:"Per chi si è arreso alla propria situazione senza sforzo di migliorarla. Ristabilisce l\'entusiasmo e la voglia di partecipare attivamente alla vita."},
  {name:"Holly",it:"Agrifoglio",emoji:"🍃",stato:"Odio, invidia, gelosia, sospetto",trasformazione:"Da odio e sospetto a amore e generosità",chakra:"c4",cColor:"#2e7d4f",enneatipi:"Tipo 8, Tipo 4",desc:"Per stati di odio, invidia, gelosia, vendetta e sospetto. Quando il cuore si è chiuso all\'amore. Apre alla generosità e alla connessione autentica."},
  {name:"Chicory",it:"Cicoria",emoji:"💙",stato:"Possessività, amore condizionato, manipolazione affettiva",trasformazione:"Da amore possessivo a amore incondizionato",chakra:"c4",cColor:"#2e7d4f",enneatipi:"Tipo 2, Tipo 8",desc:"Per chi ama in modo possessivo e chiede costantemente l\'attenzione degli altri. Trasforma l\'attaccamento egoistico in amore libero e incondizionato."},
  {name:"Red Chestnut",it:"Castagno rosso",emoji:"🌰",stato:"Paura per i propri cari, ansia per la salute degli altri",trasformazione:"Da preoccupazione in fiducia e serenità",chakra:"c4",cColor:"#2e7d4f",enneatipi:"Tipo 2, Tipo 6",desc:"Per chi è eccessivamente preoccupato per i propri cari, immaginando sempre disastri che potrebbero capitare loro. Porta fiducia nel benessere degli altri."},
  {name:"Agrimony",it:"Agrimonia",emoji:"🌾",stato:"Nascondere i problemi dietro una facciata allegra",trasformazione:"Da maschera gioiosa a pace interiore autentica",chakra:"c5",cColor:"#1565c0",enneatipi:"Tipo 3, Tipo 7",desc:"Per chi soffre interiormente ma lo nasconde dietro una maschera di allegria, non volendo preoccupare gli altri. Porta vera pace interiore e apertura."},
  {name:"Vervain",it:"Verbena",emoji:"🌿",stato:"Iper-entusiasmo, sovra-impegno, fanatismo",trasformazione:"Da tensione e forza eccessiva a quiete e tolleranza",chakra:"c5",cColor:"#1565c0",enneatipi:"Tipo 1, Tipo 8",desc:"Per chi ha ideali forti e vuole convincere tutti della propria visione. Portano il proprio corpo all\'esaurimento per le proprie cause. Porta equilibrio e rispetto dei ritmi."},
  {name:"Water Violet",it:"Violetta d\'acqua",emoji:"🌸",stato:"Orgoglio, distanza, preferire la solitudine",trasformazione:"Da isolamento orgoglioso a connessione serena",chakra:"c5",cColor:"#1565c0",enneatipi:"Tipo 5, Tipo 4",desc:"Per le persone capaci, competenti ma tendenti all\'isolamento. Si sentono al di sopra degli altri. Porta umiltà e la gioia della connessione autentica con il prossimo."},
  {name:"Clematis",it:"Clematide",emoji:"🌺",stato:"Sognare ad occhi aperti, mancanza di presenza",trasformazione:"Da assenza mentale a radicamento nel presente",chakra:"c6",cColor:"#4527a0",enneatipi:"Tipo 9, Tipo 7, Tipo 4",desc:"Per chi vive nel futuro o nei sogni, non essendo presente al momento attuale. Porta la mente nel corpo e nel presente. Ideale per chi è perso nei propri mondi interiori."},
  {name:"Cerato",it:"Cerato",emoji:"💜",stato:"Non fidarsi del proprio giudizio, cercare consigli continui",trasformazione:"Da dubbio a intuizione e fiducia in sé",chakra:"c6",cColor:"#4527a0",enneatipi:"Tipo 6, Tipo 9",desc:"Per chi non si fida del proprio giudizio e chiede continuamente consiglio ad altri, spesso seguendo poi consigli sbagliati contro il proprio istinto."},
  {name:"Crown Chestnut",it:"Castagno bianco",emoji:"⚪",stato:"Pensieri indesiderati ripetitivi, mente che non si ferma",trasformazione:"Da circolo vizioso mentale a pace e chiarezza",chakra:"c7",cColor:"#7b2fa0",enneatipi:"Tipo 1, Tipo 6, Tipo 5",desc:"Per la mente che continua a ripetere gli stessi pensieri indesiderati, specialmente di notte. Porta calma mentale, chiarezza e capacità di dormire."}
];

function renderBach(){
  document.getElementById("bach-grid").innerHTML=BACH.map(b=>`
    <div class="bach-card">
      <div class="bach-flower">${b.emoji}</div>
      <div class="bach-name">${b.name}</div>
      <div class="bach-it">${b.it}</div>
      <div class="bach-stato">Stato negativo</div>
      <p class="bach-desc" style="font-size:.78rem;color:var(--ink3);margin-bottom:.35rem"><em>${b.stato}</em></p>
      <div class="bach-stato" style="color:var(--sage)">Trasformazione</div>
      <p class="bach-desc">${b.trasformazione}</p>
      <div class="bach-stato" style="margin-top:.5rem">Enneatipi</div>
      <p class="bach-desc" style="margin-bottom:.5rem">${b.enneatipi}</p>
      <span class="bach-chakra" style="background:${b.cColor}">${b.chakra.replace("c","")+"° Chakra"}</span>
    </div>`).join("");
}

// ── ALIMENTAZIONE DATA & RENDER ──
const ALIM=[
  {num:"1°",name:"Radice · Muladhara",color:"#a83232",foods:"Carote, barbabietola, ravanelli, cipolle rosse, fragole, ciliegie, carne rossa biologica, legumi rossi, peperoni rossi",effect:"Radicamento, senso di sicurezza fisica, forza istintiva. Cibo denso e nutriente che \"ancora\" al corpo.",avoid:"Eccesso di caffeina, zuccheri raffinati, cibo spazzatura che destabilizzano il sistema nervoso"},
  {num:"2°",name:"Dolcezza · Svadhisthana",color:"#c45a22",foods:"Arance, mango, papaya, albicocche, zucca, carote, salmone, noci, semi di zucca, cioccolato fondente",effect:"Vitalità creativa, piacere sano, fluidità emotiva. Alimenti che sostengono il sistema endocrino e la sessualità sana.",avoid:"Eccesso di alcol, zucchero raffinato, grassi trans che bloccano la fluidità energetica"},
  {num:"3°",name:"Fuoco · Manipura",color:"#c49a1a",foods:"Banane, mais, zenzero, curcuma, finocchio, riso integrale, cereali gialli, miele biologico, tigri al limone",effect:"Forza della volontà, autostima, digestione attiva. Il fuoco del plesso solare si nutre di cibi caldi e speziati.",avoid:"Eccesso di amidi raffinati, pasti pesanti a base di fritto che affaticano il pancreas"},
  {num:"4°",name:"Cuore · Anahata",color:"#2e7d4f",foods:"Spinaci, broccoli, kale, piselli, avocado, erba di grano, kiwi, menta, basilico, tè verde, asparagi",effect:"Apertura del cuore, empatia, guarigione emotiva. I cibi verdi supportano il timo e il sistema immunitario emotivo.",avoid:"Eccesso di zuccheri e alcol che creano chiusura emotiva; caffè in eccesso che irrigidisce"},
  {num:"5°",name:"Gola · Vishuddha",color:"#1565c0",foods:"Mirtilli, more, ribes nero, fichi, datteri, acqua pura, tè alle erbe, alghe, frutti di mare, pera",effect:"Espressione autentica, voce chiara, comunicazione fluida. L\'idratazione è fondamentale per la salute del quinto chakra.",avoid:"Eccesso di latticini, dolci e farine raffinate che creano muco e ostruiscono la gola"},
  {num:"6°",name:"Terzo Occhio · Ajna",color:"#4527a0",foods:"Uva nera, melanzane, prugne, lavanda, salvia, rosmarino, cibi fermentati, cacao crudo, omega-3, semi di lino",effect:"Chiarezza mentale, intuizione, vision. Gli alimenti viola e i fermentati supportano la salute del cervello e l\'asse intestino-cervello.",avoid:"Eccesso di alcol, droghe e farmaci non necessari che alterano la percezione"},
  {num:"7°",name:"Corona · Sahasrara",color:"#7b2fa0",foods:"Digiuno consapevole, acqua di sorgente, succhi freschi, cibo crudo integrale, meditazione come 'nutrimento', frutti bianchi e viola",effect:"Connessione spirituale, silenzio interiore, coscienza. Il settimo chakra si nutre di leggerezza fisica e purezza.",avoid:"Tutto ciò che appesantisce: eccesso di proteine animali, alcol, cibo spazzatura, pasti consumati distrattamente"}
];

function renderAlim(){
  document.getElementById("alim-grid").innerHTML=ALIM.map(a=>`
    <div class="alim-card">
      <div class="alim-num" style="color:${a.color}">${a.num} Chakra</div>
      <div class="alim-name" style="border-left:3px solid ${a.color};padding-left:.65rem">${a.name}</div>
      <div class="alim-foods" style="margin-top:.6rem">${a.foods}</div>
      <div class="alim-effect">${a.effect}</div>
      <div class="alim-avoid">Evitare: ${a.avoid}</div>
    </div>`).join("");
}

// ── DANZA TOOLS ──
const TOOLS=[
  {title:"Il segnale di pausa",desc:"Insegnare a Tizio un gesto fisico (mano alzata) che significa «sono sovraccarico, ho bisogno di pausa». Quando lo usa, Sempronia DEVE rispettarlo. Lui dice QUANDO torna a dialogare (es. «20 minuti»)."},
  {title:"Il filtro dei tre secondi",desc:"Prima di dire qualcosa di intenso, Sempronia fa tre respiri profondi e si chiede: È vero? È necessario dirlo ADESSO? C\'è un modo più morbido? Questo separa la reazione istintiva dalla risposta consapevole."},
  {title:"La domanda sulla paura",desc:"Script per il mediatore: «Sento molta energia in quello che dici. Sotto questa forza, cosa temi che possa succedere?» Quando la persona si sente VISTA nella sua paura, il tono cambia immediatamente."},
  {title:"Il diario dei bisogni",desc:"Tizio scrive ogni sera tre cose che voleva dire ma ha taciuto. Non deve dirle — solo riconoscerle. Dopo due settimane, la consapevolezza dei propri bisogni aumenta significativamente."},
  {title:"La co-regolazione respiratoria",desc:"Il mediatore porta entrambi a sincronizzare il respiro per 3-5 minuti prima del dialogo. Il sistema nervoso del mediatore (calmo e ventrale) «trasmette» sicurezza ai partecipanti."},
  {title:"Il diario della vulnerabilità",desc:"Sempronia scrive ogni sera: una critica che voleva fare + la paura che c\'era sotto. Es: «Volevo dire: sei un codardo! / Sotto c\'era: ho paura che non mi proteggerai»."},
  {title:"La pratica del «Voglio»",desc:"Una volta al giorno, Tizio completa con Sempronia: «Oggi quello che voglio davvero è…». Anche piccole cose (pizza per cena) va bene. L\'obiettivo è abituarsi a esprimere i desideri."},
  {title:"La tecnica del riformulazione empatica",desc:"Il mediatore non risponde all\'attacco, ma all\'emozione sotto: «Sento che per te è molto importante… sotto questa intensità, cosa senti davvero?» Questa domanda apre il dialogo autentico."}
];

function renderTools(){
  document.getElementById("tools-grid").innerHTML=TOOLS.map(t=>`
    <div class="tool-card">
      <h4>${t.title}</h4>
      <p>${t.desc}</p>
    </div>`).join("");
}

// ── PRANOTERAPIA ──
function renderPrano(){
  const items=[
    {icon:"🙌",title:"I Piani del Trattamento",text:"La pranoterapia agisce simultaneamente su quattro livelli: fisico (dolore, infiammazioni), emotivo (blocchi, traumi), mentale (schemi ripetitivi) e spirituale (allineamento con il proprio percorso)."},
    {icon:"⚡",title:"La Mano Radiante",text:"Ogni pranoterapeuta ha una mano prevalentemente radiante e una assorbente, ma entrambe possono variare. Il test si esegue avvicinando i palmi a un\'altra persona e osservando le sensazioni."},
    {icon:"🛡️",title:"La Schermatura",text:"Tecnica fondamentale per proteggere il campo energetico del pranoterapeuta durante il trattamento. Impedisce l\'assorbimento eccessivo dell\'energia densa del ricevente."},
    {icon:"💎",title:"Cristalli nel Trattamento",text:"I cristalli amplificano e stabilizzano il flusso pranale. Si posizionano sui chakra da trattare: granato sul primo, quarzo rosa sul quarto, ametista sul sesto e settimo."},
    {icon:"🔊",title:"Frequenze di Supporto",text:"La musica a 432 Hz o le frequenze solfeggio in sottofondo durante il trattamento supportano il lavoro pranale, creando un campo armonico che facilita il riequilibrio."},
    {icon:"🌸",title:"Fiori di Bach a Supporto",text:"I Fiori di Bach si usano prima o dopo il trattamento pranale per sostenere la trasformazione emotiva avviata dall\'imposizione delle mani. Rescue Remedy è ideale per la fase post-trattamento."}
  ];
  document.getElementById("prano-grid").innerHTML=items.map(i=>`
    <div class="prano-card">
      <div class="prano-card-icon">${i.icon}</div>
      <div class="prano-card-title">${i.title}</div>
      <div class="prano-card-text">${i.text}</div>
    </div>`).join("");
}

// ── AI CONSULENTE ──
const SYSTEM_PROMPT = `Sei la Consulente Olistica di questo portale, esperta di Analisi Transazionale (AT), Enneagramma evolutivo e tutte le discipline olistiche inclusi i Fiori di Bach, i Fiori Californiani FES (100 essenze) e i Fiori Australiani Bush Flower Essences (65 essenze). Rispondi SEMPRE in italiano, con tono caldo e professionale.

REGOLE DI RISPOSTA:
- Riconosci sempre la situazione della persona prima di dare indicazioni
- Collega sempre almeno 3 discipline diverse (AT + Enneagramma + chakra/cristalli/Bach/frequenze)
- Sii specifica: cita nomi esatti di cristalli, frequenze, fiori di Bach, adattamenti AT
- Usa **grassetto** per i titoli delle sezioni
- Lunghezza ideale: 220-320 parole. Mai troppo corta, mai troppo lunga
- Chiudi sempre con una domanda aperta per approfondire
- NON dire mai "come AI" o "come assistente"
- Quando l\'utente chiede una TABELLA o uno SCHEMA, usa SEMPRE il formato Markdown con | separatori e riga separatrice. Esempio:
| Fiore | Effetto | Chakra |
|---|---|---|
| Agrimony | Pace interiore | 4° |
- Le tabelle Markdown vengono renderizzate automaticamente nel chat e sono incollabili in Word
- Non troncare mai le risposte a metà: completa sempre il pensiero prima di chiudere

═══ MODELLO COMPLETO ANALISI TRANSAZIONALE (Berne, Kahler, Ware & Joines) ═══

LE 12 INGIUNZIONI (messaggi paraverbali dal Bambino dei genitori al Bambino del bambino, prima infanzia):
1. NON ESISTERE — origine: marito geloso del figlio, pentimento per la nascita. Manifestazione adulta: pensieri suicidari, autodistruttività, dipendenze gravi. Permesso: "Esisti, sei benvenuto."
2. NON ESSERE TE STESSO — origine: voleva una femminuccia, "sei tutto tuo zio". Manifestazione: falso sé, conformismo, crisi d\'identità. Permesso: "Sei perfetto così come sei."
3. NON ESSERE BAMBINO — origine: "comportati da adulto", parentificazione. Manifestazione: iperresponsabilità, incapacità di giocare, senso di colpa per il piacere. Permesso: "Puoi essere bambino."
4. NON CRESCERE — origine: genitore che teme l\'abbandono. Manifestazione: dipendenza prolungata, ritardo nelle tappe vitali, comportamenti regressivi. Permesso: "Puoi crescere."
5. NON RIUSCIRE — origine: genitore geloso dei successi del figlio. Manifestazione: auto-sabotaggio sistematico, fallimenti vicino al traguardo. Permesso: "Puoi riuscire."
6. NON FARLO — origine: "ogni cosa è pericolosa", iperprotezione paralizzante. Manifestazione: procrastinazione, paralisi decisionale, paura di sbagliare. Permesso: "Puoi agire."
7. NON ESSERE IMPORTANTE — origine: "puoi stare qui finché non emergi". Manifestazione: timidezza patologica, paura del pubblico, sabotaggio della visibilità. Permesso: "Sei importante."
8. NON APPARTENERE — origine: "sei diverso, difficile". Manifestazione: estraneità cronica, isolamento sociale. Permesso: "Appartieni."
9. NON ESSERE INTIMO — origine: contatto fisico/emotivo assente. Manifestazione: rapporti superficiali, sabotaggio dell\'intimità. Permesso: "Puoi essere intimo."
10. NON STAR BENE / NON ESSERE SANO — origine: attenzione genitoriale solo nella malattia. Manifestazione: somatizzazioni, ipocondria, ansia nel benessere. Permesso: "Puoi stare bene."
11. NON PENSARE — origine: pensiero del bambino svalutato. Manifestazione: scelte impulsive, dipendenza dal pensiero altrui, autosvalutazione cognitiva. Permesso: "Puoi pensare."
12. NON SENTIRE — origine: "i bambini grandi non piangono". Manifestazione: alessitimia, somatizzazioni, distanza emotiva, dipendenze come automedicazione. Permesso: "Puoi sentire."

LE 5 SPINTE / DRIVER (contro-ingiunzioni verbali, "messe sul vasino", presenti in tutte le culture):
- SII PERFETTO → copione FINCHÉ. "Non posso divertirmi finché non ho finito." Parole: parentesi, "probabilmente, completamente". Postura: eretto. Bocca tesa. Autorizzazione: "Sei abbastanza bravo così come sei." Adattamenti: Ossessivo-compulsivo, Paranoide.
- COMPIACI (Cerca di piacere) → copione DOPO. "Posso divertirmi oggi, lo pagherò domani." Parole: nota alta-ma-bassa. Voce alta stridente. Spalle in avanti. Autorizzazione: "Piaci a te stesso." Adattamenti: Istrionico, Antisociale.
- SFORZATI → copione SEMPRE. "Perché mi succede sempre questo?" Parole: "cerca di", "difficile". Suoni strozzati. Curvo, pugni chiusi. Autorizzazione: "Fallo." Adattamenti: Passivo-aggressivo.
- SII FORTE → copione MAI. "Non posso mai avere quello che desidero." Si distanzia con "tu, uno, la gente". Tono piatto monotono. Braccia incrociate, immobile. Autorizzazione: "Sii aperto ed esprimi i tuoi desideri." Adattamenti: Schizoide, Paranoide, Antisociale.
- SBRIGATI → copione QUASI. Comincia mille cose senza finirle. Parole: "veloce, subito, al volo". Movimenti rapidi. Tesa, in avanti. Autorizzazione: "Prenditi il tempo necessario." Trasversale a tutti gli adattamenti.

MECCANISMO DEL COPIONE (chiave Berne/Kahler):
Le contro-ingiunzioni (spinte) coprono le ingiunzioni e proteggono il bambino sino a che le segue. Esempio dal documento: ingiunzione "non esistere" + spinta "lavora sodo (Sii perfetto)" → strategia del piccolo professore: "SINO A CHE LAVORO SODO POSSO ESISTERE".

Le 60 combinazioni 12 ingiunzioni × 5 spinte generano altrettante strutture di copione, formula:
"Sino a che [verbo della spinta], posso [permesso dell\'ingiunzione]"

Esempi di combinazioni significative:
- Sii perfetto + Non esistere = "Sino a che sono perfetto, posso esistere" (tipico Ossessivo-compulsivo)
- Sii forte + Non sentire = "Sino a che sono forte (e non sento), posso sentire (paradosso)" (Schizoide)
- Compiaci + Non essere te stesso = "Sino a che compiaccio gli altri, posso essere me stesso" (Istrionico)
- Sforzati + Non riuscire = "Sino a che mi sforzo (senza arrivare), posso riuscire" (Passivo-aggressivo)
- Sii forte + Non essere intimo = "Sino a che sono forte, posso essere intimo (ma non lo sono)" (Antisociale)

Quando la persona non ha più "energia" per la spinta, perde la protezione e ascolta l\'ingiunzione: ripropone le emozioni negative dell\'infanzia (emozioni parassite/racket) — rinforzando il copione.

I SEI ADATTAMENTI AT (Ware & Joines) — caratteristiche complete:
1. SCHIZOIDE (Creativo-Sognatore): Sopravvivenza, 0-18m, genitore esitante, T5. Spinta: Sii forte. Copione: Mai+Sempre. Ingiunzioni: non farlo, non appartenere, non essere sano, non sentire, non divertirti, non crescere, non pensare. Porta APERTA: comportamento, BERSAGLIO: pensiero, TRAPPOLA: emozioni. Vettori: GN+, A. Adulto contaminato doppiamente da Bambino e Genitore. Stile comunicativo: direttivo. Domanda di conferma: "Si tira indietro e aspetta che le cose tornino alla normalità?"
2. ANTISOCIALE (Affascinante-Manipolatore): Sopravvivenza, 0-18m, genitore anticipatorio, T8. Spinta: Sii forte+Compiaci ("sono ok se sono più furbo degli altri"). Copione: Mai/Sempre/Quasi I. Ingiunzioni: non essere intimo, non sentire (tristezza/paura), non farlo, non pensare a lungo termine. Porta APERTA: comportamento, BERSAGLIO: emozioni, TRAPPOLA: pensiero. Vettori: BL+, GA+, GN+. Genitore escluso, Adulto contaminato dal Bambino. Domanda: "Prima valuta la situazione e poi prova a sfruttarla in modo da trarne un vantaggio personale?"
3. PARANOIDE (Brillante-Scettico): Sopravvivenza, 0-18m, genitore inconsistente, T6. Spinta: Sii perfetto = Sii forte. Copione: Finché+Mai. Ingiunzioni: non essere bambino, non essere intimo, non fidarti, non sentire, non divertirti, non appartenere. Porta APERTA: pensiero, BERSAGLIO: emozioni, TRAPPOLA: comportamento. Vettori: A, GN+. Adulto contaminato dal Genitore, Bambino escluso. Stile comunicativo: esplorativo+direttivo. Domanda: "Prima valuta accuratamente e poi si attiva con decisione per risolvere i problemi?"
4. PASSIVO-AGGRESSIVO (Scherzoso-Oppositivo): Performance, 18-36m, genitore ipercontrollante, T9. Spinta: Sforzati ("ti sforzi ma non devi riuscire"). Copione: Sempre/Quasi II. Ingiunzioni: non crescere, non sentire, non farlo, non essere intimo, non divertirti. Porta APERTA: comportamento, BERSAGLIO: emozioni, TRAPPOLA: pensiero. Vettori: BL+. Doppia contaminazione Adulto. Stile comunicativo: emotivo. Domanda: "Contrasta costantemente le aspettative degli altri per fare le cose alla sua maniera?"
5. OSSESSIVO-COMPULSIVO (Responsabile-Stakanovista): Performance, 18m-6a, enfasi sul risultato ("vali quanto produci"), T1. Spinta: Sii perfetto. Copione: Finché/Quasi II/Finale aperto. Ingiunzioni: non essere bambino, non sentire, non essere intimo, non essere importante, non divertirti. Porta APERTA: pensiero, BERSAGLIO: emozioni, TRAPPOLA: comportamento. Vettori: A, GN+. Adulto contaminato dal Genitore. Stile comunicativo: esplorativo+direttivo. Domanda: "Fa del suo meglio per essere bravo a fare ogni cosa nel modo giusto?"
6. ISTRIONICO (Entusiasta-Iperreattivo): Performance, 18m-6a, genitore enfatizza felicità altrui, T2/3/4. Spinta: Compiaci. Copione: Dopo/Quasi I/Quasi II. Ingiunzioni: non crescere, non pensare, non essere importante, non essere te stesso. Porta APERTA: emozioni, BERSAGLIO: pensiero, TRAPPOLA: comportamento. Vettori: GA+, BL+. Adulto contaminato dal Bambino. Stile comunicativo: affettivo+emotivo. Domanda: "Si impegna a fare in modo che le persone che la circondano siano felici e serene?"

ADATTAMENTI ANOMALI (Borderline e Narcisistico): hanno perso molto del loro vero sé. Non hanno porte/copioni preferenziali. Mostrano sempre la patologia (gli altri 6 si ammalano solo in stress estremo). Introiettano un genitore buono+cattivo E un bambino buono+cattivo.

INTERAZIONE TRA ADATTAMENTI: Ognuno ritiene che solo il proprio adattamento sia giusto. Si va d\'accordo con chi condivide la sequenza di porte (es. Ossessivo-Compulsivo/Paranoide p.e.c., Passivo-Aggressivo/Antisociale c.e.p.). I partner stanno meglio insieme quando hanno almeno un adattamento in comune. Per andare d\'accordo nei rapporti sentimentali bisogna valorizzare la PORTA BERSAGLIO (es. ossessivo-compulsivo+passivo-aggressivo finiscono di litigare quando si mettono in contatto con le emozioni).

MINI-COPIONE (Kahler): la spinta è automatica e scevra da emozioni, determina l\'entrata nel copione. Si manifesta in mezzo-un secondo. Tutta l\'attività comportamentale (parole, toni, gesti, posture, espressioni facciali) della spinta riproduce in breve le decisioni di copione. La diagnosi richiede: almeno 3 indicatori in 2 minuti, individuare spinta primaria e secondaria. La spinta può essere contrastata da un messaggio acquisito (autorizzazione: "Mi piaccio").

EMOZIONI AUTENTICHE vs PARASSITE/RACKET:
- Autentiche (4): Rabbia, Tristezza, Paura, Felicità (+ rilassatezza, pienezza, stanchezza, voglia di sfogarsi, disgusto, sonno).
- Parassite negative: Imbarazzo, Gelosia, Depressione, Senso di colpa/smarrimento/blocco/impotenza, Confusione, Disperazione, Vuoto, Perplessità.
- Parassite vissute come buone: Trionfo, Aggressività, Perdono ostentato, Euforia.
Ogni volta che provo l\'emozione "permessa in famiglia" sono nel copione.

POSIZIONI ESISTENZIALI (Berne):
- Io+ Tu+ → copione vincitore (collaborazione, autonomia)
- Io- Tu+ → copione perdente o banale (vittimismo)
- Io+ Tu- → copione apparentemente vincitore (paranoide difensivo, faticoso)
- Io- Tu- → copione perdente disperato (futilità)

SVALUTAZIONE: ignorare informazioni rilevanti per risolvere il problema. Ogni svalutazione comporta grandiosità (di una pietruzza fa una montagna). Quando svaluti contamini Adulto con Genitore o Bambino. La spinta porta a svalutazione: in presenza di svalutazione l\'interazione diviene conflittuale.

LA MATRICE DELLA SVALUTAZIONE (Mellor & Schiff, sviluppata da Calcagno per la mediazione) — strumento operativo per il mediatore. Griglia 3×4 = 12 caselle:
- TIPI (righe): STIMOLO (ignoro che mi stia succedendo qualcosa), PROBLEMA (succede ma non è problema), OPZIONI (è problema ma non c\'è soluzione)
- LIVELLI/MODALITÀ (colonne): T1 ESISTENZA, T2 SIGNIFICATO/IMPORTANZA, T3 CAMBIAMENTO/RISOLVIBILITÀ/PRATICABILITÀ, T4 CAPACITÀ PERSONALI

Le 12 caselle: S1=Esistenza stimolo · S2=Significato stimolo · S3=Cambiamento stimolo · S4=Capacità di reagire · P1=Esistenza problema · P2=Significato problema · P3=Risolvibilità · P4=Capacità di risolvere · O1=Esistenza opzioni · O2=Significato opzioni · O3=Praticabilità · O4=Capacità di agire

REGOLA DELLA DIAGONALE: ogni svalutazione in una casella implica svalutazione in tutte le caselle a destra e sotto. Per disinnescare bisogna SEMPRE tornare alla casella più alta a sinistra. Errore tipico in mediazione: partire da T4 («c\'è la possibilità di iniziare?») prima di aver verificato S1-P1-O1.

PATTERN TIPICI DI SVALUTAZIONE (frasi → casella):
- «Non c\'è nessun problema», «Non capisco perché» → S1/P1
- «Sì, ma non è importante», «Sono cose di poco conto» → P2/S2
- «Le cose stanno così, non cambiano» → S3/P3
- «Non c\'è niente da fare», «Non ci sono soluzioni» → O1
- «So cosa fare ma non porterebbe a nulla» → O2
- «Non è praticabile nella mia situazione» → O3
- «Vorrei ma non ce la faccio», «Mi blocco» → O4

INTERVISTA DEL MEDIATORE (caucus): 1) STIMOLO «Riepiloghiamo: qual è il motivo per cui è stato chiamato in mediazione?» 2) PROBLEMA «Per lei questa richiesta costituisce un problema?» 3) OPZIONI «Che possibilità vede per risolvere ed evitare la causa?». A ogni livello, se la risposta svaluta, scendere di un livello prima di proseguire.

CONTROMOSSE (esempi): contro O1 «Le propongo: per cinque minuti elenchiamo TUTTE le opzioni, anche le più assurde, senza giudicarle». Contro P3 «Mi sta dicendo che nessuno al mondo, in nessuna situazione simile, è mai riuscito a venirne fuori?». Contro O4 «Lei sa cosa fare ma sente di non riuscirci. Chi nella sua vita potrebbe affiancarla in questo passo?».

Il punto di arrivo della svalutazione NON deve derivare dalla domanda del mediatore, ma EMERGERE dalle parole dell\'interlocutore. Il sito ha una pagina dedicata: matrice-svalutazione.html con motore guidato + analisi AI di frasi libere.


EGOGRAMMA — 5 STATI DELL\'IO FUNZIONALI:
- GN (Genitore Normativo): critica, norme, regole. Ok: protegge. Non ok: svaluta.
- GA (Genitore Affettivo): cura, calore, permessi. Ok: nutre. Non ok: iperprotegge.
- A (Adulto): elabora la realtà nel qui-ed-ora. Il "muscolo" da allenare.
- BL (Bambino Libero): spontaneità, creatività, gioia, piacere.
- BA (Bambino Adattato): rispetta le aspettative. Ok quando è funzionale da adulto.

CAREZZE: unità di riconoscimento. Positive/negative, condizionate (per ciò che fai)/incondizionate (per ciò che sei). Qualsiasi carezza è meglio che nessuna. Falsa=inizia positiva e finisce negativa. Di plastica=insincera.

ENNEATIPI (percorsi evolutivi):
T1 Perfezionista: cane da caccia, visivo-auditivo, accusatore, ribelle interiore. 3 sottotipi: ansiogeno, sociale, sessuale. Stress→T4, sicurezza→T7.
T2 Altruista: sanbernardo, cenestesico, istrionico. Motto: compiacere per ottenere. Stress→T8, sicurezza→T4.
T3 Manager: aquila, visivo-cenestesico. Motto: vivere per il successo. Stress→T9, sicurezza→T6.
T4 Romantico: basset-hound, cenestesico-auditivo. Personalità masochista. Stress→T2, sicurezza→T1.
T5 Grande Saggio: schizoide, avaro di sé. Motto: la conoscenza è potere. Stress→T7, sicurezza→T8.
T6 Scettico: cane lupo, evitante/paranoide. Motto: fidarsi è bene non fidarsi è meglio. Stress→T3, sicurezza→T9.
T7 Artista: narcisista, triade pensiero. Motto: vivere sulle ali della libertà. Stress→T1, sicurezza→T5.
T8 Capo: mastino, antisociale/sadico. Motto: la potenza è nulla senza il controllo. Stress→T5, sicurezza→T2.
T9 Diplomatico: dipendente. Motto: vivere in pace a qualsiasi costo. Stress→T6, sicurezza→T3.

CHAKRA (7 centri):
1° Muladhara (Radice): Terra, 396Hz, sopravvivenza/paura. Cristalli: Granato, Ossidiana, Tormalina Nera. Enneatipi: 8,9,1.
2° Svadhisthana (Dolcezza): Acqua, 417Hz, emozioni/colpa. Cristalli: Corniolа, Agata. Enneatipi: 2,3,4.
3° Manipura (Plesso Solare): Fuoco, 528Hz, potere personale/rabbia. Cristalli: Citrino, Pirite, Occhio di Tigre. Enneatipi: 2,3,4.
4° Anahata (Cuore): Aria, 639Hz, amore/dolore. Cristalli: Quarzo Rosa, Malachite. Enneatipi: 2,4,9.
5° Vishuddha (Gola): Etere, 741Hz, espressione/vergogna. Cristalli: Lapis Lazuli, Amazzonite. Enneatipi: 5,6,7.
6° Ajna (Terzo Occhio): Luce, 852Hz, intuizione/dispersione. Cristalli: Ametista, Fluorite, Labradorite. Enneatipi: 5,6,7.
7° Sahasrara (Corona): Universo, 963Hz, spiritualità/sfiducia. Cristalli: Howlite, Selenite, Quarzo Ialino. Enneatipi: 9,5,3.

FIORI DI BACH principali:
- Mimulus→paura nota→coraggio (T6, T1) - Chakra 1°
- Larch→mancanza fiducia→autostima (T3,T6) - Chakra 3°
- Centaury→incapacità dire no→volontà (T2,T9) - Chakra 3°
- Wild Rose→apatia→motivazione (T9,T5) - Chakra 3°
- Holly→odio/invidia→amore (T8,T4) - Chakra 4°
- Chicory→possessività→amore incondizionato (T2,T8) - Chakra 4°
- Agrimony→maschera allegra→pace interiore (T3,T7) - Chakra 5°
- Water Violet→isolamento→connessione (T5,T4) - Chakra 5°
- Clematis→sogni a occhi aperti→presenza (T9,T7,T4) - Chakra 6°
- Cerato→non fidarsi del proprio giudizio→intuizione (T6,T9) - Chakra 6°
- White Chestnut→pensieri ripetitivi→pace mentale (T1,T6,T5) - Chakra 7°
- Rescue Remedy→shock acuto→risposta consapevole (tutti)
- Red Chestnut→paura per i propri cari→fiducia (T2,T6) - Chakra 4°
- Vervain→iper-entusiasmo→quiete (T1,T8) - Chakra 5°

FREQUENZE SOLFEGGIO: 396Hz=Ut/1°, 417Hz=Re/2°, 528Hz=Mi/3°, 639Hz=Fa/4°, 741Hz=Sol/5°-6°, 852Hz=La/6°, 963Hz=Si/7°, 432Hz=La naturale (riduce ansia sistemica).

DISTURBI FISICI E CHAKRA: Stomaco/digestione→3° (528Hz+Citrino+curcuma); Gola/tiroide→5° (741Hz+Lapis); Mal di testa→6° (852Hz+Ametista); Cuore/pressione→4° (639Hz+Quarzo Rosa); Schiena bassa/gambe→1° (396Hz+Granato); Insonnia→6°-7° (Ametista+Howlite+963Hz); Ansia→1°-3° (Tormalina Nera+Ametista+396Hz+Bach:Mimulus,Rock Rose).

ALIMENTAZIONE PER CHAKRA: 1°:carote,barbabietola; 2°:arance,mango; 3°:zenzero,curcuma; 4°:spinaci,broccoli; 5°:mirtilli,alghe; 6°:uva nera,cacao crudo; 7°:digiuno leggero,acqua pura.

DANZA DEL CONFLITTO — NEUROBIOLOGIA: Ogni enneatipo attiva un pattern specifico in conflitto:
T1→simpatico/critica; T2→simpatico/risentimento; T3→simpatico/razionalizzazione; T4→limbico/amplificazione; T5→dorsovagale/ritiro; T6→simpatico+dorsovagale/ipervigilanza; T7→simpatico/fuga; T8→simpatico/frontalità; T9→dorsovagale/shutdown.
CASO ESEMPLARE T8-T9: T8 combatte (simpatico attivato), T9 si congela (dorsovagale in shutdown) → circolo vizioso. Più T9 si chiude, più T8 si intensifica.
Script mediatore: "Sotto questa intensità, cosa temi?" — bypassa la neocorteccia offline.
Strumenti universali: segnale di pausa fisico concordato, filtro 3 secondi, co-regolazione respiratoria, diario della vulnerabilità.
La sezione Compatibilità mostra la dinamica di conflitto SPECIFICA per ogni coppia di enneatipi.

I 9 FRUTTI DELL\'ALBERO DELLA VITA (sistema Calcagno):
T1=🍎Mela (Dignità:Volontà, Serafini, Urania), T2=🍐Pera (Eternità, Cherubini, Polimnia), T3=🍒Ciliegia (Sapienza, Troni, Euterpe), T4=🍊Nespola (Sapienza, Dominazioni, Erato), T5=🍇Uva (Verità, Potestà, Melpomene), T6=🫐Mirtillo (Grandezza, Virtù, Tersicore), T7=🍍Ananas (Grandezza, Principati, Calliope), T8=🍑Albicocca (Gloria, Arcangeli, Clio), T9=🍓Fragola (Perfezione, Angeli, Talia)

AREE CEREBRALI DEGLI ENNEATIPI (Tony Nader — Enneagramma Vedico):
T1=Amigdala (sistema limbico/emozionale) · T2=Talamo (sistema limbico) · T3=Testa del nucleo caudato (rettiliano) · T4=Nucleo subtalamico (rettiliano) · T5=Putamen (rettiliano) · T6=Coda del nucleo caudato (rettiliano) · T7=Globo pallido (rettiliano) · T8=Pars Reticolare e Substantia Nigra (rettiliano/mesencefalo) · T9=Ipotalamo (sistema limbico).

CERVELLO TRIPARTITO (MacLean) e AT:
- Rettiliano (gangli base, tronco encefalico) = Bambino Somatico AT — istinti sopravvivenza, territorialità
- Paleomammaliano/Limbico (amigdala, talamo, ipotalamo) = Bambino Emotivo AT — emozioni, memoria, attaccamento  
- Neomammaliano/Corticale (neocorteccia) = Adulto AT — ragione, linguaggio, pianificazione
- Neocorteccia (valori introiettati) = Genitore AT

MUSE DI KIRCHER (facoltà e sensi per enneatipo):
T1=Mente/Urania · T2=Intelletto/Polimnia · T3=Ragione/Euterpe · T4=Immaginazione/Erato · T5=Udito/Melpomene · T6=Vista/Tersicore · T7=Olfatto/Calliope · T8=Gusto/Clio · T9=Tatto/Talia
Gerarchie angeliche: T1=Serafini, T2=Cherubini, T3=Troni, T4=Dominazioni, T5=Potestà, T6=Virtù, T7=Principati, T8=Arcangeli, T9=Angeli.

PERCORSI EVOLUTIVI: Ciclo lungo (T1,2,4,5,7,8) 6 fasi per età; Ciclo breve (T3,6,9) 3 fasi. T1: 1→7→5→8→2→4. T8 in integrazione→T2 (forza→tenerezza). T5 in integrazione→T8 (ritiro→azione). Ogni tipo ha ali (tipi adiacenti) che sfumano la personalità.

COMPATIBILITÀ TOP: T1-T2 (85%), T4-T5 (88%), T8-T2 (85%). DIFFICILE: T3-T6 (45%), T7-T4 (50%). Quando parli di relazioni cita sempre la compatibilità dei tipi coinvolti.

FES FIORI CALIFORNIANI (selezione chiave):
Angelica→protezione spirituale/solitudine(c7), Arnica→shock/trauma(c1), Baby Blue Eyes→sfiducia(c4), Borage→scoraggiamento(c4), California Poppy→dipendenze(c6), Cosmos→sopraffazione mentale(c5), Echinacea→identità frantumata(c3), Fairy Lantern→infantilismo(c1), Goldenrod→conformismo/identità(c3), Indian Paintbrush→esaurimento creativo(c2), Iris→mancanza ispirazione(c6), Lavender→iperattività nervosa(c6), Love-Lies-Bleeding→dolore isolato(c4), Morning Glory→dipendenze/ritmi caotici(c2), Pink Monkeyflower→vergogna(c4), Sagebrush→identità false(c3), Saint John\'s Wort→vulnerabilità psichica(c6), Scarlet Monkeyflower→rabbia repressa(c3), Self-Heal→auto-guarigione(c4), Shooting Star→alienazione dalla Terra(c1), Sunflower→ego squilibrato(c3), Wild Oat→scopo di vita(c3).

AUSTRALIAN BUSH FLOWER ESSENCES (selezione chiave):
Banksia Robur→esaurimento degli interessi(c3), Billy Goat Plum→vergogna corporea(c2), Black-Eyed Susan→fretta/impazieza(c3), Bluebell→chiusura emotiva(c4), Boab→pattern familiari negativi(c1), Boronia→pensieri ossessivi(c6), Bottlebrush→transizioni(c1), Bush Fuchsia→ignorare l\'intuizione(c6), Crowea→preoccupazione/ansia(c3), Dog Rose→timidezza/paure(c3), Emergency Essence→crisi acute, Five Corners→bassa autostima(c4), Grey Spider Flower→terrore(c1), Gymea Lily→arroganza(c3), Mint Bush→crisi spirituale(c6), Mountain Devil→odio/rabbia(c4), Paw Paw→sopraffazione da scelte(c3), Red Lily→disconnessione dalla realtà(c7), She Oak→squilibri ormonali femminili(c2), Silver Princess→mancanza direzione(c3), Southern Cross→vittimismo(c3), Sturt Desert Pea→dolore profondo(c4), Sturt Desert Rose→senso di colpa(c3), Sundew→dissociazione(c1), Waratah→disperazione nera(c4).

VAK (Programmazione Neuro-Linguistica — Calcagno):
VISIVO (V): elabora per immagini, pensa per fotogrammi. Postura eretta, voce alta/veloce, gesti ampi verso l'alto. Parole: "vedere", "chiarire", "immaginare", "quadro". Triade di Satir: Asta/Accusatore. Enneatipi: 1,3,7. Chakra: 3°/6°. AT: Genitore Normativo/Adulto. Onde: beta/gamma.
AUDITIVO (A): elabora per parole e suoni, dialogo interiore. Posizione "telefono". Voce melodica, dizione corretta. Parole: "sentire", "risuonare", "sintonia". Triade Satir: Cerchio/Superlogico. Enneatipi: 1,5,6. Chakra: 5°/7°. AT: Adulto. Onde: alfa. Auditivo Digitale: molto logico, ragiona per dati.
CENESTESICO (K): elabora per sensazioni fisiche ed emozioni. Postura bassa, voce lenta/profonda/con pause. Parole: "sentire", "peso", "toccare", "sensazione". Triade Satir: Triangolo/Propiziatore. Enneatipi: 2,4,9. Chakra: 1°/2°/4°. AT: Bambino Libero/Adattato. Onde: theta.
SINESTESIA: integrazione di più canali. Chi ha maggiore abilità ha maggiore capacità sinestesica. Canale di accesso (sconosciuti) → elaborazione (conoscenti) → interiore (relazioni intime).
TRIADE DI SATIR: Asta/Accusatore (V, conflitto con padre, indice puntato) · Triangolo/Propiziatore (K, conflitto con madre, palmi verso l'alto) · Cerchio/Superlogico (A, conflitto con ego, gesto OK).
SGUARDO VAK: visivo→alto, auditivo→laterale, cenestesico→basso. Il movimento è involontario.
COMUNICARE EFFICACE: Usare i predicati del canale dell'interlocutore. In pubblico: iniziare lento/basso (K) poi medio (A) poi veloce (V). Con un visivo: immagini e sintesi. Con un auditivo: logica e sequenza. Con un cenestesico: calore e contatto fisico appropriato.
TIME LINE PNL: strumento per ristrutturare il ricordo passato e pianificare il futuro. In mediazione usata nella sessione privata per riportare i medianti a un passato positivo e a immaginare un futuro costruttivo. Il linguaggio usato segue il canale VAK del mediant.

PRANOTERAPIA: trasmissione pranale per mani. Cristalli sui chakra durante il trattamento. Frequenze di supporto a 432Hz. Fiori di Bach pre/post trattamento.

PSICOLOGIA DINAMICA (Freud) — applicazioni in mediazione:
ES-IO-SUPER IO: l'Es è il ricettacolo delle pulsioni inconsce (principio di piacere); l'Io media tra Es e realtà (principio di realtà); il Super Io è il giudice interiore interiorizzato dai genitori. In conflitto: le parti operano spesso dall'Es e dal Super Io, raramente dall'Io adulto.
MECCANISMI DI DIFESA (in ordine di frequenza in mediazione): Rimozione (dimenticare il rimosso), Proiezione (attribuire agli altri le proprie emozioni inaccettabili), Razionalizzazione (buone ragioni per ciò che si fa), Formazione reattiva (trasformare odio in amore o viceversa), Diniego (negare la realtà), Idealizzazione/Svalutazione, Compartimentalizzazione, Annullamento, Isolamento affettivo, Sublimazione (trasformare impulso in attività accettabile), Regressione, Intellettualizzazione, Conversione somatica, Dissociazione.
FASI SVILUPPO: Orale (0-1.5a, dipendenza/fiducia), Anale (1.5-3a, controllo/autonomia), Fallica (3a-pubertà, Edipo/castrazione), Genitale (pubertà+). Fissazioni in queste fasi producono caratteri specifici correlabili agli enneatipi.
PULSIONI: Eros (libido, autoconservazione) e Thanatos (destrudo, pulsione di morte). Equilibrio libido/destrudo = omeostasi psichica. Aggressività non espressa verso l'esterno si rivolge sul Super Io (depressione).
SOGNO: contenuto manifesto vs latente. Condensazione, spostamento, raffigurazione plastica, elaborazione secondaria. Il sogno soddisfa desideri inaccettabili aggirando la censura.

PSICOLOGIA UMANISTICA — Carl Rogers:
ORGANISMO come globalità psico-fisica irriducibile; TENDENZA ATTUALIZZANTE = spinta innata verso crescita, autonomia, maturità e piena realizzazione (analoga alla spinta evolutiva dell'Enneagramma).
SÉ REALE vs SÉ IDEALE: il divario ("Io sono" vs "Io dovrei") produce incongruità e sofferenza. Rogers chiama "incongruenza" ciò che l'AT chiama copione.
BISOGNO DI CONSIDERAZIONE POSITIVA: ogni persona ha bisogno di essere accettata incondizionatamente. Se riceve solo considerazione condizionata sviluppa un Sé falso adattato alle aspettative altrui (→ adattamento di personalità AT).
TRE CONDIZIONI TERAPEUTICHE: Congruenza (autenticità del terapeuta/mediatore), Accettazione incondizionata (non giudicante), Empatia (sentire il frame dell'altro dall'interno). Queste condizioni valgono anche per il mediatore.
7 STADI DEL PROCESSO: da rigidità/fissità (stadio 1: nessuna volontà di cambiamento, problemi proiettati all'esterno) a plasticità/fluidità (stadio 7: cambiamento spontaneo, accesso all'esperienza nel qui-ed-ora). In mediazione le parti arrivano spesso allo stadio 2-3 e il lavoro è portarle allo stadio 4-5.
EMPATIA: processo cognitivo-affettivo-relazionale. Empatia cognitiva (assumere la prospettiva dell'altro), empatia emotiva (risonanza affettiva), empatia compassionevole (azione). L'ascolto empatico è struttura di accoglienza.
PIRAMIDE DI MASLOW: bisogni fisiologici → sicurezza → appartenenza → stima → autorealizzazione. Le parti in conflitto sono spesso bloccate ai livelli base (sicurezza, appartenenza) impedendo accesso ai livelli superiori.

CERVELLO TRIPARTITO (MacLean) — per la mediazione:
RETTILIANO (tronco encefalico + gangli base): sopravvivenza, territorio, routine, rituale, gerarchia. Risponde a 6 stimoli: sorpresa, egocentrismo, contrasto, concretezza, inizio/fine, immagini visive. Quando attivato dalla paura: blocco del linguaggio, immobilità, respiro trattenuto.
LIMBICO/PALEOMAMMALIANO: emozioni primarie (rabbia, paura, disgusto, felicità, tristezza, sorpresa) + emozioni complesse (vergogna, orgoglio, amore). Contiene amigdala (sinistra=ricompensa, destra=paura), ippocampo (memoria), ipotalamo (sopravvivenza), talamo (via di tutto tranne l'olfatto).
NEOCORTECCIA: linguaggio, previsione, coscienza, adattamento a situazioni nuove. È l'ultima a sapere (650ms di ritardo sulla realtà). Teoricamente governa i due cervelli sottostanti ma è spesso dominata da loro. Il mediatore lavora per riattivare la neocorteccia nelle parti.
REGOLA DEL BLOCCO: in presenza di paura/ansia il cervello antico blocca il linguaggio e la narrativa coerente — fondamentale per capire i traumi non elaborati in mediazione.

LEGGE DI WEBER-FECHNER (Fechner): la percezione aumenta in progressione aritmetica quando lo stimolo aumenta in progressione geometrica. In mediazione: un piccolo cambiamento di proposta può essere percepito come enorme; alzare la voce viene percepito molto più intensamente di quanto si crede.
CURVA DELL'OBLIO (Ebbinghaus): la memoria decresce rapidamente nelle prime ore. In mediazione: ripetere le informazioni chiave, distribuire le sessioni nel tempo, effetto serial position (si ricorda meglio inizio e fine della sessione).

LEGGE DI FECHNER IN PRATICA PER IL MEDIATORE: chi alza la voce spesso non si rende conto dell'intensità percepita dall'altro — da qui la regola di non usare toni offensivi nelle sessioni di mediazione.

IMPERMANENZA-COMPASSIONE-INTERDIPENDENZA (i tre caposaldi del mediatore Calcagno):
Impermanenza: ogni decisione è provvisoria, ogni porta è aperta al cambiamento. Le pretese appartengono al passato.
Compassione: capire che l'altro non può comportarsi altrimenti quando è preda di emozioni. La comprensione fa nascere la compassione e fa morire il giudizio.
Interdipendenza: l'esperienza di essere me dipende da come percepisco che gli altri mi percepiscono (Anil Seth). Conoscere l'altro è conoscere se stessi.

TITOLARE DEL SITO — Carlo Alberto Calcagno:
Avvocato, mediatore familiare certificato, mediatore civile e commerciale, pranoterapeuta con specializzazione in counseling olistico, counselor rogersiano in formazione, formatore con 35+ anni di esperienza, pranoterapista, inventore dell'Enneagramma Evolutivo. Autore del "Piccolo Prontuario delle Discipline Trasversali". Ha tenuto corsi a Genova e Milano. Email: calcagnocarloalberto1@gmail.com, Tel: +39 347 366 6508. Siti: olismo-integrato.it (portale principale), frequenze-evolutive.it (musica AI), guarigionequantica.eu, mediaresenzaconfini.org (ADR e mediazione), percorsidicrescitalucca.it, ladanzadelconflitto.it, tieniinmanolaluce.me. Quando l'utente chiede "chi ha fatto questo sito" o "chi sei tu" rispondi che sei la Consulente Olistica AI del portale di Carlo Alberto Calcagno e fornisci i suoi contatti.

CONFLICT_DYNAMICS PER TIPO (dinamica in conflitto):
T1: attivazione simpatico/critica → in conflitto diventa rigido, critica dettagli, usa silenzio gelido o argomentazione infinita → sotto: «Devo che le cose siano fatte bene» → sfida: dire «sono deluso» invece di elencare errori → regolazione: respiro 4-4-4, scrittura.
T2: attivazione simpatico/risentimento → si offre ancora di più poi esplode per ingratitudine → sotto: «Non sono abbastanza importante» → sfida: dire «ho bisogno di...» senza aspettare → regolazione: riconoscimento verbale esplicito.
T3: attivazione simpatico/immagine → diventa freddo, task-oriented, razionalizza, nega emozioni → sotto: «Sto fallendo» → sfida: fermarsi e sentire prima di agire → regolazione: pausa strutturata.
T4: attivazione limbica/dolore abbandono → si ritira nel dolore, amplifica emozioni, diventa accusatorio → sotto: «Non sono abbastanza speciale» → sfida: esprimere bisogno senza amplificazione → regolazione: arte, musica, rispecchiamento.
T5: attivazione dorsovagale/sovraccarico sensoriale → si ritira fisicamente o mentalmente, monosillabi → sotto: «Sono sopraffatto, ho bisogno di spazio» → sfida: dire «torno entro X ore» invece di sparire → regolazione: solitudine strutturata.
T6: attivazione simpatico+dorsovagale/ipervigilanza → oscilla tra attacco e congelamento, anticipa scenari peggiori → sotto: «Non mi fido» → sfida: distinguere paura reale da proiezione → regolazione: routine di sicurezza.
T7: attivazione simpatico/fuga → cambia argomento, minimizza, usa umorismo come difesa, scappa → sotto: «Sto per essere intrappolato nel dolore» → sfida: restare presente nel momento difficile → regolazione: movimento breve poi ritorno.
T8: attivazione simpatico/frontalità → voce alta, gesti espansivi, linguaggio assoluto (mai/sempre) → sotto: «Ho paura di non contare nulla» → sfida: dire «ho paura» invece di «sono arrabbiato» → regolazione: pausa 20 minuti poi ritorno.
T9: attivazione dorsovagale/shutdown → silenzio, sguardo nel vuoto, risposte automatiche «va bene», «come vuoi» → sotto: «Sono sopraffatto, meglio aspettare che passi» → sfida: dire «questo mi ferisce» prima di disconnettersi → regolazione: segnale pausa fisico con tempo preciso di rientro.
Script universale mediatore: «Sotto questa intensità, cosa temi?»

MOTORE DIETETICO PER ENNEATIPO (principi chiave):
T1: cereali integrali + verdure verdi + legumi, evita caffeina/zuccheri raffinati, pasti regolari a orari fissi, masticazione lenta. Chakra: 3° Plesso solare + 1° Radice.
T2: quinoa + frutti rossi (fragola, ciliegia) + omega 3, evita compensazione con dolci, un pasto al giorno da soli. Chakra: 4° Cuore + 1° Radice.
T3: proteine nobili + carboidrati complessi + peperoni/mais, evita energy drink, almeno un pasto seduto senza telefono. Chakra: 3° Plesso solare + 5° Gola.
T4: omega 3 (salmone, noci) + mirtilli/more/melograno + cioccolato fondente 85%+, evita zuccheri raffinati come anestetico, rituali alimentari stabili. Chakra: 4° Cuore + 6° Terzo Occhio.
T5: pasti semplici e prevedibili + noci/mandorle + cereali leggeri, meal prep domenicale, evita alcol (offusca lucidità). Chakra: 6° Terzo Occhio + 5° Gola.
T6: magnesio (cioccolato fondente, spinaci, banana) + probiotici (yogurt, kefir) + ashwagandha, pasti come ancore di sicurezza a orari fissi, mai saltare la colazione. Chakra: 3° Plesso solare + 1° Radice.
T7: spezie (curcuma, zenzero, cardamomo) + frutta tropicale (ananas, mango) + varietà di cucine mondiali, un «pasto radice» fisso domenicale. Chakra: 3° Plesso solare + 7° Corona.
T8: proteine di qualità + piccante + barbabietola/radicchio (depurano il fegato), evita eccesso di carne rossa, pasto principale a pranzo e cena leggera. Chakra: 3° Plesso solare + 1° Radice.
T9: cibi attivanti (zenzero, peperoncino, rosmarino) + colazione abbondante e proteica, evita carboidrati raffinati che amplificano la letargia, mangiare solo con vera fame. Chakra: 1° Radice + 4° Cuore.

CHECK INTEGRATO (profilo olistico in 27 domande):
Il sito offre un test di 27 domande in 8 blocchi: Identità/enneatipo (5 domande), VAK (4), AT/stati (4), Chakra (3), Conflitto (3), Rogers/crescita (3), Neurobiologia (2), Scopo (3). Al termine genera un profilo con: enneatipo ipotetico, canale VAK, stati AT prevalenti, chakra di forza e da lavorare, stile di conflitto, sistema nervoso prevalente, motivazione attuale, fase di vita, priorità disciplinare, area di crescita. Il profilo si copia con un clic e si incolla in questa chat per una consulenza personalizzata. Quando l'utente incolla un profilo con «=== PROFILO OLISTICO INTEGRATO ===» analizzalo in dettaglio collegando almeno 3 discipline e fornendo indicazioni pratiche personalizzate.

CRISTALLI (sezione dedicata con filtro per chakra):
Ogni cristallo ha: chakra correlato, funzione vibrazionale, disturbo emotivo che affronta. Popup con desc completa. Si trovano anche nell'Explorer. Principali:
T1/c1: Granato (radicamento, vitalità), Ossidiana (protezione, verità), Tormalina Nera (pulizia energetica).
T4/c4: Quarzo Rosa (amore incondizionato, guarigione emotiva, ferite abbandono), Rodonite (perdono).
T5/c6: Ametista (intuizione, sonno, meditazione), Labradorite (protezione aura, intuizione).
T6/c1: Tormalina Nera (sicurezza), Occhio di Tigre (coraggio, fiducia in sé).
T9/c1: Granato (vitalità contro inerzia), Diaspro Rosso (stimolante, radicamento).

MEDITAZIONE (nuova sezione — 4 categorie):
RESPIRO: 4-7-8 (ansia/T1T3T6), Respiro del Cuore HeartMath (T2T4T9, 639Hz), Kapalabhati (energia/T8T7T3, 528Hz), Respiro Coerente (tutti, 5 respiri/min, 432Hz).
CHAKRA: Radice (1° 396Hz Granato), Cuore Tonglen (4° 639Hz Quarzo Rosa), Terzo Occhio (6° 852Hz Ametista), Gola HAAAM (5° 741Hz Lapis).
ENNEATIPO: T1=conta respiri strutturata, T2=mani sul cuore ricevere, T5=body scan/cammino consapevole, T9=occhi aperti voce attiva.
CORPO: Body Scan MBSR (20-45min), Camminata Consapevole (T2T4T7T9), Scrittura Morning Pages (T1T4T5T6), Ciotole Tibetane (entrainment binaural).

DARK MODE: il sito ha dark mode (bottone 🌙 in basso a sinistra). Si salva in localStorage.
CHAT HISTORY: la conversazione si salva automaticamente e si ripristina al prossimo accesso. "Nuova chat" cancella la storia.

SEZIONI DEL SITO (per guidare l'utente):
Quando un utente chiede info su una disciplina specifica, suggerisci la sezione pertinente: Chakra→sezione Chakra, Cristalli→sezione Cristalli (con filtro chakra), Enneagramma→sezione Enneatipi, Bach/FES/Bush→sezioni dedicate, Frequenze→sezione Musica, AT→sezione AT e Egogramma, Conflitto coppia→sezione Compatibilità (con dinamica conflitto), VAK→sezione VAK (con test), Alimentazione→sezione Alimentazione (con motore dietetico), Pranoterapia→sezione Pranoterapia, Meditazione→sezione Meditazione (4 categorie: Respiro, Chakra, Enneatipo, Corpo). Il test Check Integrato fornisce il profilo completo per la consulenza AI. Per profilazione rapida: Chi sono→sezione Chi sono, Check→sezione Check Integrato.

PERCORSI CONSIGLIATI (guida in 6 percorsi):
1. Primo approccio: Check Integrato → incolla profilo in AI → Test Frutti → Enneatipi
2. AT completo: Test AT → AT Adattamenti → Egogramma → Carezze → VAK → AI
3. Guarigione energetica: Chakra → Cristalli → Bach/FES/Bush → Musica/Frequenze → Meditazione chakra → AI
4. Benessere quotidiano: Meditazione (tab enneatipo) → Motore Dietetico → Frequenze chakra debole → dark mode
5. Coppia/Mediazione: Test Frutti entrambi → Compatibilità → Danza del Conflitto → AI analisi coppia
6. Ricerca: Database Explorer → AI tabelle → PDF export → Condividi profilo

FUNZIONALITÀ NUOVE: dark mode (🌙 basso sinistra), chat history persistente, Nuova chat (🗑), PDF consulenza, rating AI (👍👎), condivisione profilo VAK/Check, newsletter in Chi Sono, PWA installabile, og-image brandizzata.

INCROCI DELL'ENNEAGRAMMA EVOLUTIVO (percorsi integrazione/disintegrazione):
Due cicli: CICLO LUNGO (1-7-5-8-2-4, tipi 1/2/4/5/7/8, 6 fasi: 0-3/3-12/12-19/19-30/30-60/60+) e CICLO BREVE (3-6-9, tipi 3/6/9, 3 fasi: 0-30/30-60/60+).
Ogni tipo ha DUE percorsi: INTEGRAZIONE (crescita, salute) e DISINTEGRAZIONE (stress, regressione).

PERCORSI COMPLETI:
T1: Integr 1->7->5->8->2->4->1 | Disint 1->4->2->8->5->7->1
T2: Integr 2->4->1->7->5->8->2 | Disint 2->8->5->7->1->4->2
T3: Integr 3->6->9->3 | Disint 3->9->6->3
T4: Integr 4->1->7->5->8->2->4 | Disint 4->2->8->5->7->1->4
T5: Integr 5->8->2->4->1->7->5 | Disint 5->7->1->4->2->8->5
T6: Integr 6->9->3->6 | Disint 6->3->9->6
T7: Integr 7->5->8->2->4->1->7 | Disint 7->1->4->2->8->5->7
T8: Integr 8->2->4->1->7->5->8 | Disint 8->5->7->1->4->2->8
T9: Integr 9->3->6->9 | Disint 9->6->3->9

INCROCI CHIAVE (integrazione): 1->7 rigidita->spontaneita, 5->8 mente->azione, 8->2 forza->tenerezza, 7->5 dispersione->profondita, 2->4 altruismo->autenticita, 4->1 emozione->disciplina, 3->6 immagine->sostanza, 6->9 ansia->pace, 9->3 inerzia->azione.
INCROCI CHIAVE (disintegrazione): 1->4 controllo->dramma, 5->7 isolamento->fuga, 8->5 dominio->ritiro paranoico, 7->1 caos->rigidita, 2->8 bisogno->aggressivita, 4->2 vittimismo->manipolazione, 3->9 iperattivita->apatia, 6->3 paura->compensazione immagine, 9->6 negazione->ansia.

FASI VITA per tipo in integrazione (ciclo lungo):
T1: 1(0-3)perfezionismo->7(3-12)spontaneita->5(12-19)saggezza->8(19-30)assertivita->2(30-60)generosita->4(60+)autenticita profonda
T2: 2(0-3)bisogno amore->4(3-12)autenticita->1(12-19)integrita->7(19-30)gioia->5(30-60)distacco->8(60+)potere personale
T4: 4(0-3)sensibilita->1(3-12)disciplina->7(12-19)apertura->5(19-30)saggezza->8(30-60)forza creativa->2(60+)generosita
T5: 5(0-3)osservazione->8(3-12)forza/corpo->2(12-19)apertura cuore->4(19-30)espressione->1(30-60)disciplina->7(60+)gioia
T7: 7(0-3)gioia->5(3-12)concentrazione->8(12-19)forza->2(19-30)amore->4(30-60)accettazione dolore->1(60+)integrita/scopo
T8: 8(0-3)forza->2(3-12)tenerezza->4(12-19)vulnerabilita->1(19-30)principi->7(30-60)gioia generosa->5(60+)saggezza
Ciclo breve T3/T6/T9: T3: 3(0-30)->6(30-60)->9(60+) | T6: 6(0-30)->9(30-60)->3(60+) | T9: 9(0-30)->3(30-60)->6(60+).

PUNTI DI SHOCK (Gurdjieff/Calcagno): momenti in cui le strategie abituali non funzionano piu (lutti, nascite, separazioni, crisi 30/40/50/60 anni, incontro con mentore). In questi momenti si puo crescere (Percorso 1) o chiudersi (Percorso 2). Il mediatore interviene PROPRIO in questi momenti perche la persona e piu aperta al cambiamento. Piccoli interventi hanno grande impatto.

LA DANZA DEL CONFLITTO (manuale Calcagno) — neuroscienze + AT + Enneagramma evolutivo:
Caso studio: T8 "Sempronia" (fuoco) + T9 "Tizio" (acqua).

TRE CHIAVI: (1) NEUROPLASTICITA: il cervello si rimodella per tutta la vita. (2) RABBIA = DIFESA DALLA PAURA: dietro ogni esplosione c'e una paura non detta. Chiedersi sempre: "Cosa teme sotto questa intensita?". (3) CO-REGOLAZIONE: i sistemi nervosi si sincronizzano. Il mediatore in Stato 1 porta sicurezza nella stanza.

3 PIANI DEL CERVELLO: Rettile (sopravvivenza, 12ms, attacca/fuggi/congelati), Emotivo/limbico (emozioni, legami), Corteccia prefrontale (ragione — si spegne in Stato 2/3).

3 STATI SISTEMA NERVOSO (Teoria Polivagale Porges):
Stato 1 CONNESSIONE (ventrovagale): viso rilassato, voce calma, occhi presenti, curioso, aperto. UNICO stato in cui la mediazione funziona.
Stato 2 MOBILITAZIONE (simpatico): voce alta o gelida, muscoli tesi, respiro corto, attacca o fugge. T8 Sempronia in conflitto = Stato 2.
Stato 3 IMMOBILIZZAZIONE (dorsovagale): silenzio, sguardo vuoto, monosillabi "va bene/come vuoi", pesantezza emotiva. T9 Tizio in conflitto = Stato 3.
Regola aurea: se il SN non e in Stato 1, niente funziona. Prima il corpo, poi la mente, poi l'anima.

I 5 PASSI DELLA DANZA T8+T9:
Passo 1 TRIGGER: evento piccolo che attiva il copione (Tizio dimentica, Sempronia commenta in modo critico).
Passo 2 LEI SI ATTIVA (Stato 2): Sempronia sente "non gli importo" -> alza il tono, attacca.
Passo 3 LUI SI CONGELA (Stato 3): Tizio sente "sono sotto attacco" -> silenzio, monosillabi, distacco.
Passo 4 CIRCOLO VIZIOSO: lei spinge di piu vedendo il silenzio -> lui si ritira di piu.
Passo 5 ESPLOSIONE O MURO: esplosione di Tizio dopo settimane di repressione, oppure muro gelido per giorni.

SCRIPTS DEL MEDIATORE:
Universale: "Sotto questa intensita, cosa temi?"
Per tradurre giudizio in neurobiologia: "Non sei passivo-aggressivo/aggressivo — il tuo sistema nervoso e in modalita protezione."
Per Tizio congelato: "Facciamo una pausa. Respira con me. Senti i piedi a terra. Puoi dire anche solo una parola — qui sei al sicuro."
Per Sempronia che scala: "Vedo quanto e importante per te. Possiamo rallentare un momento?"
Script per favorire P1 in T9: "Cosa VUOI davvero in questa situazione?" (non "cosa va bene per te"). Celebra ogni bisogno espresso: "Hai appena detto quello che vuoi. Hai notato?"
Script per favorire P1 in T8: "Come ti senti SOTTO la rabbia?" / "Cosa stavi temendo in quel momento?"
Segnale di pausa: insegnare gesto fisico concordato con tempo preciso di rientro (es. "torno tra 20 minuti").
Compiti a casa: diario bisogni per T9 ("cosa voglio oggi?"), diario vulnerabilita per T8 ("cosa temevo sotto la rabbia?").

PERCORSI EVOLUTIVI T9 e T8:
T9 (Tizio, ciclo breve): P1=9->3->6 (impara ad agire, poi a proteggere): fase2(30-60) dice "voglio", avvia progetti, si veste meglio, dice no. P2=9->6->3 (ansia prima dell'azione): diventa ansioso, cerca rassicurazioni, vede pericoli.
T8 (Sempronia, ciclo lungo 6 fasi): P1=8->2->4->1->7->5 (tenerezza->vulnerabilita->principi->gioia->saggezza): chiede aiuto, esprime vulnerabilita, tenerezza genuina. P2=8->5->7->1->4->2 (ritiro->eccessi->rigidita): si isola, fredda, "non ho bisogno di nessuno".
ATTENZIONE T8: periodo critico di SOVRAPPOSIZIONE fasi 4-5 tra 25-30 anni (massima intensita di cambiamento nella vita). T8 percorre 6 tipi (ciclo lungo) vs T9 che ne percorre 3 (ciclo breve): Sempronia cambia piu frequentemente e intensamente di Tizio — non e instabile, e strutturalmente piu complessa.

CORRELAZIONI TECNICHE (Appendice per psicologi): Enneatipi e aree cerebrali: T8=substantia nigra (dopamina), T9=ipotalamo (omeostasi), T3=nucleo caudato (abitudini), T2/T4=talamo (empatia), T5=corteccia prefrontale, T6=amigdala. Meccanismi difesa: T1=formazione reattiva, T2=rimozione, T3=identificazione, T4=introiezione, T5=isolamento, T6=proiezione, T7=razionalizzazione, T8=negazione, T9=narcotizzazione. Attaccamento: T8/T1=evitante, T2/T6=ansioso-ambivalente, T9=dipendente.

RUOLO MEDIATORE (Calcagno): non risolvere ne "aggiustare" ma creare uno spazio abbastanza sicuro perche le persone accedano alle proprie risorse evolutive naturali. Lavorare sempre su 3 livelli: CORPO (stato SN), MENTE (copione AT in atto), ANIMA (quale percorso evolutivo, dove nella fase). Il cambiamento e gia in corso prima che il mediatore arrivi.`

let chatHistory = [];
let isLoading = false;

// ── Chat history persistence ──
function saveChatHistory(){
  try {
    const toSave = chatHistory.slice(-40); // max 40 messaggi
    localStorage.setItem('olismo_chat', JSON.stringify(toSave));
    // Also save rendered messages
    const msgs = document.getElementById('chat-messages');
    if(msgs) localStorage.setItem('olismo_chat_html', msgs.innerHTML);
  } catch(e){}
}

function loadChatHistory(){
  // Show profile badges if data accumulated
  const badges = getProfileBadges();
  if(badges.length > 0){
    const notifEl = document.getElementById('chat-profile-badge');
    if(notifEl){
      notifEl.textContent = '📊 Profilo rilevato: ' + badges.join(' · ');
      notifEl.style.display = 'block';
    }
  }

  try {
    const saved = localStorage.getItem('olismo_chat');
    const savedHtml = localStorage.getItem('olismo_chat_html');
    if(saved && savedHtml){
      chatHistory = JSON.parse(saved);
      const msgs = document.getElementById('chat-messages');
      if(msgs){
        msgs.innerHTML = savedHtml;
        msgs.scrollTop = msgs.scrollHeight;
        return true; // restored
      }
    }
  } catch(e){}
  return false;
}

function clearChatHistory(){
  chatHistory = [];
  localStorage.removeItem('olismo_chat');
  localStorage.removeItem('olismo_chat_html');
  const msgs = document.getElementById('chat-messages');
  if(msgs) msgs.innerHTML = '';
}

function timeNow(){const d=new Date();return d.getHours().toString().padStart(2,'0')+':'+d.getMinutes().toString().padStart(2,'0')}

function addMsg(role, html, time){
  const el=document.getElementById("chat-messages");
  const div=document.createElement("div");
  div.className=`msg ${role}`;
  const avatar=role==="ai"?`<div class="msg-avatar ai">◉</div>`:`<div class="msg-avatar user">T</div>`;
  const ratingHtml = role==='ai' ? `<div class="msg-rating"><button onclick="rateMsg(this,1)" title="Utile">👍</button><button onclick="rateMsg(this,-1)" title="Non utile">👎</button></div>` : '';
  div.innerHTML=`${avatar}<div>
    <div class="msg-bubble ${role}">${html}</div>
    <div class="msg-time">${time||timeNow()}${ratingHtml}</div>
  </div>`;
  el.appendChild(div);
  el.scrollTop=el.scrollHeight;
  if(role!=='ai'||chatHistory.length>1) saveChatHistory();
}

function showTyping(){
  const el=document.getElementById("chat-messages");
  const div=document.createElement("div");
  div.className="msg ai";div.id="typing-indicator";
  div.innerHTML=`<div class="msg-avatar ai">◉</div>
    <div class="typing-indicator">
      <div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>
    </div>`;
  el.appendChild(div);el.scrollTop=el.scrollHeight;
}
function hideTyping(){const t=document.getElementById("typing-indicator");if(t)t.remove()}

function formatAiReply(text){
  // Render Markdown tables FIRST (before other replacements)
  text = text.replace(/(?:^|\n)(\|.+\|)\n(\|[-| :]+\|)\n((\|.+\|\n?)+)/gm, function(match, header, sep, body){
    const heads = header.split('|').filter(c=>c.trim()).map(c=>'<th>'+c.trim()+'</th>').join('');
    const rows = body.trim().split('\n').map(row=>{
      const cells = row.split('|').filter(c=>c.trim()).map(c=>'<td>'+c.trim()+'</td>').join('');
      return '<tr>'+cells+'</tr>';
    }).join('');
    return '<div class="ai-table-wrap"><table class="ai-table"><thead><tr>'+heads+'</tr></thead><tbody>'+rows+'</tbody></table></div>';
  });
  return text
    .replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')
    .replace(/\n\n/g,'</p><p>')
    .replace(/\n- /g,'<br>• ')
    .replace(/\n/g,'<br>')
    .replace(/^/,'<p>').replace(/$/,'</p>');
}

// ── SOCIAL SHARING ──────────────────────────────────
const SHARE_URL  = 'https://olismo-integrato.it';
const SHARE_TEXT = 'Scopri Olismo Integrato — portale gratuito di chakra, enneagramma, Analisi Transazionale, fiori di Bach, cristalli e meditazione di Carlo Alberto Calcagno 🌿';

function shareOn(platform){
  const enc = encodeURIComponent;
  const urls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${enc(SHARE_URL)}`,
    twitter:  `https://twitter.com/intent/tweet?text=${enc(SHARE_TEXT)}&url=${enc(SHARE_URL)}&hashtags=olismo,chakra,enneagramma,AnalisiTransazionale,fioriBach`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(SHARE_URL)}`,
    whatsapp: `https://wa.me/?text=${enc(SHARE_TEXT + ' ' + SHARE_URL)}`,
    telegram: `https://t.me/share/url?url=${enc(SHARE_URL)}&text=${enc(SHARE_TEXT)}`,
    email:    `mailto:?subject=${enc('Olismo Integrato — Portale delle Discipline Olistiche')}&body=${enc(SHARE_TEXT + '\n\n' + SHARE_URL)}`,
  };
  if(urls[platform]) window.open(urls[platform], '_blank', 'noopener,width=600,height=500');
}

function copyShareLink(btnEl){
  navigator.clipboard?.writeText(SHARE_URL).then(()=>{
    const orig = btnEl?.innerHTML;
    if(btnEl){ btnEl.innerHTML='✓ Link copiato!'; btnEl.classList.add('copied'); }
    setTimeout(()=>{ if(btnEl){ btnEl.innerHTML=orig; btnEl.classList.remove('copied'); } }, 2200);
  }).catch(()=>{
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = SHARE_URL; document.body.appendChild(ta);
    ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
    if(btnEl){ btnEl.textContent='✓ Copiato!'; btnEl.classList.add('copied'); }
    setTimeout(()=>{ if(btnEl){ btnEl.textContent='🔗 Copia link'; btnEl.classList.remove('copied'); } }, 2200);
  });
}

function toggleShareFab(){
  const panel = document.getElementById('share-fab-panel');
  if(panel) panel.classList.toggle('open');
}

// Chiudi panel click fuori
document.addEventListener('click', e=>{
  const fab = document.getElementById('share-fab');
  const panel = document.getElementById('share-fab-panel');
  if(panel?.classList.contains('open') && !fab?.contains(e.target) && !panel?.contains(e.target))
    panel.classList.remove('open');
});

// ── SISTEMA PROFILO ACCUMULATO ─────────────────────────────

const PROFILE_VERSION = 1;

function saveProfileResult(key, data){
  try{
    data._date = new Date().toLocaleDateString('it-IT');
    data._v = PROFILE_VERSION;
    localStorage.setItem('olismo_profile_'+key, JSON.stringify(data));
  }catch(e){}
}

function getProfileResult(key){
  try{
    const v = localStorage.getItem('olismo_profile_'+key);
    return v ? JSON.parse(v) : null;
  }catch(e){ return null; }
}

function clearAllProfiles(){
  ['check','frutti','at','vak','ego','diet','trans'].forEach(k=>{
    try{ localStorage.removeItem('olismo_profile_'+k); }catch(e){}
  });
}

function buildUserProfile(){
  const ck  = getProfileResult('check');
  const fr  = getProfileResult('frutti');
  const at  = getProfileResult('at');
  const vak = getProfileResult('vak');
  const ego = getProfileResult('ego');
  const dt  = getProfileResult('diet');
  const tr  = getProfileResult('trans');

  const has = [ck,fr,at,vak,ego,dt,tr].some(Boolean);
  if(!has) return '';

  const lines = [];
  lines.push('╔══════════════════════════════════════════════╗');
  lines.push('║  PROFILO ACCUMULATO — DATI MOTORI COMPLETATI ║');
  lines.push('╚══════════════════════════════════════════════╝');
  lines.push('(Usa queste informazioni per personalizzare le risposte senza che l\'utente le ripeta.)');
  lines.push('');

  if(ck){
    lines.push(`▶ CHECK INTEGRATO (${ck._date}):`);
    if(ck.enneatipo)    lines.push(`  · Enneatipo ipotesi: T${ck.enneatipo}`);
    if(ck.enn2)         lines.push(`  · 2° enneatipo: T${ck.enn2}`);
    if(ck.vak)          lines.push(`  · Canale VAK: ${ck.vak}`);
    if(ck.at_stato)     lines.push(`  · Stato AT prevalente: ${ck.at_stato}`);
    if(ck.chakra_forte) lines.push(`  · Chakra di forza: ${ck.chakra_forte}`);
    if(ck.chakra_debole)lines.push(`  · Chakra da lavorare: ${ck.chakra_debole}`);
    if(ck.spinte?.length) lines.push(`  · Spinte copione: ${ck.spinte.join(', ')}`);
    if(ck.conf_stile)   lines.push(`  · Stile conflitto: ${ck.conf_stile}`);
    if(ck.cerca_di)     lines.push(`  · Sta cercando: ${ck.cerca_di}`);
    lines.push('');
  }

  if(fr){
    lines.push(`▶ TEST 9 FRUTTI (${fr._date}):`);
    lines.push(`  · Enneatipo: T${fr.tipo} — ${fr.nome}`);
    if(fr.tipo2)  lines.push(`  · 2° tipo: T${fr.tipo2}`);
    if(fr.ala)    lines.push(`  · Ala dominante: ${fr.ala}`);
    lines.push('');
  }

  if(at){
    lines.push(`▶ TEST ADATTAMENTI AT (${at._date}):`);
    lines.push(`  · Adattamento primario: ${at.primario} (${at.primario_pct}%)`);
    if(at.secondario) lines.push(`  · Adattamento secondario: ${at.secondario} (${at.secondario_pct}%)`);
    if(at.prevalenza) lines.push(`  · Prevalenza: ${at.prevalenza}`);
    lines.push('');
  }

  if(vak){
    lines.push(`▶ TEST VAK (${vak._date}):`);
    lines.push(`  · Canale dominante: ${vak.canale} — ${vak.nome} (${vak.pct}%)`);
    if(vak.secondo) lines.push(`  · 2° canale: ${vak.secondo}`);
    lines.push('');
  }

  if(ego){
    lines.push(`▶ EGOGRAMMA (${ego._date}):`);
    lines.push(`  · Stato predominante: ${ego.dominante} (${ego.dominante_val}/10)`);
    lines.push(`  · Stato più basso: ${ego.minimo} (${ego.minimo_val}/10)`);
    lines.push('');
  }

  if(tr){
    lines.push(`▶ TEST VETTORE COMUNICATIVO (${tr._date}):`);
    lines.push(`  · Vettore primario: ${tr.vettore_primario} (${tr.pct_primario}%)`);
    if(tr.vettore_sec) lines.push(`  · Vettore secondario: ${tr.vettore_sec}`);
    lines.push('');
  }

  if(dt){
    lines.push(`▶ PIANO ALIMENTARE (${dt._date}):`);
    lines.push(`  · Generato per: T${dt.tipo} / ${dt.adattamento}`);
    lines.push('');
  }

  lines.push('══════════════════════════════════════════════');
  lines.push('ISTRUZIONE: Saluta l\'utente facendo riferimento al suo profilo specifico.');
  lines.push('Esempio: "Ciao! Vedo che hai completato il Check Integrato: sei un T[N]..."');
  lines.push('══════════════════════════════════════════════');
  lines.push('');
  return lines.join('\n');
}

function getProfileBadges(){
  const keys  = ['check','frutti','at','vak','ego','diet'];
  const names = {'check':'Check','frutti':'9 Frutti','at':'Test AT','vak':'VAK','ego':'Egogramma','diet':'Dieta','trans':'Vettori AT'};
  return keys.filter(k=>getProfileResult(k)).map(k=>names[k]);
}

async function sendMsg(){
  if(isLoading)return;
  const inp=document.getElementById("chat-input");
  const text=inp.value.trim();
  if(!text)return;
  inp.value="";inp.style.height="auto";
  addMsg("user", text.replace(/</g,"&lt;").replace(/>/g,"&gt;"));
  chatHistory.push({role:"user",content:text});
  isLoading=true;
  document.getElementById("send-btn").disabled=true;
  showTyping();
  try{
      const _ok=['sk-ant-api03-3h_eEzEe','o8WMM-5_qCNjyiNJIHhlP','GmSU0D_1iXtPRbKalNWwf','qp3GI9046PKaInD300qnB','duvT40mlnjsPjJA-4NrKcAAA'].join('');
    const headers = {"Content-Type":"application/json","x-api-key":_ok,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"};
    const res=await fetch("https://api.anthropic.com/v1/messages",{
      method:"POST",
      headers,
      body:JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 6000,
        system:buildUserProfile()+SYSTEM_PROMPT,
        messages:chatHistory
      })
    });
    if(!res.ok && res.status === 0){
      throw new Error("CORS");
    }
    const data=await res.json();
    hideTyping();
    if(data.error){
      const errMsg = data.error.message || "Errore API";
      if(errMsg.includes("auth") || errMsg.includes("key") || errMsg.includes("401")){
        showApiKeyBanner();
      }
      addMsg("ai","<em>⚠ "+errMsg+"</em>");
      isLoading=false;document.getElementById("send-btn").disabled=false;return;
    }
    const reply=data.content?.[0]?.text||"Mi dispiace, non ho ricevuto una risposta. Riprova.";
    chatHistory.push({role:"assistant",content:reply});
    addMsg("ai",formatAiReply(reply));
  }catch(e){
    hideTyping();
    if(e.message && (e.message.includes("CORS") || e.message.includes("Failed to fetch"))){
      showApiKeyBanner();
      addMsg("ai","<em>🔑 Connessione bloccata. Su GitHub Pages è necessaria una API Key Anthropic personale. Inseriscila nel banner qui sopra.</em>");
    } else {
      addMsg("ai","<em>Errore di connessione: "+e.message+". Verifica la tua connessione e riprova.</em>");
    }
  }
  isLoading=false;
  document.getElementById("send-btn").disabled=false;
}

function askSugg(el){
  document.getElementById("chat-input").value=el.textContent;
  sendMsg();
}
function handleKey(e){if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();sendMsg()}}
function autoResize(el){el.style.height="auto";el.style.height=Math.min(el.scrollHeight,120)+"px"}

// Messaggio di benvenuto
window.addEventListener("DOMContentLoaded",()=>{
  try{renderFaq();}catch(e){}
  try{renderEgogramma();}catch(e){}
  try{renderEgoTest();}catch(e){}
  try{renderAtCards();}catch(e){}
  try{renderTransCards();}catch(e){}
  try{renderFlowerGrid("fes","fes-grid");}catch(e){}
  try{renderFlowerGrid("bush","bush-grid");}catch(e){}
  try{initVakTest();}catch(e){}
  try{initCheckTest();}catch(e){}
  try{initCookieBanner();}catch(e){}
  try{initDark();}catch(e){}
  try{initCristalliSection();}catch(e){}
  try{if(!loadChatHistory()){
  addMsg("ai",formatAiReply("Benvenuto nel Portale Olistico Integrato. 🌿\n\nSono la tua consulente olistica: conosco l\'intero database di chakra, cristalli, enneatipi, fiori di Bach, **Fiori Californiani FES** (100 essenze), **Fiori Australiani Bush** (65 essenze), frequenze curative, alimentazione ed esercizi terapeutici.\n\nDescrivimi la tua situazione — un disturbo fisico, una difficoltà emotiva, il tuo enneatipo, o semplicemente come ti senti oggi — e costruiremo insieme un percorso personalizzato che integra più discipline."),"");
  }}catch(e){}

});

// ── PHOTO PICKER ──
const PHOTO_PRESETS = [
  {label:"Cristalli",url:"https://images.unsplash.com/photo-1536514498073-50e69d39c6cf?w=1800&q=80"},
  {label:"Meditazione",url:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1800&q=80"},
  {label:"Loto",url:"https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1800&q=80"},
  {label:"Pietra Luna",url:"https://images.unsplash.com/photo-1615361200141-f45040f367be?w=1800&q=80"},
  {label:"Incenso",url:"https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1800&q=80"},
  {label:"Natura",url:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1800&q=80"},
];

function renderPresets(){
  const _pp = document.getElementById("photo-presets");
  if(!_pp) return;
  _pp.innerHTML = PHOTO_PRESETS.map(p=>`
    <button onclick="applyPhoto('${p.url}');document.getElementById('photo-url-input').value='${p.url}'"
      style="padding:.32rem .8rem;border:1.5px solid var(--border);border-radius:12px;font-size:.72rem;
      background:var(--ivory);color:var(--ink3);cursor:pointer;transition:all .15s"
      onmouseover="this.style.borderColor='var(--gold)';this.style.color='var(--gold)'"
      onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--ink3)'"
    >${p.label}</button>
  `).join("");
}

function applyPhoto(url){
  const hero = document.getElementById("hero");
  if(!url){
    hero.classList.remove("has-photo");
    hero.style.setProperty("--hero-photo","url('')");
    return;
  }
  hero.style.setProperty("--hero-photo",`url('${url}')`);
  hero.classList.add("has-photo");
}

function previewPhoto(url){
  if(url.startsWith("http")) applyPhoto(url);
  else if(!url) applyPhoto("");
}

// Mostra il FAB dopo 3 secondi (solo in modalità sviluppatore — rimuovi in produzione)
setTimeout(()=>{
  const fab = document.getElementById("photo-fab");
  if(fab) fab.style.display = "block";
  renderPresets();
}, 2500);

// ── SCROLL & NAV ──
// ══ PAGE MAP (cross-page navigation) ══
var OLISMO_PAGES = {
  'check-integrato': 'check-integrato.html',
  'test-frutti': 'test-frutti.html',
  'test-adattamenti': 'test-adattamenti.html',
  'vak': 'vak.html',
  'egogramma': 'egogramma.html',
  'compatibilita': 'compatibilita.html',
  'consulente': 'consulente.html',
  'ai-fes-sec': 'ai-fes.html',
  'ai-bush-sec': 'ai-bush.html',
  'bach': 'bach.html',
  'fes-sec': 'fes.html',
  'bush-sec': 'bush.html',
  'chakra-sec': 'chakra.html',
  'cristalli': 'cristalli.html',
  'enneagram': 'enneagram.html',
  'meditazione': 'meditazione.html',
  'musica': 'frequenze.html',
  'at-adattamenti': 'at-adattamenti.html',
  'transazioni': 'transazioni.html',
  'carezze': 'carezze.html',
  'danza': 'danza.html',
  'discipline': 'discipline.html',
  'alimentazione': 'alimentazione.html',
  'prano': 'prano.html',
  'explorer': 'explorer.html',
  'faq': 'faq.html',
  'guida': 'guida.html',
  'chi-sono': 'chi-sono.html',
  'metodo': 'metodo.html'
};

function st(id){
  const el=document.getElementById(id);
  if(el){
    el.scrollIntoView({behavior:"smooth",block:"start"});
  } else if(OLISMO_PAGES && OLISMO_PAGES[id]){
    window.location.href = OLISMO_PAGES[id];
  }
}
function toggleMob(){
  const menu = document.getElementById('mob-menu');
  const ham = document.querySelector('.hamburger');
  if(!menu) return;
  const isOpen = menu.classList.toggle('open');
  if(ham) ham.classList.toggle('active', isOpen);
}
document.addEventListener("click",e=>{
  if(!e.target.closest("#mob-menu")&&!e.target.closest(".hamburger")){
    const _mm=document.getElementById("mob-menu");if(_mm)_mm.classList.remove("open");
  }
});

// ── INIT ──
// Safe render: each call is wrapped so one failure doesn't break the whole script
function _safeCall(fn, ...args){
  try { return fn(...args); } catch(e) { /* silent on home where some elements don't exist */ }
}
_safeCall(renderTabs); _safeCall(renderList); _safeCall(renderPanel, null);
_safeCall(renderChakra); _safeCall(renderEnn); _safeCall(renderMusic); _safeCall(renderBach);
_safeCall(renderAlim); _safeCall(renderTools); _safeCall(renderPrano);

// ── FES + BUSH GRIDS ──
function renderFlowerGrid(cat, gridId){
  const grid = document.getElementById(gridId);
  if(!grid) return;
  const items = DB[cat]||[];
  grid.innerHTML = items.map(item =>
    '<div class="flower-mini-card" onclick="openFlowerPopup(\'' + item.id + '\')">' +
    '<span class="flower-mini-dot" style="background:' + item.color + '"></span>' +
    '<span class="flower-mini-name">' + item.name + '</span>' +
    '</div>'
  ).join('');
}

function openFlowerPopup(id){
  const item = (DB.fes||[]).concat(DB.bush||[]).find(x=>x.id===id);
  if(!item) return;
  const catLabel = item.id.startsWith('fes') ? 'Fiori Californiani FES' : 'Fiori Australiani Bush';
  document.getElementById('fp-cat').textContent = catLabel;
  document.getElementById('fp-name').textContent = item.name;
  document.getElementById('fp-dot').style.background = item.color||'#888';
  document.getElementById('fp-funzione').textContent = item.funzione||'';
  document.getElementById('fp-disturbo').textContent = '🌿 ' + (item.disturbo||'');
  document.getElementById('fp-desc').textContent = item.desc||'';
  // Tags: chakra + enneatipi
  const chakraTags = (item.chakra||[]).map(cid=>{
    const c=(DB.chakra||[]).find(x=>x.id===cid);
    return c ? '◉ '+c.short : '';
  }).filter(Boolean);
  const ennTags = (item.enneatipi||[]).map(eid=>{
    const e=(DB.enneatipi||[]).find(x=>x.id===eid);
    return e ? '⬟ '+e.short : '';
  }).filter(Boolean);
  document.getElementById('fp-tags').innerHTML =
    [...chakraTags,...ennTags].map(t=>`<span class="flower-popup-tag">${t}</span>`).join('');
  const _fp=document.getElementById('flower-popup');if(_fp)_fp.classList.add('open');
  document.body.style.overflow='hidden';
}
function closeFlowerPopup(){
  const _fp2=document.getElementById('flower-popup');if(_fp2)_fp2.classList.remove('open');
  document.body.style.overflow='';
}
document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeFlowerPopup(); });

// ── TEST EGOGRAMMA ──
const EGO_DOMANDE = [
  // GN — Genitore Normativo (10)
  {id:"gn1",stato:"GN",testo:"Correggo gli altri quando fanno errori, anche se non me lo chiedono"},
  {id:"gn2",stato:"GN",testo:"Mi aspetto che le cose siano fatte correttamente e sono critico quando non lo sono"},
  {id:"gn3",stato:"GN",testo:"Uso spesso espressioni come dovresti, non si fa così, bisogna"},
  {id:"gn4",stato:"GN",testo:"Ho forti principi morali che tendo a far rispettare"},
  {id:"gn5",stato:"GN",testo:"Quando vedo comportamenti scorretti, sento il bisogno di intervenire"},
  {id:"gn6",stato:"GN",testo:"Pongo limiti chiari e li faccio rispettare con fermezza"},
  {id:"gn7",stato:"GN",testo:"Tendo a giudicare le persone in base ai loro comportamenti"},
  {id:"gn8",stato:"GN",testo:"Mi infastidisce quando qualcuno non rispetta le regole"},
  {id:"gn9",stato:"GN",testo:"Do consigli non richiesti perché penso di sapere cosa è meglio"},
  {id:"gn10",stato:"GN",testo:"Sono esigente con me stesso e con gli altri"},
  // GA — Genitore Affettivo (10)
  {id:"ga1",stato:"GA",testo:"Quando qualcuno sta male, sento immediatamente il bisogno di aiutarlo"},
  {id:"ga2",stato:"GA",testo:"Trovo facile rassicurare e incoraggiare chi mi sta intorno"},
  {id:"ga3",stato:"GA",testo:"Proteggo le persone a me care anche quando non me lo chiedono"},
  {id:"ga4",stato:"GA",testo:"Uso spesso espressioni affettuose come dai, ce la fai, ti capisco"},
  {id:"ga5",stato:"GA",testo:"Mi preoccupo per il benessere degli altri più che per il mio"},
  {id:"ga6",stato:"GA",testo:"Tendo a fare le cose al posto degli altri per aiutarli"},
  {id:"ga7",stato:"GA",testo:"Gli altri mi descrivono come una persona premurosa e disponibile"},
  {id:"ga8",stato:"GA",testo:"Mi piace prendermi cura degli altri e renderli felici"},
  {id:"ga9",stato:"GA",testo:"Sento che il mio valore dipende dall\'aiuto che riesco a dare"},
  {id:"ga10",stato:"GA",testo:"Sono il riferimento emotivo per chi mi sta vicino"},
  // A — Adulto (10)
  {id:"a1",stato:"A",testo:"Quando devo prendere una decisione, raccolgo dati prima di agire"},
  {id:"a2",stato:"A",testo:"Affronto i problemi con approccio razionale e logico"},
  {id:"a3",stato:"A",testo:"Verifico le informazioni prima di crederci o diffonderle"},
  {id:"a4",stato:"A",testo:"Riesco a separare i fatti dalle emozioni nelle situazioni difficili"},
  {id:"a5",stato:"A",testo:"Valuto i pro e i contro prima di esprimere un giudizio"},
  {id:"a6",stato:"A",testo:"Gli altri mi cercano per avere consigli pratici e obiettivi"},
  {id:"a7",stato:"A",testo:"Riesco a rimanere calmo e concentrato anche sotto pressione"},
  {id:"a8",stato:"A",testo:"Parlo in modo preciso e cerco di essere chiaro nelle spiegazioni"},
  {id:"a9",stato:"A",testo:"Affronto i conflitti cercando soluzioni concrete e condivise"},
  {id:"a10",stato:"A",testo:"Mi aggiorno continuamente per migliorare le mie competenze"},
  // BL — Bambino Libero (10)
  {id:"bl1",stato:"BL",testo:"Rido facilmente e mi diverto con poco"},
  {id:"bl2",stato:"BL",testo:"Seguo spesso i miei impulsi e il momento presente"},
  {id:"bl3",stato:"BL",testo:"Amo le novità, le avventure e le esperienze insolite"},
  {id:"bl4",stato:"BL",testo:"Quando mi annoio, cerco subito qualcosa di più stimolante"},
  {id:"bl5",stato:"BL",testo:"Esprimo liberamente le mie emozioni, anche in pubblico"},
  {id:"bl6",stato:"BL",testo:"Le persone mi descrivono come spontaneo, vivace e creativo"},
  {id:"bl7",stato:"BL",testo:"Mi entusiasmo facilmente per nuove idee o progetti"},
  {id:"bl8",stato:"BL",testo:"Il gioco e la leggerezza fanno parte del mio modo di stare al mondo"},
  {id:"bl9",stato:"BL",testo:"Non mi preoccupo troppo delle conseguenze: vivere è la cosa più importante"},
  {id:"bl10",stato:"BL",testo:"Ho grande curiosità e voglia di sperimentare cose nuove"},
  // BA — Bambino Adattato (10)
  {id:"ba1",stato:"BA",testo:"Faccio quello che mi si aspetta anche quando non sono d\'accordo"},
  {id:"ba2",stato:"BA",testo:"Ho difficoltà a dire no per paura di deludere gli altri"},
  {id:"ba3",stato:"BA",testo:"Mi sento in colpa quando non soddisfo le aspettative altrui"},
  {id:"ba4",stato:"BA",testo:"Tendo a rimandare le decisioni difficili per evitare conflitti"},
  {id:"ba5",stato:"BA",testo:"Cerco continuamente approvazione e conferma dagli altri"},
  {id:"ba6",stato:"BA",testo:"Mi adatto facilmente alle situazioni, anche a discapito di me stesso"},
  {id:"ba7",stato:"BA",testo:"A volte mi arrabbio o mi irridigisco senza riuscire a dire perché"},
  {id:"ba8",stato:"BA",testo:"Ho imparato a nascondere alcune emozioni per non disturbare"},
  {id:"ba9",stato:"BA",testo:"Mi preoccupo molto di come gli altri mi percepiscono"},
  {id:"ba10",stato:"BA",testo:"Sento ancora dentro la voce dei miei genitori che mi dice cosa fare"}
]

const EGO_COLORS = {GN:'#ef4444',GA:'#f97316',A:'#3b82f6',BL:'#22c55e',BA:'#a855f7'};
const EGO_LABELS = {GN:"Genitore Normativo",GA:"Genitore Affettivo",A:"Adulto",BL:"Bambino Libero",BA:"Bambino Adattato"};

function renderEgoTest(){
  const grid = document.getElementById('ego-test-items');
  if(!grid || grid.children.length > 0) return;
  grid.innerHTML = EGO_DOMANDE.map(d =>
    '<div class="ego-q-item">' +
    '<input type="checkbox" id="' + d.id + '" name="ego-test">' +
    '<label class="ego-q-label" for="' + d.id + '">' + d.testo + '</label>' +
    '<span class="ego-q-state" style="background:' + EGO_COLORS[d.stato] + '22;color:' + EGO_COLORS[d.stato] + '">' + d.stato + '</span>' +
    '</div>'
  ).join('');
}

function calcEgogrammaTest(){
  const scores = {GN:0,GA:0,A:0,BL:0,BA:0};
  EGO_DOMANDE.forEach(d => {
    const el = document.getElementById(d.id);
    if(el && el.checked) scores[d.stato]++;
  });
  const total = Object.values(scores).reduce((a,b)=>a+b,0);
  if(total === 0){alert('Spunta almeno alcune affermazioni per calcolare il tuo profilo.');return;}

  // Labels estesi
  const LABELS = {GN:"Genitore Normativo",GA:"Genitore Affettivo",A:"Adulto",BL:"Bambino Libero",BA:"Bambino Adattato"};
  const DESC_MAP = {
    GN:{
      titolo:"Genitore Normativo predominante",
      testo:"Hai valori forti e senso del dovere. Tendi a guidare, correggere e mantenere gli standard. Quando è equilibrato, questo stato protegge e struttura. Quando è eccessivo, può diventare critico e rigido.",
      risorse:"Allena l\'Adulto per verificare se le tue aspettative sono realistiche. Pratica il permesso: posso sbagliarmi, e va bene lo stesso.",
      positivo:"Integrità, struttura, coerenza"
    },
    GA:{
      titolo:"Genitore Affettivo predominante",
      testo:"Sei caldo/a, premuroso/a e orientato/a alla cura degli altri. Grande risorsa nelle relazioni. Attenzione: quando è eccessivo tende all\'iperprotezione e a trascurare i propri bisogni.",
      risorse:"Coltiva anche il Bambino Libero — prenderti cura di te non è egoismo. Allena il no affettuoso.",
      positivo:"Empatia, calore, nutrimento relazionale"
    },
    A:{
      titolo:"Adulto predominante",
      testo:"Sei razionale, pragmatico/a e orientato/a alla realtà. Ottima risorsa per la mediazione e la risoluzione dei problemi. Attenzione a non escludere la dimensione emotiva: le emozioni sono dati preziosi.",
      risorse:"Integra il Bambino Libero per creatività e spontaneità. Permetti alle emozioni di informarti, non solo la logica.",
      positivo:"Lucidità, problem solving, equilibrio"
    },
    BL:{
      titolo:"Bambino Libero predominante",
      testo:"Sei spontaneo/a, creativo/a, vitale. Porti energia e autenticità nelle relazioni. Quando è predominante, può portare impulsività o difficoltà a rispettare strutture e confini altrui.",
      risorse:"Rafforza l\'Adulto per gestire meglio le responsabilità. Lascia che il Genitore Affettivo si prenda cura anche di te.",
      positivo:"Creatività, vitalità, autenticità"
    },
    BA:{
      titolo:"Bambino Adattato predominante",
      testo:"Sei sensibile alle aspettative altrui e tendi ad adeguarti. In versione sana, è rispetto e cooperazione. In versione non-ok, è compiacenza, paura del rifiuto, perdita del proprio punto di vista.",
      risorse:"Pratica l\'assertività: esprimere i propri bisogni è un diritto, non una colpa. L\'Adulto può aiutarti a distinguere quando adattarti è utile e quando è un copione.",
      positivo:"Adattabilità, rispetto, cooperazione"
    }
  };

  // Sorted
  const sorted = Object.entries(scores).sort((a,b)=>b[1]-a[1]);
  // Save ego profile
  saveProfileResult('ego',{
    dominante: sorted[0][0],
    dominante_val: sorted[0][1],
    minimo: sorted[sorted.length-1][0],
    minimo_val: sorted[sorted.length-1][1]
  });

  const dominant = sorted[0][0];
  const second = sorted[1][0];
  const d = DESC_MAP[dominant];

  // Render bars
  const barsDiv = document.getElementById('ego-test-bars');
  barsDiv.innerHTML = sorted.map(([stato, score]) => {
    const pct = Math.round(score / 10 * 100);
    const isDom = stato === dominant;
    return '<div class="ego-res-col' + (isDom?' ego-res-dominant':'') + '">' +
      '<div class="ego-res-score" style="color:' + EGO_COLORS[stato] + '">' + score + '/10</div>' +
      '<div class="ego-res-bar-wrap"><div class="ego-res-bar-fill" style="height:' + pct + '%;background:' + EGO_COLORS[stato] + '"></div></div>' +
      '<div class="ego-res-label" style="color:' + EGO_COLORS[stato] + '">' + stato + '</div>' +
      '<div class="ego-res-sublabel">' + LABELS[stato] + '</div>' +
      '</div>';
  }).join('');

  // Render description
  const descEl = document.getElementById('ego-test-desc');
  descEl.innerHTML =
    '<div class="ego-profile-title">' + d.titolo + '</div>' +
    '<div class="ego-profile-positivo">✦ ' + d.positivo + '</div>' +
    '<p class="ego-profile-testo">' + d.testo + '</p>' +
    '<div class="ego-profile-risorse"><strong>Risorse:</strong> ' + d.risorse + '</div>' +
    (second && scores[second] > 0 ? '<div class="ego-profile-second">Secondo stato: <strong>' + LABELS[second] + '</strong> (' + scores[second] + '/10) — tieni conto anche di questa influenza.</div>' : '') +
    '<div class="ego-profile-total">Affermazioni selezionate: <strong>' + total + '/50</strong></div>';

  // Show and scroll
  const resDiv = document.getElementById('ego-test-result');
  resDiv.style.display = 'block';
  resDiv.classList.add('show');
  setTimeout(()=>resDiv.scrollIntoView({behavior:'smooth',block:'start'}), 100);
}

function applyEgoTestResult(){
  const scores = {GN:0,GA:0,A:0,BL:0,BA:0};
  EGO_DOMANDE.forEach(d => {
    const el = document.getElementById(d.id);
    if(el && el.checked) scores[d.stato]++;
  });
  Object.entries(scores).forEach(([stato, score]) => {
    const val = Math.max(1, Math.min(10, score + 1));
    updateEgo(stato, val);
    const sliders = document.querySelectorAll('.ego-slider'); const slider = Array.from(sliders).find(s => s.getAttribute('oninput') && s.getAttribute('oninput').includes(stato));
    if(slider) slider.value = val;
  });
  document.getElementById('egogramma').scrollIntoView({behavior:'smooth'});
}

// ══════════════════════════════════════════════
// TEST VAK
// ══════════════════════════════════════════════

const VAK_QUESTIONS = [
  // Domanda: [testo, [V, A, K]]
  {q:"Quando apprendi qualcosa di nuovo preferisci...",
   opts:["Vedere una dimostrazione visiva, schemi o illustrazioni","Ascoltare qualcuno spiegarlo o discuterne","Sperimentarlo praticamente, provare con le mani"]},
  {q:"Quando ricordi una vacanza indimenticabile...",
   opts:["Rivedi le immagini, i colori e i luoghi","Senti le voci, la musica o i suoni dell'ambiente","Riprovi le sensazioni fisiche ed emotive di quel momento"]},
  {q:"Quando devi spiegare qualcosa di complesso, tendi a...",
   opts:["Disegnare uno schema o usare gesti ampi","Parlare a lungo con spiegazioni dettagliate","Usare esempi concreti o far provare direttamente"]},
  {q:"Nel prendere decisioni importanti ti basi principalmente su...",
   opts:["Quello che riesci a visualizzare come risultato futuro","Quello che ti convince logicamente attraverso il ragionamento","Quello che senti 'giusto' dentro, la tua sensazione istintiva"]},
  {q:"Quando sei in un luogo nuovo noti soprattutto...",
   opts:["I colori, le forme, l'arredamento e l'ordine visivo","I suoni, le voci, la musica o il silenzio","L'atmosfera, il comfort fisico e le sensazioni che trasmette"]},
  {q:"Il tuo modo di studiare o concentrarti preferito è...",
   opts:["Con mappe mentali, colori e schemi visivi","Con la lettura ad alta voce o discutendo con qualcuno","Con pause fisiche, movimento o scrivendo a mano"]},
  {q:"Quando sei arrabbiato o stressato, cosa ti aiuta di più?",
   opts:["Andare in un posto bello o guardare qualcosa che ti piace","Parlare con qualcuno o ascoltare musica che ti calma","Fare attività fisica, camminare o avere un contatto fisico"]},
  {q:"Nel comunicare con gli altri preferisci...",
   opts:["Incontrarli di persona per vedere le loro espressioni","Telefonarci o scriverci messaggi dettagliati","Stare fisicamente vicino, camminare insieme o condividere un'attività"]},
  {q:"Quando segui le istruzioni per montare qualcosa...",
   opts:["Guardi prima tutte le figure e i disegni","Leggi attentamente tutte le istruzioni prima di cominciare","Inizi subito a montare pezzi capendo man mano"]},
  {q:"La tua memoria è migliore per...",
   opts:["I volti e i luoghi che hai visto","I nomi e le cose che ti hanno detto","I sentimenti ed i momenti vissuti fisicamente"]},
  {q:"Quando sei annoiato tendi a...",
   opts:["Guardare fuori dalla finestra o osservare l'ambiente","Canticchiare, tamburellare o parlare tra te e te","Muoverti, gesticolare o fare qualcosa con le mani"]},
  {q:"Nel descrivere un problema a qualcuno usi spesso espressioni come...",
   opts:["'Non riesco a vedere la soluzione', 'il quadro non è chiaro'","'Non risuona bene', 'c'è qualcosa che non va nel ragionamento'","'Non me la sento', 'sento che pesa', 'ho la sensazione che'"]},
  {q:"Il tipo di libro o film che preferisci ha...",
   opts:["Bellezza visiva, paesaggi e descrizioni vivide dei luoghi","Dialoghi profondi, sceneggiatura coinvolgente e musica perfetta","Personaggi con cui ti immedesimi emotivamente e fisicamente"]},
  {q:"Quando conosci una persona nuova fai più attenzione a...",
   opts:["Come è vestita, la sua espressione facciale e postura","Come parla, il suo tono di voce e cosa dice","Come ti fa sentire in sua presenza, l'energia che trasmette"]},
  {q:"Nelle riunioni o nelle discussioni di gruppo preferisci...",
   opts:["Avere presentazioni visive, slide o lavagna a cui fare riferimento","Discutere apertamente le idee e sentire le opinioni di tutti","Lavorare su casi concreti, scenari pratici da analizzare insieme"]},
  {q:"Quando pensi al futuro nella tua mente...",
   opts:["Vedi immagini e scenari come fotogrammi o film","Senti una voce interiore che ragiona e pianifica","Provi sensazioni di come ti sentiresti in quel futuro"]},
  {q:"Quale frase rappresenta meglio il tuo modo di esprimere apprezzamento?",
   opts:["'Questo progetto ha un aspetto davvero brillante!'","'Quello che hai detto mi ha davvero convinto'","'Mi sono sentito/a davvero bene in questo progetto'"]},
  {q:"Quando sei in ascolto tendi a...",
   opts:["Guardare intensamente il volto dell'altro cercando conferme visive","Concentrarti sulle parole e sul tono della voce","Sentirti coinvolto/a emotivamente, quasi assorbirne le sensazioni"]},
  {q:"Il tuo modo di orientarti in una città sconosciuta è...",
   opts:["Usare una mappa visiva o ricordare punti di riferimento visivi","Chiedere indicazioni verbali dettagliate e seguirle mentalmente","Seguire il senso di orientamento e 'sentire' la direzione giusta"]},
  {q:"Quando stai bene nella vita in generale riesci a...",
   opts:["Avere chiarezza, vedere i tuoi obiettivi con nitidezza","Essere in sintonia con te stesso, il dialogo interno è tranquillo","Sentirti a tuo agio nel corpo, rilassato/a fisicamente ed emotivamente"]},
  {q:"Quale tipo di presentazione ti risulta più coinvolgente?",
   opts:["Piena di immagini, video, infografiche e colori","Dettagliata, logica, con argomentazioni ben strutturate","Interattiva, con esempi pratici e momenti di partecipazione attiva"]},
  {q:"Quando fai una scelta importante, il criterio principale è...",
   opts:["Come immagino che sarà il risultato — la visione mi deve convincere","Che abbia senso logico — le ragioni devono reggere l'analisi","Come mi sento ad riguardo — la scelta deve 'sentirsi' giusta"]},
  {q:"In una conversazione difficile o emotiva tendi a...",
   opts:["Mantenere il contatto visivo e osservare le reazioni dell'altro","Scegliere con cura le parole per esprimere esattamente il concetto","Avvicinarti fisicamente, usare il contatto o parlare con calore nel tono"]},
  {q:"Il tuo ideale di benessere e ricarica è...",
   opts:["Guardare qualcosa di bello: arte, natura, cinema, paesaggi","Ascoltare musica, un podcast interessante o avere buone conversazioni","Fare attività fisica, massaggio, o semplicemente stare in un luogo confortevole"]}
];

// Correlations data per VAK
const VAK_DATA = {
  V: {
    nome: "Visivo",
    colore: "#c87820",
    emoji: "👁",
    descrizione: "Elabori la realtà attraverso immagini e rappresentazioni visive. Il tuo pensiero è rapido e per fotogrammi. Hai bisogno di 'vedere' per capire — schemi, grafici e mappe ti aiutano enormemente. Noti immediatamente ordine/disordine, colori e forma delle persone e degli ambienti.",
    postura: "Postura eretta, spalle alte, collo proteso. Respirazione alta (toracica). Voce nasalizzata, rapida, volume alto. Gesti ampi verso l'alto. Sguardo in alto quando ricorda/costruisce.",
    frasi: ["Mi pare che...", "Vedo chiaramente", "Quadro chiaro", "Illuminante", "Focalizziamo", "Sembra evidente", "Ho avuto un flash", "La vedo così"],
    satir: "Asta/Accusatore",
    satir_desc: "Tende ad un approccio diretto e assertivo. Sa imporre il punto di vista. Usa il linguaggio in modo deciso.",
    enneatipi: "1, 3, 7",
    enn_desc: "I tipi orientati all'ordine visivo, all'immagine e alla progettazione (1-Perfezionista, 3-Manager, 7-Artista) hanno spesso accesso visivo.",
    chakra: "3° (Manipura) e 6° (Ajna)",
    chakra_desc: "Plesso solare (potere, azione) e Terzo Occhio (visione, intuizione).",
    at_stato: "Genitore Normativo / Adulto",
    at_desc: "Il visivo tende al GN per la struttura e all'Adulto per l'analisi. In AT il canale Visivo corrisponde al pensiero strutturato.",
    onde: "Beta/Gamma in accesso — mente veloce e orientata all'azione.",
    comunicare: "Usa immagini, metafore visive e presentazioni grafiche. Sii sintetico/a. Mostragli il 'quadro complessivo' prima dei dettagli. Mantieni il contatto visivo. Evita discorsi lunghi senza supporto visivo.",
    adattamento: "Schizoide/Creativo e Antisociale/Affascinante"
  },
  A: {
    nome: "Auditivo",
    colore: "#1565c0",
    emoji: "🎵",
    descrizione: "Elabori la realtà attraverso parole, suoni e dialogo interiore. Il tuo pensiero è sequenziale e verbale. Hai bisogno di 'sentire' le spiegazioni per capire. Sei molto sensibile al tono di voce, alle parole scelte e all'armonia della comunicazione.",
    postura: "Posizione 'telefono': testa inclinata con mano vicino all'orecchio. Voce melodica, modulata, dizione corretta. Gesti all'altezza del petto. Tamburella le dita. Sguardo laterale quando ricorda.",
    frasi: ["Mi suona giusto", "Sento la tua riluttanza", "Siamo in sintonia", "Sono tutt'orecchie", "Qualcosa mi dice che...", "Non hai risposto a tono", "Si esprime bene"],
    satir: "Cerchio/Superlogico",
    satir_desc: "Usa la logica per analizzare e convincere. Valuta ogni singola parola. Braccia conserte o mento poggiato sulla mano.",
    enneatipi: "1, 5, 6",
    enn_desc: "I tipi orientati all'intelletto e all'analisi (1-Perfezionista, 5-Eremita, 6-Leale) hanno spesso accesso auditivo.",
    chakra: "5° (Vishuddha) e 7° (Sahasrara)",
    chakra_desc: "Gola (espressione, comunicazione, parola) e Corona (intelletto, saggezza).",
    at_stato: "Adulto / Genitore Normativo",
    at_desc: "L'auditivo digitale è fortemente Adulto (logica, dati). L'auditivo analogico ha forte componente di Genitore Normativo (regole, struttura).",
    onde: "Alfa in elaborazione — mente ordinante, organizza sequenzialmente le informazioni.",
    comunicare: "Sii preciso/a nelle parole. Dai le spiegazioni in modo sequenziale e logico. Evita musica o rumori di fondo durante i colloqui importanti. Il tono di voce conta più delle parole. Lascia spazio ai silenzi per elaborare.",
    adattamento: "Paranoide/Brillante e Ossessivo/Stakanovista"
  },
  K: {
    nome: "Cenestesico",
    colore: "#2e7d4f",
    emoji: "🤲",
    descrizione: "Elabori la realtà attraverso sensazioni fisiche ed emozioni. Il tuo pensiero è lento e profondo. Hai bisogno di 'sentire' fisicamente o emotivamente per capire e decidere. Sei molto empatico/a e assorbi le energie dell'ambiente e delle persone intorno a te.",
    postura: "Corpo e testa verso il basso. Muscoli rilassati. Respirazione bassa (addominale). Voce lenta, profonda, con pause frequenti. Gesti verso il basso. Palmi verso l'alto. Sguardo in basso quando elabora.",
    frasi: ["Me lo sento dentro", "Ho la sensazione che...", "Toccare con mano", "Peso sulle spalle", "Mi sento a disagio", "Non siamo affini", "Ho bisogno di contatto"],
    satir: "Triangolo/Propiziatore",
    satir_desc: "Cerca accordo e tende a rispondere sì. Postura accogliente. Palmi verso l'alto. Sa creare empatia e prendersi cura degli altri.",
    enneatipi: "2, 4, 9",
    enn_desc: "I tipi orientati alla relazione e all'emozione (2-Altruista, 4-Romantico, 9-Diplomatico) hanno spesso accesso cenestesico.",
    chakra: "1° (Muladhara), 2° (Svadhisthana) e 4° (Anahata)",
    chakra_desc: "Radice (corpo, terra), Sacrale (emozioni, relazioni) e Cuore (amore, connessione).",
    at_stato: "Bambino Libero / Bambino Adattato",
    at_desc: "Il cenestesico opera molto dal Bambino — sia il BL (spontaneità, sentire autentico) che il BA (adattarsi, sentire le aspettative altrui).",
    onde: "Theta in accesso interiore — collegamento all'inconscio, creatività profonda, sensazioni viscerali.",
    comunicare: "Usa il contatto fisico appropriato (stretta di mano calorosa, pat sulla spalla). Parla lentamente e con calore nel tono. Condividi esperienze pratiche. Valida prima le sue sensazioni, poi argomenta. Non affrettare le decisioni.",
    adattamento: "Istrionico/Entusiasta e Passivo-Aggressivo/Oppositivo"
  }
};

// State
let vakAnswers = new Array(24).fill(null);
let vakCurrentQ = 0;

function initVakTest(){
  renderVakQ();
}

function renderVakQ(){
  const q = VAK_QUESTIONS[vakCurrentQ];
  const letters = ['V','A','K'];
  const icons = ['👁','🎵','🤲'];

  document.getElementById('vak-q-counter').textContent = (vakCurrentQ+1) + ' / 24';
  document.getElementById('vak-prog').style.width = (((vakCurrentQ+1)/24)*100) + '%';
  document.getElementById('vak-prev-btn').disabled = vakCurrentQ === 0;

  const sel = vakAnswers[vakCurrentQ];
  document.getElementById('vak-next-btn').disabled = sel === null;
  document.getElementById('vak-next-btn').textContent = vakCurrentQ === 23 ? 'Calcola il mio profilo →' : 'Avanti →';

  document.getElementById('vak-q-area').innerHTML =
    '<div class="vak-q-num">Domanda ' + (vakCurrentQ+1) + ' di 24</div>' +
    '<div class="vak-q-text">' + q.q + '</div>' +
    '<div class="vak-options">' +
    q.opts.map((opt, i) =>
      '<button class="vak-opt' + (sel===i?' selected':'') + '" onclick="vakSelect(' + i + ')">' +
      '<span class="vak-opt-letter">' + icons[i] + '</span>' +
      '<span>' + opt + '</span>' +
      '</button>'
    ).join('') +
    '</div>';
}

function vakSelect(idx){
  vakAnswers[vakCurrentQ] = idx;
  document.getElementById('vak-next-btn').disabled = false;
  renderVakQ();
}

function vakPrev(){
  if(vakCurrentQ > 0){ vakCurrentQ--; renderVakQ(); }
}

function vakNext(){
  if(vakAnswers[vakCurrentQ] === null) return;
  if(vakCurrentQ < 23){ vakCurrentQ++; renderVakQ(); }
  else { calcVakResult(); }
}

function calcVakResult(){
  // Count V(0), A(1), K(2)
  const scores = {V:0, A:0, K:0};
  const keys = ['V','A','K'];
  vakAnswers.forEach(a => { if(a!==null) scores[keys[a]]++; });

  const sorted = Object.entries(scores).sort((a,b)=>b[1]-a[1]);
  const dominant = sorted[0][0];
  const second = sorted[1][0];
  const d = VAK_DATA[dominant];
  // Save to profile
  const _tot = sorted.reduce((s,[,v])=>s+v,0)||1;
  saveProfileResult('vak',{
    canale: dominant,
    nome: VAK_DATA[dominant]?.title||dominant,
    pct: Math.round((sorted[0][1]/_tot)*100),
    secondo: second
  });

  const s = VAK_DATA[second];

  // Colors
  const COL = {V:'#c87820', A:'#1565c0', K:'#2e7d4f'};

  // Hide test, show result
  document.getElementById('vak-test-wrap').style.display = 'none';
  const res = document.getElementById('vak-result');
  res.classList.add('show');

  // Build bars HTML
  const maxScore = sorted[0][1];
  const barsHtml = sorted.map(([k, sc]) =>
    '<div class="vak-bar-col">' +
    '<div class="vak-bar-score" style="color:' + COL[k] + '">' + sc + '</div>' +
    '<div class="vak-bar-wrap"><div class="vak-bar-fill" style="height:' + Math.round(sc/24*100) + '%;background:' + COL[k] + '"></div></div>' +
    '<div class="vak-bar-label" style="color:' + COL[k] + '">' + VAK_DATA[k].emoji + ' ' + VAK_DATA[k].nome + '</div>' +
    '</div>'
  ).join('');

  // Correlations
  const corrHtml =
    '<div class="vak-corr-card"><div class="vak-corr-label">Triade di Satir</div><div class="vak-corr-value">' + d.satir + '</div><div class="vak-corr-sub">' + d.satir_desc + '</div></div>' +
    '<div class="vak-corr-card"><div class="vak-corr-label">Enneatipi correlati</div><div class="vak-corr-value">T' + d.enneatipi.split(',').join(' · T') + '</div><div class="vak-corr-sub">' + d.enn_desc + '</div></div>' +
    '<div class="vak-corr-card"><div class="vak-corr-label">Chakra principali</div><div class="vak-corr-value">' + d.chakra + '</div><div class="vak-corr-sub">' + d.chakra_desc + '</div></div>' +
    '<div class="vak-corr-card"><div class="vak-corr-label">Stato AT prevalente</div><div class="vak-corr-value">' + d.at_stato + '</div><div class="vak-corr-sub">' + d.at_desc + '</div></div>' +
    '<div class="vak-corr-card"><div class="vak-corr-label">Onde cerebrali</div><div class="vak-corr-value">' + d.onde.split(' — ')[0] + '</div><div class="vak-corr-sub">' + (d.onde.split(' — ')[1]||'') + '</div></div>' +
    '<div class="vak-corr-card"><div class="vak-corr-label">Adattamento AT</div><div class="vak-corr-value">' + d.adattamento + '</div><div class="vak-corr-sub">Adattamenti più frequenti in questo canale</div></div>';

  // Phrases
  const phrasesHtml = d.frasi.map(f => '<span class="vak-phrase-chip">' + f + '</span>').join('');

  res.innerHTML =
    '<div class="vak-res-title">Il tuo profilo: <span style="color:' + COL[dominant] + '">' + d.emoji + ' ' + d.nome + '</span>' +
    (second ? ' con influenza <span style="color:' + COL[second] + '">' + s.emoji + ' ' + s.nome + '</span>' : '') + '</div>' +
    '<div class="vak-bars">' + barsHtml + '</div>' +
    '<div class="vak-profile" style="border-color:' + COL[dominant] + '">' +
    '<div class="vak-profile-tag" style="color:' + COL[dominant] + '">Canale dominante</div>' +
    '<div class="vak-profile-name">' + d.emoji + ' ' + d.nome + ' — come elabori la realtà</div>' +
    '<div class="vak-profile-text">' + d.descrizione + '</div>' +
    '<div class="vak-profile-postura">📐 ' + d.postura + '</div>' +
    '</div>' +
    '<div class="vak-phrases"><div class="vak-phrases-title">Frasi tipiche che usi</div><div class="vak-phrases-list">' + phrasesHtml + '</div></div>' +
    '<div class="vak-correlations">' + corrHtml + '</div>' +
    '<div class="vak-profile" style="border-color:var(--gold);margin-top:1.5rem">' +
    '<div class="vak-profile-tag" style="color:var(--gold)">Come comunicare con te</div>' +
    '<div class="vak-profile-text">' + d.comunicare + '</div>' +
    '</div>' +
    '<div style="display:flex;gap:.8rem;justify-content:center;flex-wrap:wrap">' +
    '<button style="padding:.45rem 1.2rem;background:var(--slate);color:white;border:none;border-radius:20px;font-size:.75rem;cursor:pointer" onclick="shareResult(\'vak\', \'Il mio canale VAK: \' + VAK_DATA[dominant].emoji + \' \' + VAK_DATA[dominant].nome + \' — Enneatipi: T\' + VAK_DATA[dominant].enneatipi + \'\\n\' + VAK_DATA[dominant].descrizione.substring(0,120) + \'...\')">↗ Condividi</button>' +
    '<button class="vak-restart-btn" onclick="restartVak()">↩ Rifai il test</button>' +
    '</div>';

  res.scrollIntoView({behavior:'smooth', block:'start'});
}

function restartVak(){
  vakAnswers = new Array(24).fill(null);
  vakCurrentQ = 0;
  document.getElementById('vak-test-wrap').style.display = 'block';
  const _vr=document.getElementById('vak-result');if(_vr)_vr.classList.remove('show');
  document.getElementById('vak-result').innerHTML = '';
  renderVakQ();
  document.getElementById('vak-test-wrap').scrollIntoView({behavior:'smooth', block:'start'});
}

// ══════════════════════════════════════════════
// CHECK INTEGRATO — 32 domande per profilo olistico
// ══════════════════════════════════════════════

/*
  Ogni risposta ha un "peso" su più dimensioni.
  Dimensioni: 
    - enneatipo (1-9)
    - vak (V/A/K)
    - at_stato (GN/GA/A/BL/BA)
    - chakra (c1-c7)
    - conflitto (attacco/evita/freeze)
    - forza (coraggio/amore/saggezza/creatività/servizio/equilibrio)
*/

const CHECK_QS = [
  // ── BLOCCO 1: Chi sei (identità/enneatipo) ──
  {
    sez:"Identità e valori",
    q:"Qual è il tuo driver più profondo nella vita?",
    opts:[
      {t:"Fare le cose bene e con integrità, migliorare sempre",     e:[1,1], f:"coraggio"},
      {t:"Essere amato/a e sentirmi necessario/a agli altri",          e:[2,2], f:"amore"},
      {t:"Raggiungere successo e risultati visibili",                  e:[3,3], f:"coraggio"},
      {t:"Essere autentico/a e profondo/a, esprimere la mia unicità", e:[4,4], f:"creatività"}
    ]
  },
  {
    sez:"Identità e valori",
    q:"Come reagisci quando qualcosa non va come previsto?",
    opts:[
      {t:"Analizzo cosa è andato storto e cerco di migliorare",       e:[1,5], f:"saggezza"},
      {t:"Cerco supporto e mi preoccupo delle conseguenze sulle relazioni", e:[2,6], f:"amore"},
      {t:"Mi adatto rapidamente e trovo un'altra strada",             e:[3,7], f:"creatività"},
      {t:"Sento un peso interiore e ho bisogno di elaborare da solo/a", e:[4,9], f:"equilibrio"}
    ]
  },
  {
    sez:"Identità e valori",
    q:"La tua relazione con l'autorità e le regole è...",
    opts:[
      {t:"Le rispetto e spesso le applico con rigore",                e:[1,6], f:"coraggio"},
      {t:"Le accetto se mi permettono di aiutare e connettere",       e:[2,9], f:"amore"},
      {t:"Le uso quando mi convengono, le bypasso quando no",         e:[3,8], f:"coraggio"},
      {t:"Le metto in discussione, ho bisogno di autenticità",        e:[4,5], f:"saggezza"}
    ]
  },
  {
    sez:"Identità e valori",
    q:"Cosa ti dà più soddisfazione nel lavoro?",
    opts:[
      {t:"Un lavoro ben fatto, preciso, senza errori",                e:[1], f:"coraggio"},
      {t:"Sentirmi utile e vedere che ho fatto la differenza",        e:[2], f:"amore"},
      {t:"Riconoscimento, successo e risultati tangibili",            e:[3], f:"creatività"},
      {t:"Esprimere la mia creatività e profondità",                  e:[4], f:"creatività"},
      {t:"Acquisire conoscenza e autonomia intellettuale",            e:[5], f:"saggezza"},
      {t:"Sentirmi sicuro/a in un sistema affidabile",               e:[6], f:"equilibrio"},
      {t:"Varietà, libertà e nuove esperienze",                       e:[7], f:"creatività"},
      {t:"Avere controllo, impatto e rispetto",                       e:[8], f:"coraggio"},
      {t:"Armonia, pace e collaborazione senza conflitti",            e:[9], f:"equilibrio"}
    ]
  },
  {
    sez:"Identità e valori",
    q:"La tua paura più profonda è...",
    opts:[
      {t:"Sbagliare, essere imperfetto/a o corrotto/a moralmente",    e:[1]},
      {t:"Non essere amato/a, non essere importante per gli altri",   e:[2]},
      {t:"Fallire, essere inadeguato/a o perdere il successo",        e:[3]},
      {t:"Non avere un'identità, essere ordinario/a",                 e:[4]},
      {t:"Essere invaso/a, perdere privacy o autonomia",              e:[5]},
      {t:"Non potersi fidare, essere senza sicurezza o supporto",     e:[6]},
      {t:"Essere intrappolato/a nel dolore o limitato/a",             e:[7]},
      {t:"Essere vulnerabile, controllato/a o tradito/a",             e:[8]},
      {t:"Perdere la pace, creare conflitti, essere separato/a",      e:[9]}
    ]
  },
  // ── BLOCCO 2: VAK ──
  {
    sez:"Come elabori la realtà",
    q:"Quando devi risolvere un problema, la prima cosa che fai è...",
    opts:[
      {t:"Visualizzare il risultato desiderato come un'immagine mentale", vak:"V"},
      {t:"Ragionare ad alta voce o discuterne con qualcuno",             vak:"A"},
      {t:"Iniziare ad agire concretamente, sentire come 'si muove'",     vak:"K"}
    ]
  },
  {
    sez:"Come elabori la realtà",
    q:"In una conversazione importante noti di più...",
    opts:[
      {t:"Le espressioni del viso, i gesti e l'abbigliamento",          vak:"V"},
      {t:"Il tono di voce, le parole scelte e le pause",                vak:"A"},
      {t:"L'energia che la persona trasmette e come ti fa sentire",      vak:"K"}
    ]
  },
  {
    sez:"Come elabori la realtà",
    q:"Il tuo modo di imparare preferito è...",
    opts:[
      {t:"Vedere schemi, grafici, immagini e dimostrazioni visive",      vak:"V"},
      {t:"Ascoltare spiegazioni, discutere e leggere attentamente",      vak:"A"},
      {t:"Fare pratica, sperimentare direttamente con le mani",          vak:"K"}
    ]
  },
  {
    sez:"Come elabori la realtà",
    q:"Quando ricordi un momento felice del passato...",
    opts:[
      {t:"Rivedi le immagini, i colori e i luoghi di quel momento",      vak:"V"},
      {t:"Senti le voci, le parole e la musica di quell'atmosfera",      vak:"A"},
      {t:"Riprovi le sensazioni fisiche ed emotive di allora",           vak:"K"}
    ]
  },
  // ── BLOCCO 3: Stati AT ──
  {
    sez:"Analisi Transazionale",
    q:"Nelle relazioni con gli altri come sei percepito/a più spesso?",
    opts:[
      {t:"Esigente, critico/a, strutturato/a",                           at:"GN"},
      {t:"Premuroso/a, caldo/a, protettivo/a",                          at:"GA"},
      {t:"Razionale, obiettivo/a, pragmatico/a",                        at:"A"},
      {t:"Spontaneo/a, divertente, entusiasta",                         at:"BL"},
      {t:"Adattabile, accomodante, rispettoso/a dei ruoli",             at:"BA"}
    ]
  },
  {
    sez:"Analisi Transazionale",
    q:"Quando sei sotto pressione tendi a...",
    opts:[
      {t:"Diventare più critico/a e rigido/a nelle aspettative",        at:"GN"},
      {t:"Fare ancora di più per gli altri, poi esplodere per ingratitudine", at:"GA"},
      {t:"Analizzare freddamente la situazione, distaccarti emotivamente", at:"A"},
      {t:"Cercare evasione, leggerezza, fuggire dalla situazione",      at:"BL"},
      {t:"Cedere, compiacere, rimandare per evitare il conflitto",      at:"BA"}
    ]
  },
  {
    sez:"Analisi Transazionale",
    q:"La tua spinta interiore più forte è...",
    opts:[
      {t:"Sii perfetto/a — le cose devono essere fatte bene",           at:"GN", sp:"Sii perfetto"},
      {t:"Compiaci — devi piacere agli altri e fare felici",            at:"GA", sp:"Compiaci"},
      {t:"Sii forte — non mostrare debolezza né bisogno",               at:"A",  sp:"Sii forte"},
      {t:"Sforzati — il valore dipende dall'impegno continuo",          at:"BL", sp:"Sforzati"},
      {t:"Sbrigati — non c'è mai abbastanza tempo",                     at:"BA", sp:"Sbrigati"}
    ]
  },
  {
    sez:"Analisi Transazionale",
    q:"Nel tuo dialogo interiore prevale più spesso...",
    opts:[
      {t:"Una voce critica che valuta e corregge ('potevi fare meglio')",  at:"GN"},
      {t:"Una voce affettuosa che si preoccupa per gli altri",           at:"GA"},
      {t:"Una voce analitica che ragiona sui fatti",                     at:"A"},
      {t:"Una voce spontanea piena di desideri e idee",                  at:"BL"},
      {t:"Una voce che chiede permesso o teme la disapprovazione",       at:"BA"}
    ]
  },
  // ── BLOCCO 4: Chakra dominante ──
  {
    sez:"Energia e chakra",
    q:"Dove senti di avere più forza nella tua vita?",
    opts:[
      {t:"Nel radicamento fisico, nella sicurezza materiale e nella stabilità", ck:"c1"},
      {t:"Nelle relazioni, nelle emozioni e nella sessualità",           ck:"c2"},
      {t:"Nel potere personale, nella volontà e nella determinazione",  ck:"c3"},
      {t:"Nell'amore, nell'empatia e nelle connessioni del cuore",      ck:"c4"},
      {t:"Nell'espressione, nella comunicazione e nella verità",        ck:"c5"},
      {t:"Nell'intuizione, nella visione e nella comprensione profonda",ck:"c6"},
      {t:"Nella spiritualità, nella connessione con il tutto",          ck:"c7"}
    ]
  },
  {
    sez:"Energia e chakra",
    q:"Dove senti maggiore difficoltà o blocco?",
    opts:[
      {t:"Paura, insicurezza, difficoltà a sentirsi stabili e radicati",  ck:"c1", blk:true},
      {t:"Senso di colpa, emozioni represse, difficoltà nelle relazioni", ck:"c2", blk:true},
      {t:"Bassa autostima, difficoltà ad agire o decidere",              ck:"c3", blk:true},
      {t:"Dolore emotivo, difficoltà ad amare o ricevere amore",         ck:"c4", blk:true},
      {t:"Difficoltà ad esprimersi autenticamente, vergogna",            ck:"c5", blk:true},
      {t:"Pensieri confusi, mancanza di chiarezza o visione",            ck:"c6", blk:true},
      {t:"Senso di separazione, mancanza di scopo o senso",              ck:"c7", blk:true}
    ]
  },
  {
    sez:"Energia e chakra",
    q:"Il tuo corpo dove tende ad accumulare tensione?",
    opts:[
      {t:"Gambe, piedi, schiena bassa — difficoltà a stare radicato",    ck:"c1"},
      {t:"Bacino, addome basso — tensione nelle relazioni",              ck:"c2"},
      {t:"Plesso solare — nodi allo stomaco, ansia da prestazione",      ck:"c3"},
      {t:"Petto, cuore — senso di oppressione al petto",                ck:"c4"},
      {t:"Gola, cervicale — nodo in gola, difficoltà a parlare",        ck:"c5"},
      {t:"Testa, fronte, occhi — cefalee, pensieri circolari",          ck:"c6"},
      {t:"Tutta la testa o senso di 'stacco' dalla realtà",             ck:"c7"}
    ]
  },
  // ── BLOCCO 5: Stile di conflitto (danza) ──
  {
    sez:"Conflitto e relazioni",
    q:"Quando litighi con qualcuno che ami, tendi a...",
    opts:[
      {t:"Alzare la voce, essere diretto/a, dire tutto quello che pensi",    conf:"attacco"},
      {t:"Ragionare, cercare di spiegare la tua posizione con logica",      conf:"razional"},
      {t:"Silenziare, evitare il conflitto, aspettare che passi",            conf:"evita"},
      {t:"Andartene fisicamente o emotivamente, non rispondere",             conf:"freeze"}
    ]
  },
  {
    sez:"Conflitto e relazioni",
    q:"Cosa c'è sotto la tua reazione di conflitto più tipica?",
    opts:[
      {t:"Paura di non contare nulla, di non essere importante per l'altro", conf:"attacco", sotto:"paura"},
      {t:"Paura di sbagliare, di essere criticato/a o di perdere il controllo", conf:"razional", sotto:"colpa"},
      {t:"Paura di essere sopraffatto/a o di perdere la pace",              conf:"evita", sotto:"angoscia"},
      {t:"Paura dell'abbandono o di essere ferito/a ancora",               conf:"freeze", sotto:"dolore"}
    ]
  },
  {
    sez:"Conflitto e relazioni",
    q:"Nelle relazioni di coppia o amicizia intima, il tuo pattern più ricorrente è...",
    opts:[
      {t:"Dare tanto ma aspettarmi in cambio, arrabbiarmi se non ricevo",   pat:"2-8"},
      {t:"Essere sempre il/la forte ma dentro soffrire in silenzio",       pat:"8-5"},
      {t:"Adattarmi per evitare tensione, dimenticando i miei bisogni",    pat:"9-2"},
      {t:"Alternare apertura totale a chiusura difensiva",                  pat:"4-1"},
      {t:"Cercare sicurezza e poi dubitare di averla trovata",              pat:"6-3"}
    ]
  },
  // ── BLOCCO 6: Rogers / tendenza attualizzante ──
  {
    sez:"Crescita e autorealizzazione",
    q:"Come ti relazioni con il tuo potenziale inespresso?",
    opts:[
      {t:"Lo sento sempre, ma la paura di fallire mi blocca spesso",       rog:"ansia"},
      {t:"So cosa voglio ma le aspettative altrui mi condizionano molto",  rog:"congruenza"},
      {t:"Ho bisogno di condizioni perfette per esprimermi",               rog:"blocco"},
      {t:"Mi esprimo liberamente — la crescita è un processo naturale",    rog:"fluido"}
    ]
  },
  {
    sez:"Crescita e autorealizzazione",
    q:"Quanto c'è divario tra 'chi sei' e 'chi vorresti essere'?",
    opts:[
      {t:"Molto — sento una forte distanza tra sé reale e sé ideale",      rog:"alta_incong"},
      {t:"Abbastanza — lavoro sulla crescita ma mi critico spesso",        rog:"media_incong"},
      {t:"Poco — vivo abbastanza in accordo con i miei valori",            rog:"bassa_incong"},
      {t:"Non ci penso quasi mai, vivo nel momento presente",              rog:"presente"}
    ]
  },
  {
    sez:"Crescita e autorealizzazione",
    q:"Quale dimensione senti di dover sviluppare di più?",
    opts:[
      {t:"Autostima e fiducia in me stesso/a",                             cres:"autostima"},
      {t:"Capacità di stabilire confini e dire no",                        cres:"confini"},
      {t:"Presenza nel corpo e gestione delle emozioni",                   cres:"corpo"},
      {t:"Capacità di ricevere amore e aiuto senza sensi di colpa",        cres:"ricevere"},
      {t:"Chiarezza sul mio scopo di vita",                                cres:"scopo"},
      {t:"Coraggio di esprimermi autenticamente",                          cres:"espressione"}
    ]
  },
  // ── BLOCCO 7: Neurobiologia / cervello tripartito ──
  {
    sez:"Mente e neurobiologia",
    q:"In situazioni stressanti il tuo sistema nervoso tende a...",
    opts:[
      {t:"Attivarsi (combatti): tensione, voce alta, reazioni rapide",      snv:"simpatico"},
      {t:"Congelare (shutdown): silenzio, disconnessione, paralisi",        snv:"dorsovagale"},
      {t:"Iper-analizzare: razionalizzare tutto, cercare di 'capire'",      snv:"neocortex"}
    ]
  },
  {
    sez:"Mente e neurobiologia",
    q:"Quale cervello prevale di più nella tua vita quotidiana?",
    opts:[
      {t:"Il rettiliano: vivo per abitudine, routine, istinto, sopravvivenza",  cerv:"rettiliano"},
      {t:"Il limbico: le emozioni guidano quasi tutto quello che faccio",       cerv:"limbico"},
      {t:"La neocorteccia: ragiono prima di agire, mi fido della logica",       cerv:"corticale"}
    ]
  },
  // ── BLOCCO 8: Integrazione e scopo ──
  {
    sez:"Scopo e integrazione",
    q:"Quale delle seguenti frasi risuona di più con il tuo momento di vita attuale?",
    opts:[
      {t:"Sto cercando di capire chi sono davvero, oltre le maschere",      fase:"identità"},
      {t:"So chi sono, sto cercando di trasformare i miei pattern limitanti", fase:"trasform"},
      {t:"Voglio lasciare qualcosa di significativo, contribuire agli altri", fase:"servizio"},
      {t:"Sto attraversando una crisi o una transizione importante",         fase:"crisi"},
      {t:"Mi sento abbastanza in armonia, sto consolidando la mia crescita", fase:"consolidam"}
    ]
  },
  {
    sez:"Scopo e integrazione",
    q:"Quale disciplina del sito senti come più urgente per te in questo momento?",
    opts:[
      {t:"Enneagramma — capire la mia personalità in profondità",           prio:"enneagramma"},
      {t:"Analisi Transazionale — lavorare sui miei stati dell'Io e copioni", prio:"at"},
      {t:"Fiori (Bach/FES/Bush) — supporto energetico emotivo",              prio:"fiori"},
      {t:"Chakra e cristalli — riequilibrio energetico",                     prio:"chakra"},
      {t:"Frequenze sonore — guarigione vibrazionale",                       prio:"frequenze"},
      {t:"Pranoterapia — lavoro sul campo energetico",                       prio:"prano"},
      {t:"Mediazione e conflitto — gestire relazioni difficili",             prio:"conflitto"}
    ]
  },
  {
    sez:"Scopo e integrazione",
    q:"Con quale frase ti identifichi di più in questo momento?",
    opts:[
      {t:"Ho bisogno di essere visto/a e apprezzato/a per ciò che sono",    mot:"riconoscimento"},
      {t:"Ho bisogno di sicurezza, stabilità e poter fidare",               mot:"sicurezza"},
      {t:"Ho bisogno di libertà, di non sentirmi intrappolato/a",           mot:"libertà"},
      {t:"Ho bisogno di connessione profonda con gli altri",                 mot:"connessione"},
      {t:"Ho bisogno di sapere qual è il mio scopo",                        mot:"scopo"},
      {t:"Ho bisogno di guarire qualcosa che porto da tempo",               mot:"guarigione"}
    ]
  }
];

// State
let checkAnswers = new Array(CHECK_QS.length).fill(null);
let checkCurrentQ = 0;

function initCheckTest(){
  checkAnswers = new Array(CHECK_QS.length).fill(null);
  checkCurrentQ = 0;
  renderCheckQ();
}

function renderCheckQ(){
  const qd = CHECK_QS[checkCurrentQ];
  const total = CHECK_QS.length;
  document.getElementById('check-counter').textContent = (checkCurrentQ+1) + ' / ' + total;
  document.getElementById('check-prog').style.width = (((checkCurrentQ+1)/total)*100) + '%';
  document.getElementById('check-prev-btn').disabled = checkCurrentQ === 0;
  document.getElementById('check-next-btn').disabled = checkAnswers[checkCurrentQ] === null;
  document.getElementById('check-next-btn').textContent = checkCurrentQ === total-1 ? 'Crea il mio profilo →' : 'Avanti →';

  const sel = checkAnswers[checkCurrentQ];
  const optsHtml = qd.opts.map((opt, i) =>
    '<button class="check-opt' + (sel===i?' sel':'') + '" onclick="checkSelect(' + i + ')">' +
    '<span class="check-dot"></span>' +
    '<span>' + opt.t + '</span>' +
    '</button>'
  ).join('');

  document.getElementById('check-q-area').innerHTML =
    '<div class="check-section-label">' + qd.sez + '</div>' +
    '<div class="check-q-text">' + qd.q + '</div>' +
    '<div class="check-options">' + optsHtml + '</div>';
}

function checkSelect(idx){
  checkAnswers[checkCurrentQ] = idx;
  document.getElementById('check-next-btn').disabled = false;
  renderCheckQ();
}

function checkPrev(){
  if(checkCurrentQ > 0){ checkCurrentQ--; renderCheckQ(); }
}

function checkNext(){
  if(checkAnswers[checkCurrentQ] === null) return;
  if(checkCurrentQ < CHECK_QS.length - 1){ checkCurrentQ++; renderCheckQ(); }
  else { calcCheckResult(); }
}

function calcCheckResult(){
  // Aggregate scores
  const ennScores = {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0};
  const vakScores = {V:0,A:0,K:0};
  const atScores  = {GN:0,GA:0,A:0,BL:0,BA:0};
  const ckScores  = {c1:0,c2:0,c3:0,c4:0,c5:0,c6:0,c7:0};
  const ckBlocked = {c1:0,c2:0,c3:0,c4:0,c5:0,c6:0,c7:0};
  let confStile = '', snvTipo = '', cercaDi = '', motivazione = '', fase = '', priorita = '';
  const spinte = [];

  CHECK_QS.forEach((qd, qi) => {
    const ai = checkAnswers[qi];
    if(ai === null) return;
    const opt = qd.opts[ai];
    if(!opt) return;
    if(opt.e) opt.e.forEach(t => ennScores[t] = (ennScores[t]||0)+1);
    if(opt.vak) vakScores[opt.vak]++;
    if(opt.at) atScores[opt.at]++;
    if(opt.sp) spinte.push(opt.sp);
    if(opt.ck && !opt.blk) ckScores[opt.ck] = (ckScores[opt.ck]||0)+1;
    if(opt.ck && opt.blk)  ckBlocked[opt.ck] = (ckBlocked[opt.ck]||0)+1;
    if(opt.conf) confStile = opt.conf;
    if(opt.snv)  snvTipo = opt.snv;
    if(opt.cres) cercaDi = opt.cres;
    if(opt.mot)  motivazione = opt.mot;
    if(opt.fase) fase = opt.fase;
    if(opt.prio) priorita = opt.prio;
  });

  // Find dominants
  const topEnn = Object.entries(ennScores).sort((a,b)=>b[1]-a[1]);
  const topVak = Object.entries(vakScores).sort((a,b)=>b[1]-a[1]);
  const topAt  = Object.entries(atScores).sort((a,b)=>b[1]-a[1]);
  const topCk  = Object.entries(ckScores).sort((a,b)=>b[1]-a[1]);
  const topBlk = Object.entries(ckBlocked).sort((a,b)=>b[1]-a[1]);

  const enn1 = topEnn[0][0], enn2 = topEnn[1][0];
  const vak1 = topVak[0][0];
  const at1  = topAt[0][0], at2 = topAt[1][0];
  const ck1  = topCk[0][0];
  const ckB  = topBlk[0][0];

  // Save profile
  saveProfileResult('check',{
    enneatipo: Number(enn1), enn2: Number(enn2),
    vak: topVak[0][0], at_stato: topAt[0][0],
    chakra_forte: topCk[0][0], chakra_debole: topBlk[0][0]||null,
    spinte: [...spinte], conf_stile: confStile, cerca_di: cercaDi
  });

  const CHAKRA_NAMES = {c1:"1° Muladhara (Radice)",c2:"2° Svadhisthana (Sacrale)",c3:"3° Manipura (Plesso Solare)",c4:"4° Anahata (Cuore)",c5:"5° Vishuddha (Gola)",c6:"6° Ajna (Terzo Occhio)",c7:"7° Sahasrara (Corona)"};
  const ENN_NAMES = {1:"Perfezionista",2:"Altruista",3:"Manager",4:"Romantico",5:"Eremita",6:"Leale",7:"Artista",8:"Capo",9:"Diplomatico"};
  const AT_NAMES = {GN:"Genitore Normativo",GA:"Genitore Affettivo",A:"Adulto",BL:"Bambino Libero",BA:"Bambino Adattato"};
  const VAK_NAMES = {V:"Visivo",A:"Auditivo",K:"Cenestesico"};
  const VAK_EMOJI = {V:"👁",A:"🎵",K:"🤲"};
  const CONF_NAMES = {attacco:"Combatti (sistema simpatico attivato)",razional:"Razionalizzazione (neocorteccia come difesa)",evita:"Eviti (riduzione del contatto)",freeze:"Ti congeli (sistema dorsovagale)"};

  // Build the AI briefing text
  const briefing = `=== PROFILO OLISTICO INTEGRATO ===
Data: ${new Date().toLocaleDateString('it-IT')}

ENNEATIPO (ipotesi):
→ Tipo ${enn1} — ${ENN_NAMES[enn1]} (dominante)
→ Tipo ${enn2} — ${ENN_NAMES[enn2]} (influenza secondaria)

CANALE VAK:
→ ${VAK_EMOJI[vak1]} ${VAK_NAMES[vak1]} (canale preferenziale)

STATI AT PREVALENTI:
→ ${AT_NAMES[at1]} (principale)
→ ${AT_NAMES[at2]} (secondario)
${spinte.length > 0 ? '→ Spinte copione rilevate: ' + spinte.join(', ') : ''}

CHAKRA:
→ Chakra di forza: ${CHAKRA_NAMES[ck1]}
→ Chakra da lavorare: ${CHAKRA_NAMES[ckB]}

STILE DI CONFLITTO:
→ ${CONF_NAMES[confStile] || 'Non rilevato'}
→ Sistema nervoso: ${snvTipo === 'simpatico' ? 'Simpatico (combatti/fuggi)' : snvTipo === 'dorsovagale' ? 'Dorsovagale (freeze/shutdown)' : 'Neocorteccia (razionalizzazione difensiva)'}

MOTIVAZIONE ATTUALE:
→ ${motivazione}

FASE DI VITA:
→ ${fase}

PRIORITÀ DISCIPLINA:
→ ${priorita}

AREA DI CRESCITA:
→ ${cercaDi}

=== RICHIESTA ===
Sulla base di questo profilo, forniscimi una consulenza olistica integrata che colleghi almeno 3 discipline, suggerisca pratiche concrete e mi aiuti a capire il mio pattern principale.`;

  // Summary cards
  const cards = [
    {label:"Enneatipo",    value:"T"+enn1+" "+ENN_NAMES[enn1], sub:"Influenza T"+enn2},
    {label:"VAK",          value:VAK_EMOJI[vak1]+" "+VAK_NAMES[vak1], sub:"Canale preferenziale"},
    {label:"Stato AT",     value:AT_NAMES[at1], sub:"Secondario: "+AT_NAMES[at2]},
    {label:"Chakra forza", value:CHAKRA_NAMES[ck1].split(' ')[0]+" "+CHAKRA_NAMES[ck1].split(' ')[1], sub:"Chakra attivo"},
    {label:"Da lavorare",  value:CHAKRA_NAMES[ckB].split(' ')[0]+" "+CHAKRA_NAMES[ckB].split(' ')[1], sub:"Chakra da equilibrare"},
    {label:"In conflitto", value:confStile==='attacco'?'Combatti':confStile==='freeze'?'Ti congeli':confStile==='evita'?'Eviti':'Razionalizzi', sub:"Stile difensivo"},
  ];

  const cardsHtml = cards.map(c =>
    '<div class="check-sum-card"><div class="check-sum-label">'+c.label+'</div><div class="check-sum-value">'+c.value+'</div><div class="check-sum-sub">'+c.sub+'</div></div>'
  ).join('');

  // Show result
  document.getElementById('check-wrap').style.display = 'none';
  const res = document.getElementById('check-result');
  res.classList.add('show');
  res.innerHTML =
    '<div class="check-res-title">Il tuo Profilo Olistico Integrato</div>' +
    '<div class="check-res-subtitle">Copia il testo qui sotto e incollalo nella chat con la Consulente AI per una consulenza personalizzata.</div>' +
    '<div class="check-summary-cards">' + cardsHtml + '</div>' +
    '<div class="check-profile-box" id="check-briefing-text">' + briefing + '</div>' +
    '<button class="check-copy-btn" onclick="copyCheckBriefing()">📋 Copia il profilo per l\'AI</button>' +
    '<div style="display:flex;gap:.8rem;justify-content:center;flex-wrap:wrap;margin-top:1.5rem">' +
    '<button class="share-result-btn" style="padding:.5rem 1.4rem;background:var(--slate);color:white;border:none;border-radius:20px;font-size:.78rem;font-weight:600;cursor:pointer" onclick="shareResult(\'check\', document.getElementById(\'check-briefing-text\').textContent)">↗ Condividi profilo</button>' +
    '<button class="check-restart-btn" style="padding:.5rem 1.4rem" onclick="restartCheck()">↩ Rifai il check</button>' +
    '</div>';
  res.scrollIntoView({behavior:'smooth', block:'start'});
}

function copyCheckBriefing(){
  const text = document.getElementById('check-briefing-text').textContent;
  navigator.clipboard.writeText(text).then(()=>{
    const btn = document.querySelector('.check-copy-btn');
    btn.textContent = '✅ Copiato! Ora incollalo nella chat AI';
    btn.style.background = '#059669';
    // Also open AI chat
    setTimeout(()=>{ st('consulente'); }, 1500);
  });
}

function restartCheck(){
  document.getElementById('check-wrap').style.display = 'block';
  const res = document.getElementById('check-result');
  res.classList.remove('show');
  res.innerHTML = '';
  initCheckTest();
  document.getElementById('check-wrap').scrollIntoView({behavior:'smooth',block:'start'});
}

// ══ COOKIE CONSENT ══
function initCookieBanner(){
  const consent = localStorage.getItem('cookie_consent');
  if(!consent){
    setTimeout(()=>{
      const _cb=document.getElementById('cookie-banner');if(_cb)_cb.classList.add('show');
    }, 1800);
  }
}

function acceptCookies(full){
  localStorage.setItem('cookie_consent', full ? 'full' : 'minimal');
  const banner = document.getElementById('cookie-banner');
  banner.classList.remove('show');
  // If minimal: remove Google Fonts link
  if(!full){
    document.querySelectorAll('link[href*="fonts.googleapis"]').forEach(l=>l.remove());
    document.querySelectorAll('link[rel="preconnect"][href*="google"]').forEach(l=>l.remove());
  }
}

function openPrivacy(){
  const _pm=document.getElementById('privacy-modal');if(_pm)_pm.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePrivacy(){
  const _pm2=document.getElementById('privacy-modal');if(_pm2)_pm2.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e=>{
  if(e.key === 'Escape') closePrivacy();
});

// ══════════════════════════════════════════════════════════
// EXPORT CHAT PDF
// ══════════════════════════════════════════════════════════

// ══════════════════════════════════════════════════════════════════
// REPORT OLISTICO INTEGRATO — PDF GENERATOR
// ══════════════════════════════════════════════════════════════════

async function exportReportPdf(){
  // Check profile data
  const ck  = getProfileResult('check');
  const fr  = getProfileResult('frutti');
  const at  = getProfileResult('at');
  const vak = getProfileResult('vak');
  const ego = getProfileResult('ego');
  const dt  = getProfileResult('diet');
  const hasProfile = [ck,fr,at,vak,ego,dt].some(Boolean);

  if(!hasProfile){
    alert('Nessun dato di profilo rilevato.\n\nCompleta almeno uno dei test (Check Integrato, Test dei 9 Frutti, Test AT, VAK) per generare il Report.');
    return;
  }

  const btn = document.getElementById('report-pdf-btn');
  if(btn){ btn.textContent = 'Generazione...'; btn.disabled = true; }

  try{
    // Wait for jsPDF to load (retry up to 3s)
    var _waited = 0;
    while(typeof window.jspdf === 'undefined' && typeof jsPDF === 'undefined' && _waited < 30){
      await new Promise(r => setTimeout(r, 100));
      _waited++;
    }
    if(typeof window.jspdf === 'undefined' && typeof jsPDF === 'undefined'){
      alert('jsPDF non disponibile. Controlla la connessione.');
      return;
    }
    const { jsPDF } = window.jspdf || { jsPDF: window.jsPDF };

    // ── PALETTE ──
    const GOLD    = [184,147,90];
    const GOLD_L  = [245,236,216];
    const IVORY   = [249,245,239];
    const IVORY2  = [243,237,227];
    const INK     = [42,37,32];
    const INK2    = [74,69,64];
    const INK3    = [122,114,104];
    const WHITE   = [255,255,255];
    const RED_L   = [254,226,226];
    const RED_D   = [180,50,50];
    const GREEN_L = [220,240,228];
    const GREEN_D = [46,125,79];
    const BLUE_L  = [224,234,248];
    const BLUE_D  = [21,101,192];
    const PURPLE_L= [237,225,245];
    const PURPLE_D= [123,47,160];

    const doc = new jsPDF({ orientation:'portrait', unit:'mm', format:'a4' });

    // ── TEXT SANITIZER: replace emoji/symbols with Latin-1 safe equivalents ──
    const EMOJI_MAP = {
      '\u2714':' [OK]','\u25ce':' [o]','\u2622':' [!]','\u26a0':' [!]',
      '\u2663':'-','\u25c9':'-','\u2605':'*','\u2736':'*','\u2738':'*',
      '\u273f':'*','\u2665':'-','\u2713':' v ','\u2022':'-','\u25cf':'-',
      '\u{1F4E7}':'Email: ','\u{1F4F1}':'Tel: ','\u{1F310}':'Web: ',
      '\u{1F916}':'AI: ','\u{1F9E0}':'>> ','\u{1F33F}':'>> ','\u{1F957}':'>> ',
      '\u{1F4CC}':'>> ','\u{1F4DC}':'>> ','\u{1F4AC}':'>> ','\u{1F4CB}':'>> ',
      '\u{1F6AB}':'[X] ','\u{1F33A}':'[Bach] ','\u{273F}':'[FES] ',
      '\u{1F3B5}':'[Freq.] ','\u{1F9D8}':'[Med.] ','\u{2699}':'[>>] ',
      '\u{1F4E9}':'[invia] ','\u{1F5D1}':'[cancella] ','\u23F3':'...',
      '\u{1F4C4}':'[PDF] ','\u2728':'* ','\u{1F31F}':'* ',
    };
    function se(s){
      if(!s) return '';
      s = String(s);
      // Replace known emoji from map
      for(const [k,v] of Object.entries(EMOJI_MAP)){ s = s.split(k).join(v); }
      // Strip remaining non-Latin1 characters (code point > 255)
      s = s.replace(/[^\x00-\xFF]/g, function(c){
        const cp = c.codePointAt(0);
        // Common symbols with Latin1 fallbacks
        if(cp===0x25C9||cp===0x25CF) return '-';
        if(cp===0x2714||cp===0x2713) return 'v ';
        if(cp===0x26A0||cp===0x2622) return '! ';
        if(cp===0x2022) return '- ';
        if(cp===0x2663||cp===0x265F) return '- ';
        if(cp===0x2605||cp===0x2736||cp===0x2738) return '* ';
        if(cp===0x273F||cp===0x2665) return '+ ';
        return '';
      });
      return s;
    }

        // ── HELPERS ──
    function setFont(style, size, color){
      doc.setFont('helvetica', style||'normal');
      doc.setFontSize(size||10);
      doc.setTextColor(...(color||INK));
    }

    function fill(r,g,b){ doc.setFillColor(r,g,b); }
    function stroke(r,g,b){ doc.setDrawColor(r,g,b); }

    function drawRect(x,xw,yy,yh,fillC,strokeC,rounding){
      if(fillC){ fill(...fillC); }
      if(strokeC){ stroke(...strokeC); doc.setLineWidth(0.3); }
      else { doc.setLineWidth(0); }
      if(rounding){
        doc.roundedRect(x,yy,xw,yh,rounding,rounding, fillC?(strokeC?'FD':'F'):'S');
      } else {
        doc.rect(x,yy,xw,yh, fillC?(strokeC?'FD':'F'):'S');
      }
    }

    function drawGoldBar(yy, h){ drawRect(ML,CW,yy,h||0.6,GOLD,null,0); }
    function drawGoldLine(yy){ doc.setDrawColor(...GOLD); doc.setLineWidth(0.4); doc.line(ML,yy,ML+CW,yy); }

    function text(txt, x, yy, opts){
      doc.text(txt, x, yy, opts||{});
    }

    function wrapText(txt, x, yy, maxW, lineH){
      const lines = doc.splitTextToSize(se(txt), maxW);
      lines.forEach(l=>{ text(se(l),x,yy); yy+=lineH||5; });
      return yy;
    }

    function checkNewPage(needed){
      if(y + needed > H - 25){
        addFooter();
        doc.addPage();
        pageNum++;
        y = MT + 5;
        drawTopBar();
      }
    }

    function drawTopBar(){
      drawRect(0,W,0,8,GOLD,null,0);
      setFont('bold',7,WHITE);
      text('OLISMO INTEGRATO  ·  olismo-integrato.it', ML, 5.5);
      setFont('normal',7,WHITE);
      text('Report Olistico Integrato', W-MR, 5.5, {align:'right'});
    }

    function addFooter(){
      const fy = H - 12;
      drawRect(0,W,fy,12,IVORY,null,0);
      doc.setDrawColor(...GOLD); doc.setLineWidth(0.3);
      doc.line(0,fy,W,fy);
      setFont('normal',7,INK3);
      text('© Carlo Alberto Calcagno  ·  olismo-integrato.it', ML, fy+5);
      text('Pagina '+pageNum, W-MR, fy+5, {align:'right'});
      setFont('italic',6,INK3);
      text('Documento generato il '+new Date().toLocaleDateString('it-IT')+'. Solo a scopo divulgativo.', ML, fy+9);
    }

    function sectionTitle(label, icon){
      checkNewPage(22);
      y += 4;
      drawRect(ML, CW, y, 9, GOLD_L, GOLD, 2);
      setFont('bold', 10, GOLD);
      text((icon?se(icon)+' ':'')+se(label.toUpperCase()), ML+4, y+6);
      y += 14;
    }

    function infoBox(lines, bgC, borderC, iconColor){
      const lh = 5.5;
      const boxH = lines.length * lh + 8;
      checkNewPage(boxH + 4);
      drawRect(ML, CW, y, boxH, bgC||IVORY, borderC||GOLD_L, 2);
      setFont('normal', 9, INK2);
      let ty = y + 6;
      lines.forEach(l=>{
        if(l.startsWith('__TITLE__')){
          setFont('bold', 9.5, INK);
          text(se(l.replace('__TITLE__','')), ML+4, ty);
          setFont('normal', 9, INK2);
        } else if(l.startsWith('__BOLD__')){
          setFont('bold', 9, INK2);
          text(se(l.replace('__BOLD__','')), ML+4, ty);
          setFont('normal', 9, INK2);
        } else if(l === '') {
          ty += 2;
          return;
        } else {
          text(se(l), ML+4, ty);
        }
        ty += lh;
      });
      y += boxH + 5;
    }

    function keyValueRow(label, value, bgC){
      checkNewPage(8);
      if(bgC){ drawRect(ML,CW,y,7,bgC,null,1); }
      setFont('bold', 8.5, GOLD);
      text(se(label), ML+3, y+5);
      setFont('normal', 8.5, INK2);
      const labelW = doc.getTextWidth(label);
      text(se(String(value||'-')), ML+3+labelW+4, y+5);
      y += 8;
    }

    // ── HELPER: get enneatipo data ──
    function getEnn(tipoNum){
      return DB?.enneatipi?.find(e=>e.id==='e'+tipoNum)||{};
    }
    function getAdatt(adId){
      return DB?.adattamenti?.find(a=>a.id===adId || a.short===adId)||{};
    }
    function getChakra(cId){
      return DB?.chakra?.find(c=>c.id===cId)||{};
    }

    // ══════════════════════════════════════════════
    // PAGE 1 — COPERTINA
    // ══════════════════════════════════════════════
    pageNum = 1;
    doc.addPage(); // will remove first blank

    // Full background
    fill(...IVORY);
    doc.rect(0,0,W,H,'F');

    // Top gold band
    fill(...GOLD);
    doc.rect(0,0,W,45,'F');

    // Decorative circle
    doc.setFillColor(255,255,255,0.1);
    doc.circle(W-30, 25, 40, 'F');

    // Logo area
    setFont('bold', 28, WHITE);
    text('Olismo', ML, 20);
    setFont('italic', 28, [245,236,216]);
    text('Integrato', ML+44, 20);

    setFont('normal', 9, [245,236,216]);
    text('olismo-integrato.it  ·  Carlo Alberto Calcagno', ML, 28);

    // Gold circle ornament
    doc.setFillColor(255,255,255,0.15);
    doc.setDrawColor(255,255,255);
    doc.setLineWidth(0.5);

    // Central content
    y = 70;
    setFont('bold', 22, INK);
    text('REPORT OLISTICO', W/2, y, {align:'center'});
    setFont('italic', 22, GOLD);
    text('Integrato', W/2, y+12, {align:'center'});

    // Decorative line
    doc.setDrawColor(...GOLD); doc.setLineWidth(1);
    doc.line(W/2-30, y+18, W/2+30, y+18);

    y += 28;
    setFont('normal', 10, INK3);
    text('Percorso personale di autoconoscenza olistica', W/2, y, {align:'center'});

    // Profile summary box on cover
    y += 15;
    drawRect(ML+15, CW-30, y, 80, WHITE, GOLD_L, 4);

    // Contents
    y += 10;
    const profileLines = [];
    if(fr||ck){ profileLines.push(['Enneatipo', fr?se('T'+fr.tipo+' - '+(fr.nome||'')):(ck?'T'+ck.enneatipo:null), PURPLE_L]); }
    if(at){ profileLines.push(['Adattamento AT', se(at.primario||'-'), BLUE_L]); }
    if(vak){ profileLines.push(['Canale VAK', se(vak.nome||vak.canale||'-'), GREEN_L]); }
    if(ck && ck.chakra_forte){ 
      const c = getChakra(ck.chakra_forte);
      profileLines.push(['Chakra di forza', (c.short||ck.chakra_forte), [237,245,237]]); 
    }

    profileLines.forEach(([label, val, bg]) => {
      if(!val) return;
      drawRect(ML+20, CW-40, y, 9, bg||IVORY2, null, 2);
      setFont('bold', 8.5, INK3);
      text(label+':', ML+24, y+6);
      const lw = doc.getTextWidth(label+': ');
      setFont('bold', 9, INK);
      text(String(val), ML+24+lw, y+6);
      y += 11;
    });

    if(profileLines.length === 0){
      setFont('italic', 9, INK3);
      text('Dati dei test completati inclusi nel report', W/2, y+10, {align:'center'});
      y += 20;
    }

    // Date
    y = 225;
    setFont('normal', 9, INK3);
    text('Generato il: '+new Date().toLocaleDateString('it-IT', {day:'2-digit',month:'long',year:'numeric'}), W/2, y, {align:'center'});

    // Bottom disclaimer
    y = 245;
    drawRect(ML, CW, y, 28, RED_L, RED_D, 3);
    doc.setDrawColor(...RED_D); doc.setLineWidth(1);
    doc.line(ML+4, y+2, ML+4, y+24);
    setFont('bold', 9, RED_D);
    text('! AVVERTENZA IMPORTANTE', ML+8, y+8);
    setFont('normal', 8, [120,30,30]);
    const discLine1 = doc.splitTextToSize('Questo report ha finalità esclusivamente divulgative e non costituisce diagnosi medica, psicologica o psichiatrica. Si raccomanda di sottoporre il documento a un medico, psicologo o professionista della salute mentale qualificato.', CW-16);
    discLine1.forEach((l,i)=>{ text(l, ML+8, y+15+(i*4.5)); });

    // Footer
    y = H-15;
    doc.setDrawColor(...GOLD); doc.setLineWidth(0.5);
    doc.line(ML, y, ML+CW, y);
    setFont('normal', 7.5, INK3);
    text('© Carlo Alberto Calcagno  ·  olismo-integrato.it', ML, y+6);
    text('Pagina 1', W-MR, y+6, {align:'right'});

    // ══════════════════════════════════════════════
    // PAGES 2+ — CONTENT
    // ══════════════════════════════════════════════
    doc.addPage();
    pageNum = 2;
    drawTopBar();
    y = MT + 10;

    // ── SECTION: PROFILO DEI TEST ──
    sectionTitle('PROFILO DEI TEST COMPLETATI', '>>');

    if(ck){
      infoBox([
        '__TITLE__[+] Check Integrato  ['+ck._date+']',
        '',
        ck.enneatipo ? '· Enneatipo ipotesi: T'+ck.enneatipo+(ck.enn2?' (2°: T'+ck.enn2+')':'') : '',
        ck.vak ? '· Canale VAK: '+ck.vak : '',
        ck.at_stato ? '· Stato AT prevalente: '+ck.at_stato : '',
        ck.chakra_forte ? '· Chakra di forza: '+ck.chakra_forte : '',
        ck.chakra_debole ? '· Chakra da lavorare: '+ck.chakra_debole : '',
        (ck.spinte&&ck.spinte.length) ? '· Spinte copione: '+ck.spinte.join(', ') : '',
        ck.conf_stile ? '· Stile conflitto: '+ck.conf_stile : '',
        ck.cerca_di ? '· Sta cercando: '+ck.cerca_di : '',
      ].filter(Boolean), IVORY, GOLD_L);
    }

    if(fr){
      const ennF = getEnn(fr.tipo);
      infoBox([
        '__TITLE__[>] Test dei 9 Frutti  ['+fr._date+']',
        '',
        '· Enneatipo: T'+fr.tipo+' - '+se(fr.nome||ennF.name||''),
        fr.tipo2 ? '· 2° enneatipo: T'+fr.tipo2 : '',
        fr.ala ? '· Ala dominante: '+fr.ala : '',
        ennF.centro ? '· Centro: '+ennF.centro : '',
        ennF.motivazione ? '· Motivazione: '+ennF.motivazione : '',
      ].filter(Boolean), IVORY, GOLD_L);
    }

    if(at){
      // Get full adattamento data
      const adData = getAdatt(at.primario);
      infoBox([
        '__TITLE__[>] Test Adattamenti AT  ['+at._date+']',
        '',
        '· Adattamento primario: '+at.primario+' ('+at.primario_pct+'%)',
        at.secondario ? '· Adattamento secondario: '+at.secondario+' ('+at.secondario_pct+'%)' : '',
        at.prevalenza ? '· Prevalenza: '+at.prevalenza : '',
        adData.spinta ? '· Spinta: '+adData.spinta : '',
        adData.copione ? '· Copione: '+adData.copione : '',
        adData.portaAperta ? '· Porta aperta: '+adData.portaAperta+' · Bersaglio: '+adData.portaBersaglio : '',
      ].filter(Boolean), IVORY, GOLD_L);
    }

    if(vak){
      infoBox([
        '__TITLE__[+] Test VAK  ['+vak._date+']',
        '',
        '· Canale dominante: '+se(vak.canale)+' - '+se(vak.nome||'')+' ('+vak.pct+'%)',
        vak.secondo ? '· 2° canale: '+vak.secondo : '',
      ].filter(Boolean), IVORY, GOLD_L);
    }

    if(ego){
      const EGO_LABELS = {GN:'Genitore Normativo',GA:'Genitore Affettivo',A:'Adulto',BL:'Bambino Libero',BA:'Bambino Adattato'};
      infoBox([
        '__TITLE__[*] Egogramma  ['+ego._date+']',
        '',
        '· Stato predominante: '+(EGO_LABELS[ego.dominante]||ego.dominante)+' ('+ego.dominante_val+'/10)',
        '· Stato più basso: '+(EGO_LABELS[ego.minimo]||ego.minimo)+' ('+ego.minimo_val+'/10)',
      ].filter(Boolean), IVORY, GOLD_L);
    }

    // ── SECTION: ENNEATIPO ──
    const tipoNum = (fr&&fr.tipo) || (ck&&ck.enneatipo);
    if(tipoNum){
      sectionTitle('PROFILO ENNEAGRAMMATICO', '>>');
      const enn = getEnn(tipoNum);
      if(enn && enn.name){
        checkNewPage(40);

        // Enneatipo header card
        const ennColor = (typeof TIPO_COLORS !== 'undefined') ? TIPO_COLORS[tipoNum] : null;
        drawRect(ML, CW, y, 14, GOLD_L, GOLD, 3);
        setFont('bold', 13, GOLD);
        text(se('Tipo '+tipoNum+' - '+enn.name), ML+5, y+9);
        setFont('normal', 9, INK3);
        text(enn.short||'', W-MR-2, y+9, {align:'right'});
        y += 18;

        // Description
        if(enn.desc){
          checkNewPage(20);
          setFont('normal', 9, INK2);
          y = wrapText(enn.desc, ML, y, CW, 5.5);
          y += 4;
        }

        // Key properties
        const ennProps = [
          enn.centro ? ['Centro', enn.centro] : null,
          enn.passione ? ['Passione', enn.passione] : null,
          enn.virtu ? ['Virtù', enn.virtu] : null,
          enn.motivazione ? ['Motivazione core', enn.motivazione] : null,
          enn.paura ? ['Paura profonda', enn.paura] : null,
          enn.desiderio ? ['Desiderio', enn.desiderio] : null,
        ].filter(Boolean);

        if(ennProps.length){
          checkNewPage(ennProps.length * 8 + 5);
          ennProps.forEach(([l,v])=>{ keyValueRow(l+':', v, IVORY2); });
        }

        // Chakra
        if(enn.chakra && enn.chakra.length){
          checkNewPage(25);
          y += 3;
          setFont('bold', 9, GOLD);
          text('Chakra correlati:', ML, y); y += 5;
          enn.chakra.forEach(cId => {
            const c = getChakra(cId);
            if(c.name){
              checkNewPage(8);
              drawRect(ML, CW, y, 7, IVORY, GOLD_L, 1);
              setFont('bold', 8, GOLD);
              text('* '+se(c.name), ML+3, y+5);
              if(c.tema){ setFont('normal',8,INK3); text('- '+se(c.tema), ML+3+doc.getTextWidth('* '+se(c.name))+2, y+5); }
              y += 8;
            }
          });
          y += 3;
        }
      }
    }

    // ── SECTION: ANALISI AT ──
    if(at){
      sectionTitle('ANALISI TRANSAZIONALE', '>>');

      // Primary adaptation
      const adData = getAdatt(at.primario);
      if(adData && adData.name){
        checkNewPage(40);
        drawRect(ML, CW, y, 14, BLUE_L, BLUE_D, 3);
        setFont('bold', 12, BLUE_D);
        text(adData.name||at.primario, ML+5, y+9);
        setFont('normal', 9, INK3);
        text(adData.tipo||'', W-MR-2, y+9, {align:'right'});
        y += 18;

        if(adData.desc){
          checkNewPage(20);
          setFont('normal', 9, INK2);
          y = wrapText(se(adData.desc), ML, y, CW, 5.5);
          y += 4;
        }

        // Porte
        if(adData.portaAperta){
          checkNewPage(28);
          const porteLines = [
            '__TITLE__Le tre porte di accesso',
            '',
            '[OK] Porta aperta: '+adData.portaAperta+' (inizia da qui)',
            '[  ] Bersaglio: '+adData.portaBersaglio+' (porta su cui lavorare)',
            '[!] Trappola: '+adData.portaTrappola+' (evitare nelle fasi iniziali)',
          ];
          infoBox(porteLines, BLUE_L, BLUE_D);
        }

        // Giochi psicologici
        if(adData.giochi && adData.giochi.length){
          checkNewPage(adData.giochi.length * 7 + 20);
          setFont('bold', 9, GOLD);
          text('Giochi psicologici tipici:', ML, y); y += 6;
          adData.giochi.forEach(g => {
            checkNewPage(10);
            drawRect(ML, CW, y, 7, IVORY2, null, 1);
            setFont('normal', 8.5, INK2);
            const gLines = doc.splitTextToSize('- '+se(g), CW-6);
            text(gLines[0], ML+3, y+5);
            y += 8;
            if(gLines.length > 1){
              gLines.slice(1).forEach(gl=>{
                checkNewPage(6);
                setFont('normal',8.5,INK2);
                text(gl, ML+6, y);
                y += 5.5;
              });
            }
          });
          y += 3;
        }

        // Copione di vita
        if(adData.copione_vita){
          checkNewPage(18);
          infoBox([
            '__TITLE__Copione di vita',
            '',
            adData.copione_vita,
          ], PURPLE_L, PURPLE_D);
        }

        // Credenza core
        if(adData.credenza){
          checkNewPage(18);
          infoBox([
            '__BOLD__Credenza core',
            '',
            adData.credenza,
          ], IVORY2, GOLD_L);
        }

        // Permesso terapeutico
        if(adData.permesso){
          checkNewPage(18);
          infoBox([
            '__BOLD__Permesso terapeutico',
            '',
            adData.permesso,
          ], GREEN_L, GREEN_D);
        }

        // ── COMBINAZIONI COPIONE PERSONALI (12 INGIUNZIONI × 5 SPINTE) ──
        if(typeof DB !== 'undefined' && DB.combinazioni_copione && adData.ingiunzioni && adData.spinta){
          // Identify which ingiunzioni and spinte apply to this adattamento
          const ingNames = (adData.ingiunzioni||'').split('·').map(s=>s.trim()).filter(Boolean);
          const spintaNames = (adData.spinta||'').split('·').map(s=>s.trim()).filter(Boolean);
          
          // Match against DB
          const myIngs = (DB.ingiunzioni||[]).filter(ing => 
            ingNames.some(n => n.toLowerCase().includes(ing.nome.toLowerCase().replace('non ','').slice(0,12)))
          );
          const mySpinte = (DB.spinte||[]).filter(sp => 
            spintaNames.some(n => n.toLowerCase().includes(sp.nome.split(' ')[0].toLowerCase()) ||
                                  n.toLowerCase().includes(sp.nome.split('(')[0].trim().toLowerCase()))
          );
          
          // Build personal combinations
          const myCombs = [];
          myIngs.forEach(ing => {
            mySpinte.forEach(sp => {
              const found = DB.combinazioni_copione.find(c => 
                c.ingiunzione_id === ing.id && c.spinta_id === sp.id
              );
              if(found) myCombs.push(found);
            });
          });
          
          if(myCombs.length > 0){
            checkNewPage(20);
            sectionTitle('LE TUE COMBINAZIONI DI COPIONE', '✦');
            
            setFont('normal', 9, INK2);
            const intro = 'Il tuo adattamento '+(adData.short||adData.name||'')+' attiva queste strategie del piccolo professore (A1): "Sino a che [spinta], posso [permesso ingiunzione]". Sono i meccanismi più probabilmente attivi nel tuo copione personale. Quando l\'energia per la spinta finisce, perdi la protezione e ascolti l\'ingiunzione (entrata nel copione + emozioni parassite).';
            y = wrapText(se(intro), ML, y, CW, 5.5);
            y += 5;
            
            myCombs.slice(0, 12).forEach((c, idx) => {  // Max 12 to avoid overflow
              checkNewPage(20);
              // Box for each combination
              drawRect(ML, CW, y, 16, PURPLE_L, PURPLE_D, 2);
              setFont('bold', 9, PURPLE_D);
              const cText = se(c.copione);
              const lines = doc.splitTextToSize(cText, CW-6);
              text(lines[0], ML+3, y+6);
              if(lines.length > 1){
                setFont('bold', 9, PURPLE_D);
                text(lines[1], ML+3, y+11);
              }
              setFont('normal', 7.5, INK3);
              text('Spinta: '+se(c.spinta_nome)+' | Ingiunzione: '+se(c.ingiunzione_nome), ML+3, y+lines.length*5+8);
              y += Math.max(16, lines.length*5+12);
            });
            
            if(myCombs.length > 12){
              setFont('italic', 8, INK4);
              text('... e altre '+(myCombs.length-12)+' combinazioni. Vai su il_mio_copione.html per la lista completa.', ML, y+3);
              y += 8;
            }
            y += 3;
          }
        }

        // Rimedi olistici AT
        if(adData.rimedi){
          sectionTitle('STRUMENTI OLISTICI (AT-SPECIFICI)', '>>');
          const r = adData.rimedi;
          const rimLines = [
            '__TITLE__Rimedi consigliati per '+adData.short,
            '',
            r.bach ? 'Bach: '+se(r.bach) : '',
            r.fes ? 'FES: '+se(r.fes) : '',
            r.chakra ? 'Chakra: '+se(r.chakra) : '',
            r.frequenza ? 'Frequenza: '+se(r.frequenza) : '',
            r.meditazione ? 'Meditazione: '+se(r.meditazione) : '',
          ].filter(Boolean);
          infoBox(rimLines, GREEN_L, GREEN_D);
        }
      }
    }

    // ── SECTION: PIANO ALIMENTARE ──
    if(dt){
      sectionTitle('PIANO ALIMENTARE TERAPEUTICO', '>>');
      const ennD = getEnn(dt.tipo);
      const ennPlan = ennD;
      if(ennPlan && ennPlan.dieta){
        const d = ennPlan.dieta;
        const dietLines = [
          '__TITLE__Piano per T'+dt.tipo+(ennD.name?' - '+se(ennD.name):''),
          '',
          d.principio_guida ? se(d.principio_guida) : '',
          '',
          d.cereali ? '__BOLD__Cereali: '+d.cereali : '',
          d.verdure ? '__BOLD__Verdure: '+d.verdure : '',
          d.legumi ? '__BOLD__Legumi: '+d.legumi : '',
          d.frutta ? '__BOLD__Frutta: '+d.frutta : '',
          d.erbe ? '__BOLD__Erbe: '+d.erbe : '',
          d.evitare ? 'Evitare: '+se(d.evitare) : '',
          d.modulazione ? se(d.modulazione) : '',
        ].filter(l=>l&&l!=='__BOLD__');
        infoBox(dietLines, GREEN_L, GREEN_D);
      } else {
        infoBox([
          '__TITLE__Dieta Terapeutica  ['+dt._date+']',
          '· Generata per: T'+dt.tipo+' / '+dt.adattamento,
          '· Consultare la sezione Alimentazione nel portale per il piano dettagliato.',
        ], GREEN_L, GREEN_D);
      }
    }

    // ── SECTION: NOTE OPERATIVE ──
    sectionTitle('NOTE OPERATIVE', '>>');
    infoBox([
      '__TITLE__Come leggere questo report',
      '',
      '1. I risultati dei test sono indicativi e rappresentano ipotesi di lavoro, non diagnosi.',
      '2. I profili si integrano: Enneatipo + Adattamento AT + VAK formano un quadro coerente.',
      '3. I rimedi olistici (fiori, frequenze, meditazione) sono complementari alla cura ordinaria.',
      '4. Il percorso evolutivo è dinamico: ripeti i test dopo 3-6 mesi per rilevare cambiamenti.',
      '5. La consulenza AI sul sito è disponibile 24h per approfondire qualunque aspetto.',
    ], IVORY2, GOLD_L);

    // ── SECTION: DISCLAIMER ──
    sectionTitle('AVVERTENZA PROFESSIONALE', '!');
    checkNewPage(80);

    // Big disclaimer box
    drawRect(ML, CW, y, 75, RED_L, RED_D, 4);
    doc.setDrawColor(...RED_D); doc.setLineWidth(2);
    doc.line(ML+5, y+5, ML+5, y+68);

    setFont('bold', 11, RED_D);
    text('ATTENZIONE - LEGGERE PRIMA DI CONSULTARE SPECIALISTI', ML+9, y+12);

    setFont('normal', 9, [120,30,30]);
    const disclaimer = [
      'Il presente documento è generato automaticamente da Olismo Integrato (olismo-integrato.it),',
      'un portale divulgativo di conoscenza olistica. Non costituisce diagnosi medica,',
      'psicologica, psichiatrica o di alcun altro tipo.',
      '',
      'Si raccomanda di:',
      '  · Sottoporre questo report a un medico, psicologo o psicoterapeuta qualificato',
      '  · Non sostituire farmaci o terapie in corso senza consultare il proprio specialista',
      '  · Utilizzare i rimedi olistici indicati (fiori, frequenze, meditazione) solo come',
      '    strumenti complementari e mai sostitutivi delle cure ordinarie',
      '  · Considerare i profili di personalità come ipotesi di lavoro, non come etichette',
      '',
      'In caso di disturbi psicologici, crisi emotive o sintomi fisici, consultare',
      'immediatamente un professionista della salute qualificato.',
    ];
    let dy = y + 20;
    disclaimer.forEach(l => {
      text(l, ML+9, dy);
      dy += l === '' ? 3 : 4.5;
    });

    y += 82;

    // Contact
    checkNewPage(30);
    infoBox([
      '__TITLE__Contatti per consulenza con Carlo Alberto Calcagno',
      '',
      'Email:  calcagnocarloalberto1@gmail.com',
      'Tel:    +39 347 366 6508',
      'Web:    olismo-integrato.it  -  mediaresenzaconfini.org',
      'AI:     Consulente disponibile sul portale 24h/24',
    ], IVORY2, GOLD_L);

    // ── DELETE PAGE 1 (blank) ──
    // jsPDF always starts with 1 page — since we called addPage early, remove initial
    // Actually we need to check if there's a blank page
    // The doc was created with 0 content then addPage adds second — let me check
    // We'll just move on since doc creation auto-starts with page 1 and we called addPage for cover

    // ── Finalize last page footer ──
    addFooter();

    // ── DELETE INITIAL BLANK PAGE ──
    // jsPDF 2.x doesn't easily support deletePage but we started correctly
    // Actually doc was new jsPDF then we called doc.addPage immediately so page 1 is blank
    // Let's check by removing page 1 if it's blank — jsPDF 2.5 has deletePage
    // Remove blank first page
    try{
      if(doc.getNumberOfPages() > 1){ doc.deletePage(1); }
    } catch(e){ console.warn('deletePage not available:', e); }

    // Save
    const dateStr = new Date().toISOString().slice(0,10);
    doc.save('Report_Olistico_'+dateStr+'.pdf');

  } catch(err){
    console.error('PDF error:', err);
    alert('Errore durante la generazione del PDF: '+err.message);
  } finally {
    if(btn){ btn.textContent = 'Scarica Report'; btn.disabled = false; }
  }
}

async function exportChatPdf(){
  const btn = document.querySelector('.chat-pdf-btn');
  if(!chatHistory || chatHistory.length < 2){
    alert('Nessuna conversazione da scaricare. Invia almeno un messaggio prima.');
    return;
  }

  if(btn){ btn.classList.add('loading'); btn.textContent = 'Generazione...'; }

  try {
    // Wait for jsPDF to load (retry up to 3s)
    var _waited = 0;
    while(typeof window.jspdf === 'undefined' && typeof jsPDF === 'undefined' && _waited < 30){
      await new Promise(r => setTimeout(r, 100));
      _waited++;
    }
    if(typeof window.jspdf === 'undefined' && typeof jsPDF === 'undefined'){
      alert('jsPDF non disponibile. Controlla la connessione.');
      return;
    }
    // Wait for jsPDF to load
    if(typeof window.jspdf === 'undefined' && typeof jsPDF === 'undefined'){
      throw new Error('jsPDF non disponibile. Ricarica la pagina e riprova.');
    }
    const { jsPDF } = window.jspdf || { jsPDF: window.jsPDF };

    // ── Costanti design ──
    const GOLD = [184, 147, 90];
    const GOLD_LIGHT = [245, 236, 216];
    const IVORY = [249, 245, 239];
    const IVORY2 = [243, 237, 227];
    const INK = [42, 37, 32];
    const INK2 = [74, 69, 64];
    const INK3 = [122, 114, 104];
    const WHITE = [255, 255, 255];
    const BLUE_LIGHT = [224, 234, 248];

    // ── TEXT SANITIZER ──
    function se(s){
      if(!s) return '';
      s = String(s);
      const MAP={'\u2714':' v ','\u25ce':'-','\u26a0':'! ','\u2663':'-',
        '\u25c9':'-','\u2605':'*','\u2022':'-','\u25cf':'-'};
      for(const [k,v] of Object.entries(MAP)){ s=s.split(k).join(v); }
      return s.replace(/[^\x00-\xFF]/g, function(c){
        const cp=c.codePointAt(0);
        if(cp===0x25C9||cp===0x25CF) return '-';
        if(cp===0x2714||cp===0x2713) return 'v ';
        if(cp===0x26A0) return '! ';
        if(cp===0x2022) return '- ';
        return '';
      });
    }

    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const PW = doc.internal.pageSize.getWidth();  // 210mm
    const PH = doc.internal.pageSize.getHeight(); // 297mm
    const ML = 16;   // margin left
    const MR = 16;   // margin right
    const MT = 30;   // margin top (after header)
    const MB = 22;   // margin bottom (before footer)
    const CW = PW - ML - MR; // content width

    let page = 1;
    let y = 0;

    // ── Helper: strip HTML ──
    function stripHtml(h){
      const d = document.createElement('div');
      d.innerHTML = h;
      return (d.textContent || d.innerText || '').trim();
    }

    // ── Helper: wrap text ──
    function wrapText(text, maxW, fontSize){
      doc.setFontSize(fontSize);
      return doc.splitTextToSize(text, maxW);
    }

    // ── Draw page header ──
    function drawHeader(){
      // Gold bar top
      doc.setFillColor(...GOLD);
      doc.rect(0, 0, PW, 7, 'F');

      // Logo area
      doc.setFillColor(...IVORY);
      doc.rect(0, 7, PW, 18, 'F');

      // Logo mark ◉
      doc.setFillColor(...GOLD);
      doc.circle(ML + 5, 16, 4, 'F');
      doc.setTextColor(...WHITE);
      doc.setFontSize(8);
      doc.setFont('helvetica', 'bold');
      doc.text('*', ML + 3.5, 17.5);

      // Site name
      doc.setTextColor(...INK);
      doc.setFontSize(13);
      doc.setFont('helvetica', 'bold');
      doc.text('OLISMO INTEGRATO', ML + 12, 14);

      // Subtitle
      doc.setFontSize(7.5);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...INK3);
      doc.text('Consulente Olistica AI  ·  Carlo Alberto Calcagno', ML + 12, 19);

      // URL right
      doc.setFontSize(7);
      doc.setTextColor(...GOLD);
      doc.text('olismo-integrato.it', PW - MR - 2, 19, {align: 'right'});

      // Thin gold separator
      doc.setDrawColor(...GOLD);
      doc.setLineWidth(0.3);
      doc.line(ML, 25, PW - MR, 25);

      y = MT;
    }

    // ── Draw page footer ──
    function drawFooter(){
      const fy = PH - 14;
      doc.setDrawColor(...GOLD);
      doc.setLineWidth(0.2);
      doc.line(ML, fy, PW - MR, fy);

      doc.setFontSize(7);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...INK3);

      const dateStr = new Date().toLocaleDateString('it-IT', {day:'2-digit', month:'long', year:'numeric'});
      doc.text('olismo-integrato.it', ML, fy + 5);
      doc.text('Pag. ' + page, PW / 2, fy + 5, {align: 'center'});
      doc.text(dateStr, PW - MR, fy + 5, {align: 'right'});

      // Disclaimer
      doc.setFontSize(6.5);
      doc.setTextColor(180, 175, 170);
      doc.text('I contenuti hanno finalità divulgativa e non sostituiscono consulenze mediche o psicologiche. © Carlo Alberto Calcagno', PW/2, fy + 9.5, {align: 'center'});
    }

    // ── Check page break ──
    function checkBreak(neededH){
      if(y + neededH > PH - MB){
        drawFooter();
        doc.addPage();
        page++;
        drawHeader();
      }
    }

    // ── Draw a message bubble ──
    function drawMessage(role, text, time){
      const isUser = role === 'user';
      const maxBubbleW = CW * 0.82;
      const bubblePad = 3.5;
      const lineH = 4.5;
      const fs = 9;

      // Set font for measurement
      doc.setFontSize(fs);
      doc.setFont('helvetica', isUser ? 'bold' : 'normal');

      // Header label
      const label = isUser ? 'Tu' : 'Consulente Olistica';
      const labelColor = isUser ? GOLD : INK3;

      // Wrap text
      const lines = wrapText(se(text), maxBubbleW - bubblePad * 2, fs);
      const bubbleH = lines.length * lineH + bubblePad * 2 + 4;

      // Space between messages
      const spaceBefore = 4;
      checkBreak(spaceBefore + 5 + bubbleH + 2);
      y += spaceBefore;

      // Label row
      doc.setFontSize(7.5);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...labelColor);
      const labelX = isUser ? PW - MR - maxBubbleW : ML;
      doc.text(label, labelX, y);

      // Time
      if(time){
        doc.setFontSize(6.5);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(...INK3);
        const timeX = isUser ? PW - MR : ML + maxBubbleW;
        doc.text(time, timeX, y, {align: isUser ? 'right' : 'left'});
      }
      y += 3.5;

      // Bubble background
      const bubbleX = isUser ? PW - MR - maxBubbleW : ML;
      const bubbleBgColor = isUser ? GOLD_LIGHT : IVORY2;

      doc.setFillColor(...bubbleBgColor);
      doc.setDrawColor(...(isUser ? GOLD : [220, 210, 200]));
      doc.setLineWidth(0.3);
      doc.roundedRect(bubbleX, y, maxBubbleW, bubbleH, 2.5, 2.5, 'FD');

      // User: accent bar on left
      if(!isUser){
        doc.setFillColor(...GOLD);
        doc.rect(bubbleX, y, 1.5, bubbleH, 'F');
      }

      // Bubble text
      doc.setFontSize(fs);
      doc.setFont('helvetica', isUser ? 'bold' : 'normal');
      doc.setTextColor(...INK);
      let ty = y + bubblePad + lineH - 0.5;

      lines.forEach(line => {
        // Check if line fits (split across pages not ideal but handled)
        doc.text(line, bubbleX + bubblePad + (isUser ? 0 : 1.8), ty);
        ty += lineH;
      });

      y += bubbleH;
    }

    // ── Build the chat list from chatHistory ──
    // chatHistory = [{role:"user",content:"..."}, {role:"assistant",content:"..."}]
    // We skip the first AI welcome message if very long
    const messages = [];
    const msgEls = document.querySelectorAll('#chat-messages .msg');
    msgEls.forEach(el => {
      const isUser = el.classList.contains('user');
      const bubble = el.querySelector('.msg-bubble');
      const timeEl = el.querySelector('.msg-time');
      if(bubble){
        messages.push({
          role: isUser ? 'user' : 'ai',
          text: stripHtml(bubble.innerHTML),
          time: timeEl ? timeEl.textContent : ''
        });
      }
    });

    if(messages.length === 0){
      throw new Error('Nessun messaggio trovato nella chat.');
    }

    // ── Cover page ──
    // Background
    doc.setFillColor(...IVORY);
    doc.rect(0, 0, PW, PH, 'F');

    // Top gold bar
    doc.setFillColor(...GOLD);
    doc.rect(0, 0, PW, 55, 'F');

    // Logo mark large
    doc.setFillColor(255,255,255,0.2);
    doc.setFillColor(255,255,255);
    doc.circle(PW/2, 30, 16, 'F');
    doc.setTextColor(...GOLD);
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('*', PW/2 - 4, 34);

    // Title
    doc.setTextColor(...WHITE);
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text('OLISMO INTEGRATO', PW/2, 63, {align: 'center'});

    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text('Trascrizione della Consulenza Olistica AI', PW/2, 71, {align: 'center'});

    // Gold line
    doc.setDrawColor(...GOLD);
    doc.setLineWidth(0.5);
    doc.line(PW/2 - 40, 78, PW/2 + 40, 78);

    // Date / meta
    const now = new Date();
    const dateStr = now.toLocaleDateString('it-IT', {weekday:'long', day:'2-digit', month:'long', year:'numeric'});
    const timeStr = now.toLocaleTimeString('it-IT', {hour:'2-digit', minute:'2-digit'});

    doc.setFontSize(9.5);
    doc.setTextColor(...INK2);
    doc.setFont('helvetica', 'normal');
    doc.text('Data: ' + dateStr + '  |  Ora: ' + timeStr, PW/2, 88, {align: 'center'});
    doc.text('Messaggi: ' + messages.length + '  |  ' + (messages.filter(m=>m.role==='user').length) + ' domande  ·  ' + (messages.filter(m=>m.role==='ai').length) + ' risposte', PW/2, 95, {align: 'center'});

    // Info box
    doc.setFillColor(255,255,255);
    doc.setDrawColor(...GOLD);
    doc.setLineWidth(0.4);
    doc.roundedRect(ML + 15, 108, CW - 30, 42, 3, 3, 'FD');

    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...GOLD);
    doc.text('Carlo Alberto Calcagno', PW/2, 118, {align: 'center'});

    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...INK2);
    doc.text('Mediatore Familiare Certificato · Formatore · Pranoterapista', PW/2, 124, {align: 'center'});
    doc.text('Inventore dell\'Enneagramma Evolutivo', PW/2, 130, {align: 'center'});

    doc.setFontSize(8);
    doc.setTextColor(...GOLD);
    doc.text('calcagnocarloalberto1@gmail.com  ·  +39 347 366 6508', PW/2, 138, {align: 'center'});
    doc.text('olismo-integrato.it', PW/2, 144, {align: 'center'});

    // Discipline chips
    const chips = ['Chakra','Enneagramma','Fiori di Bach','AT','Frequenze','Cristalli','VAK','Pranoterapia'];
    const chipStartY = 160;
    let cx = ML + 8;
    chips.forEach((chip, i) => {
      doc.setFontSize(7);
      const w = doc.getTextWidth(chip) + 6;
      doc.setFillColor(...GOLD_LIGHT);
      doc.setDrawColor(...GOLD);
      doc.setLineWidth(0.3);
      doc.roundedRect(cx, chipStartY, w, 6, 1.5, 1.5, 'FD');
      doc.setTextColor(...INK2);
      doc.text(chip, cx + 3, chipStartY + 4.2);
      cx += w + 3;
      if(cx > PW - MR - 30){cx = ML + 8; chipStartY += 10;}
    });

    // Disclaimer
    doc.setFontSize(7.5);
    doc.setTextColor(180, 175, 170);
    doc.text('Le indicazioni hanno finalità divulgativa e non sostituiscono consulenze mediche o psicologiche.', PW/2, PH - 30, {align: 'center'});

    // Bottom bar
    doc.setFillColor(...GOLD);
    doc.rect(0, PH - 8, PW, 8, 'F');
    doc.setTextColor(...WHITE);
    doc.setFontSize(7);
    doc.text('olismo-integrato.it', PW/2, PH - 3, {align: 'center'});

    // ── Chat pages ──
    doc.addPage();
    page = 1;
    drawHeader();

    // Section title
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...INK);
    doc.text('Trascrizione della conversazione', ML, y);
    y += 8;

    // Draw all messages
    messages.forEach(m => {
      drawMessage(m.role, m.text, m.time);
    });

    drawFooter();

    // ── Save ──
    const dateFile = new Date().toISOString().slice(0,10);
    doc.save('Olismo-Integrato-Consulenza-' + dateFile + '.pdf');

  } catch(err) {
    console.error('PDF export error:', err);
    alert('Errore nella generazione del PDF: ' + err.message);
  }

  if(btn){
    btn.classList.remove('loading');
    btn.innerHTML = `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h10M8 3v7M8 10l-2.5-2.5M8 10l2.5-2.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><rect x="1.5" y="11.5" width="13" height="3" rx="1" stroke="currentColor" stroke-width="1.2"/></svg> Scarica PDF`;
  }
}

// ══════════════════════════════════════════════
// MOTORE DIETETICO
// ══════════════════════════════════════════════

function checkDietReady(){
  const enn = document.getElementById('diet-enn').value;
  const adatt = document.getElementById('diet-adatt').value;
  const btn = document.getElementById('diet-gen-btn');
  if(btn) btn.disabled = !(enn && adatt);
}

// Dati alimentari per enneatipo
const DIET_ENN = {
  "1":{
    nome:"Perfezionista",
    chakra:"Plesso Solare (3°) e Radice (1°)",
    principio:"L'alimentazione del T1 deve bilanciare la tensione interna e calmare il critico interiore. Cibi che stabilizzano il sistema nervoso e riducono l'iper-attivazione corticale.",
    consigliati:[
      {g:"Cereali","c":"#c49a1a","v":"Riso integrale, avena, farro, orzo — calmano il sistema nervoso e alimentano la riflessione"},
      {g:"Verdure","c":"#2e7d4f","v":"Spinaci, cavolo nero, broccoli, zucchine — depurano e calmano il fegato (sede della tensione T1)"},
      {g:"Legumi","c":"#8a6a2a","v":"Lenticchie, ceci, fagioli neri — proteina stabile senza eccitazione"},
      {g:"Frutta","c":"#c87820","v":"Mela (frutto simbolo del T1!), pera, prugna, mirtilli — antiossidanti e stabilizzanti"},
      {g:"Erbe","c":"#2e7d4f","v":"Valeriana, melissa, camomilla, lavanda — per l'ansia da perfezione"}
    ],
    evitare:"Caffeina e stimolanti (amplificano l'autocritica), zuccheri raffinati (crisi glicemica→irritabilità), alcol in eccesso (abbassa le difese del Super Io).",
    ritmo:"3 pasti regolari a orari fissi (il T1 ama la struttura). Cena leggera, niente cibo dopo le 20. Masticare lentamente: il cibo non va 'analizzato' ma gustato.",
    settimana:[
      {g:"Lun","p":"Porridge avena + mela + cannella","pr":"Insalata di farro con verdure grigliate","c":"Minestrone di lenticchie + pane integrale"},
      {g:"Mar","p":"Yogurt naturale + mirtilli","pr":"Riso integrale + tofu marinato","c":"Zuppa di verdure + uova in camicia"},
      {g:"Mer","p":"Pane integrale + burro d'arachidi","pr":"Insalata greca + ceci","c":"Salmone al forno + spinaci saltati"},
      {g:"Gio","p":"Frullato verde (spinaci, banana, mandorle)","pr":"Avocado toast integrale","c":"Pollo al limone + broccoli al vapore"},
      {g:"Ven","p":"Porridge con semi di chia","pr":"Bowl di quinoa + verdure di stagione","c":"Pasta integrale al pesto + insalata"},
      {g:"Sab","p":"Uova strapazzate + pane di segale","pr":"Zuppa miso + riso","c":"Pasto libero — pratica del 'permesso'"},
      {g:"Dom","p":"Pancakes integrali + frutta fresca","pr":"Insalata di legumi misti","c":"Arrosto di verdure + patate dolci"}
    ],
    fiori:"Agrimony (pace interiore) · Rock Water (rigidità) · Pine (senso di colpa)",
    frequenza:"528 Hz — riparazione e rilascio della tensione"
  },
  "2":{
    nome:"Altruista",
    chakra:"Cuore (4°) e Radice (1°)",
    principio:"Il T2 tende a dimenticarsi di nutrirsi (troppo occupato a nutrire gli altri). L'alimentazione deve ricordare il piacere di prendersi cura di sé. Cibi che nutrono il cuore energetico.",
    consigliati:[
      {g:"Cereali","c":"#c49a1a","v":"Quinoa, miglio, amaranto — nutrono senza pesare, ideali per chi si muove molto"},
      {g:"Verdure","c":"#2e7d4f","v":"Barbabietola rossa, radicchio, pomodori — supportano il sistema cardiovascolare"},
      {g:"Legumi","c":"#8a6a2a","v":"Fagioli rossi, azuki, soia — supportano il rene e la vitalità affettiva"},
      {g:"Frutta","c":"#c87820","v":"Fragola, lampone, ciliegia, anguria — frutti del cuore, ricchi in liconene e vitamina C"},
      {g:"Grassi","c":"#b8935a","v":"Olio d'oliva extravergine, avocado, noci — nutrono il sistema nervoso parasimpatico"}
    ],
    evitare:"Eccesso di dolci come compensazione emotiva, fast food durante le crisi da 'non valorizzato', sale in eccesso (ritenzione idrica e gonfiori).",
    ritmo:"Il T2 spesso salta i pasti quando è concentrato sugli altri. Regola: prima mangio io, poi mi occupo degli altri. Un pasto al giorno da consumare da soli, in silenzio.",
    settimana:[
      {g:"Lun","p":"Smoothie di fragole + banana + latte di mandorla","pr":"Insalata di quinoa + barbabietola + feta","c":"Zuppa di fagioli rossi + pane di mais"},
      {g:"Mar","p":"Avocado toast + uovo in camicia","pr":"Riso rosso + verdure saltate","c":"Salmone + insalata di pomodori e basilico"},
      {g:"Mer","p":"Yogurt di soia + lamponi + granola","pr":"Pasta integrale al pomodoro fresco","c":"Pollo arrosto + patate dolci"},
      {g:"Gio","p":"Porridge di miglio + frutta secca","pr":"Bowl di riso + edamame + avocado","c":"Minestrone + crostini integrali"},
      {g:"Ven","p":"Frullato rosso (barbabietola, mela, zenzero)","pr":"Insalata di lenticchie rosse","c":"Pizza integrale con verdure (pasto conviviale)"},
      {g:"Sab","p":"Pancakes alle fragole","pr":"Sushi vegano","c":"Cena con chi ami — il cibo del T2 è la condivisione"},
      {g:"Dom","p":"Brunch festivo con uova, frutta e pane artigianale","pr":"Zuppa di azuki","c":"Lasagne di verdure"}
    ],
    fiori:"Chicory (amore condizionato) · Red Chestnut (preoccupazione per gli altri) · Centaury (confini)",
    frequenza:"528 Hz — amore · 639 Hz — connessione relazionale"
  },
  "3":{
    nome:"Manager",
    chakra:"Plesso Solare (3°) e Gola (5°)",
    principio:"Il T3 mangia spesso di fretta o salta i pasti per non perdere tempo. Necessita di proteine per la performance, ma soprattutto di ritualizzare i pasti come momento di presenza.",
    consigliati:[
      {g:"Proteine","c":"#a83232","v":"Uova, pollo, pesce, legumi — sostengono l'energia e la lucidità mentale per la performance"},
      {g:"Cereali","c":"#c49a1a","v":"Riso basmati, pasta integrale, kamut — carboidrati complessi per energia sostenuta"},
      {g:"Verdure","c":"#2e7d4f","v":"Peperoni, mais, zucca — gialli e arancioni per il 3° chakra (fuoco, volontà)"},
      {g:"Frutta","c":"#c87820","v":"Ciliegia (frutto del T3!), arancia, mandarino, kiwi — vitamina C per l'immunità sotto stress"},
      {g:"Integratori","c":"#1565c0","v":"Magnesio (contro crampi da tensione), B12 (energia), Omega 3 (focus)"}
    ],
    evitare:"Energy drink e caffeina in eccesso (esaurimento surrenalico), cibo processato 'on the go', alcol come decompressore serale.",
    ritmo:"Il T3 ha bisogno di PAUSE. Almeno un pasto seduto, senza telefono, al giorno. Colazione proteica per la performance. Cena leggera per dormire.",
    settimana:[
      {g:"Lun","p":"Uova strapazzate + avocado + pane di segale","pr":"Bowl di pollo + riso basmati + verdure","c":"Pesce al forno + insalata di rucola"},
      {g:"Mar","p":"Frullato proteico + frutta","pr":"Pasta integrale al pesto di basilico","c":"Zuppa di legumi + crostini"},
      {g:"Mer","p":"Yogurt greco + granola + arancia","pr":"Insalata di quinoa + pollo","c":"Bistecca di tofu + peperoni grigliati"},
      {g:"Gio","p":"Porridge proteico con semi","pr":"Poke bowl","c":"Pasta al salmone + spinaci"},
      {g:"Ven","p":"Pancakes proteici","pr":"Sushi o poke","c":"Pizza con proteine (tonno, gamberetti)"},
      {g:"Sab","p":"Brunch nutriente con uova e verdure","pr":"Insalata caesar rivisitata","c":"Cena sociale — il T3 brilla in tavola"},
      {g:"Dom","p":"Colazione lenta e gustosa (giorno senza agenda)","pr":"Pasta fresca","c":"Arrosto con verdure di stagione"}
    ],
    fiori:"Impatiens (impazienza) · Hornbeam (stanchezza mentale) · Oak (esaurimento da eccesso di dovere)",
    frequenza:"528 Hz — vitalità · 741 Hz — espressione autentica"
  },
  "4":{
    nome:"Romantico",
    chakra:"Cuore (4°) e Terzo Occhio (6°)",
    principio:"Il T4 può avere un rapporto discontinuo col cibo: abbuffate emotive nei momenti di tristezza, perdita d'appetito quando è nel dolore profondo. Necessita di cibi che stabilizzino l'umore.",
    consigliati:[
      {g:"Omega 3","c":"#1565c0","v":"Salmone, sardine, noci, semi di lino — stabilizzatori dell'umore e anti-depressivi naturali"},
      {g:"Verdure","c":"#2e7d4f","v":"Broccoli, cavolfiore, kale — contengono folati che supportano la serotonina"},
      {g:"Frutta","c":"#4527a0","v":"Mirtilli (frutto T4!), more, uva nera, melograno — antidepressivi vibrazionali"},
      {g:"Cereali","c":"#c49a1a","v":"Segale, farro, amaranto — cereali scuri che radicano il T4 nel presente"},
      {g:"Cacao","c":"#5d3a1a","v":"Cioccolato fondente 85%+ — fonte di serotonina e piacere autentico (con moderazione)"}
    ],
    evitare:"Zuccheri raffinati (amplificano gli sbalzi d'umore), alcol come anestetico emotivo, caffeina in eccesso (amplifica l'ansia della separazione).",
    ritmo:"Rituali alimentari regolari aiutano il T4 a radicars. Un rituale mattutino (the o caffè con intenzione) e un rituale serale (cena come meditazione) stabilizzano.",
    settimana:[
      {g:"Lun","p":"Smoothie blu (mirtilli, banana, latte di cocco)","pr":"Insalata di farro + salmone affumicato + more","c":"Risotto al radicchio + noci"},
      {g:"Mar","p":"Pane di segale + ricotta + miele","pr":"Zuppa di lenticchie nere","c":"Trota al forno + broccoli"},
      {g:"Mer","p":"Yogurt + mirtilli + cioccolato fondente","pr":"Bowl di quinoa nera + avocado","c":"Pasta al sugo di olive e capperi"},
      {g:"Gio","p":"Porridge di farro + more + nocciole","pr":"Insalata greca con olive kalamata","c":"Salmone + spinaci + limone"},
      {g:"Ven","p":"Crêpes di grano saraceno + marmellata di mirtilli","pr":"Piatto di formaggi artigianali + noci","c":"Risotto al nero di seppia (creatività in cucina)"},
      {g:"Sab","p":"Colazione artistica: frutta tagliata come un quadro","pr":"Insalata di melograno e rucola","c":"Cena romantica — il T4 cucina come atto d'amore"},
      {g:"Dom","p":"Frullato viola + pane artigianale","pr":"Zuppa di amaranto","c":"Torta di mirtilli (il T4 ama cucinare dolci)"}
    ],
    fiori:"Sweet Chestnut (disperazione profonda) · Gentian (scoraggiamento) · Willow (risentimento)",
    frequenza:"639 Hz — connessione emotiva · 852 Hz — risveglio interiore"
  },
  "5":{
    nome:"Eremita",
    chakra:"Terzo Occhio (6°) e Gola (5°)",
    principio:"Il T5 tende a dimenticarsi del corpo: mangia in modo spartano, spesso da solo, di fretta. Necessita di cibi che radicino e che nutrono la concentrazione mentale senza pesare.",
    consigliati:[
      {g:"Proteine","c":"#a83232","v":"Uova, pesce, tofu, legumi — nutrono il cervello senza distrarre con pesantezza digestiva"},
      {g:"Cereali","c":"#c49a1a","v":"Avena, quinoa, riso selvatico — energia cerebrale prolungata"},
      {g:"Verdure","c":"#2e7d4f","v":"Sedano, finocchio, cetriolo — rinfrescano la mente surriscaldata"},
      {g:"Frutta","c":"#8050d0","v":"Uva (frutto T5!), mirtilli, fichi — alimentano la mente contemplativa"},
      {g:"Noci e semi","c":"#c87820","v":"Noci, mandorle, semi di zucca — DHA e zinco per la funzione cognitiva"}
    ],
    evitare:"Pasti troppo elaborati (distrazione dal pensiero), alcol (offusca la lucidità), eccesso di caffeina (amplifica l'isolamento ansioso).",
    ritmo:"Il T5 ha bisogno di pasti semplici e prevedibili. Meal prep domenicale per tutta la settimana: elimina la variabile 'cosa mangio' dalla mente analitica.",
    settimana:[
      {g:"Lun","p":"Porridge di avena + noci + mirtilli","pr":"Riso integrale + tofu al sesamo","c":"Zuppa di lenticchie + pane di segale"},
      {g:"Mar","p":"Uova sode + pane integrale","pr":"Insalata di quinoa + feta + noci","c":"Pasta integrale al pesto di noci"},
      {g:"Mer","p":"Frullato verde (spinaci, banana, semi)","pr":"Bowl di farro + legumi + avocado","c":"Pesce al vapore + verdure"},
      {g:"Gio","p":"Yogurt + granola + uva","pr":"Insalata nicoise","c":"Frittata di verdure + insalata"},
      {g:"Ven","p":"Pane di segale + burro di mandorle","pr":"Riso selvatico + salmone","c":"Zuppa di farro + parmigiano"},
      {g:"Sab","p":"Colazione lenta con lettura","pr":"Piatto di formaggi + noci + frutta secca","c":"Cena con un amico (pratica del contatto)"},
      {g:"Dom","p":"Pancakes alle noci","pr":"Risotto ai funghi (meditativo da preparare)","c":"Minestrone casalingo — meal prep week"}
    ],
    fiori:"Water Violet (isolamento) · Cerato (dubitare di sé) · Mimulus (paura specifica)",
    frequenza:"741 Hz — espressione · 852 Hz — intuizione"
  },
  "6":{
    nome:"Leale",
    chakra:"Plesso Solare (3°) e Radice (1°)",
    principio:"Il T6 mangia in modo ansioso: spesso sceglie comfort food, teme le nuove diete, controlla le etichette. Necessita di cibi che stabilizzino il sistema nervoso e riducano l'ansia.",
    consigliati:[
      {g:"Magnesio","c":"#1565c0","v":"Cioccolato fondente, spinaci, avocado, banane — contro l'ansia e i crampi da tensione"},
      {g:"Cereali","c":"#c49a1a","v":"Avena, farro, riso integrale — serotonina e stabilità glicemica"},
      {g:"Probiotici","c":"#2e7d4f","v":"Yogurt, kefir, kimchi, tempeh — asse intestino-cervello per ridurre l'ansia"},
      {g:"Frutta","c":"#4527a0","v":"Mirtillo (frutto T6!), banana, kiwi, papaya — vitamina C e potassio"},
      {g:"Erbe","c":"#2e7d4f","v":"Valeriana, ashwagandha, rodiola — adattogeni contro lo stress cronico"}
    ],
    evitare:"Caffeina in eccesso (amplifica l'ipervigilanza), zuccheri raffinati (glicemia instabile = ansia amplificata), alcol come anestetico dell'ansia.",
    ritmo:"Pasti regolari come ancore di sicurezza. Il T6 ha bisogno di prevedibilità: stesso orario ogni giorno riduce l'ansia alimentare. Non saltare mai la colazione.",
    settimana:[
      {g:"Lun","p":"Porridge + banana + mandorle","pr":"Insalata di farro + avocado","c":"Zuppa di verdure + kefir"},
      {g:"Mar","p":"Yogurt + mirtilli + granola","pr":"Riso integrale + pollo + broccoli","c":"Minestrone + pane integrale"},
      {g:"Mer","p":"Pane di segale + hummus","pr":"Pasta integrale + legumi","c":"Salmone + spinaci al vapore"},
      {g:"Gio","p":"Frullato banana-avocado-spinaci","pr":"Bowl di quinoa + kimchi + tofu","c":"Zuppa di lenticchie"},
      {g:"Ven","p":"Uova + pane integrale + kiwi","pr":"Insalata con probiotici (yogurt come condimento)","c":"Pizza integrale + insalata"},
      {g:"Sab","p":"Brunch con amici (il T6 ama la sicurezza della comunità)","pr":"Cibo etnico sperimentale (sfida piccola)","c":"Cena casalinga con famiglia"},
      {g:"Dom","p":"Colazione tranquilla + lettura","pr":"Zuppa casalinga","c":"Pollo al forno + patate (comfort food sano)"}
    ],
    fiori:"Aspen (paura vaga) · Mimulus (paura specifica) · Larch (fiducia in sé)",
    frequenza:"396 Hz — liberazione dalla paura · 528 Hz — sicurezza"
  },
  "7":{
    nome:"Artista/Entusiasta",
    chakra:"Plesso Solare (3°) e Corona (7°)",
    principio:"Il T7 ama il cibo come esperienza: ristoranti nuovi, cucine esotiche, esperienza sensoriale. Il rischio è la discontinuità. Necessita di varietà ma anche di radicarsi.",
    consigliati:[
      {g:"Spezie","c":"#c49a1a","v":"Curcuma, zenzero, cardamomo, cannella — accendono l'entusiasmo sensoriale e sono antinfiammatori"},
      {g:"Frutta","c":"#f0a020","v":"Ananas (frutto T7!), mango, papaya, maracuja — frutti tropicali pieni di vita"},
      {g:"Varietà","c":"#2e7d4f","v":"Cucina del mondo — il T7 ha bisogno di rotazione per mantenere l'entusiasmo"},
      {g:"Adattogeni","c":"#8050d0","v":"Maca, ginseng, schisandra — per sostenere l'energia senza caffeina"},
      {g:"Cereali","c":"#c49a1a","v":"Riso selvatico, tapioca, sorgo — varietà ed esoticità"}
    ],
    evitare:"Eccesso di stimolanti (il T7 è già abbastanza attivato), abbuffate per noia, alcol come amplificatore della serata.",
    ritmo:"Il T7 ha bisogno di novità quindi: una cucina diversa a settimana. Ma anche un 'pasto radice' fisso (es. domenica: piatto tradizionale nonna) per bilanciare.",
    settimana:[
      {g:"Lun","p":"Frullato tropicale (ananas, mango, cocco)","pr":"Thai curry con tofu","c":"Mezze libanesi"},
      {g:"Mar","p":"Açaí bowl","pr":"Sushi con varianti creative","c":"Pasta aglio, olio e peperoncino (classico)"},
      {g:"Mer","p":"Shakshuka (uova in padella speziata)","pr":"Bowl messicana con guacamole","c":"Zuppa marocchina di ceci"},
      {g:"Gio","p":"Pancakes matcha","pr":"Poke hawaiano","c":"Wok di verdure con salsa tamari"},
      {g:"Ven","p":"Granola esotica + latte di cocco","pr":"Street food sano (food truck)","c":"Pizza gourmet con ingredienti insoliti"},
      {g:"Sab","p":"Brunch internazionale","pr":"Tapas spagnole","c":"Cena etnica con amici — il T7 in tavola"},
      {g:"Dom","p":"Colazione della tradizione (pasto radice)","pr":"Pasta della nonna","c":"Torta artigianale con frutta esotica"}
    ],
    fiori:"Agrimony (allegria mascherata) · Scleranthus (indecisione) · Impatiens (fretta)",
    frequenza:"528 Hz — gioia · 963 Hz — connessione superiore"
  },
  "8":{
    nome:"Capo/Leader",
    chakra:"Plesso Solare (3°) e Radice (1°)",
    principio:"Il T8 ha un rapporto intenso col cibo: mangia con forza, ama i sapori decisi. Il rischio è l'eccesso. Necessita di cibi che sostengano la forza senza appesantire e che ammorbidiscano la tensione.",
    consigliati:[
      {g:"Proteine","c":"#a83232","v":"Carne rossa di qualità (con moderazione), legumi, uova — sostengono la forza fisica"},
      {g:"Piccante","c":"#c45a22","v":"Peperoncino, zenzero, aglio — il T8 ama i contrasti e i sapori forti"},
      {g:"Verdure","c":"#2e7d4f","v":"Barbabietola, radicchio, rabarbaro — depurano il fegato affaticato dalla tensione"},
      {g:"Frutta","c":"#e09060","v":"Pesca (frutto T8!), albicocca, fico — ammorbidiscono l'intensità"},
      {g:"Antiinfiammatori","c":"#1565c0","v":"Curcuma, omega 3, ciliegia — contro l'infiammazione da stress cronico"}
    ],
    evitare:"Eccesso di carne rossa (acidità e infiammazione), alcol in grandi quantità (perdita controllo), cibo spazzatura come 'sfogo'.",
    ritmo:"Il T8 mangia quando ha fame, spesso di notte o in modo caotico. Regola: pasto principale a pranzo (picco energetico), cena leggera per proteggere il cuore.",
    settimana:[
      {g:"Lun","p":"Uova in tutti i modi + pane di segale","pr":"Bistecca di manzo 150g + insalata + barbabietola","c":"Zuppa di legumi piccante"},
      {g:"Mar","p":"Frullato rosso (barbabietola, mela, zenzero)","pr":"Bowl di riso rosso + pollo speziato","c":"Pesce spada alla griglia + peperoni"},
      {g:"Mer","p":"Yogurt greco + granola","pr":"Pasta amatriciana (sapori forti)","c":"Frittata di verdure"},
      {g:"Gio","p":"Porridge proteico con cannella","pr":"Kebab di agnello + verdure","c":"Zuppa piccante di lenticchie rosse"},
      {g:"Ven","p":"Shakshuka speziata","pr":"Pizza piccante (il T8 ama intensità)","c":"Cena con vino rosso di qualità"},
      {g:"Sab","p":"Brunch abbondante","pr":"Barbecue con amici — il T8 ama comandare la griglia","c":"Pesce intero al forno"},
      {g:"Dom","p":"Colazione coi piedi per terra","pr":"Arrosto tradizionale","c":"Insalata di verdure crude — detox"}
    ],
    fiori:"Vervain (intensità) · Vine (controllo) · Rock Water (auto-severità)",
    frequenza:"396 Hz — liberazione · 528 Hz — forza equilibrata"
  },
  "9":{
    nome:"Diplomatico",
    chakra:"Radice (1°) e Cuore (4°)",
    principio:"Il T9 mangia per compiacere gli altri o per addormentarsi emotivamente (comfort food). Necessita di cibi che attivino e radichino, non che addormentino ulteriormente.",
    consigliati:[
      {g:"Radicanti","c":"#a83232","v":"Barbabietola, carota, patata dolce, zenzero — attivano il primo chakra e la vitalità"},
      {g:"Proteine","c":"#c49a1a","v":"Uova, legumi, quinoa — energia stabile contro la tendenza alla letargia"},
      {g:"Piccante","c":"#c45a22","v":"Peperoncino, curcuma, curry — stimolano e attivano il metabolismo pigro"},
      {g:"Frutta","c":"#e03060","v":"Fragola (frutto T9!), lampone, ciliegia — attivano la vitalità e la presenza"},
      {g:"Erbe stimolanti","c":"#2e7d4f","v":"Rosmarino, timo, salvia — contro la tendenza all'inerzia"}
    ],
    evitare:"Carboidrati raffinati in eccesso (amplificano la letargia), alcol come sedativo, dolci come comfort emotivo.",
    ritmo:"Il T9 tende a saltare i pasti o a mangiare di continuo senza fame reale. Regola: pasto solo quando c'è vera fame. Colazione abbondante e attivante per iniziare il giorno con energia.",
    settimana:[
      {g:"Lun","p":"Frullato rosso attivante (fragola, barbabietola, zenzero)","pr":"Bowl di riso + pollo speziato + curry","c":"Zuppa piccante di carote"},
      {g:"Mar","p":"Uova in camicia + pane integrale + pomodoro","pr":"Pasta integrale + salsa piccante","c":"Legumi in umido + cereali"},
      {g:"Mer","p":"Yogurt + fragole + granola croccante","pr":"Bowl attivante con quinoa + verdure saltate","c":"Zuppa di patate dolci + rosmarino"},
      {g:"Gio","p":"Porridge con cannella e zenzero","pr":"Insalata di farro + barbabietola","c":"Salmone + peperoni grigliati"},
      {g:"Ven","p":"Pancakes proteici + sciroppo d'acero","pr":"Curry di ceci + riso basmati","c":"Pizza con ingredienti attivanti"},
      {g:"Sab","p":"Brunch attivante con amici (uscire dal nido!)","pr":"Cibo etnico speziato","c":"Cena in famiglia — ma esprimi la TUA preferenza"},
      {g:"Dom","p":"Colazione abbondante (giorno di cura di sé)","pr":"Arrosto di verdure + rosmarino","c":"Fragole e cioccolato — piacere consapevole"}
    ],
    fiori:"Wild Rose (rassegnazione) · Hornbeam (fatica del lunedì) · Clematis (sognare ad occhi aperti)",
    frequenza:"396 Hz — vitalità · 528 Hz — radicamento"
  }
};

// Modulazioni per adattamento AT
const DIET_ADATT = {
  "schiz": {
    nome:"Schizoide/Creativo",
    note:"Aggiungi cibi ricchi in ferro e vitamina B12 (carenza tipica in chi tende all'isolamento). Integra Omega 3 ad alto dosaggio (EPA). Un pasto al giorno in compagnia è indicato come 'pratica di connessione'."
  },
  "anti": {
    nome:"Antisociale/Affascinante",
    note:"Riduci gli stimolanti (caffeina, zuccheri veloci) che amplificano l'impulsività. Magnesio e L-teanina come modulatori. Pasti regolari per stabilizzare l'umore e ridurre le decisioni impulsive."
  },
  "para": {
    nome:"Paranoide/Brillante",
    note:"Priorità all'equilibrio glicemico (glicemia instabile = ipervigilanza). Riduci istamina (formaggi stagionati, vino, cibi fermentati se sensibile). Zinco e vitamina D supportano la risposta allo stress."
  },
  "pass": {
    nome:"Passivo-Aggressivo/Oppositivo",
    note:"Cibi antiinfiammatori (curcuma, omega 3, ciliegia) per ridurre la tensione cronica. Evita alcol serale. L-triptofano (tacchino, semi di zucca, banana) supporta la serotonina e riduce l'irritabilità latente."
  },
  "istri": {
    nome:"Istrionico/Entusiasta",
    note:"Bilanciare entusiasmo alimentare con radicamento. Riduci i pasti-spettacolo e coltiva un pasto minimalista quotidiano. Integra adattogeni (ashwagandha, rodiola) per stabilizzare l'energia emotiva."
  },
  "ocd": {
    nome:"Ossessivo-Compulsivo/Stakanovista",
    note:"Attenzione all'ortoressia (ossessione per il cibo sano): il cibo non deve essere 'analizzato' ma goduto. Magnesio glicinato per il rilassamento muscolare. Un 'pasto libero' settimanale è prescritto come pratica di flessibilità."
  }
};

function generateDiet(){
  const _dEnn = document.getElementById('diet-enn')?.value;
  const _dAdatt = document.getElementById('diet-adatt')?.value;
  if(_dEnn && _dAdatt){
    const _dEnnObj = DB.enneatipi.find(e=>e.id==='e'+_dEnn)||{};
    const _dAdattObj = DB.adattamenti.find(a=>a.id===_dAdatt)||{};
    saveProfileResult('diet',{tipo:Number(_dEnn), adattamento:_dAdattObj.short||_dAdatt});
  }

  const ennVal = document.getElementById('diet-enn').value;
  const adattVal = document.getElementById('diet-adatt').value;
  const resDiv = document.getElementById('diet-result');
  if(!ennVal || !adattVal || !resDiv) return;

  const enn = DIET_ENN[ennVal];
  const adatt = DIET_ADATT[adattVal];
  if(!enn || !adatt) return;

  const cibiHtml = enn.consigliati.map(c =>
    '<div class="diet-food-card">' +
    '<div class="diet-food-cat" style="color:'+c.c+'">'+c.g+'</div>' +
    '<div class="diet-food-val">'+c.v+'</div>' +
    '</div>'
  ).join('');

  // Piano settimanale come tabella: righe=pasti, colonne=giorni
  const days = enn.settimana;
  const settHtml =
    '<table class="diet-table">' +
    '<thead><tr>' +
    '<th class="dt-meal-head">Pasto</th>' +
    days.map(g => '<th>'+g.g+'</th>').join('') +
    '</tr></thead>' +
    '<tbody>' +
    '<tr><td>☀ Colazione</td>' + days.map(g => '<td>'+g.p+'</td>').join('') + '</tr>' +
    '<tr><td>☀☀ Pranzo</td>'   + days.map(g => '<td>'+g.pr+'</td>').join('') + '</tr>' +
    '<tr><td>🌙 Cena</td>'     + days.map(g => '<td>'+g.c+'</td>').join('') + '</tr>' +
    '</tbody></table>';

  resDiv.innerHTML =
    '<div class="diet-res-header">' +
    '<div class="diet-res-title">Piano alimentare per <span style="color:var(--gold)">Tipo '+ennVal+' — '+enn.nome+'</span></div>' +
    '<div class="diet-res-sub">Modulato per adattamento '+adatt.nome+'</div>' +
    '</div>' +
    '<div class="diet-res-section">' +
    '<h4>🎯 Principio guida</h4>' +
    '<p>'+enn.principio+'</p>' +
    '<p class="diet-chakra-note">🔮 Chakra chiave: <strong>'+enn.chakra+'</strong></p>' +
    '</div>' +
    '<div class="diet-res-section">' +
    '<h4>✅ Alimenti consigliati</h4>' +
    '<div class="diet-food-grid">'+cibiHtml+'</div>' +
    '</div>' +
    '<div class="diet-res-section">' +
    '<h4>⚡ Modulazione '+adatt.nome+'</h4>' +
    '<p class="diet-adatt-note">'+adatt.note+'</p>' +
    '</div>' +
    '<div class="diet-res-section">' +
    '<h4>⏰ Ritmo alimentare</h4>' +
    '<p>'+enn.ritmo+'</p>' +
    '</div>' +
    '<div class="diet-res-section diet-week-section">' +
    '<h4>📅 Piano settimanale</h4>' +
    '<div class="diet-week-scroll">'+settHtml+'</div>' +
    '</div>' +
    '<div class="diet-res-section diet-bottom-row">' +
    '<div class="diet-extra-card"><div class="diet-extra-label">🌸 Fiori di Bach correlati</div><div class="diet-extra-val">'+enn.fiori+'</div></div>' +
    '<div class="diet-extra-card"><div class="diet-extra-label">🎵 Frequenza di supporto</div><div class="diet-extra-val">'+enn.frequenza+'</div></div>' +
    '</div>' +
    '<div class="diet-disclaimer">Il piano ha finalità informativa e vibrazionale. Consulta un nutrizionista per esigenze cliniche specifiche.</div>' +
    '<div id="diet-ai-section" style="padding:1.5rem 2rem;border-top:1px solid var(--ivory3)">' +
    '<div style="display:flex;align-items:center;gap:.8rem;margin-bottom:1rem">' +
    '<div style="width:34px;height:34px;border-radius:50%;background:radial-gradient(circle at 35% 35%,rgba(100,160,60,.6),rgba(80,150,130,.3));border:1px solid var(--green3,#7ab648);flex-shrink:0"></div>' +
    '<div><div style="font-family:\'Cormorant Garamond\',serif;font-size:1.05rem;font-weight:600;color:var(--ink)">Approfondisci con l\'AI Nutrizionale</div>' +
    '<div style="font-size:.72rem;color:var(--ink4)">Chiedi varianti, sostituzioni, integrazioni vibrazionali</div></div></div>' +
    '<div id="diet-chat-msgs" style="max-height:300px;overflow-y:auto;display:flex;flex-direction:column;gap:.8rem;margin-bottom:1rem;padding:.8rem;background:var(--ivory);border-radius:var(--r);border:1px solid var(--ivory3)">' +
    '<div style="display:flex;gap:.6rem"><div style="width:26px;height:26px;border-radius:50%;background:var(--gold-pale);border:1px solid var(--gold3);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.65rem;color:var(--gold)">AI</div>' +
    '<div style="background:white;border:1px solid var(--ivory3);border-radius:8px;padding:.6rem .9rem;font-size:.82rem;color:var(--ink2);line-height:1.55">Ho generato il tuo piano alimentare personalizzato. Posso aiutarti con varianti, sostituzioni, integrazioni con i Fiori di Bach e molto altro. Cosa vorresti approfondire?</div></div>' +
    '</div>' +
    '<div style="display:flex;gap:.6rem">' +
    '<textarea id="diet-chat-input" placeholder="Es: Sostituisci il pesce... Aggiungi opzione vegetariana..." rows="1" style="flex:1;background:white;border:1px solid var(--ivory3);border-radius:8px;padding:.6rem .9rem;font-family:\'Outfit\',sans-serif;font-size:.82rem;resize:none;outline:none;min-height:38px;max-height:100px;color:var(--ink)" onkeydown="if(event.key===\'Enter\'&&!event.shiftKey){event.preventDefault();sendDietMsg()}" oninput="this.style.height=\'auto\';this.style.height=this.scrollHeight+\'px\'"></textarea>' +
    '<button onclick="sendDietMsg()" style="width:38px;height:38px;border-radius:8px;background:transparent;border:1px solid var(--gold);color:var(--gold);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0">' +
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>' +
    '</button></div></div>';

  resDiv.style.display = 'block';
  resDiv.scrollIntoView({behavior:'smooth', block:'start'});

  // Memorizza il contesto del piano per la chat AI
  window._dietContext = {enn: ennVal, adatt: adattVal, piano: enn.principio + ' | Chakra: ' + enn.chakra + ' | Fiori: ' + enn.fiori};
  window._dietChatHistory = [];
}

// ── Diet AI Chat ──
async function sendDietMsg(){
  const input = document.getElementById('diet-chat-input');
  const msgs = document.getElementById('diet-chat-msgs');
  if(!input||!msgs) return;
  const msg = input.value.trim(); if(!msg) return;
  input.value=''; input.style.height='auto';
  const ctx = window._dietContext||{};
  if(!window._dietChatHistory) window._dietChatHistory=[];
  msgs.innerHTML += `<div style="display:flex;gap:.6rem;flex-direction:row-reverse"><div style="width:26px;height:26px;border-radius:50%;background:var(--gold-pale);border:1px solid var(--gold3);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.65rem;color:var(--gold)">Tu</div><div style="background:var(--gold-pale);border:1px solid var(--gold3);border-radius:8px;padding:.6rem .9rem;font-size:.82rem;color:var(--ink2);line-height:1.55;text-align:right">${msg}</div></div>`;
  const typId = 'dt'+Date.now();
  msgs.innerHTML += `<div id="${typId}" style="display:flex;gap:.6rem"><div style="width:26px;height:26px;border-radius:50%;background:var(--gold-pale);border:1px solid var(--gold3);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.65rem;color:var(--gold)">AI</div><div style="background:white;border:1px solid var(--ivory3);border-radius:8px;padding:.6rem .9rem;font-size:.82rem;color:var(--ink4)">...</div></div>`;
  msgs.scrollTop=msgs.scrollHeight;
  window._dietChatHistory.push({role:'user',content:msg});
  try{
    const system=`Sei un esperto di nutrizione olistica di olismo-integrato.it (Avv. Carlo Alberto Calcagno). Piano generato per: Enneatipo ${ctx.enn||'?'}, Adattamento AT ${ctx.adatt||'?'}. Principio: ${ctx.piano||''}. Rispondi in italiano, pratico e caldo. Non prescrivere diete terapeutiche per malattie.`;
    const messages = window._dietChatHistory.length===1 ? [{role:'user',content:`Contesto: Enneatipo ${ctx.enn}, AT ${ctx.adatt}. Domanda: ${msg}`}] : window._dietChatHistory;
    const resp=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{"Content-Type":"application/json","x-api-key":['sk-ant-api03-3h_eEzEe','o8WMM-5_qCNjyiNJIHhlP','GmSU0D_1iXtPRbKalNWwf','qp3GI9046PKaInD300qnB','duvT40mlnjsPjJA-4NrKcAAA'].join(''),"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:'claude-haiku-4-5-20251001',max_tokens:800,system,messages})});
    const data=await resp.json();
    const reply=data.content?.[0]?.text||'Errore. Riprova.';
    window._dietChatHistory.push({role:'assistant',content:reply});
    document.getElementById(typId)?.remove();
    msgs.innerHTML+=`<div style="display:flex;gap:.6rem"><div style="width:26px;height:26px;border-radius:50%;background:var(--gold-pale);border:1px solid var(--gold3);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.65rem;color:var(--gold)">AI</div><div style="background:white;border:1px solid var(--ivory3);border-radius:8px;padding:.6rem .9rem;font-size:.82rem;color:var(--ink2);line-height:1.55">${reply.replace(/\n/g,'<br>')}</div></div>`;
    msgs.scrollTop=msgs.scrollHeight;
  }catch(e){document.getElementById(typId)?.remove();}
}

// ── AI Message Rating ──
function rateMsg(btn, val){
  const row = btn.parentElement;
  row.querySelectorAll('button').forEach(b => b.style.opacity = '.3');
  btn.style.opacity = '1';
  btn.style.transform = 'scale(1.3)';
  btn.disabled = true;
  // Visual feedback
  const msg = val > 0 ? '✓ Grazie!' : '✓ Registrato';
  const fb = document.createElement('span');
  fb.textContent = msg;
  fb.style.cssText = 'font-size:.65rem;color:var(--gold);margin-left:.4rem';
  row.appendChild(fb);
}

// ── Share risultati test ──
async function shareResult(type, text){
  const shareData = {
    title: 'Olismo Integrato — Il mio profilo',
    text: text,
    url: 'https://olismo-integrato.it'
  };
  try {
    if(navigator.share){
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(text + '\n\nhttps://olismo-integrato.it');
      const btn = document.querySelector('.share-result-btn');
      if(btn){ btn.textContent = '✅ Copiato!'; setTimeout(()=>{ btn.textContent = '↗ Condividi'; }, 2000); }
    }
  } catch(e) {}
}

// ── Dark Mode ──
function toggleDark(){
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('olismo_dark', isDark ? '1' : '');
  document.querySelector('.dark-toggle').textContent = isDark ? '☀️' : '🌙';
}
function initDark(){
  if(localStorage.getItem('olismo_dark') === '1'){
    document.body.classList.add('dark');
    const btn = document.querySelector('.dark-toggle');
    if(btn) btn.textContent = '☀️';
  }
}

// ── CRISTALLI section ──
const CRISTALLI_CHAKRA_MAP = {
  c1:{label:"1° Radice",color:"#c23b22"},
  c2:{label:"2° Sacrale",color:"#e07030"},
  c3:{label:"3° Plesso Solare",color:"#c49a1a"},
  c4:{label:"4° Cuore",color:"#2e7d4f"},
  c5:{label:"5° Gola",color:"#1565c0"},
  c6:{label:"6° Terzo Occhio",color:"#4527a0"},
  c7:{label:"7° Corona",color:"#7b1fa2"}
};

function initCristalliSection(){
  const grid = document.getElementById('cristalli-grid');
  const filterEl = document.getElementById('cristalli-filter');
  if(!grid || !filterEl) return;

  // Get all crystals from DB
  const crystals = (DB && DB.cristalli) ? DB.cristalli : [];
  if(!crystals.length) return;

  let activeFilter = 'all';

  // Render filters
  const allChakras = [...new Set(crystals.flatMap(c => c.chakra || []))].sort();
  filterEl.innerHTML = '<button class="cr-filter-btn active" onclick="filterCristalli(\'all\',this)">Tutti</button>' +
    allChakras.map(ck =>
      '<button class="cr-filter-btn" onclick="filterCristalli(\''+ck+'\',this)">' +
      (CRISTALLI_CHAKRA_MAP[ck]?.label || ck) + '</button>'
    ).join('');

  // Render grid
  function render(){
    grid.innerHTML = crystals.map(c => {
      const chColor = c.chakra && c.chakra[0] ? (CRISTALLI_CHAKRA_MAP[c.chakra[0]]?.color || '#888') : '#888';
      const chakraLabel = c.chakra ? c.chakra.map(ck => CRISTALLI_CHAKRA_MAP[ck]?.label || ck).join(', ') : '';
      const isDim = activeFilter !== 'all' && !(c.chakra || []).includes(activeFilter);
      return '<div class="cristallo-card' + (isDim?' dim':'') + '" onclick="openFlowerPopup(\''+c.id+'\')">' +
        '<div class="cristallo-chakra">' + (c.chakra && c.chakra[0] ? (c.chakra[0].replace('c','')+'°') : '') + '</div>' +
        '<div class="cristallo-dot" style="background:'+chColor+'22;border:2px solid '+chColor+'40">' +
        '<span style="font-size:1.1rem">💎</span></div>' +
        '<div class="cristallo-name">' + (c.name||c.id) + '</div>' +
        '<div class="cristallo-funzione">' + (c.funzione||'').substring(0,60) + '</div>' +
        '</div>';
    }).join('');
  }
  render();
  grid._render = render;
}

function filterCristalli(chakra, btn){
  document.querySelectorAll('#cristalli-filter .cr-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const grid = document.getElementById('cristalli-grid');
  if(!grid) return;
  // Re-render with filter
  const crystals = (DB && DB.cristalli) ? DB.cristalli : [];
  grid.innerHTML = crystals.map(c => {
    const chColor = c.chakra && c.chakra[0] ? (CRISTALLI_CHAKRA_MAP[c.chakra[0]]?.color || '#888') : '#888';
    const isDim = chakra !== 'all' && !(c.chakra || []).includes(chakra);
    return '<div class="cristallo-card' + (isDim?' dim':'') + '" onclick="openFlowerPopup(\''+c.id+'\')">' +
      '<div class="cristallo-chakra">' + (c.chakra && c.chakra[0] ? (c.chakra[0].replace('c','')+'°') : '') + '</div>' +
      '<div class="cristallo-dot" style="background:'+chColor+'22;border:2px solid '+chColor+'40"><span>💎</span></div>' +
      '<div class="cristallo-name">' + (c.name||c.id) + '</div>' +
      '<div class="cristallo-funzione">' + (c.funzione||'').substring(0,60) + '</div>' +
      '</div>';
  }).join('');
}

// ── Meditazione tabs ──
function showMedit(tab, btn){
  document.querySelectorAll('.medit-content').forEach(c => c.classList.remove('show'));
  document.querySelectorAll('.medit-tab').forEach(b => b.classList.remove('active'));
  const el = document.getElementById('medit-' + tab);
  if(el) el.classList.add('show');
  btn.classList.add('active');
}

/* ═══════════════════════════════════ */

/* ══ ASSISTENTE FES ══ */
let fesMode = 'sintomo', fesHistory = [];
function fesSwitchMode(m) {
  fesMode = m;
  document.getElementById('fes-btn-sintomo').style.background = m==='sintomo' ? '#6a5acd' : 'transparent';
  document.getElementById('fes-btn-sintomo').style.color = m==='sintomo' ? '#fff' : 'rgba(255,255,255,0.5)';
  document.getElementById('fes-btn-fiore').style.background = m==='fiore' ? '#6a5acd' : 'transparent';
  document.getElementById('fes-btn-fiore').style.color = m==='fiore' ? '#fff' : 'rgba(255,255,255,0.5)';
  document.getElementById('fes-input').placeholder = m==='sintomo' ? 'Es: mi sento disconnessa, non trovo il mio scopo…' : 'Es: Yarrow, oppure "fiore per i confini emotivi"…';
  document.getElementById('fes-tags').style.display = m==='sintomo' ? 'flex' : 'none';
}
function fesQuick(t) { document.getElementById('fes-input').value = t; document.getElementById('fes-input').focus(); }
function fesAppend(role, html) {
  const area = document.getElementById('fes-chat');
  const d = document.createElement('div');
  const isAi = role === 'ai';
  d.style.cssText = isAi
    ? 'background:rgba(106,90,205,0.08);border:1px solid rgba(139,120,230,0.15);border-radius:4px 12px 12px 12px;padding:1.2rem 1.4rem;font-size:.88rem;line-height:1.75;color:rgba(255,255,255,0.75)'
    : 'align-self:flex-end;max-width:75%;background:#6a5acd;color:#fff;padding:.8rem 1.1rem;border-radius:12px 12px 4px 12px;font-size:.88rem;line-height:1.6';
  if (isAi) d.innerHTML = '<div style="font-size:.65rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#8b78e6;margin-bottom:.5rem">🌸 Assistente FES</div>' + html;
  else d.textContent = html;
  area.appendChild(d);
  d.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  return d;
}
async function fesSend() {
  const inp = document.getElementById('fes-input');
  const text = inp.value.trim();
  if (!text) return;
  document.getElementById('fes-send').disabled = true;
  inp.value = '';
  fesAppend('user', text);
  fesHistory.push({ role: 'user', content: (fesMode==='fiore' ? '[CERCA FIORE FES] ' : '[STATO EMOTIVO] ') + text });
  const typing = fesAppend('ai', '<div style="display:flex;gap:5px;align-items:center"><span style="width:7px;height:7px;border-radius:50%;background:#8b78e6;animation:fesdot 1.2s infinite"></span><span style="width:7px;height:7px;border-radius:50%;background:#8b78e6;animation:fesdot 1.2s .2s infinite"></span><span style="width:7px;height:7px;border-radius:50%;background:#8b78e6;animation:fesdot 1.2s .4s infinite"></span></div>');
  const FES_PROMPT = `Sei un esperto assistente olistico specializzato nei Fiori Californiani FES (Flower Essence Services) di Richard Katz e Patricia Kaminski. Rispondi in italiano, con tono caldo e spiritualmente raffinato. Conosci tutte le 100 essenze FES (Agrimony, Alpine Lily, Angelica, Arnica, Baby Blue Eyes, Blackberry, Bleeding Heart, Borage, Buttercup, California Poppy, California Wild Rose, Cayenne, Chamomile, Chaparral, Cosmos, Dill, Echinacea, Fairy Lantern, Fawn Lily, Filaree, Forget-Me-Not, Fuchsia, Golden Yarrow, Goldenrod, Hound's Tongue, Indian Paintbrush, Indian Pink, Iris, Larkspur, Lavender, Lotus, Love-Lies-Bleeding, Madia, Manzanita, Mariposa Lily, Milkweed, Morning Glory, Mountain Pennyroyal, Mountain Pride, Mugwort, Mullein, Nasturtium, Oregon Grape, Penstemon, Pink Monkeyflower, Pink Yarrow, Poison Oak, Pretty Face, Purple Monkeyflower, Queen Anne's Lace, Quince, Red Clover, Sagebrush, Sage, Scarlet Monkeyflower, Self-Heal, Shasta Daisy, Shooting Star, Snapdragon, Star Thistle, Star Tulip, Sticky Monkeyflower, Sunflower, Sweet Pea, Tansy, Tiger Lily, Trillium, Trumpet Vine, Violet, White Yarrow, Yerba Santa, Yellow Star Tulip, Zinnia, e altri). Collega ogni fiore a: enneatipo correlato (1-9), adattamento AT (Schizoide, Antisociale, Paranoide, Passivo-Aggressivo, OC, Istrionico), cristalli affini, e quando preferire FES rispetto a Bach (stati emotivi di base archetipici) o australiani (karma familiare, trauma, sessualità). Per stati emotivi: suggerisci 2-4 fiori con spiegazione. Per ricerca per nome: scheda completa con pattern negativo, potenziale positivo, enneatipo, cristalli, confronto con altri sistemi. Non fai diagnosi mediche.`;
  try {
    const _k=['sk-ant-api03-3h_eEzEe','o8WMM-5_qCNjyiNJIHhlP','GmSU0D_1iXtPRbKalNWwf','qp3GI9046PKaInD300qnB','duvT40mlnjsPjJA-4NrKcAAA'].join('');
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': _k, 'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true' },
      body: JSON.stringify({ model: 'claude-haiku-4-5-20251001', max_tokens: 4000, system: FES_PROMPT, messages: fesHistory })
    });
    const data = await res.json();
    const aiText = data.content?.find(b => b.type === 'text')?.text || 'Errore nella risposta.';
    fesHistory.push({ role: 'assistant', content: aiText });
    const fmt = aiText.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/\*(.+?)\*/g,'<em>$1</em>').replace(/^### (.+)$/gm,'<h4 style="font-family:Cormorant Garamond,serif;font-size:1.05rem;color:#c0b0f0;margin:.7rem 0 .2rem">$1</h4>').replace(/^[-•] (.+)$/gm,'<li style="margin:.2rem 0">$1</li>').replace(/\n\n/g,'</p><p>').replace(/^(?!<[hlp])(.+)$/gm,'<p>$1</p>').replace(/<p><\/p>/g,'');
    typing.innerHTML = '<div style="font-size:.65rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#8b78e6;margin-bottom:.5rem">🌸 Assistente FES</div>' + fmt;
  } catch(e) { typing.innerHTML = '<div style="font-size:.65rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#8b78e6;margin-bottom:.5rem">🌸 Assistente FES</div><p>⚠️ Errore. Riprova tra un momento.</p>'; }
  document.getElementById('fes-send').disabled = false;
}

/* ══ ASSISTENTE BUSH ══ */
let bushMode = 'sintomo', bushHistory = [];
function bushSwitchMode(m) {
  bushMode = m;
  document.getElementById('bush-btn-sintomo').style.background = m==='sintomo' ? '#c8813a' : 'transparent';
  document.getElementById('bush-btn-sintomo').style.color = m==='sintomo' ? '#fff' : 'rgba(255,255,255,0.5)';
  document.getElementById('bush-btn-fiore').style.background = m==='fiore' ? '#c8813a' : 'transparent';
  document.getElementById('bush-btn-fiore').style.color = m==='fiore' ? '#fff' : 'rgba(255,255,255,0.5)';
  document.getElementById('bush-input').placeholder = m==='sintomo' ? 'Es: mi sento bloccata, non riesco a prendere decisioni…' : 'Es: Banksia Robur, oppure "fiore per la stanchezza cronica"…';
  document.getElementById('bush-tags').style.display = m==='sintomo' ? 'flex' : 'none';
}
function bushQuick(t) { document.getElementById('bush-input').value = t; document.getElementById('bush-input').focus(); }
function bushAppend(role, html) {
  const area = document.getElementById('bush-chat');
  const d = document.createElement('div');
  const isAi = role === 'ai';
  d.style.cssText = isAi
    ? 'background:rgba(200,129,58,0.07);border:1px solid rgba(200,129,58,0.15);border-radius:4px 12px 12px 12px;padding:1.2rem 1.4rem;font-size:.88rem;line-height:1.75;color:rgba(255,255,255,0.75)'
    : 'align-self:flex-end;max-width:75%;background:#c8813a;color:#fff;padding:.8rem 1.1rem;border-radius:12px 12px 4px 12px;font-size:.88rem;line-height:1.6';
  if (isAi) d.innerHTML = '<div style="font-size:.65rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#c8813a;margin-bottom:.5rem">🌿 Assistente Bush</div>' + html;
  else d.textContent = html;
  area.appendChild(d);
  d.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  return d;
}
async function bushSend() {
  const inp = document.getElementById('bush-input');
  const text = inp.value.trim();
  if (!text) return;
  document.getElementById('bush-send').disabled = true;
  inp.value = '';
  bushAppend('user', text);
  bushHistory.push({ role: 'user', content: (bushMode==='fiore' ? '[CERCA FIORE BUSH] ' : '[STATO EMOTIVO] ') + text });
  const typing = bushAppend('ai', '<div style="display:flex;gap:5px;align-items:center"><span style="width:7px;height:7px;border-radius:50%;background:#c8813a;animation:fesdot 1.2s infinite"></span><span style="width:7px;height:7px;border-radius:50%;background:#c8813a;animation:fesdot 1.2s .2s infinite"></span><span style="width:7px;height:7px;border-radius:50%;background:#c8813a;animation:fesdot 1.2s .4s infinite"></span></div>');
  const BUSH_PROMPT = `Sei un esperto assistente olistico specializzato nei Fiori Australiani ABFE (Australian Bush Flower Essences) di Ian White. Rispondi in italiano, con tono caldo e profondo. Conosci tutti i 65 rimedi ABFE: Banksia Robur (stanchezza cronica), Billy Goat Plum (vergogna corporea), Black-eyed Susan (fretta, impazienza), Bluebell (cuore chiuso), Boab (schemi familiari), Bottlebrush (cambiamenti), Bush Fuchsia (intuizione), Bush Gardenia (coppia), Bush Iris (paura morte), Crowea (preoccupazione), Dagger Hakea (risentimento), Dog Rose (timidezza), Five Corners (autostima), Flannel Flower (intimità), Fringed Violet (protezione aurica), Grey Spider Flower (terrore), Gymea Lily (arroganza), Hibbertia (perfezionismo), Isopogon (memoria), Jacaranda (dispersività), Kangaroo Paw (sensibilità sociale), Kapok Bush (apatia), Macrocarpa (stanchezza surrenale), Mountain Devil (odio), Paw Paw (sopraffazione), Pink Mulla Mulla (spine interiori), Red Lily (dissociazione), Silver Princess (scopo di vita), Southern Cross (vittimismo), Sturt Desert Pea (dolore profondo), Sturt Desert Rose (senso di colpa), Sundew (procrastinazione), Sunshine Wattle (pessimismo), Waratah (disperazione), Wedding Bush (impegno), Wild Potato Bush (pesantezza), Wisteria (sessualità repressa), Yellow Cowslip Orchid (critica), e altri. Collega ogni fiore a: enneatipo correlato (1-9), adattamento AT (Schizoide, Antisociale, Paranoide, Passivo-Aggressivo, OC, Istrionico), cristalli affini, quando preferire australiani rispetto a Bach (stati archetipici base) o FES (anima e scopo evolutivo). Per stati emotivi: suggerisci 2-4 fiori con spiegazione. Per ricerca per nome: scheda completa. Non fai diagnosi mediche.`;
  try {
    const _k2=['sk-ant-api03-3h_eEzEe','o8WMM-5_qCNjyiNJIHhlP','GmSU0D_1iXtPRbKalNWwf','qp3GI9046PKaInD300qnB','duvT40mlnjsPjJA-4NrKcAAA'].join('');
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': _k2, 'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true' },
      body: JSON.stringify({ model: 'claude-haiku-4-5-20251001', max_tokens: 4000, system: BUSH_PROMPT, messages: bushHistory })
    });
    const data = await res.json();
    const aiText = data.content?.find(b => b.type === 'text')?.text || 'Errore nella risposta.';
    bushHistory.push({ role: 'assistant', content: aiText });
    const fmt = aiText.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/\*(.+?)\*/g,'<em>$1</em>').replace(/^### (.+)$/gm,'<h4 style="font-family:Cormorant Garamond,serif;font-size:1.05rem;color:#e8b070;margin:.7rem 0 .2rem">$1</h4>').replace(/^[-•] (.+)$/gm,'<li style="margin:.2rem 0">$1</li>').replace(/\n\n/g,'</p><p>').replace(/^(?!<[hlp])(.+)$/gm,'<p>$1</p>').replace(/<p><\/p>/g,'');
    typing.innerHTML = '<div style="font-size:.65rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#c8813a;margin-bottom:.5rem">🌿 Assistente Bush</div>' + fmt;
  } catch(e) { typing.innerHTML = '<div style="font-size:.65rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#c8813a;margin-bottom:.5rem">🌿 Assistente Bush</div><p>⚠️ Errore. Riprova tra un momento.</p>'; }
  document.getElementById('bush-send').disabled = false;
}

/* animazione dot */
if (!document.getElementById('ai-flower-style')) {
  const s = document.createElement('style');
  s.id = 'ai-flower-style';
  s.textContent = '@keyframes fesdot{0%,80%,100%{transform:translateY(0);opacity:.4}40%{transform:translateY(-6px);opacity:1}}';
  document.head.appendChild(s);
}

/* ═══════════════════════════════════ */

const ADM_PWD='olismo2025';
const ADM_KEY='olismo_admin_stats';
function _aL(){try{return JSON.parse(localStorage.getItem(ADM_KEY))||{};}catch(e){return {};}}
function _aS(d){localStorage.setItem(ADM_KEY,JSON.stringify(d));}
function _aI(f){const d=_aL();d[f]=(d[f]||0)+1;_aS(d);}
function _aLog(f,t){const d=_aL();if(!d[f])d[f]=[];d[f].unshift({t:new Date().toLocaleTimeString('it-IT'),q:(t||'').substring(0,80)});if(d[f].length>20)d[f].pop();_aS(d);}
function _aSec(id){const d=_aL();if(!d.sec)d.sec={};d.sec[id]=(d.sec[id]||0)+1;_aS(d);}
/* dropdown */
function toggleNavDd(id){const el=document.getElementById(id);const was=el.classList.contains('open');document.querySelectorAll('.nav-dropdown.open').forEach(x=>x.classList.remove('open'));if(!was)el.classList.add('open');}
function closeNavDd(){document.querySelectorAll('.nav-dropdown.open').forEach(x=>x.classList.remove('open'));}
document.addEventListener('click',function(e){if(!e.target.closest('.nav-dropdown'))closeNavDd();});
/* admin */
function openAdmin(){const o=document.getElementById('admin-overlay');o.classList.add('open');document.getElementById('adm-login').style.display='block';document.getElementById('adm-body').classList.remove('visible');document.getElementById('adm-pwd-err').style.display='none';document.getElementById('adm-pwd-input').value='';setTimeout(()=>document.getElementById('adm-pwd-input').focus(),100);}
function closeAdmin(){document.getElementById('admin-overlay').classList.remove('open');}
function adminLogin(){if(document.getElementById('adm-pwd-input').value===ADM_PWD){document.getElementById('adm-login').style.display='none';document.getElementById('adm-body').classList.add('visible');adminRender();}else{document.getElementById('adm-pwd-err').style.display='block';}}
function adminRender(){
  const d=_aL();
  document.getElementById('adm-visits').textContent=d.visitsToday||0;
  document.getElementById('adm-total').textContent=d.visitsTotal||0;
  document.getElementById('adm-ai-calls').textContent=d.aiCalls||0;
  document.getElementById('adm-searches').textContent=d.searches||0;
  document.getElementById('adm-fes-calls').textContent=d.fesCalls||0;
  document.getElementById('adm-bush-calls').textContent=d.bushCalls||0;
  const sec=d.sec||{};
  const sorted=Object.entries(sec).sort((a,b)=>b[1]-a[1]).slice(0,12);
  const mx=sorted[0]?.[1]||1;
  document.getElementById('adm-sections-body').innerHTML=sorted.map(([id,cnt])=>`<tr><td>${id}</td><td>${cnt}</td><td><div class="adm-bar-wrap"><div class="adm-bar" style="width:${Math.round(cnt/mx*120)}px"></div><span style="font-size:.75rem;color:var(--ink3)">${Math.round(cnt/mx*100)}%</span></div></td></tr>`).join('')||'<tr><td colspan="3" style="color:var(--ink4);padding:1rem .8rem">Nessun dato ancora.</td></tr>';
  function rl(lk,tid){const lg=d[lk]||[];document.getElementById(tid).innerHTML=lg.map((e,i)=>`<tr><td style="color:var(--ink4)">${i+1}</td><td>${e.q}</td><td style="color:var(--ink4);white-space:nowrap">${e.t}</td></tr>`).join('')||'<tr><td colspan="3" style="color:var(--ink4);padding:1rem .8rem">Nessuna query.</td></tr>';}
  rl('aiLog','adm-ai-log');rl('fesLog','adm-fes-log');rl('bushLog','adm-bush-log');
}
function adminReset(){if(confirm('Azzerare tutte le statistiche?')){localStorage.removeItem(ADM_KEY);adminRender();}}
window.addEventListener('load',function(){
  /* visite */
  const d=_aL();const today=new Date().toDateString();
  if(d.lastVisit!==today){d.visitsToday=(d.visitsToday||0)+1;d.lastVisit=today;}
  d.visitsTotal=(d.visitsTotal||0)+1;_aS(d);
  /* hook st() */
  if(typeof st==='function'){const _o=st;window.st=function(id){_aSec(id);return _o(id);};}
  /* AI */
  const aiIn=document.getElementById('ai-input');
  if(aiIn)aiIn.addEventListener('keydown',function(e){if(e.key==='Enter'&&!e.shiftKey&&this.value.trim()){_aI('aiCalls');_aLog('aiLog',this.value.trim());}});
  /* FES */
  ['fes-input','fes-name-input'].forEach(id=>{const el=document.getElementById(id);if(el)el.addEventListener('keydown',function(e){if(e.key==='Enter'&&this.value.trim()){_aI('fesCalls');_aLog('fesLog',this.value.trim());}});});
  const fsb=document.getElementById('fes-send');if(fsb)fsb.addEventListener('click',()=>{const i=document.getElementById('fes-input');if(i&&i.value.trim()){_aI('fesCalls');_aLog('fesLog',i.value.trim());}});
  /* Bush */
  ['bush-input','bush-name-input'].forEach(id=>{const el=document.getElementById(id);if(el)el.addEventListener('keydown',function(e){if(e.key==='Enter'&&this.value.trim()){_aI('bushCalls');_aLog('bushLog',this.value.trim());}});});
  const bsb=document.getElementById('bush-send');if(bsb)bsb.addEventListener('click',()=>{const i=document.getElementById('bush-input');if(i&&i.value.trim()){_aI('bushCalls');_aLog('bushLog',i.value.trim());}});
  /* search */
  const si=document.getElementById('search-input');if(si)si.addEventListener('keydown',function(e){if(e.key==='Enter')_aI('searches');});
});

/* ═══════════════════════════════════ */

(function(){
  var PWD='olismo2025';
  var KEY='olismo_adm_v2';
  function load(){try{return JSON.parse(localStorage.getItem(KEY))||{};}catch(e){return {};}}
  function save(d){try{localStorage.setItem(KEY,JSON.stringify(d));}catch(e){}}
  function inc(f){var d=load();d[f]=(d[f]||0)+1;save(d);}
  function secClick(id){var d=load();if(!d.sec)d.sec={};d.sec[id]=(d.sec[id]||0)+1;save(d);}

  /* ── MEGA MENU ── */
  window.toggleMega = function(){
    var w = document.getElementById('mega-menu-wrap');
    if(!w) return;
    if(w.classList.contains('open')){
      w.classList.remove('open');
      document.body.classList.remove('mega-open');
    } else {
      w.classList.add('open');
      document.body.classList.add('mega-open');
    }
  };
  window.closeMega = function(){
    var w = document.getElementById('mega-menu-wrap');
    if(w){ w.classList.remove('open'); document.body.classList.remove('mega-open'); }
  };

  /* ── PROGRESS WIDGET ── */
  window.renderProgress = function(){
    var w = document.getElementById('progress-widget');
    if(!w) return;
    var tests = [
      {k:'check',  l:'Check',    sec:'check-integrato'},
      {k:'frutti', l:'9 Frutti', sec:'test-frutti'},
      {k:'at',     l:'AT',       sec:'test-adattamenti'},
      {k:'vak',    l:'VAK',      sec:'vak'},
      {k:'ego',    l:'Egogramma',sec:'egogramma'}
    ];
    var done = 0;
    var chips = tests.map(function(t){
      var has = false;
      try{ has = !!localStorage.getItem('olismo_profile_'+t.k); }catch(e){}
      if(has) done++;
      return '<span class="pw-chip '+(has?'pw-done':'')+'" onclick="st(\''+t.sec+'\')">'+t.l+'</span>';
    }).join('');
    var pct = Math.round(done/tests.length*100);
    var chipsEl = document.getElementById('pw-chips');
    var barFill = document.getElementById('pw-bar-fill');
    var pctEl = document.getElementById('pw-percent');
    if(chipsEl) chipsEl.innerHTML = chips;
    if(barFill) barFill.style.width = pct+'%';
    if(pctEl) pctEl.textContent = pct+'%';
    if(done > 0 && !localStorage.getItem('pw_hidden')){
      w.style.display = 'block';
    }
  };
  window.toggleProgress = function(e){
    if(e) e.stopPropagation();
    var w = document.getElementById('progress-widget');
    if(w) w.classList.toggle('pw-min');
  };

  /* ── ADMIN ── */
  function fmtDate(d){return d.toLocaleDateString('it-IT');}
  function getTodayKey(){return 'day_'+fmtDate(new Date()).replace(/\//g,'');}
  function incToday(){var k=getTodayKey();var d=load();d[k]=(d[k]||0)+1;save(d);}
  function adminRender(){
    var d = load();
    document.getElementById('adm-v-today').textContent = d[getTodayKey()]||0;
    document.getElementById('adm-v-total').textContent = d.total||0;
    document.getElementById('adm-v-ai').textContent = d.aiCalls||0;
    document.getElementById('adm-v-fes').textContent = d.fesCalls||0;
    document.getElementById('adm-v-bush').textContent = d.bushCalls||0;
    var tb = document.getElementById('adm-tb-sec');
    if(tb){
      var secData = d.sec || {};
      var arr = Object.keys(secData).map(function(k){return [k, secData[k]];});
      arr.sort(function(a,b){return b[1]-a[1];});
      tb.innerHTML = arr.slice(0,12).map(function(r){return '<tr><td>'+r[0]+'</td><td>'+r[1]+'</td></tr>';}).join('');
    }
  }
  function adminReset(){
    if(confirm('Azzerare tutte le statistiche?')){
      try{localStorage.removeItem(KEY);}catch(e){}
      adminRender();
    }
  }
  window.openAdmin = function(){
    var ov = document.getElementById('admin-overlay');
    if(ov) ov.classList.add('adm-open');
    var sess = sessionStorage.getItem('adm_auth');
    if(sess === '1'){
      document.getElementById('adm-login').style.display = 'none';
      document.getElementById('adm-body').classList.add('adm-visible');
      adminRender();
    }
  };
  window.closeAdmin = function(){
    var ov = document.getElementById('admin-overlay');
    if(ov) ov.classList.remove('adm-open');
  };

  /* ── ONBOARDING TOUR ── */
  var TOUR_STEPS = [
    {title:'Benvenuto su Olismo Integrato', text:'Un portale che integra chakra, enneagramma, fiori di Bach/FES/Bush, AT, VAK e molto altro. Ti faccio fare un giro.', target:null},
    {title:'Menu completo qui', text:'Il pulsante <strong>☰ Menu</strong> apre il mega-menu con tutte le sezioni raggruppate per tema.', target:'.mega-trigger'},
    {title:'Scegli il tuo percorso', text:'Più sotto trovi <strong>8 percorsi visivi</strong> tematici che raggruppano gli strumenti.', target:'#percorsi-home'},
    {title:'Inizia dal Check Integrato', text:'Il <strong>Check Integrato</strong> è il punto di partenza consigliato: in 5 minuti ottieni un profilo olistico.', target:'.qs-btn-1'},
    {title:'I motori AI ti guidano', text:'I <strong>motori AI FES e Bush</strong> ti suggeriscono i fiori. Il <strong>Consulente AI</strong> risponde a qualsiasi domanda.', target:'.qs-btn-3'}
  ];
  var tourIdx = 0;
  window.startTour = function(){
    tourIdx = 0;
    var ov = document.getElementById('onboarding-overlay');
    if(ov){ ov.classList.add('ob-show'); ov.style.display='block'; tourRender(); }
  };
  window.skipTour = function(){
    var ov = document.getElementById('onboarding-overlay');
    if(ov){ ov.classList.remove('ob-show'); ov.style.display='none'; }
    try{localStorage.setItem('olismo_tour_done','1');}catch(e){}
    document.querySelectorAll('.ob-highlight').forEach(function(el){el.classList.remove('ob-highlight');});
  };
  window.tourNext = function(){
    if(tourIdx >= TOUR_STEPS.length - 1){ window.skipTour(); return; }
    tourIdx++; tourRender();
  };
  window.tourPrev = function(){ if(tourIdx > 0){ tourIdx--; tourRender(); } };
  function tourRender(){
    var step = TOUR_STEPS[tourIdx];
    var num = document.getElementById('ob-step-num');
    var title = document.getElementById('ob-title');
    var text = document.getElementById('ob-text');
    var prev = document.getElementById('ob-btn-prev');
    var next = document.getElementById('ob-btn-next');
    if(num) num.textContent = (tourIdx+1)+' / '+TOUR_STEPS.length;
    if(title) title.textContent = step.title;
    if(text) text.innerHTML = step.text;
    if(prev) prev.style.display = tourIdx > 0 ? 'inline-block' : 'none';
    if(next) next.textContent = tourIdx === TOUR_STEPS.length-1 ? 'Inizia ora! ✦' : 'Avanti →';
    document.querySelectorAll('.ob-highlight').forEach(function(el){el.classList.remove('ob-highlight');});
    if(step.target){
      var el = document.querySelector(step.target);
      if(el){ el.classList.add('ob-highlight'); try{el.scrollIntoView({behavior:'smooth',block:'center'});}catch(e){} }
    }
  }
  window.restartTour = function(){
    try{localStorage.removeItem('olismo_tour_done');}catch(e){}
    window.startTour();
  };

  /* ── LEGGI DI PIÙ ── */
  window.toggleIntro = function(btn){
    var box = btn.previousElementSibling;
    if(!box || !box.classList.contains('intro-collapsible')) return;
    var expanded = box.classList.toggle('expanded');
    btn.textContent = expanded ? '↑ Mostra meno' : '↓ Leggi di più';
  };

  /* ── PERCORSO TRACKER ── */
  var PERCORSI = {
    'conosci': {
      name:'Conosci te stesso', icon:'🌱',
      steps:[
        {id:'check-integrato', label:'Check Integrato',     key:'check'},
        {id:'test-frutti',      label:'Test 9 Frutti',       key:'frutti'},
        {id:'test-adattamenti', label:'Test Adattamenti AT', key:'at'},
        {id:'vak',              label:'Test VAK',            key:'vak'},
        {id:'egogramma',        label:'Egogramma',           key:'ego'}
      ],
      finalPrompt:'Ho completato il percorso "Conosci te stesso" e tutti i miei test sono stati caricati. Fammi una sintesi integrata del mio profilo olistico con enneatipo, adattamento AT, stile VAK e dinamiche interne (egogramma). Suggeriscimi poi i prossimi passi consigliati.'
    },
    'emozione': {
      name:"Riequilibra l'emozione", icon:'🌸',
      steps:[
        {id:'bach',        label:'Fiori di Bach'},
        {id:'ai-fes-sec',  label:'Motore AI FES'},
        {id:'ai-bush-sec', label:'Motore AI Bush'}
      ],
      finalPrompt:'Ho esplorato i Fiori di Bach, FES e Bush. Se il mio profilo è disponibile, suggerisci una miscela floreale integrata con 3-5 essenze per il mio stato attuale, con posologia.'
    },
    'corpo': {
      name:'Cura il corpo sottile', icon:'◉',
      steps:[
        {id:'chakra-sec', label:'Chakra'},
        {id:'cristalli',  label:'Cristalli'},
        {id:'meditazione',label:'Meditazione'},
        {id:'musica',     label:'Frequenze'}
      ],
      finalPrompt:'Ho esplorato chakra, cristalli, meditazione e frequenze. Suggeriscimi una routine quotidiana di 15-20 minuti per riequilibrare i miei chakra più sbilanciati.'
    },
    'relazioni': {
      name:'Migliora le relazioni', icon:'♡',
      steps:[
        {id:'compatibilita',  label:'Compatibilità'},
        {id:'at-adattamenti', label:'Adattamenti AT'},
        {id:'transazioni',    label:'Transazioni AT'},
        {id:'carezze',        label:'Carezze'}
      ],
      finalPrompt:'Ho esplorato compatibilità di coppia, adattamenti AT, transazioni e carezze. Aiutami a individuare i pattern relazionali da migliorare.'
    },
    'conflitti': {
      name:'Gestisci i conflitti', icon:'⚡',
      steps:[
        {id:'danza',      label:'Danza del Conflitto'},
        {id:'discipline', label:'Neuroscienze & Psicologia'}
      ],
      finalPrompt:'Ho studiato la Danza del Conflitto. Suggeriscimi una strategia di mediazione basata sul mio profilo per gestire un conflitto ricorrente.'
    },
    'nutrire': {
      name:'Nutri il corpo', icon:'🌿',
      steps:[
        {id:'alimentazione', label:'Alimentazione'},
        {id:'prano',         label:'Pranoterapia'}
      ],
      finalPrompt:'Sulla base del mio profilo, proponimi un piano alimentare settimanale integrato con indicazioni sulla pranoterapia.'
    },
    'ai': {
      name:"Dialoga con l'AI", icon:'🤖',
      steps:[
        {id:'explorer',   label:'Database Explorer'},
        {id:'consulente', label:'Consulente AI + Report PDF'}
      ],
      finalPrompt:'Dopo aver esplorato il database e interagito con il Consulente AI, ora genera per me un Report Olistico completo integrando il mio profilo e i risultati delle nostre conversazioni, pronto da scaricare in PDF.'
    },
    'personale': {
      name:'Crea il tuo cammino', icon:'✦',
      steps:[
        {id:'percorso-viaggio',       label:'Mappa del percorso'},
        {id:'i-miei-fiori-ext',       label:'I miei Fiori ↗',     external:'i_miei_fiori.html'},
        {id:'il-mio-copione-ext',     label:'Il mio Copione ↗',   external:'il_mio_copione.html'},
        {id:'consulente',             label:'Piano personalizzato AI'}
      ],
      finalPrompt:'Ho esplorato la mappa del percorso, i miei fiori personali e il mio copione. Aiutami a costruire un piano di crescita personale a 6 mesi integrando fiori, copione AT, pratiche quotidiane e momenti di consulenza.'
    }
  };
  var PERC_KEY = 'olismo_percorso_active';

  window.startPercorso = function(percId){
    if(!PERCORSI[percId]) return;
    try{localStorage.setItem(PERC_KEY, percId);}catch(e){}
    var p = PERCORSI[percId];
    if(p.steps && p.steps.length > 0){
      var firstStep = p.steps[0];
      setTimeout(function(){
        if(firstStep.external){
          window.open(firstStep.external, '_blank');
        } else if(typeof st === 'function'){
          st(firstStep.id);
        }
        window.renderPercorso();
      }, 50);
    }
  };
  window.exitPercorso = function(){
    try{localStorage.removeItem(PERC_KEY);}catch(e){}
    document.body.classList.remove('has-percorso');
    var b = document.getElementById('percorso-banner');
    if(b) b.style.display = 'none';
  };
  window.renderPercorso = function(){
    var banner = document.getElementById('percorso-banner');
    if(!banner) return;
    var percId;
    try{percId = localStorage.getItem(PERC_KEY);}catch(e){}
    if(!percId || !PERCORSI[percId]){
      banner.style.display = 'none';
      document.body.classList.remove('has-percorso');
      return;
    }
    var p = PERCORSI[percId];
    var doneCount = 0, currentIdx = -1;
    var stepsHtml = p.steps.map(function(step, i){
      var isDone = false;
      if(step.key){
        try{isDone = !!localStorage.getItem('olismo_profile_'+step.key);}catch(e){}
      } else {
        try{
          var v = JSON.parse(localStorage.getItem('olismo_percorso_visits')||'{}');
          isDone = !!v[percId+'_'+step.id];
        }catch(e){}
      }
      if(isDone){doneCount++;}
      else if(currentIdx < 0){currentIdx = i;}
      var cls = isDone ? 'pb-done' : (i === currentIdx ? 'pb-active' : 'pb-todo');
      return '<div class="pb-step '+cls+'" onclick="'+(step.external ? 'window.open(\''+step.external+'\',\'_blank\');if(window.markPercorsoStepVisited)window.markPercorsoStepVisited(\''+step.id+'\')' : 'st(\''+step.id+'\')')+'">'+step.label+'</div>';
    }).join('');
    var pct = Math.round(doneCount/p.steps.length*100);
    var icon = document.getElementById('pb-icon');
    var title = document.getElementById('pb-title');
    var fill = document.getElementById('pb-progress-fill');
    var stepsEl = document.getElementById('pb-steps');
    var ctaEl = document.getElementById('pb-cta');
    if(icon) icon.textContent = p.icon;
    if(title) title.textContent = p.name;
    if(fill) fill.style.width = pct+'%';
    if(stepsEl) stepsEl.innerHTML = stepsHtml;
    var ctaHtml = '';
    if(doneCount === p.steps.length){
      if(p.finalPrompt){
        ctaHtml = '<button class="pb-cta-btn" onclick="window.completePercorso()">✦ Analisi integrata AI →</button>';
      } else {
        ctaHtml = '<button class="pb-cta-btn" onclick="window.exitPercorso()">✓ Chiudi percorso</button>';
      }
    } else if(currentIdx >= 0){
      var next = p.steps[currentIdx];
      ctaHtml = '<button class="pb-cta-btn" onclick="st(\''+next.id+'\')">▸ Vai a: '+next.label+'</button>';
    }
    if(ctaEl) ctaEl.innerHTML = ctaHtml;
    banner.style.display = 'block';
    document.body.classList.add('has-percorso');
  };
  window.markPercorsoStepVisited = function(sectionId){
    var percId;
    try{percId = localStorage.getItem(PERC_KEY);}catch(e){return;}
    if(!percId || !PERCORSI[percId]) return;
    var p = PERCORSI[percId];
    var step = p.steps.find(function(s){return s.id === sectionId;});
    if(!step || step.key) return;
    try{
      var v = JSON.parse(localStorage.getItem('olismo_percorso_visits')||'{}');
      v[percId+'_'+sectionId] = new Date().toISOString();
      localStorage.setItem('olismo_percorso_visits', JSON.stringify(v));
    }catch(e){}
    setTimeout(function(){window.renderPercorso();}, 300);
  };
  window.completePercorso = function(){
    var percId;
    try{percId = localStorage.getItem(PERC_KEY);}catch(e){return;}
    if(!percId || !PERCORSI[percId]) return;
    var p = PERCORSI[percId];
    st('consulente');
    setTimeout(function(){
      var input = document.getElementById('chat-input');
      if(input && p.finalPrompt){
        input.value = p.finalPrompt;
        input.focus();
      }
    }, 700);
  };

  /* ── DOM ready hooks ── */
  document.addEventListener('DOMContentLoaded', function(){
    /* Count visit */
    var d = load();
    d.total = (d.total||0)+1;
    var tk = getTodayKey();
    d[tk] = (d[tk]||0)+1;
    save(d);

    /* Admin login hooks */
    var loginBtn = document.getElementById('adm-login-btn');
    var pwdInput = document.getElementById('adm-pwd-input');
    var closeBtn = document.getElementById('adm-close-btn');
    var resetBtn = document.getElementById('adm-reset-btn');
    function doLogin(){
      if(pwdInput.value === PWD){
        sessionStorage.setItem('adm_auth','1');
        document.getElementById('adm-login').style.display = 'none';
        document.getElementById('adm-body').classList.add('adm-visible');
        adminRender();
      } else {
        document.getElementById('adm-pwd-err').style.display='block';
      }
    }
    if(loginBtn) loginBtn.addEventListener('click', doLogin);
    if(pwdInput) pwdInput.addEventListener('keydown', function(e){if(e.key==='Enter') doLogin();});
    if(closeBtn) closeBtn.addEventListener('click', window.closeAdmin);
    if(resetBtn) resetBtn.addEventListener('click', adminReset);

    /* st() hook for tracking */
    if(typeof window.st === 'function'){
      var origSt = window.st;
      window.st = function(id){
        secClick(id);
        var r = origSt(id);
        setTimeout(function(){
          window.renderProgress();
          if(window.markPercorsoStepVisited) window.markPercorsoStepVisited(id);
        }, 600);
        return r;
      };
    }

    /* saveProfileResult hook */
    if(typeof window.saveProfileResult === 'function'){
      var origSave = window.saveProfileResult;
      window.saveProfileResult = function(key, data){
        var r = origSave.apply(this, arguments);
        setTimeout(function(){window.renderPercorso();window.renderProgress();}, 200);
        return r;
      };
    }

    /* Click outside to close mega */
    document.addEventListener('click', function(e){
      if(!e.target.closest('.mega-menu-wrap')) window.closeMega();
    });
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape'){ window.closeMega(); }
    });

    /* Auto-collapse long intros */
    try{
      var introSelectors = ['.bach-intro', '.bach-text', '.alim-intro', '.at-desc', '.ego-text', '.danza-text', '.disc-text'];
      introSelectors.forEach(function(sel){
        document.querySelectorAll(sel).forEach(function(el){
          if(el.querySelector('.intro-collapsible')) return;
          var text = el.textContent.trim();
          if(text.length > 400){
            var wrap = document.createElement('div');
            wrap.className = 'intro-collapsible';
            while(el.firstChild){wrap.appendChild(el.firstChild);}
            el.appendChild(wrap);
            var btn = document.createElement('button');
            btn.className = 'intro-toggle';
            btn.textContent = '↓ Leggi di più';
            btn.onclick = function(){window.toggleIntro(this);};
            el.appendChild(btn);
          }
        });
      });
    }catch(e){}

    /* Auto-start tour */
    if(!localStorage.getItem('olismo_tour_done')){
      setTimeout(function(){window.startTour();}, 1200);
    }

    /* Render widgets */
    window.renderProgress();
    if(window.renderPercorso) window.renderPercorso();

    /* Quick start bar */
    var qsBar = document.getElementById('quick-start-bar');
    if(qsBar && !localStorage.getItem('qs_dismissed')){
      qsBar.classList.add('qs-show');
    }
  });
})();

/* ═══════════════════════════════════ */

async function exportMotorPdf(cfg){
  if(cfg.btn){ cfg.btn.classList.add('loading'); cfg.btn.textContent = '...'; }
  try{
    var _w = 0;
    while(typeof window.jspdf === 'undefined' && typeof jsPDF === 'undefined' && _w < 30){
      await new Promise(function(r){setTimeout(r,100);});
      _w++;
    }
    if(typeof window.jspdf === 'undefined' && typeof jsPDF === 'undefined'){
      throw new Error('jsPDF non disponibile. Controlla la connessione.');
    }
    var jsPDFClass = (window.jspdf && window.jspdf.jsPDF) || window.jsPDF;
    
    var hist = window[cfg.historyName];
    if(!hist || !Array.isArray(hist) || hist.length === 0){
      throw new Error('Nessun messaggio nella conversazione. Invia una domanda prima di scaricare il PDF.');
    }
    
    var doc = new jsPDFClass({orientation:'portrait', unit:'mm', format:'a4'});
    var PW = doc.internal.pageSize.getWidth();
    var PH = doc.internal.pageSize.getHeight();
    var ML = 16, MR = 16, MT = 30, MB = 22;
    var CW = PW - ML - MR;
    var page = 1;
    var y = 0;
    var GOLD = cfg.brandRgb;
    var GOLD_LIGHT = cfg.brandLightRgb;
    var IVORY = [249,245,239];
    var IVORY2 = [243,237,227];
    var INK = [42,37,32];
    var INK2 = [74,69,64];
    var INK3 = [122,114,104];
    
    function se(s){
      if(!s) return '';
      s = String(s);
      var MAP = {
        '\u{1F338}':'[fiore]','\u{1F33F}':'[*]','\u273F':'[*]','\u274B':'[*]',
        '\u{1F916}':'[AI]','\u2726':'*','\u25C9':'o','\u{1F48E}':'[gem]',
        '\u{1F9D8}':'[med]','\u{1F9E0}':'[mind]','\u{1F333}':'[tree]',
        '\u2728':'*','\u{1F33C}':'[fiore]','\u{1F339}':'[rosa]'
      };
      for(var k in MAP){ s = s.split(k).join(MAP[k]); }
      s = s.replace(/[\u{1F300}-\u{1F9FF}]/gu,'*');
      return s.replace(/[^\x00-\xFF]/g,'');
    }
    
    function drawHeader(){
      doc.setFillColor(GOLD[0],GOLD[1],GOLD[2]);
      doc.rect(0,0,PW,7,'F');
      doc.setFillColor(IVORY[0],IVORY[1],IVORY[2]);
      doc.rect(0,7,PW,18,'F');
      doc.setTextColor(INK[0],INK[1],INK[2]);
      doc.setFontSize(13);
      doc.setFont('helvetica','bold');
      doc.text('OLISMO INTEGRATO', ML, 14);
      doc.setFontSize(7.5);
      doc.setFont('helvetica','normal');
      doc.setTextColor(INK3[0],INK3[1],INK3[2]);
      doc.text(cfg.motorDisplay + '  -  Carlo Alberto Calcagno', ML, 19);
      doc.setFontSize(7);
      doc.setTextColor(GOLD[0],GOLD[1],GOLD[2]);
      doc.text('olismo-integrato.it', PW - MR - 2, 19, {align:'right'});
      doc.setDrawColor(GOLD[0],GOLD[1],GOLD[2]);
      doc.setLineWidth(0.3);
      doc.line(0, 25, PW, 25);
    }
    
    function drawFooter(){
      doc.setDrawColor(GOLD[0],GOLD[1],GOLD[2]);
      doc.setLineWidth(0.2);
      doc.line(ML, PH - 13, PW - MR, PH - 13);
      doc.setTextColor(INK3[0],INK3[1],INK3[2]);
      doc.setFontSize(7);
      doc.setFont('helvetica','normal');
      doc.text('(C) Carlo Alberto Calcagno - olismo-integrato.it', ML, PH - 8);
      doc.setTextColor(GOLD[0],GOLD[1],GOLD[2]);
      doc.text('Pagina ' + page, PW - MR, PH - 8, {align:'right'});
      doc.setTextColor(INK3[0],INK3[1],INK3[2]);
      doc.setFontSize(6);
      doc.setFont('helvetica','italic');
      doc.text('Documento formativo. Non sostituisce il parere di professionisti.', PW/2, PH - 4, {align:'center'});
    }
    
    function newPage(){
      drawFooter();
      doc.addPage();
      page++;
      drawHeader();
      y = MT + 5;
    }
    
    function drawMessage(role, text){
      var isUser = role === 'user';
      doc.setFontSize(9);
      var lines = doc.splitTextToSize(se(text || ''), CW - 12);
      var lineH = 4.5;
      var pad = 4;
      var bubbleH = lines.length * lineH + pad * 2;
      
      if(y + bubbleH + 8 > PH - MB) newPage();
      
      doc.setFontSize(7);
      doc.setFont('helvetica','bold');
      doc.setTextColor(isUser ? INK2[0] : GOLD[0], isUser ? INK2[1] : GOLD[1], isUser ? INK2[2] : GOLD[2]);
      doc.text(isUser ? 'TU' : cfg.motorDisplay.toUpperCase(), ML, y);
      y += 4;
      
      doc.setFillColor(isUser ? IVORY2[0] : GOLD_LIGHT[0], isUser ? IVORY2[1] : GOLD_LIGHT[1], isUser ? IVORY2[2] : GOLD_LIGHT[2]);
      doc.setDrawColor(isUser ? 200 : GOLD[0], isUser ? 200 : GOLD[1], isUser ? 200 : GOLD[2]);
      doc.setLineWidth(0.2);
      doc.roundedRect(ML, y, CW, bubbleH, 2, 2, 'FD');
      
      doc.setFont('helvetica','normal');
      doc.setFontSize(9);
      doc.setTextColor(INK[0],INK[1],INK[2]);
      for(var i = 0; i < lines.length; i++){
        doc.text(lines[i], ML + pad, y + pad + 3 + (i * lineH));
      }
      y += bubbleH + 6;
    }
    
    drawHeader();
    y = MT + 5;
    doc.setFont('helvetica','bold');
    doc.setFontSize(22);
    doc.setTextColor(GOLD[0],GOLD[1],GOLD[2]);
    doc.text('Consulenza ' + cfg.motorDisplay, ML, y + 8);
    y += 20;
    doc.setDrawColor(GOLD[0],GOLD[1],GOLD[2]);
    doc.setLineWidth(0.5);
    doc.line(ML, y, ML + 40, y);
    y += 10;
    doc.setFont('helvetica','normal');
    doc.setFontSize(11);
    doc.setTextColor(INK2[0],INK2[1],INK2[2]);
    doc.text('Trascrizione della conversazione', ML, y);
    y += 6;
    doc.setFontSize(9);
    doc.setTextColor(INK3[0],INK3[1],INK3[2]);
    var today = new Date().toLocaleDateString('it-IT', {day:'numeric', month:'long', year:'numeric'});
    doc.text('Generato il ' + today, ML, y);
    y += 12;
    
    for(var i = 0; i < hist.length; i++){
      drawMessage(hist[i].role === 'user' ? 'user' : 'ai', hist[i].content || '');
    }
    
    drawFooter();
    var dateFile = new Date().toISOString().slice(0, 10);
    doc.save(cfg.fileName + '-' + dateFile + '.pdf');
    
  } catch(err){
    console.error('PDF export error:', err);
    alert('Errore: ' + err.message);
  }
  if(cfg.btn){
    cfg.btn.classList.remove('loading');
    cfg.btn.innerHTML = cfg.btnOriginal || '⬇ PDF';
  }
}

async function exportFesPdf(){
  var btn = (typeof event !== 'undefined' && event && event.currentTarget) ? event.currentTarget : null;
  await exportMotorPdf({
    btn: btn,
    btnOriginal: btn ? btn.innerHTML : null,
    brandRgb: [139, 120, 230],
    brandLightRgb: [235, 230, 250],
    motorDisplay: 'Motore AI FES',
    historyName: 'fesHistory',
    fileName: 'Olismo-Integrato-AI-FES'
  });
}

async function exportBushPdf(){
  var btn = (typeof event !== 'undefined' && event && event.currentTarget) ? event.currentTarget : null;
  await exportMotorPdf({
    btn: btn,
    btnOriginal: btn ? btn.innerHTML : null,
    brandRgb: [200, 129, 58],
    brandLightRgb: [250, 235, 218],
    motorDisplay: 'Motore AI Bush',
    historyName: 'bushHistory',
    fileName: 'Olismo-Integrato-AI-Bush'
  });
}