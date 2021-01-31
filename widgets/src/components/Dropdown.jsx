import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const clickListener = (ev) => {
      if (ref.current && ref.current.contains(ev.target)) return;
      setOpen(false);
    };

    document.body.addEventListener("click", clickListener);
    return () => {
      document.body.removeEventListener("click", clickListener);
    };
  }, []);

  const optionsList = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div key={option.value} className="item" onClick={() => onSelectedChange(option)}>
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          id=""
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>{optionsList}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
