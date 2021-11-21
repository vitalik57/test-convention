import React from "react";
const RatesList = ({ rate, baseExchangeRate, value }) => {
  // const firstValue = Object.values(rate)[0];
  // const secondValue = Object.values(rate)[1];

  return (
    <>
      <li>
        {/* <p> {`1 ${baseExchangeRate} = ${rate[0]} USD`}</p>
        <p> {`1 ${baseExchangeRate} = ${rate[1]} EUR`}</p> */}
        {/* {value?.map(item => <li>{item}</li>)} */}
        {/* <p> {`1 ${baseExchangeRate} = ${firstValue} USD`}</p>
        <p> {`1 ${baseExchangeRate} = ${secondValue} EUR`}</p> */}
      </li>
    </>
  );
};

export default RatesList;
