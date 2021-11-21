import React from "react";
const ConventerValue = ({ inputValue, parametr, finishConvection, finishConvectionValueAction }) => {
  const finalУxchangeМalue = () => {
    finishConvectionValueAction((inputValue * parametr).toFixed(2));
    // console.log(finishConvection);
  };
  return (
    <>
      <div>
        {" "}
        <button onClick={finalУxchangeМalue}>Convent </button>
        <span>Value:{finishConvection}</span>
      </div>
    </>
  );
};

export default ConventerValue;
