//Project Initialization
import * as fs from "fs";

// Read data from data.json file
const readData = (): any => {
  const rawData = fs.readFileSync("data.json", "utf-8");
  return JSON.parse(rawData);
};

const data = readData();
console.log("Parsed Data:", data);
