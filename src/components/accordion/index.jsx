import React, { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleClick(getCurrentId) {
    setSelected((prevSelected) => (prevSelected === getCurrentId ? null : getCurrentId));
  }

  function handleMultipleClick(currId) {
    
    const findCurrIndex = multiple.indexOf(currId);
    if (findCurrIndex === -1) {
      setMultiple((prevMultiple) => [...prevMultiple, currId]);
    } else {
      setMultiple((prevMultiple) => prevMultiple.filter((id) => id !== currId));
    }
  }

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}>
        {enableMultiSelect ? "Disable Multiselection" : "Enable Multiselection"}
      </button>
      <div className="accordion">
        {data.map((dataItem) => (
          <section key={dataItem.id} className="item">
            <header
              className="title"
              onClick={() =>
                enableMultiSelect
                  ? handleMultipleClick(dataItem.id)
                  : handleSingleClick(dataItem.id)
              }
            >
              <h4>{dataItem.question}</h4>
              <span>
                {enableMultiSelect
                  ? multiple.includes(dataItem.id)
                    ? "-"
                    : "+"
                  : selected === dataItem.id
                  ? "-"
                  : "+"}
              </span>
            </header>
            {enableMultiSelect
              ? multiple.includes(dataItem.id) && <p>{dataItem.answer}</p>
              : selected === dataItem.id && <p>{dataItem.answer}</p>}
          </section>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
