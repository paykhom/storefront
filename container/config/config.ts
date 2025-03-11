import { TClass } from "paykhom-fw/tclass";

// For now, basic config. Load from env or JSON files as needed.
export class Config  extends TClass {
    //private config: Record<string, any>;
    
    constructor(config: Record<string, any>, deps: {}) {
        super(config)
        }
    
        xget(key: string): any {
            if (!this.config.hasOwnProperty(key)) {
                throw new Error(`Config key "${key}" not found.`);
            }
            return this.config[key];
        }
    }