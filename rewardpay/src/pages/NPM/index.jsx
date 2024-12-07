import React, { useEffect, useState } from "react";
import data from "../../../../data.json";

const NPM = () => {
  const [netProfitMargin, setNetProfitMargin] = useState(0);

  useEffect(() => {
    const calculateNetProfitMargin = () => {
      const revenue = data.data
        .filter((item) => item.account_category === "revenue")
        .reduce((sum, item) => sum + item.total_value, 0);

      const expenses = data.data
        .filter((item) => item.account_category === "expense")
        .reduce((sum, item) => sum + item.total_value, 0);

      const npm = revenue
        ? Math.round(((revenue - expenses) / revenue) * 100)
        : 0;
      setNetProfitMargin(npm);
    };

    calculateNetProfitMargin();
  }, []);

  return (
    <div className="content">
      <h2>Net Profit Margin</h2>
      <p>Net Profit Margin: {netProfitMargin}%</p>
    </div>
  );
};

export default NPM;
