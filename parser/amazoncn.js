module.exports = function($) {
  this.$ = $;
  this.getJSON = function() {
  	var obj = {};
  	obj.title = this.$("title").text();
  	tmpprice = this.$("#priceblock_ourprice").text();
    if (!tmpprice) tmpprice = this.$(".a-color-price").first().text();
    if (!tmpprice) tmpprice = this.$(".priceLarge").first().text();
    obj.price = tmpprice;
    obj.en = 'amazoncn';
  	return JSON.stringify(obj);
  };
}
