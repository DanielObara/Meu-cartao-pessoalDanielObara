#!/usr/bin/env node
// Usado para dizer ao Node.js que se trata de uma ferramenta do CLI

// Declarando os módulos:
const chalk = require("chalk");
const boxen = require("boxen");

// Definindo as opções para o ‘boxen’:
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round"
};

// Inclusão do Text e mais as definições do ‘chalk’:
const data = {
  name: chalk.white("Daniel Obara /"),
  handle: chalk.cyan("daniel_obara"),
  work: chalk.white("Reactjs Developer"),
  github: chalk.cyan("https://github.com/DanielObara"),
  linkedin: chalk.cyan("https://www.linkedin.com/in/danielobara/"),
  web: chalk.cyan("https://danielobara.wordpress.com/"),
  npx: chalk.white("npx danielobara"),
  labelWork: chalk.white.bold("      Work:"),
  labelGitHub: chalk.white.bold("    GitHub:"),
  labelLinkedIn: chalk.white.bold("  LinkedIn:"),
  labelWeb: chalk.white.bold("       Web:"),
  labelCard: chalk.white.bold("      Card:")
};

// Aqui será a saída do nosso Cartão Pessoal em NPX:
const newline = "\n";
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Aqui devemos colocar toda a nossa saída numa única variável para que possamos usar
// o ‘boxen de maneira efetiva:
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  webing +
  newline +
  newline +
  carding;

console.log(chalk.green(boxen(output, options)));
