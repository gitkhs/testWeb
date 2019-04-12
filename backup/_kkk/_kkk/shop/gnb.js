!function(app) {
app.debug('localhost', '127.0.0.1');

// ---------- popup ---------- //
app.popup('alert', ctrl => {
  ctrl.onload(({message='', ok='ok'}) => {
    ctrl.vo.message(message);
    ctrl.vo.btnok(ok);
  });

  ctrl.vo.message = ctrl.observer('');
  ctrl.vo.btnok = ctrl.observer('ok');
  ctrl.on.btnok = ctrl.event(hd => {
    hd.click = x => ctrl.close();
  });

  ctrl.css = { 'modal-layer': true };
  ctrl.html = [
  '<div class="card" data-app-motion>',
    '<div class="card-body">',
      '<div data-bind="html: vo.message" class="card-text">message</div>',
    '</div>',
    '<div class="card-footer text-right">',
      '<button data-bind="text: vo.btnok, event: on.btnok"',
      ' class="btn btn-sm btn-primary">ok</button>',
    '</div>',
  '</div>',
  ].join('');
});

// ---------- service ---------- //
app.root = '/';
app.service('paper', app.popup);
app.service('alert', function(message, focus) {
  return app.get('alert', {focus:focus}).open({message: message});
});

}(MakeApp());

window.imgDummy = function(wh, ht, cl, img) {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = cl;
  ctx.fillRect(0, 0, wh, ht);

  if(!img) return canvas.toDataURL('image/jpeg');
  img.src = canvas.toDataURL('image/jpeg');
};
