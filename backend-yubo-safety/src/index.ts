import { AddressInfo } from 'net';
import http from 'http';
import { logger } from './config/logger';
import express from 'express';
import { sequelize } from "./config/db";
import routes from './resolvers';
import * as bodyParser from "body-parser";

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || '8000';

async function startServer() {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(routes)
  app.get('/health', async (_req, res) => {
    try {
      await sequelize.authenticate()
      res.send('UP');
    } catch (error) {
      res.send('DOWN');
    }
  });

  app.disable('x-powered-by');
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());


  app._router.stack.forEach(function(r){
    if (r.route && r.route.path){
      console.log(r.route.path)
    }
  })


  const server = http.createServer(app).listen({ host, port }, () => {
    const addressInfo = server.address() as AddressInfo;
    logger.info(
      `Server ready at http://${addressInfo.address}:${addressInfo.port}`,
    );
  });

  const signalTraps: NodeJS.Signals[] = ['SIGTERM', 'SIGINT', 'SIGUSR2'];

  signalTraps.forEach((type) => {
    process.once(type, async () => {
      logger.info(`process.once ${type}`);

      server.close(() => {
        logger.debug('HTTP server closed');
      });
    });
  });
}

startServer();
