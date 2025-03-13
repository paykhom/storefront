// FILE: main.ts
import "global"; // Loads `html` globally

import { ApplicationServer } from "container/application-server";

const appServer = new ApplicationServer({}, {});
await appServer.uponInit()
await appServer.uponReady()
await appServer.uponStart()
