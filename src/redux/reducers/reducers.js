import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  baseExchangeRateAction,
  fromConversionExchangeRateAction,
  exchangeRateAction,
  inputValueAction,
  showModalAction,
  toConversionExchangeRateAction,
  currencyExchangeRateAction,
  parametrAction,
  finishConvectionValueAction,
  rateAction
} from "../actions/actions";
const inputValueReducer = createReducer("", {
  [inputValueAction]: (_, { payload }) => payload
});
const parameterReducer = createReducer("", {
  [parametrAction]: (_, { payload }) => payload
});
const showModalReducer = createReducer(true, {
  [showModalAction]: state => !state
});
const exchangeRateReducer = createReducer([], {
  [exchangeRateAction]: (_, { payload }) => payload
});
const currencyExchangeRateReducer = createReducer([], {
  [currencyExchangeRateAction]: (_, { payload }) => payload
});
const baseExchangeRateReducer = createReducer("", {
  [baseExchangeRateAction]: (_, { payload }) => payload
});
const fromConversionExchangeRateReducer = createReducer("", {
  [fromConversionExchangeRateAction]: (_, { payload }) => payload
});
const toConversionExchangeRateReducer = createReducer("", {
  [toConversionExchangeRateAction]: (_, { payload }) => payload
});
const finishConvectionValueReducer = createReducer("", {
  [finishConvectionValueAction]: (_, { payload }) => payload
});
const rateReducer = createReducer([], {
  [rateAction]: (_, { payload }) => payload
});
const mainReducer = combineReducers({
  exchangeRate: exchangeRateReducer,
  showModal: showModalReducer,
  baseExchangeRate: baseExchangeRateReducer
});
const conventeringReducer = combineReducers({
  inputValue: inputValueReducer,
  parametr: parameterReducer,
  currencyExchangeRate: currencyExchangeRateReducer,
  fromConversion: fromConversionExchangeRateReducer,
  toConversion: toConversionExchangeRateReducer,
  finishConvection: finishConvectionValueReducer
});
export const conventerReducer = combineReducers({
  // inputValue: inputValueReducer,
  // parametr: parameterReducer,
  rate: rateReducer,
  main: mainReducer,
  conventer: conventeringReducer
  // showModal: showModalReducer,
  // exchangeRate: exchangeRateReducer,
  // baseExchangeRate: baseExchangeRateReducer,
  // currencyExchangeRate: currencyExchangeRateReducer,
  // fromConversion: fromConversionExchangeRateReducer,
  // toConversion: toConversionExchangeRateReducer,
  // finishConvection: finishConvectionValueReducer
});
