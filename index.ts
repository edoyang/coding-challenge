//Project Initialization
import * as fs from "fs";

// Read data from data.json file
const readData = (): any => {
  const rawData = fs.readFileSync("data.json", "utf-8");
  return JSON.parse(rawData);
};

const data = readData();
// console.log("Parsed Data:", data);  // Uncomment to see the parsed data

const calculateRevenue = (data: any[]): number => {
  return data
    .filter((item) => item.account_category === "revenue") // Filter only revenue entries
    .reduce((sum, item) => sum + item.total_value, 0); // Sum up the total_value
};

// Access the 'data' array from the parsed JSON
const revenue = calculateRevenue(data.data); // 'data' contains the array of records
console.log(`Revenue: $${revenue.toLocaleString("en-US")}`);
