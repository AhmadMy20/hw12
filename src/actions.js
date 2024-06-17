export const SELECT_SQUARE = "SELECT_SQUARE";
export const RESTART_GAME = "RESTART_GAME";

export const selectSquare = (square, nextValue) => ({
  type: SELECT_SQUARE,
  payload: { square, nextValue },
});

export const restartGame = () => ({
  type: RESTART_GAME,
});
