import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  currencyExchangeRateAction,
  finishConvectionValueAction,
  fromConversionExchangeRateAction,
  inputValueAction,
  parametrAction,
  toConversionExchangeRateAction
} from "../../redux/actions/actions";
import { ConventerStyled } from "./ConventerStyled";
import ConventerValue from "./ConventerValue";

const currencyconverterapicurrencies = "https://free.currconv.com/api/v7/currencies?apiKey=c1d931a60af6c8d58a0a"; //good convent api

const Converter = ({
  inputValueAction,
  fromconversionAction,
  currencyExchangeRateAction,
  currencyExchangeRate,
  toConversionExchangeRateAction,
  from,
  to,
  parametrAction,
  inputValue,
  parametr,
  finishConvectionValueAction,
  finishConvection
}) => {
  // додатковий UseEffect  для того шоб після перезагрузки не пропадали значення
  useEffect(
    () => {
      axios.get(currencyconverterapicurrencies).then(res => currencyExchangeRateAction(Object.keys(res.data.results)));
    },
    [currencyExchangeRateAction]
  );
  const handleChange = e => {
    inputValueAction(e.target.value);
    currencyRatio();
  };
  const fromConversionChange = e => {
    fromconversionAction(e.target.value);
  };
  const toConversionChange = e => {
    toConversionExchangeRateAction(e.target.value);
  };

  const currencyRatio = () => {
    axios
      .get(`https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=c1d931a60af6c8d58a0a`)
      .then(res => parametrAction(Object.values(res.data)[0]));
  };
  return (
    <>
      <ConventerStyled>
        <div>
          <h2>from</h2>
          <select className="select__css" size="5" name="fromExchangeRate" onChange={fromConversionChange}>
            {currencyExchangeRate.map(item => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <h2 htmlFor="">to</h2>
          <select className="select__css" size="5" name="toExchangeRate" onChange={toConversionChange}>
            {currencyExchangeRate.map(item => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <input placeholder="Please select the currency first" disabled={!to || !from} type="number" onChange={handleChange} />
        <ConventerValue
          finishConvection={finishConvection}
          inputValue={inputValue}
          parametr={parametr}
          finishConvectionValueAction={finishConvectionValueAction}
        />
      </ConventerStyled>
    </>
  );
};
const mapStateToProps = state => ({
  inputValue: state.conventer.inputValue,
  currencyExchangeRate: state.conventer.currencyExchangeRate,
  from: state.conventer.fromConversion,
  to: state.conventer.toConversion,
  parametr: state.conventer.parametr,
  finishConvection: state.conventer.finishConvection
});
const mapDispatchToProps = {
  inputValueAction: inputValueAction,
  fromconversionAction: fromConversionExchangeRateAction,
  currencyExchangeRateAction: currencyExchangeRateAction,
  toConversionExchangeRateAction: toConversionExchangeRateAction,
  parametrAction: parametrAction,
  finishConvectionValueAction: finishConvectionValueAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Converter);
