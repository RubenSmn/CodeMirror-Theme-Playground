export const docs = {
  'javascript': `let meetups = [
  { name: 'JavaScript', isActive: true, members: 700 },
  { name: 'Angular', isActive: true, members: 900 },
  { name: 'Node', isActive: false, members: 600 },
  { name: 'React', isActive: true, members: 500 },
];

let sumFPChain = meetups.filter((m) => {
    return m.isActive;
  })
  .map((m) => {
    return m.members - (0.1 * m.members);
  })
  .reduce((acc, m) => {
    return acc + m;
  }, 0);

console.log(sumFPChain); // output will be 1890`,
  'javascript-node': "!process.env.NODE_ENV ? (process.env.NODE_ENV = 'development') : null\n\nconst express = require('express'\nconst bodyParser = require('body-parser')\nconst movieroutes = require('./src/routes/movie.routes')\nconst authroutes = require('./src/routes/authentication.routes')\nconst logger = require('./src/config/config').logger\nconst pool = require('./src/config/database')\n\nconst app = express()\nconst port = process.env.PORT || 3000\n\napp.use(bodyParser.json())\n\napp.all('*', (req, res, next) => {\n  const method = req.method\n  logger.debug('Method: ', method)\n  next()\n})\n\napp.use('/api', authroutes)\napp.use('/api', movieroutes)\n\napp.all('*', (req, res, next) => {\n  res.status(404).json({\n    error: 'Endpoint does not exist!'\n  })\n})\n\napp.listen(port, () => {\n  logger.info(`Server listening at port ${port}`)\n  logger.info(`Server running in '${process.env.NODE_ENV}' mode`)\n})\n\nfunction gracefulShutdown() {\n  logger.info('Server shutting down')\n  pool.end(function (err) {\n    logger.info('Database pool connections closed')\n  })\n}\n\n// e.g. kill\nprocess.on('SIGTERM', gracefulShutdown)\n// e.g. Ctrl + C\nprocess.on('SIGINT', gracefulShutdown)\n\nmodule.exports = app\n",
};
