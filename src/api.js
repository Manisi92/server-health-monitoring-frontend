import { Client } from '@stomp/stompjs';

export const connectWebSocket = (callback) => {
  const client = new Client({
    brokerURL: 'ws://localhost:8080/ws',
    onConnect: () => {
      client.subscribe('/topic/metrics', (message) => {
        callback(JSON.parse(message.body));
      });
    },
  });

  client.activate();
};