import React, { useEffect, useState } from "react";
import data from "../../../../data.json";

const WCR = () => {
  const [workingCapitalRatio, setWorkingCapitalRatio] = useState(0);

  useEffect(() => {
    const calculateWorkingCapitalRatio = () => {
      const totalAssets =
        data.data
          .filter(
            (item) =>
              item.account_category === "assets" &&
              item.value_type === "debit" &&
              ["current", "bank", "current_accounts_receivable"].includes(
                item.account_type
              )
          )
          .reduce((sum, item) => sum + item.total_value, 0) -
        data.data
          .filter(
            (item) =>
              item.account_category === "assets" &&
              item.value_type === "credit" &&
              ["current", "bank", "current_accounts_receivable"].includes(
                item.account_type
              )
          )
          .reduce((sum, item) => sum + item.total_value, 0);

      const totalLiabilities =
        data.data
          .filter(
            (item) =>
              item.account_category === "liability" &&
              item.value_type === "credit" &&
              ["current", "current_accounts_payable"].includes(
                item.account_type
              )
          )
          .reduce((sum, item) => sum + item.total_value, 0) -
        data.data
          .filter(
            (item) =>
              item.account_category === "liability" &&
              item.value_type === "debit" &&
              ["current", "current_accounts_payable"].includes(
                item.account_type
              )
          )
          .reduce((sum, item) => sum + item.total_value, 0);

      const wcr = totalLiabilities
        ? Math.round((totalAssets / totalLiabilities) * 100)
        : 0;
      setWorkingCapitalRatio(wcr);
    };

    calculateWorkingCapitalRatio();
  }, []);

  return (
    <div className="content">
      <h2>Working Capital Ratio</h2>
      <p>Working Capital Ratio: {workingCapitalRatio}%</p>
    </div>
  );
};

export default WCR;
