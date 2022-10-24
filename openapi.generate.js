const { spawn } = require("node:child_process");

try {
  const [, , customTarget] = process.argv;
  const DEFAULT_TARGET = "https://git.door43.org/swagger.v1.json";
  const target = customTarget || DEFAULT_TARGET;
  const command = spawn(
    "openapi-generator-cli",
    [
      `generate`,
      `-g=typescript-axios`,
      `-i=${target}`,
      `--additional-properties=withSeparateModelsAndApi=true,modelPackage=models,apiPackage=apis`,
    ],
    { shell: true }
  );
  console.log(
    "\x1b[32m",
    `✏️ ~ Executing command: ${command.spawnargs.at(-1)}...`,
    "\x1b[0m"
  );
  console.log(
    "\x1b[32m",
    `⚙️ ~ Generating library using: "${target}"...`,
    "\x1b[0m"
  );
  command.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });
  command.stdout.on("data", (output) => {
    console.log("Output: ", output.toString());
  });
  command.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
} catch (error) {
  console.error(error);
}
