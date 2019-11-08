module.exports = function checkKategory(message) {
  const def = 'movie music hard good black tea';
  const product = message.toLowerCase();
  if(def.includes(product)) return product;
  if (message) return false;
  const text = product.replace(/\s+/g, '');
  const ret = text.split(':')[1];
  return ret;
};
