const fs = require("fs");
const path = require("path");

const COLOR_CYAN = "\x1b[36m%s\x1b[0m";
const COLOR_GREEN = "\x1b[32m";

const UNPACKED_PATH = path.join(__dirname, "unpacked");
const DIST_PATH = path.join(__dirname, "dist");

const BUILD_FILENAME = "chunk-index.js";

function replaceString(str, find, replace) {
  // Split the string into an array of substrings.
  const parts = str.split(find);

  // Join the array back into a string, using the replacement string in between each substring.
  const replacedStr = parts.join(replace);

  // Return the new string.
  return replacedStr;
}

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

function prettierBuild() {
  return new Promise((resolve, reject) => {
    const { exec } = require("child_process");
    console.log(COLOR_CYAN, "Build started");
    const id = loadingAnimation("Formating with prettier...");
    exec(
      `npx prettier --print-width 99999 --write ./dist/${BUILD_FILENAME}`,
      (err, stdout, stderr) => {
        if (err) {
          reject(err);
          throw err;
        }
        clearInterval(id);
        console.log(COLOR_GREEN, "\nPrettier formating finished");
        resolve(stdout);
      }
    );
  });
}

function prettierBackground() {
  return new Promise((resolve, reject) => {
    const { exec } = require("child_process");
    console.log(COLOR_CYAN, "Build started");
    const id = loadingAnimation("Formating with prettier...");
    exec(
      `npx prettier --print-width 99999 --write ./unpacked/background`,
      (err, stdout, stderr) => {
        if (err) {
          reject(err);
          throw err;
        }
        clearInterval(id);
        console.log(COLOR_GREEN, "\nPrettier formating finished");
        resolve(stdout);
      }
    );
  });
}

function generateUnpacked() {
  return new Promise((resolve, reject) => {
    fs.readFile(
      path.join(DIST_PATH, "chunk-index.js"),
      "utf8",
      (err, build) => {
        if (err) {
          console.error(`Error reading file from disk: ${err}`);
          reject(err);
        } else {
          fs.readFile(
            path.join(UNPACKED_PATH, "background_template.js"),
            "utf8",
            (err, background) => {
              if (err) {
                console.error(`Error writing file from disk: ${err}`);
              } else {
                const result = replaceString(
                  background,
                  "===> build here <===",
                  build
                );

                fs.writeFile(
                  path.join(UNPACKED_PATH, "background.js"),
                  result,
                  "utf8",
                  (err, data) => {
                    if (err) {
                      console.error(`Error writing file from disk: ${err}`);
                    } else {
                      console.log(
                        COLOR_CYAN,
                        "Unpacked generated successfully"
                      );
                      resolve(data);
                    }
                  }
                );
              }
            }
          );
        }
      }
    );
  });
}

async function main() {
  await executeBuild();
  await prettierBuild();
  await generateUnpacked();
}

main();
