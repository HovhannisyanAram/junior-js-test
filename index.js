const WINNING_SUM = 123.40;

/**
@param {Array} cartItemsPrices
*/
function doesCartWinPrize(cartItemsPrices) {
  let sum = cartItemsPrices.reduce((a, b) => parseFloat(a) + parseFloat(b), 0).toFixed(2);
  if(+sum === WINNING_SUM) {
    return true
  } else { return false };
}

module.exports = doesCartWinPrize;
