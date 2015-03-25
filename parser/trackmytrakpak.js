module.exports = function($) {
  this.$ = $;
  this.getJSON = function() {
  	var obj = {};
    var detailContainer = $(".col-md-12").first().find("tr");
    var detail = {};
    var key,value;
    detailContainer.each(function() {
      $(this).children('th').each(function() {
        key = $(this).text();
        if (key == 'Carrier:') {
          cv = $(this).next().children("input").attr("onclick");
          if (cv) {
            value = cv.split("','")[0];
            value = value.split("'")[1];
          } else {
            value = '';
          }
        } else {
          value = $(this).next().text();
        }
        detail[key] = value;
      });
    });
    var shipment = [];
    var shipmentContainer = $(".col-md-12").eq(1).find("tr");
    shipmentContainer.each(function(i,el) {
      if (i > 0) {
        shipment.push({
          time: $(this).children('td').first().text().trim()
          , activity: $(this).children('td').eq(1).text().trim()
          , code: $(this).children('td').eq(2).text().trim()
        });
      }
    });
    obj.detail = detail
    obj.shipment = shipment
  	return JSON.stringify(obj);
  };
};
