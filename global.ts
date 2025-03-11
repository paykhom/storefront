// FILE: global.ts
import { HttpServer } from "paykhom-fw/container/server/http-server";
//import { SessionData, SessionService } from "paykhom-fw/container/services/session-service";

type featureFlags = Record<string, any>;

// Assign the featureFlags to the global scope
globalThis.featureFlags = {
  consoleOutputEnabled: Bun.env.CONSOLE_OUTPUT_ENABLED === 'true' || false,
};

globalThis.html = (strings: TemplateStringsArray, ...values: any[]): string => {
  // Convert the transformed string back into a standard template literal
  const transformedStrings = strings.map(str =>
    str
      //.replace(/\~/g, "§")  // buggy 1.1 - will handle later
      .replace(/~{/g, "${")  // Convert `~{` to `${`
      .replace(/~/g, "`")    // Convert `~` to a backtick
      //.replace(/§/g, "~")    // buggy 1.2 - will handle later
  );

  return String.raw({ raw: transformedStrings }, ...values);
};



// TypeScript declaration for global `html`
declare global {
  var html: (strings: TemplateStringsArray, ...values: any[]) => string;
  var featureFlags: featureFlags;     
}

export {}; // Ensure this file is treated as a module




