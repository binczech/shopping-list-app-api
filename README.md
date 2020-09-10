**About**

This project is API that was created for [Shopping List App](https://github.com/binczech/shopping-list-app). It is written in [Express.js](https://expressjs.com). It works with in MongoDB and exposes endpoints for frontend to do so.

**Prerequisities**

* [Node.js](https://nodejs.org)
* [MongoDB](mongodb.com) runned locally or on cloud

**Environmental variables**

* `PORT` - on which API will be available.
* `DB_URI` - on which MongoDB is available.

**How to run**

1. `npm install`
2. Set variables `PORT`, `DB_URI`
3. `node app.js`

**Endpoints**

* `GET /users/` - returns list of users
* `POST /users/` - stores new user to DB, returns user data
* `GET /users/:id` - returns user by id
* `PATCH /users/:id` - updates user by id
* `DELETE /users/:id` - deletes data by id