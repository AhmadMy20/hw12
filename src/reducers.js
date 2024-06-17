// reducers.js
import { combineReducers } from "redux";
import { SELECT_SQUARE, RESTART_GAME } from "./actions";
import { calculateWinner } from "./utils"; // Adjust the path accordingly

const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SQUARE:
      const { square, nextValue } = action.payload;
      if (state.squares[square] !== null || calculateWinner(state.squares)) {
        return state;
      }
      const newSquares = [...state.squares];
      newSquares[square] = nextValue;
      return {
        ...state,
        squares: newSquares,
        xIsNext: !state.xIsNext,
      };

    case RESTART_GAME:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  game: gameReducer,
});

export default rootReducer;
