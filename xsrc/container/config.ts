// For now, basic config. Load from env or JSON files as needed.
export class Config {
    private config: Record<string, any>;
    
    constructor() {
            this.config = {
                rabbitmqUrl: process.env.RABBITMQ_URL || 'amqp://localhost',
                port: parseInt(process.env.PORT || "3000", 10),
                queueName: process.env.QUEUE_NAME || "orders"
            };
        }
    
        get(key: string): any {
            if (!this.config.hasOwnProperty(key)) {
                throw new Error(`Config key "${key}" not found.`);
            }
            return this.config[key];
        }
    }