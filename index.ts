//Project Initialization
import * as fs from "fs";

// Read data from data.json file
const readData = (): any => {
  const rawData = fs.readFileSync("data.json", "utf-8");
  return JSON.parse(rawData);
};

const data = readData();
// console.log("Parsed Data:", data);  // Uncomment to see the parsed data

const formatCurrency = (value: number): string => {
  return `$${Math.round(value).toLocaleString("en-US")}`;
};

// REVENUE CALCULATION
const calculateRevenue = (data: any[]): number => {
  return data
    .filter((item) => item.account_category === "revenue") // Filter only revenue entries
    .reduce((sum, item) => sum + item.total_value, 0); // Sum up the total_value
};

// Access the 'data' array from the parsed JSON
const revenue = calculateRevenue(data.data); // 'data' contains the array of records
console.log(`Revenue: ${formatCurrency(revenue)}`);

// EXPENSES CALCULATION
const calculateExpenses = (data: any[]): number => {
  return data
    .filter((item) => item.account_category === "expense") // Filter only expense entries
    .reduce((sum, item) => sum + item.total_value, 0); // Sum up the total_value
};

// Calculate expenses
const expenses = calculateExpenses(data.data);
console.log(`Expenses: ${formatCurrency(expenses)}`);

// CALCULATE GROSS PROFIT
const calculateGrossProfitMargin = (data: any[], revenue: number): number => {
  const totalSales = data
    // Filter only sales entries with debit value type
    .filter(
      (item) => item.account_type === "sales" && item.value_type == "debit"
    )
    .reduce((sum, item) => sum + item.total_value, 0);

  return revenue ? Math.round((totalSales / revenue) * 100) : 0; // Avoid division by zero
};

// Calculate Gross Profit Margin
const grossProfitMargin = calculateGrossProfitMargin(data.data, revenue);
console.log(`Gross Profit Margin: ${grossProfitMargin}%`);

// CALCULATE NET PROFIT
const calculateNetProfitMargin = (
  revenue: number,
  expenses: number
): number => {
  const netProfit = expenses - revenue; // Calculate net profit
  return revenue ? Math.round((netProfit / revenue) * 100) : 0; // Avoid division by zero
};

// Calculate Net Profit Margin
const netProfitMargin = calculateNetProfitMargin(revenue, expenses);
console.log(`Net Profit Margin: ${netProfitMargin}%`);
