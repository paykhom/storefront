export class Logger {
  constructor() {
    // Initialize any logger setup if required
  }

  log(message: string): void {
    //console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
  }

  error(message: string, error?: Error): void {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, error);
  }
}