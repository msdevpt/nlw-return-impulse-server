# Feedback

## Tech used:

- **Build**: [SWC](https://swc.rs/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Email**: [Nodemailer](https://nodemailer.com/)
- **Tests**: [Jest](https://jestjs.io/)
- **Code Types**: [Typescript](https://www.typescriptlang.org/)
- **DB**: [Railway](https://railway.app/)

## Overview

This project was developed in the [Rocketseat](https://www.rocketseat.com.br/) Next Level Week Return.
This project is the backend to store the feedbacks from [mobile](https://github.com/msdevpt/nlw-return-impulse-mobile) and [web](https://github.com/msdevpt/nlw-return-impulse-web) version. Is also implemented sending email and tests.

## Running Locally

```bash
$ git clone https://github.com/msdevpt/nlw-return-impulse-server.git
$ cd nlw-return-impulse-server
$ npm i
$ npm run dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/msdevpt/nlw-return-impulse-server/blob/master/.env.example).


## Database
In the file `prisma\schema.prisma` can be used for local development

```js
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}
```

For production can be use postgres with [Railway](https://railway.app/)
```js
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

## Running Tests

```bash
$ npm run test
```

## Credits

- [Rocketseat](https://www.rocketseat.com.br/) 
- [Design](https://www.figma.com/file/gI2bEhIGwT1tT3Tbr5tEwG/Feedback-Widget-Community)