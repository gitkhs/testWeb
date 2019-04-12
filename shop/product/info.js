!function(app) {
app.popup('productInfo', function(ctrl) {
  ctrl.onload(function() {
    ctrl.log('-open-');
  });
  ctrl.on.close = ctrl.event(function(hd) {
    hd.click = function() {
      ctrl.close();
    };
  });

  ctrl.css = { 'modal-layer': true };
  ctrl.url = app.root + '/shop/product/info.html';
});
}(MakeApp());
