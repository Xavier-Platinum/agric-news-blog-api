# REVIEW

@grunde1234

## ANCHOR - Lawrence

## Project Structure & Organization

Your implementation was pretty awesome and certainly we can put in some growth measures into consideration I'd suggest expecially when it has to do with the architectural design. We'd start with a few suggestions and considerations I'd love you to look at below:

## Issues

- Importing routes individually in server.js, does not scale well you wouldn't want to bulk your server (In other words modularization).
- Missing index.js for centralizing and organizing routes, and other folders necessary (controller/index.js, routes/index.js recommended).
- No modular or DD(Domain Driven) organisation business logic, validation, all implemented in controller, no seperation of concerns.
- Whitespace / formatting problems
- Centralized error/responses handler with status codes, and more detailed info.

### Suggestions

- Consider using index.js or index files as entry points for core folders like routes, controllers, and services, etc. It keeps imports clean and improves scalability as the project grows.
- Sampple folder structure to adopt

```bash
src/
  |–– controllers/
  |–– routes/
  |–– models/
  |–– services/
  |–– middlewares/
  |–– utils/
```

### Controllers

- Seperate concerns handle business logic in Service I suggest to not jampac or overload the controller with business logic, validations and even some middleware stuff.
- Hardcoded logic in controller, you can have utils, helper folder to help with some reusable hardcoded logics.

#### sample implementation with services

```javascript
// . . . 
/**
 * @description consider using jsdoc format for documentation
*/
const payload = {}; // or
const data = {};
const user = await this.userService.create(payload||data); // 
// . . . 
```

### Server.js

- Create an index file in the `routes/` as a central entry point for all routes.
- Middleware implementation should be modular (Sgtn).

```javascript
// . . . 
import routes from '@core/routes';

app.use('/api', routes);
// You can make it more dynamic
app.use(EnvConfig.BASE_PATH || process.env.BASE_PATH, routes);
// . . . 
```

## ––

- Normalize API responses
- Add .env.example

## NOTE

- Consider creating a pull request for review, by creating a branch outside of the main branch.
- I have also tagged you to the necessary reolves inline, at key affected areas. @grunde1234
