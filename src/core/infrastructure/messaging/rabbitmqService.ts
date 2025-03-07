import amqp, { Channel, Connection } from "amqplib";
import { Logger } from "../logging/logger";
import { Order } from "../../../app/models/order"; // Corrected import path

export class RabbitMQService {
    private connection: Connection | null;
    private channel: Channel | null;
    private queueName: string;
    private logger: Logger;

    constructor(queueName: string, logger: Logger) {
        this.connection = null;
        this.channel = null;
        this.queueName = queueName;
        this.logger = logger;
    }

    async connect(): Promise<void> {
        try {
            this.connection = await amqp.connect(process.env.RABBITMQ_URL || 'amqp://localhost');
            this.channel = await this.connection.createChannel();
            await this.channel.assertQueue(this.queueName, { durable: true });
            this.logger.log(`Connected to RabbitMQ and listening on queue "${this.queueName}"`);
        } catch (error) {
            this.logger.error('Failed to connect to RabbitMQ', error);
            throw error
        }
    }

    async consume(callback: (message: Order) => void): Promise<void> {
        if(!this.channel) throw new Error('Channel is not initialized')
        this.channel.consume(
            this.queueName,
            (message) => {
                if(message) {
                    try {
                        const content = JSON.parse(message.content.toString());
                        callback(content);
                    } catch (error) {
                        this.logger.error('Error parsing message', error);
                    } finally {
                        this.channel?.ack(message);
                    }
                }
            },
            { noAck: false }
        )
    }
    async close(): Promise<void> {
        try {
            await this.channel?.close();
            await this.connection?.close();
            this.logger.log('RabbitMQ connection closed successfully.');
        } catch(error) {
            this.logger.error('Error closing RabbitMQ connection.', error);
        }
    }
}