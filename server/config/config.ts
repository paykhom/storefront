import { Glass } from "paykhom-fw/glass";

// For now, basic config. Load from env or JSON files as needed.
export class Config  extends Glass {
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