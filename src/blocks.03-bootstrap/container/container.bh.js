module.exports = function(bh) {
  bh.match('container', function(ctx, json) {
    bh.cbc('container', '');
    bh.cbc('container_fluid_false', 'container');
    bh.cbc('container_fluid', 'container-fluid');

    // Хак для корректно работы fluid: false при замене классов
    // Нужен потому что container и container-fluid не совместимы
    // на одной DOM-ноде
    ctx.mod('fluid', 'false'); // false в кавычках, это не ошибка
  });
};
