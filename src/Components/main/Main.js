import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import { baseExchangeRateAction, exchangeRateAction, showModalAction } from "../../redux/actions/actions";
import { MainStyled } from "./MainStyled";
const currencyconverterapicurrencies = "https://free.currconv.com/api/v7/currencies?apiKey=c1d931a60af6c8d58a0a"; //good convent api

const Main = ({ exchangeRateAction, exchangeRate, baseExchangeRateAction, baseExchangeRate, showModal, showModalAction }) => {
  useEffect(() => {
    selectValue();
  }, []);
  const selectValue = () => {
    axios.get(currencyconverterapicurrencies).then(res => exchangeRateAction(Object.keys(res.data.results)));
  };
  const currcovnValue = e => {
    baseExchangeRateAction(e.target.value);
  };
  console.log();
  return (
    <>
      <div>
        <MainStyled>
          {showModal ? (
            <Modal baseExchangeRate={baseExchangeRate} showModalAction={showModalAction}>
              <select size="5" className="select__css" name="exchangeRate" onChange={currcovnValue}>
                {exchangeRate.map(item => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </Modal>
          ) : (
            ""
          )}

          <ul>
            <h2 className="title__menu">menu</h2>
            <li>
              <NavLink className="menu" to="/convent">
                Conventing
              </NavLink>
            </li>
            <li>
              <NavLink className="menu" to="/rates">
                Rates
              </NavLink>
            </li>
          </ul>
        </MainStyled>
      </div>
    </>
  );
};
const mapStateToProps = (state, ownProps) => ({
  exchangeRate: state.main.exchangeRate,
  baseExchangeRate: state.main.baseExchangeRate,
  showModal: state.main.showModal
});
const mapDispatchToProps = {
  exchangeRateAction: exchangeRateAction,
  baseExchangeRateAction: baseExchangeRateAction,
  showModalAction: showModalAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
// export default Main;
