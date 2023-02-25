const fs = require("fs");
const path = require("path");

const COLOR_CYAN = "\x1b[36m%s\x1b[0m";
const COLOR_GREEN = "\x1b[32m";

const publicPath = path.join(__dirname, "public");
const distPath = path.join(__dirname, "dist");

function loadingAnimation(text) {
  var P = ["\\ " + text, "| " + text, "/ " + text, "- " + text];
  var x = 0;
  return setInterval(function () {
    process.stdout.write("\r" + P[x++]);
    x &= 3;
  }, 250);
}

function executeBuild() {
  return new Promise((resolve, reject) => {
    const { exec } = require("child_process");
    console.log(COLOR_CYAN, "Build started");
    const id = loadingAnimation("Building...");
    exec("vite build", (err, stdout, stderr) => {
      if (err) {
        reject(err);
        throw err;
      }
      console.log(stderr);
      console.log(stdout);
      clearInterval(id);
      console.log(COLOR_GREEN, "Build finished");
      resolve();
    });
  });
}

function copyManifest() {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(publicPath, "manifest.json"), "utf8", (err, data) => {
      if (err) {
        console.error(`Error reading file from disk: ${err}`);
        reject(err);
      } else {
        fs.writeFile(
          path.join(distPath, "manifest.json"),
          data,
          "utf8",
          (err, data) => {
            if (err) {
              console.error(`Error writing file from disk: ${err}`);
            } else {
              console.log(COLOR_CYAN, "Manifest added to dist directory");
              resolve(data);
            }
          }
        );
      }
    });
  });
}

async function main() {
  await executeBuild();
  await copyManifest();
}

main();
