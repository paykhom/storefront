// FILE: global.ts
//import { HttpServer } from "paykhom-fw/modules/server/http-server";
//import { SessionData, RedisSession } from "paykhom-fw/modules/services/session-service";

type featureFlags = Record<string, any>;

// TypeScript declaration for global `html`
declare global {
  var html: (strings: TemplateStringsArray, ...values: any[]) => string;
  var featureFlags: featureFlags;     
  var BASE_DIR: string;
}


globalThis.BASE_DIR = process.cwd();
console.log(globalThis.BASE_DIR);

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




export {}; // Ensure this file is treated as a module




