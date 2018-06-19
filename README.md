## AltTab Coding Challenge

## Configurations 🎉

* Everything is configurable at `app/config/config.json`.
* PM2 configurations are in `process.config.js`.

### Server

```
"server": {
  "protocol": "http",
  "host": "localhost",
  "port": 3000,
  "instances": 3
}
```

### Services

```
{
  "name": "dummy",
  "path": "/dummy",
  "method": "get",
  "version": 1,
  "params": {
    "name": {
      "required": true,
      "type": "string"
    },
    "id": {
      "required": true,
      "type": "number",
      "is": ["integer", "positive"]
    },
    "email": {
      "required": true,
      "type": "string",
      "is": "email"
    },
    "age": {
      "required": true,
      "type": "number"
    },
    "gender": {
      "required": true,
      "type": "string",
      "is": {
        "inArray": [["male", "female"]]
      }
    }
  }
}
```

## Cool Things 😀

* DI module.
* Router module.
* API versioning.
* Core modules loading desing pattern `load()`.
* The `require()` is only allowed in `app.js` check the comment in `app.js`.
* Params Schema (Check `app/config/config.json`).
* More types of middlewares (before, service, controller, after, fail).
* Fully documented code, have fun reading it 😀.
* A middleware to separate the validation from the services' code.
* Run a cluster of the app via PM2, configured in `app/config/config.json`.

## Bad Things 😓

* I wrapped the response with `{meta: {}, data: {HERE}}`. In real world we should not break the API unless we agreed on this. I did it this time to allow you to have a look to my framework.
* I used the minimal parts of a framework that I built from more than 3 years. Some parts of the code need a revamp since they have a really bad implementation, consistency, naming, documentation like `router.js`, `response.js`, `tasks.js`, `helpers/validate.js`, most of the middlewares, helpers, misc modules, etc.

# Getting Started

## PreRequisites:

* MongoDB v3.6.5
* Node.js v6.9.1

## Setting up the project

In the project directory run

```
npm install
```

## Starting the application

This project runs via PM2 as cluster, you can configure
the number of instances in `app/config/config.json` file

```
npm start
```

## Running the tests

The test suite can be run with

```
npm test
```

# About Me

Mohammad Anas Fares, Senior Software Engineer at Amazon.
