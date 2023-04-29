import { run } from "./app/app.js";
import { Alert } from "./app/services/alert.js";
import { Calculator } from "./app/services/calculator.js";
import { Jokes } from "./app/services/jokes.js";

const alertService = new Alert();
const calculatorService = new Calculator();
const jokesService = new Jokes();

run(alertService, calculatorService, jokesService);
