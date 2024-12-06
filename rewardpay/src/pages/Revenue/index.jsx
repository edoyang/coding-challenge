import React, { useEffect, useState } from "react";
import data from "../../../../data.json";

const Revenue = () => {
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    const calculateRevenue = () => {
      const totalRevenue = data.data
        .filter((item) => item.account_category === "revenue")
        .reduce((sum, item) => sum + item.total_value, 0);
      setRevenue(totalRevenue);
    };

    calculateRevenue();
  }, []);

  return (
    <div className="content">
      <h2>Revenue</h2>
      <p>Total Revenue: ${revenue.toLocaleString()}</p>
    </div>
  );
};

export default Revenue;
