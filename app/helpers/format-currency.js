import { helper } from '@ember/component/helper';

export default helper(function formatCurrency([value, symbol]) {
  let val = value
  return `${val}.00 ${symbol}`;
});
