import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { rateAction } from "../../redux/actions/actions";
import { RateStyled } from "./RateStyled";
//Дане апи не може конвектувати більше ніж в дві валюти
const Rates = ({ rate, rateAction, baseExchangeRate }) => {
  useEffect(() => {
    axios
      .get(
        `https://free.currconv.com/api/v7/convert?q=${baseExchangeRate}_USD,${baseExchangeRate}_EUR&compact=ultra&apiKey=c1d931a60af6c8d58a0a`
      )
      .then(res => rateAction(Object.values(res.data)));
  }, []);

  return (
    <>
      <RateStyled>
        <div>
          <ul>
            {rate == null ? (
              ""
            ) : (
              <li className="text">
                <p> {`1 ${baseExchangeRate} = ${rate[0]} USD`}</p>
                <p> {`1 ${baseExchangeRate} = ${rate[1]} EUR`}</p>
              </li>
            )}
          </ul>
        </div>
      </RateStyled>
    </>
  );
};
const mapStateToProps = state => ({
  rate: state.rate,
  baseExchangeRate: state.main.baseExchangeRate
});
const mapDispatchToProps = {
  rateAction: rateAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rates);
