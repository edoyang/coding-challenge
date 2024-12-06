import React, { useEffect, useState } from "react";
import data from "../../../../data.json";

const GPM = () => {
  const [grossProfitMargin, setGrossProfitMargin] = useState(0);

  useEffect(() => {
    const calculateGrossProfitMargin = () => {
      const totalSales = data.data
        .filter(
          (item) => item.account_type === "sales" && item.value_type === "debit"
        )
        .reduce((sum, item) => sum + item.total_value, 0);

      const revenue = data.data
        .filter((item) => item.account_category === "revenue")
        .reduce((sum, item) => sum + item.total_value, 0);

      const gpm = revenue ? Math.round((totalSales / revenue) * 100) : 0;
      setGrossProfitMargin(gpm);
    };

    calculateGrossProfitMargin();
  }, []);

  return (
    <div className="content">
      <h2>Gross Profit Margin</h2>
      <p>Gross Profit Margin: {grossProfitMargin}%</p>
    </div>
  );
};

export default GPM;
