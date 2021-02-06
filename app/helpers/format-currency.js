import { helper } from '@ember/component/helper';

export default helper(function formatCurrency([value, symbol]) {
  return `${value}.00 ${symbol}`;
});
