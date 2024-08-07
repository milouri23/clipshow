#! /usr/bin/env node

import clipboard from "clipboardy";
import open from "open";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  try {
    const html = clipboard.readSync();

    if (!html) {
      console.error("El portapapeles está vacio o no contiene HTML");
      process.exit(1);
    }

    const tempFilePath = path.join(__dirname, "temp.html");
    fs.writeFileSync(tempFilePath, html);
    await open(tempFilePath, { wait: false });
    console.log("HTML abierto en el navegador");
  } catch (error) {
    console.error("Error al leer el portapapeles o abrir el archivo:", error);
    process.exit(1);
  }
})();
