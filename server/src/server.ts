import fastify from 'fastify';
import cors from '@fastify/cors';
import { routes } from './routes';

const app = fastify();

app.register(cors);
app.register(routes);

app
  .listen({
    port: 3000,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('Server listening on port 3000');
  });
