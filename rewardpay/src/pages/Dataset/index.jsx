import React from "react";
import data from "../../../../data.json";

const Dataset = () => {
  return (
    <div>
      <h2>Dataset</h2>
      <div className="list">
        {data.data.map((item, index) => (
          <div className="user-data" key={index}>
            <p>Account identifier: {item.account_identifier}</p>
            <p>Account category: {item.account_category}</p>
            <p>Account code: {item.account_code}</p>
            <p>Account currency: {item.account_currency}</p>
            <p>Account status: {item.account_status}</p>
            <p>Value type: {item.value_type}</p>
            <p>Account name: {item.account_name}</p>
            <p>Account type: {item.account_type}</p>
            <p>Account type bank: {item.account_type_bank}</p>
            <p>System account: {item.system_account}</p>
            <p>Total Value: ${item.total_value.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dataset;
