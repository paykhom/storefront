import { ApplicationContainer } from "./container/applicationContainer";

const appContainer = new ApplicationContainer();
appContainer.boot()

// IF DENO
//  Deno.addSignalListener("SIGINT", async () => {
//     console.log("SIGINT signal received.");
//     await appContainer.shutdown();
//     Deno.exit(0);
// });
// /DENO

// IF BUN
process.on("SIGINT", async () => {
    console.log("Application shutdown request received...");
    await appContainer.shutdown();
    process.exit(0);
});
// /IF BUN
