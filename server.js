const fs = require('fs');
const { createServer } = require('http');
const path = require('path');
const { createRequestHandler } = require('@remix-run/express');
const compression = require('compression');
const express = require('express');
const morgan = require('morgan');
const { Server } = require('@hocuspocus/server');
const expressWsR = require('express-ws');
const MODE = process.env.NODE_ENV;
const BUILD_DIR = path.join(process.cwd(), 'build');

var app = express();
const httpServer = createServer(app);
var expressWs = expressWsR(app, httpServer);

if (!fs.existsSync(BUILD_DIR)) {
  console.warn(
    "Build directory doesn't exist, please run `npm run dev` or `npm run build` before starting the server.",
  );
}
const server = Server.configure({
  async onConnect() {},
});

app.ws('/socket', (websocket, request) => {
  const context = {
    user: {
      id: 1234,
      name: 'Jane',
    },
  };

  server.handleConnection(websocket, request, context);
});
// You need to create the HTTP server from the Express app

app.use(compression());

// You may want to be more aggressive with this caching
app.use(express.static('public', { maxAge: '1h' }));

// Remix fingerprints its assets so we can cache forever
app.use(express.static('public/build', { immutable: true, maxAge: '1y' }));

app.use(morgan('tiny'));

app.all(
  '*',
  MODE === 'production'
    ? createRequestHandler({ build: require('./build') })
    : (req, res, next) => {
        purgeRequireCache();
        const build = require('./build');
        return createRequestHandler({ build, mode: MODE })(req, res, next);
      },
);

const port = process.env.PORT || 3000;

// instead of running listen on the Express app, do it on the HTTP server

httpServer.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

////////////////////////////////////////////////////////////////////////////////
function purgeRequireCache() {
  // purge require cache on requests for "server side HMR" this won't let
  // you have in-memory objects between requests in development,
  // alternatively you can set up nodemon/pm2-dev to restart the server on
  // file changes, we prefer the DX of this though, so we've included it
  // for you by default
  for (const key in require.cache) {
    if (key.startsWith(BUILD_DIR)) {
      delete require.cache[key];
    }
  }
}
