const fs = require("fs").promises;
const p = require("path");

const args = process.argv.slice(2);
//console.log(args);

const command = args[0];
// let path = p.normalize(args[1]);
// let data = null;
// if (command !== "list") {
//   data = args[2];
// }

// path = p.resolve(process.cwd(), path);
const fileArg = args[1];
const data = args[2];
const path = fileArg ? p.resolve(process.cwd(), p.normalize(fileArg)) : null;
//console.log(path);

async function createFile(path) {
  try {
    if (!(await checkFile(path))) {
      await fs.writeFile(path, "");
      console.log("File created.");
    } else {
      console.log("File with this name already exists.");
    }
  } catch (error) {
    console.error("Error creating file: ", error);
  }
}

async function checkFile(path) {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
}

async function writeFileFn(path, data) {
  try {
    await fs.writeFile(path, data, "utf-8");
    console.log("File wrote.");
  } catch (error) {
    console.error("Error writing file: ", error);
  }
}

async function readFileFn(path) {
  try {
    const data = await fs.readFile(path, "utf-8");
    console.log(data);
    console.log("File read completed.");
  } catch (error) {
    console.error("Error reading file: ", error);
  }
}

async function deleteFile(path) {
  try {
    await fs.unlink(path);
    console.log("File deleted.");
  } catch (error) {
    console.error("Error deleting file: ", error);
  }
}

async function renameFile(path, data) {
  try {
    await fs.rename(path, p.resolve(process.cwd(), data));
    console.log("File renamed.");
  } catch (error) {
    console.error("Error renaming file: ", error);
  }
}

async function appendFileFn(path, data) {
  try {
    await fs.appendFile(path, `\n${data}`);
    console.log("File updated.");
  } catch (error) {
    console.error("Error appending file: ", error);
  }
}

async function listDir(dir) {
  try {
    const directory = dir ? p.resolve(process.cwd(), dir) : process.cwd();

    const files = await fs.readdir(directory);

    console.log("Files:");
    for (const file of files) {
      console.log(file);
    }
  } catch (error) {
    console.error("Error listing directory:", error);
  }
}

async function main() {
  switch (command) {
    case "create":
      await createFile(path);
      break;
    case "write":
      await writeFileFn(path, data);
      break;
    case "read":
      await readFileFn(path);
      break;
    case "delete":
      await deleteFile(path);
      break;
    case "append":
      await appendFileFn(path, data);
      break;
    case "list":
      await listDir(fileArg);
      break;
    case "rename":
      await renameFile(path, data);
      break;
    default:
      console.log("Unknown Action.");
  }
}

main();
