# RewardPay Coding Challenge

This project is a React.js web application that processes and visualizes financial data from data.json. It calculates key accounting metrics dynamically and provides a user-friendly interface for viewing the results.

## Accounting Metrics

The application calculates the following metrics:

1. Revenue: Total of all values where account_category is "revenue".
2. Expenses: Total of all values where account_category is "expense".
3. Gross Profit Margin (GPM): Total sales debits divided by revenue.
4. Net Profit Margin (NPM): Subtract expenses from revenue and divide the result by revenue.
5. Working Capital Ratio (WCM): Calculated as the ratio of assets to liabilities.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js (v22 or higher) and npm installed on your system.

### Setup Instructions

1. Clone the repository

```bash
git clone https://github.com/edoyang/coding-challenge.git
```

2. Install dependencies Run the setup script to install all dependencies:

```bash
npm run setup
```

This script will:

- Install root-level dependencies.
- Navigate to the rewardpay directory and install project-specific dependencies.

### Running the Application

1. Generate the report To process the data and view the report, run:

```bash
myChallenge
```

2. Start the visualization To launch the React application and visualize the metrics:

```bash
npm start
```

### Features

- Dynamic Data Processing: The app dynamically processes data from data.json. It adapts to changes in the data structure and computes the metrics in real-time.
- Key Metrics Visualization: Provides clear and interactive visual representations of:
  - Revenue
  - Expenses
  - Gross Profit Margin
  - Net Profit Margin
  - Working Capital Ratio

### Project Structure

The project is organized as follows:

```bash
root/
├── rewardpay/
│ ├── src/
│ │ ├── components/ #React Components
│ │ ├── pages/ #Data visualization report
│ └── ...
├── README.md
├── data.json #JSON data
├── index.tsx #JSON report
└── package.json
```

### Contribution Guidelines

- Fork the repository and create a feature branch for your changes.
- Run tests to ensure your changes do not introduce regressions.
- Submit a pull request with a detailed description of your changes.
