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
  facebook: chalk.cyan("https://www.facebook.com/daniel.tsutomu"),
  web: chalk.cyan("https://danielobara.wordpress.com/"),
  npx: chalk.white("npx daniel-obara"),

  labelOpenSource: chalk.rgb(128, 255, 128).bold("Open Source:"),
  labelWork: chalk.rgb(255, 0, 0).bold(" Work:"),
  labelGitHub: chalk.rgb(253, 245, 5).bold(" GitHub:"),
  labelLinkedIn: chalk.rgb(0, 255, 255).bold(" LinkedIn:"),
  labelFacebook: chalk.rgb(66, 103, 177).bold(" Facebook:"),
  labelWeb: chalk.rgb(255, 136, 77).bold(" Web:"),
  labelCard: chalk.rgb(240, 13, 240).bold(" Card:")
};

// Aqui será a saída do nosso Cartão Pessoal em NPX:
const newline = "\n";
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const facebooking = `${data.labelFacebook}  ${data.facebook}`;
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
  facebooking +
  newline +
  webing +
  newline +
  newline +
  carding;

console.log(chalk.green(boxen(output, options)));
