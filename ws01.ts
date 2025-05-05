// server.ts
import { Hono } from 'hono';
import { serve } from 'bun';

// WebSocketServer class to manage connections
class WebSocketServer {
  private clients: Set<WebSocket>;
  private app: Hono;

  constructor() {
    this.clients = new Set<WebSocket>();
    this.app = new Hono();
    this.setupRoutes();
  }

  private setupRoutes() {
    // WebSocket endpoint
    this.app.get('/ws', (c) => {
      if (c.req.header('upgrade') !== 'websocket') {
        return c.text('Not a WebSocket request', 400);
      }

      const { socket, response } = Bun.websocket.upgrade(c, {
        onOpen: (ws) => this.handleOpen(ws),
        onMessage: (ws, message) => this.handleMessage(ws, message),
        onClose: (ws) => this.handleClose(ws),
      });

      if (!socket) {
        return response;
      }
      return undefined; // Hono expects undefined for successful WebSocket upgrade
    });
  }

  private handleOpen(ws: WebSocket) {
    this.clients.add(ws);
    console.log('Client connected. Total clients:', this.clients.size);
    ws.send('Welcome to the WebSocket server!');
  }

  private handleMessage(ws: WebSocket, message: string | Buffer) {
    const msg = message.toString();
    console.log('Received:', msg);
    // Broadcast to all clients
    for (const client of this.clients) {
      client.send(`Broadcast: ${msg}`);
    }
  }

  private handleClose(ws: WebSocket) {
    this.clients.delete(ws);
    console.log('Client disconnected. Total clients:', this.clients.size);
  }

  public start(port: number) {
    serve({
      fetch: this.app.fetch.bind(this.app),
      hostname: '0.0.0.0',
      port,
      websocket: {
        // Bun.js WebSocket options
        open: () => {}, // no-op; handled manually
        message: () => {}, // no-op; handled manually
        close: () => {},


        maxPayloadLength: 1024 * 1024, // 1MB
        idleTimeout: 60, // seconds
      },
    });
    console.log(`WebSocket server running on ws://localhost:${port}/ws`);
  }
}

// Start the server
const server = new WebSocketServer();
server.start(3000);