!function(app) {
  app.popup('productCart', function(ctrl) {
    ctrl.onload(function() {
      ctrl.log('-open-');
    });
    ctrl.on.close = ctrl.event(function(hd) {
      hd.click = function() {
        ctrl.close();
      };
    });
  
    ctrl.css = { 'sheet-layer': true };
    ctrl.url = app.root + '/shop/product/cart.html';
  });
  }(MakeApp());
  