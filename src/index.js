"use strict";

import App from "./App.js";

    // Erst loslaufen, wenn das Document Object Modul bereit ist
    window.addEventListener("load", () => {
        // Anwendung starten
        let app = new App();
        app.start();
    });