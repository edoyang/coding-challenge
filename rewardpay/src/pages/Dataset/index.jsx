import React, { useState } from "react";
import data from "../../../../data.json";
import "./style.scss";

const Dataset = () => {
  const [openIndex, setOpenIndex] = useState(null); // For toggling individual items
  const [openAll, setOpenAll] = useState(false); // For toggling all items

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleOpenAll = () => {
    setOpenAll(!openAll);
    setOpenIndex(null);
  };

  return (
    <div className="dataset content">
      <h2>Dataset</h2>
      <button onClick={handleOpenAll}>
        {openAll ? "Close All Dataset" : "Open All Dataset"}
      </button>
      <div className="list">
        {data.data.map((item, index) => (
          <div
            className={`user-data ${
              openAll || openIndex === index ? "open" : ""
            }`}
            key={index}
            onClick={() => !openAll && handleClick(index)}>
            <p>Account name: {item.account_name}</p>
            <p>Account identifier: {item.account_identifier}</p>
            <p>Account category: {item.account_category}</p>
            <p>Account code: {item.account_code}</p>
            <p>Account currency: {item.account_currency}</p>
            <p>Account status: {item.account_status}</p>
            <p>Value type: {item.value_type}</p>
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
