const run = require("./app/app");
const AlertService = require("./app/services/alert");
const CalculatorService = require("./app/services/calculator");
const JokesService = require("./app/services/jokes");

const alertService = new AlertService();
const calculatorService = new CalculatorService();
const jokesService = new JokesService();

run(alertService, calculatorService, jokesService);
