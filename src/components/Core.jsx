import React, { useReducer } from "react";
import Head from "./Head";
import KeysContainer from "./KeysContainer";
import ResultScreen from "./ResultScreen";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  DELETE_DIGIT: "delete-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  EVALUATE: "evaluate",
};
const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.override)
        return {
          ...state,
          currentOperand: payload.val,
          override: false,
        };
      if (state.currentOperand === "0" && payload.val === 0) return state;
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.val}`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null)
        return state;
      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.val,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }
      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.val,
        };
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.val,
        currentOperand: null,
      };
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      )
        return state;
      return {
        currentOperand: evaluate(state),
        previousOperand: null,
        override: true,
      };
    case ACTIONS.DELETE_DIGIT:
      if (state.override) {
        return {
          ...state,
          currentOperand: null,
          override: false,
        };
      }
      if (state.currentOperand == null) return state;
      if (state.currentOperand.length === 1) {
        return {
          ...state,
          currentOperand: null,
        };
      }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    default:
  }
};

function evaluate({ previousOperand, currentOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const curr = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(curr)) return "";
  let result = "";
  switch (operation) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
      result = prev / curr;
      break;
    default:
      return;
  }
  return result.toString();
}

const Core = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );
  return (
    <div className="core">
      <Head />
      <ResultScreen
        curOp={currentOperand}
        preOp={previousOperand}
        op={operation}
      />
      <KeysContainer dispatch={dispatch} />
    </div>
  );
};

export default Core;
