// FILE: main.ts
import "./global"; // Loads `html` globally

import { ApplicationServer } from "./container";

const appServer = new ApplicationServer({}, {});
let app = await appServer.startup()
