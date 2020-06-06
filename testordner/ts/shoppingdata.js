var Aufgabe12;
(function (Aufgabe12) {
    var marimba = {
        bezeichnung: "Marimba One Marimba 3100 A=443 Hz (5)",
        kurzBeschreibung: ["Malletinstrument", " 5 Oktaven"],
        preis: 19998,
        verfügbareArtikel: 5,
        lieferDauer: "2-3 Wochen",
        aktion: true,
        erstmaligErschienen: 2002,
        höhe: 98,
        breite: 251,
        tiefe: 105,
        imgSrc: "marimba.jpg",
        link: "https://www.thomann.de/de/prod_AR_361706.html",
        stoerer: "Top deal",
    };
    function showMarimba() {
        /*console.log('Bezeichnung: ' + marimba.bezeichnung);
        console.log('Kurzbeschreibung: ' + marimba.kurzBeschreibung);
        console.log('Preis: ' + marimba.preis + '€');
        console.log('Verfügbare Artikel: ' + marimba.verfügbareArtikel);
        console.log('Lieferdauer: ' + marimba.lieferDauer);
        console.log('Aktion: ' + marimba.aktion);
        console.log('erstmalig erschienen: ' + marimba.erstmaligErschienen);
*/
    }
    //gibt Info direkt beim Öffnen auf der Konsole aus
    showMarimba();
    //Infos werden zusätzlich auch beim Click auf den jeweiligen Button in der Konsole ausgegeben
    var vibraphon = {
        bezeichnung: "Musser M55G A=442 Vibraphon",
        kurzBeschreibung: ["Malletinstrument", " 2.5 Oktaven"],
        preis: 7399,
        verfügbareArtikel: 7,
        lieferDauer: "4 Wochen",
        aktion: false,
        erstmaligErschienen: 2005,
        höhe: 80,
        breite: 205,
        tiefe: 86,
        imgSrc: "vibraphon.jpg",
        link: "https://www.thomann.de/de/musser_vibraphon_provibe_gold_a442.htm",
        stoerer: "",
    };
    function showVibraphon() {
        /*  console.log('Bezeichnung: ' + vibraphon.bezeichnung);
          console.log('Kurzbeschreibung: ' + vibraphon.kurzBeschreibung);
          console.log('Preis: ' + vibraphon.preis + '€');
          console.log('Verfügbare Artikel: ' + vibraphon.verfügbareArtikel);
          console.log('Lieferdauer: ' + vibraphon.lieferDauer);
          console.log('Aktion: ' + vibraphon.aktion);
          console.log('erstmalig erschienen: ' + vibraphon.erstmaligErschienen);
     */ }
    //gibt Info direkt beim Öffnen auf der Konsole aus
    showVibraphon();
    var xylophon = {
        bezeichnung: "Adams XS2LV40 Solist XylophoneA=442",
        kurzBeschreibung: ["Malletinstrument", " 3.5 Oktaven"],
        preis: 1439,
        verfügbareArtikel: 12,
        lieferDauer: "2 Wochen",
        aktion: false,
        erstmaligErschienen: 2000,
        höhe: 100,
        breite: 68,
        tiefe: 105,
        imgSrc: "xylophon.jpg",
        link: "https://www.thomann.de/de/adams_xylophone_solist_xs2lv_40.htm",
        stoerer: "",
    };
    function showXylophon() {
        /* console.log('Bezeichnung: ' + xylophon.bezeichnung);
         console.log('Kurzbeschreibung: ' + xylophon.kurzBeschreibung);
         console.log('Preis: ' + xylophon.preis + '€');
         console.log('Verfügbare Artikel: ' + xylophon.verfügbareArtikel);
         console.log('Lieferdauer: ' + xylophon.lieferDauer);
         console.log('Aktion: ' + xylophon.aktion);
         console.log('erstmalig erschienen: ' + xylophon.erstmaligErschienen);
     */ }
    //gibt Info direkt beim Öffnen auf der Konsole aus
    showXylophon();
    var glockenspiel = {
        bezeichnung: "Studio 49 RGC 3030 Glockenspiel A=443 M",
        kurzBeschreibung: ["Malletinstrument", " 2.5 Oktaven"],
        preis: 3790,
        verfügbareArtikel: 8,
        lieferDauer: "3 Wochen",
        aktion: false,
        erstmaligErschienen: 2010,
        höhe: 100,
        breite: 156,
        tiefe: 68,
        imgSrc: "glockenspiel.jpg",
        link: "https://www.thomann.de/de/studio_49_rgc_3030_glockenspiel_a443.htm",
        stoerer: "",
    };
    var roehrenglocken = {
        bezeichnung: "Adams BK 2001 Röhrenglocken A=442",
        kurzBeschreibung: ["Malletinstrument", " 1.5 Oktaven"],
        preis: 4829,
        verfügbareArtikel: 8,
        lieferDauer: "1 Woche",
        aktion: false,
        erstmaligErschienen: 2002,
        höhe: 169,
        breite: 81,
        tiefe: 60,
        imgSrc: "roehrenglocken.jpg",
        link: "https://www.thomann.de/de/adams_bk2001_roehrenglocken.htm",
        stoerer: "",
    };
    var pauken = {
        bezeichnung: "Adams 29 2PAUFFI29 FS Universal Fiberglas Kesselpauke",
        kurzBeschreibung: ["Percussioninstrument", " 4 Größen"],
        preis: 1959,
        verfügbareArtikel: 3,
        lieferDauer: "1 Woche",
        aktion: true,
        erstmaligErschienen: 2005,
        höhe: 120,
        breite: 95,
        tiefe: 95,
        imgSrc: "pauken.jpg",
        link: "https://www.thomann.de/de/adams_29_fiberglass_pauke_feinstimm.htm",
        stoerer: "mit Ersatzfell",
    };
    var geige = {
        bezeichnung: "Edgar Russ Linea Mauro Macchi Violin Gua.",
        kurzBeschreibung: ["Streichinstrument", " 5 Größen"],
        preis: 7490,
        verfügbareArtikel: 15,
        lieferDauer: "3 Wochen",
        aktion: true,
        erstmaligErschienen: 2016,
        höhe: 15,
        breite: 25,
        tiefe: 50,
        imgSrc: "geige.jpg",
        link: "https://www.thomann.de/de/edgar_russ_linea_mauro_macchi_violin_gua.htm",
        stoerer: "nur noch 2 verfügbar",
    };
    var egeige = {
        bezeichnung: "Yamaha SV-255 Silent Violine",
        kurzBeschreibung: ["E-Streichinstrument", " 5 Größen"],
        preis: 1563,
        verfügbareArtikel: 20,
        lieferDauer: "2 Wochen",
        aktion: false,
        erstmaligErschienen: 2016,
        höhe: 15,
        breite: 25,
        tiefe: 50,
        imgSrc: "egeige.jpg",
        link: "https://www.thomann.de/de/yamaha_sv255.htm",
        stoerer: "",
    };
    var schulterstuetze = {
        bezeichnung: "Everest Shoulder Rest 4/4 Violin",
        kurzBeschreibung: ["Zubehör", " Größenverstellbar"],
        preis: 17.90,
        verfügbareArtikel: 100,
        lieferDauer: "5 Tage",
        aktion: true,
        erstmaligErschienen: 2010,
        höhe: 7,
        breite: 5,
        tiefe: 50,
        imgSrc: "schulterstuetze.jpg",
        link: "https://www.thomann.de/de/everest_shoulder_rest_44_violin.htm",
        stoerer: "neu!",
    };
    var saiten = {
        bezeichnung: "Pirastro Gold E Violin 4/4 KGL Medium",
        kurzBeschreibung: ["Zubehör", " 4 verschiedene Saiten"],
        preis: 4.90,
        verfügbareArtikel: 30,
        lieferDauer: "1 Woche",
        aktion: false,
        erstmaligErschienen: 2012,
        höhe: 3,
        breite: 10,
        tiefe: 10,
        imgSrc: "saiten.jpg",
        link: "https://www.thomann.de/de/pirastro_violin_gold_e_medium.htm",
        stoerer: "",
    };
    var mikro = {
        bezeichnung: "Rode NT1-A Complete Vocal Recording",
        kurzBeschreibung: ["Höhenverstellbar", "mit Hülle"],
        preis: 153,
        verfügbareArtikel: 3,
        lieferDauer: "2 Wochen",
        aktion: false,
        erstmaligErschienen: 2009,
        höhe: 190,
        breite: 50,
        tiefe: 50,
        imgSrc: "mikro.jpg",
        link: "https://www.thomann.de/de/rode_nt1a_complete_vocal_recording.htm",
        stoerer: "",
    };
    var drumset = {
        bezeichnung: "DW Design Series - Tobacco Bundle thomann ",
        kurzBeschreibung: ["mit Becken", "2 Toms"],
        preis: 2398,
        verfügbareArtikel: 4,
        lieferDauer: "4 Wochen",
        aktion: false,
        erstmaligErschienen: 2013,
        höhe: 150,
        breite: 200,
        tiefe: 180,
        imgSrc: "set.jpg",
        link: "https://www.thomann.de/de/dw_design_series_tobacco_bundle.htm",
        stoerer: "",
    };
    var musikater = {
        bezeichnung: "Schott Hallo Musikater Vol.1 ",
        kurzBeschreibung: ["für Kinder ab 4", "mit CD"],
        preis: 11.50,
        verfügbareArtikel: 20,
        lieferDauer: "1 Woche",
        aktion: true,
        erstmaligErschienen: 2008,
        höhe: 3,
        breite: 30,
        tiefe: 18,
        imgSrc: "musikater.jpg",
        link: "https://www.thomann.de/de/schott_hallo_musikater.htm",
        stoerer: "empfohlen",
    };
    var ralf = {
        bezeichnung: "Ralf Reiter Übungen für kleine Trommel",
        kurzBeschreibung: ["für Fortgeschrittene", "Wunderheft"],
        preis: 25,
        verfügbareArtikel: 18,
        lieferDauer: "1 Woche",
        aktion: false,
        erstmaligErschienen: 2017,
        höhe: 5,
        breite: 16,
        tiefe: 30,
        imgSrc: "ralfnoten.jpg",
        link: "https://www.thomann.de/de/ralf_reiter_uebungen_fuer_kleine_trommel.htm?ref=search_rslt_ralf+reiter_423936_0",
        stoerer: "",
    };
    var mikrostaender = {
        bezeichnung: "Millenium MS-2003 Mikrofonstativ",
        kurzBeschreibung: ["ausziehbar", "besonders stabil"],
        preis: 14.80,
        verfügbareArtikel: 45,
        lieferDauer: "4 Tage",
        aktion: false,
        erstmaligErschienen: 1999,
        höhe: 170,
        breite: 75,
        tiefe: 60,
        imgSrc: "mikrostaender.jpg",
        link: "https://www.thomann.de/de/millenium_ms2003.htm",
        stoerer: "",
    };
    var xlr = {
        bezeichnung: "the sssnake SM6BK Mikrokabel",
        kurzBeschreibung: ["schwarz", "20 Meter lang"],
        preis: 4.99,
        verfügbareArtikel: 25,
        lieferDauer: "4 Tage",
        aktion: true,
        erstmaligErschienen: 1999,
        höhe: 10,
        breite: 70,
        tiefe: 30,
        imgSrc: "xlr.jpg",
        link: "https://www.thomann.de/de/the_sssnake_sk233-6_mikrokabel.htm",
        stoerer: "-10%",
    };
    var mischpult = {
        bezeichnung: "Alto Live 2404",
        kurzBeschreibung: ["schwarz", "20 Meter lang"],
        preis: 498,
        verfügbareArtikel: 4,
        lieferDauer: "4 Wochen",
        aktion: false,
        erstmaligErschienen: 2015,
        höhe: 714,
        breite: 417,
        tiefe: 79,
        imgSrc: "mischpult.jpg",
        link: "https://www.thomann.de/de/alto_live_2404.htm",
        stoerer: "",
    };
    var absorber = {
        bezeichnung: "the t.bone Micscreen Portabler Absorber Diffusor",
        kurzBeschreibung: ["höhenverstellbar", "breitenverstellbar"],
        preis: 99,
        verfügbareArtikel: 24,
        lieferDauer: "2 Wochen",
        aktion: false,
        erstmaligErschienen: 2008,
        höhe: 150,
        breite: 40,
        tiefe: 24,
        imgSrc: "absorber.jpg",
        link: "https://www.thomann.de/de/the_tbone_micscreen.htm",
        stoerer: "",
    };
    var kopfhoerer = {
        bezeichnung: "AKG K-240 Studio Kopfhörer",
        kurzBeschreibung: ["over Ear", "breitenverstellbar"],
        preis: 59,
        verfügbareArtikel: 15,
        lieferDauer: "2 Wochen",
        aktion: false,
        erstmaligErschienen: 2002,
        höhe: 17,
        breite: 15,
        tiefe: 7,
        imgSrc: "kopfhoerer.jpg",
        link: "https://www.thomann.de/de/akg_k_240_studio_kopfhoerer.htm",
        stoerer: "",
    };
    var monitorbox = {
        bezeichnung: "the box PA M 12 ECO MKII Passiver Monitor",
        kurzBeschreibung: ["12.5 kg schwer", "nicht flugfähig"],
        preis: 79,
        verfügbareArtikel: 8,
        lieferDauer: "3 Wochen",
        aktion: false,
        erstmaligErschienen: 2009,
        höhe: 361,
        breite: 365,
        tiefe: 500,
        imgSrc: "monitorbox.jpg",
        link: "https://www.thomann.de/de/the_box_pa_m_12_eco_mkii.htm",
        stoerer: "",
    };
    //Sternchenaufga    
    //ERRAY
    var alleObjekte = [marimba, vibraphon, xylophon, glockenspiel, roehrenglocken, pauken, geige, egeige, schulterstuetze, saiten, mikro, drumset, musikater, ralf, mikrostaender, xlr, mischpult, absorber, kopfhoerer, monitorbox];
    console.log('Preis erstes Produkt: ' + alleObjekte[0].preis);
    console.log('Kurzbeschreibung 2.Produkt: ' + alleObjekte[1].kurzBeschreibung);
    console.log('Gesamtpreis Warenkorb 3x erstes Produkt: ' + alleObjekte[0].preis * 3 + '€');
    console.log('Gesamtpreis Warenkorb 2x zweites Produkt: ' + alleObjekte[1].preis * 2 + '€');
    console.log('Gesamtpreis Warenkorb 10x dritter Artikel: ' + alleObjekte[2].preis * 10 + '€');
    //alten und neuen Preis ausgeben 
    /*
        function berechne(artikelbeschreibung: Artikelbeschreibung): number {
            var sum: number = artikelbeschreibung.preis * 0.9;
            return sum;
        }
        console.log('Alter Preis Artikel 1: ' + alleObjekte[0].preis + '€');
        console.log('10% Rabatt auf Artikel 1: ' + berechne(marimba) + '€');
    
        console.log('Alter Preis Artikel 2: ' + alleObjekte[1].preis + '€');
        console.log('10% Rabatt auf Artikel 2: ' + berechne(vibraphon) + '€');
    
        console.log('Alter Preis Artikel 3: ' + alleObjekte[2].preis + '€');
        console.log('10% Rabatt auf Artikel 3: ' + berechne(xylophon) + '€');
    
    
        //Berechnung Volumen
        function verpackungsGröße(artikelbeschreibung: Artikelbeschreibung): number {
            var sum: number = artikelbeschreibung.höhe * artikelbeschreibung.breite * artikelbeschreibung.tiefe;
            return sum;
        }
    
        console.log('Volumen Artikel 1: ' + verpackungsGröße(marimba) + 'cm^3');
        console.log('Volumen Artikel 2: ' + verpackungsGröße(vibraphon) + 'cm^3');
        console.log('Volumen Artikel 3: ' + verpackungsGröße(xylophon) + 'cm^3');
    
        function verpackungsOberfläche(artikelbeschreibung: Artikelbeschreibung): number {
            var sum: number = 2 * (artikelbeschreibung.höhe * artikelbeschreibung.tiefe + artikelbeschreibung.breite * artikelbeschreibung.tiefe + artikelbeschreibung.höhe * artikelbeschreibung.breite)
            return sum;
        }
    
        console.log('Oberfläche Artikel 1: ' + verpackungsOberfläche(marimba) + 'cm^2');
        console.log('Oberfläche Artikel 2: ' + verpackungsOberfläche(vibraphon) + 'cm^2');
        console.log('Oberfläche Artikel 3: ' + verpackungsOberfläche(xylophon) + 'cm^2');
    
    
    
    
        //Aufgabe 11.1
        //Volumen der drei Produkte wird nicht korrekt ausgegeben da in Aufgabe 11.4 noch mehr Produkte in dem Erray gespeichert wurden und das Volumen dieser Produkte in der Schleife calculateVolumenTotal nun auch dazugerechnet wird
        function calculateVolumenTotal(): void {
    
            var i: number = 0;
            var sum: number = 0;
    
            while (i < alleObjekte.length) {
                sum += verpackungsGröße(alleObjekte[i]);
                //  sum +=verpackungsGröße(alleObjekte[0]);
                //  sum +=verpackungsGröße(alleObjekte[1]);
                //  sum +=verpackungsGröße(alleObjekte[2]);
                i++;
            }
            console.log('Volumen komplett: ' + sum + 'cm^3');
        }
        //Funktionsaufruf
        calculateVolumenTotal();
    
    
        //Aufgabe 11.2
        function calculateVolumenTotal2(): void {
    
            var sum: number = 0;
            for (var i: number = 0; i < alleObjekte.length; i++) {
                sum += verpackungsGröße(alleObjekte[i]);
            }
            console.log('Volumen komplett 2: ' + sum + 'cm^3');
        }
        calculateVolumenTotal2();
    */
    //Aufgabe 11.3
    // Funktion zur Ausgabe im HTML-Code mit Hilfe einer Schleife
    function writeHTML() {
        var node = document.getElementById("htmlContent");
        // HTML String
        var childNodeHTML;
        // Zählvariable initialisieren
        var i = 0;
        //Schleifen
        while (i < alleObjekte.length) {
            // Ausgabe Bezeichnung des ausgewählten Objekts, sowie die entsprechende Bild-Quelle
            // console.log(alleObjekte[i].bezeichnung, alleObjekte[i].imgSrc)
            childNodeHTML = "";
            childNodeHTML += "<div class='box' id='Artikel_" + i + "'>";
            if (alleObjekte[i].stoerer == "Top deal") {
                childNodeHTML += "<div class=Stoerer>Top Deal</div>";
                console.log("PROBLEEEEM");
            }
            else if (alleObjekte[i].stoerer == "mit Ersatzfell") {
                childNodeHTML += "<div class=Stoerer>mit Ersatzfell</div>";
            }
            else if (alleObjekte[i].stoerer == "mit Ersatzfell") {
                childNodeHTML += "<div class=Stoerer>mit Ersatzfell</div>";
            }
            else if (alleObjekte[i].stoerer == "nur noch 2 verfügbar") {
                childNodeHTML += "<div class=Stoerer>nur noch 2 verfügbar</div>";
            }
            else if (alleObjekte[i].stoerer == "neu!") {
                childNodeHTML += "<div class=Stoerer>neu!</div>";
            }
            else if (alleObjekte[i].stoerer == "empfohlen") {
                childNodeHTML += "<div class=Stoerer>empfohlen</div>";
            }
            else if (alleObjekte[i].stoerer == "-10%") {
                childNodeHTML += "<div class=Stoerer>-10%</div>";
            }
            //          if (alleObjekte[i].aktion ==true){
            //          childNodeHTML += "<div class=Stoerer>Top Deal</div>";
            //}
            childNodeHTML += "<img src=img/";
            childNodeHTML += alleObjekte[i].imgSrc;
            childNodeHTML += ">";
            childNodeHTML += "<p>";
            childNodeHTML += alleObjekte[i].bezeichnung;
            childNodeHTML += "</p>";
            childNodeHTML += "<p><em>";
            childNodeHTML += alleObjekte[i].preis + "€";
            childNodeHTML += "</em></p>";
            childNodeHTML += "<a href=";
            childNodeHTML += alleObjekte[i].link;
            childNodeHTML += ">Mehr Informationen</a>";
            childNodeHTML += "<p><button>";
            childNodeHTML += "in den Warenkorb";
            childNodeHTML += "</button></p>";
            childNodeHTML += "</div>";
            //console.log(childNodeHTML);
            node.innerHTML += childNodeHTML;
            i++;
        }
    }
    function filterbyprice(priceLow, priceHigh) {
        //console.log("Filter");
        var i = 0;
        while (i < alleObjekte.length) {
            var node = document.getElementById("Artikel_" + i); //"artikel_0"
            if (alleObjekte[i].preis > priceLow && alleObjekte[i].preis <= priceHigh) {
                node.style.display = "initial";
            }
            else {
                node.style.display = "none";
            }
            i++;
        }
    }
    // Hauptprogramm
    function main() {
        console.log("main");
        // Content erzeugen
        writeHTML();
        //Event Listener installieren fÃ¼r Filter-Buttons
        document.getElementById("Filter1").addEventListener('click', function () {
            filterbyprice(0, 20);
        });
        document.getElementById("Filter2").addEventListener('click', function () {
            filterbyprice(20, 100);
        });
        document.getElementById("Filter3").addEventListener('click', function () {
            filterbyprice(100, 1000);
        });
        document.getElementById("Filter4").addEventListener('click', function () {
            filterbyprice(1000, 10000);
        });
    }
    // Add EventListener - Main() wird ausgefÃ¼hrt, sobald das DOM vollstÃ¤ndig geladen ist
    document.addEventListener('DOMContentLoaded', main);
})(Aufgabe12 || (Aufgabe12 = {}));
//# sourceMappingURL=shoppingdata.js.map