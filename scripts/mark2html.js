#!/usr/bin/env node

const marked = require("marked");
const fs = require("fs");
const path = require("path");

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

const mdPath = path.join(__dirname, "/../README.md");
const md = fs.readFileSync(mdPath, { encoding: "utf-8" });
const html = marked(md);

const templatePath = path.join(__dirname, "index.html");
const template = fs.readFileSync(templatePath, { encoding: "utf-8" });

const outPath = path.join(__dirname, "/../src/index.html");
const outData = template.replace("put_md2html_here", html);
fs.writeFileSync(outPath, outData);
