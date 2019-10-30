import * as express from 'express';

function loggerMiddleware(request: express.Request, response: express.Response, next: express.NextFunction) {
  const methodStr = `${request.method}, Path: '${request.path}'`;
  const paramStr = `, Params - Id: ${request.params.id}`;
  const queryStr = `, Query - Name:${request.query.name}, Year:${request.query.year}`;
  const final = methodStr
    + (request.params.id ? paramStr : ``)
    + (request.query.name ? queryStr : ``)
  console.log(final);
  next();
}

export default loggerMiddleware;
