$(function(){

function testInput(type, asserts, jqObject) {
  test(type, function() {
    var $el = jqObject || $('<input type="' + type + '">');

    asserts.forEach(function(item) {
      try {
        $el.val(item.value);
        deepEqual($el.val(), item.expected, JSON.stringify(item));
      } catch (e) {
        ok(item.error, JSON.stringify(item));
      }
    });
  });
}

var date = new Date(2013, 0, 1, 0);

testInput('date', [
  {value: {}, error: true},
  {value: [], error: true},
  {value: date, expected: date}
]);

testInput('datetime', [
  {value: {}, error: true},
  {value: [], error: true},
  {value: date, expected: date}
]);

testInput('datetime-local', [
  {value: {}, error: true},
  {value: [], error: true},
  {value: date, expected: date}
]);

testInput('week', [
  {value: {}, error: true},
  {value: [], error: true},
  {value: new Date(2013, 0, 7, 0), expected: new Date(2013, 0, 7, 0)},
  {value: new Date(2013, 0, 8, 0), expected: new Date(2013, 0, 7, 0)},
  {value: new Date(2013, 0, 10, 0), expected: new Date(2013, 0, 7, 0)},
  {value: new Date(2013, 0, 10, 0), expected: new Date(2013, 0, 7, 0)},
  {value: new Date(2013, 0, 11, 0), expected: new Date(2013, 0, 7, 0)},
  {value: new Date(2013, 0, 12, 0), expected: new Date(2013, 0, 7, 0)},
  {value: new Date(2013, 0, 13, 0), expected: new Date(2013, 0, 7, 0)}
]);

testInput('month', [
  {value: {}, error: true},
  {value: [], error: true},
  {value: new Date(2013, 0, 1, 0), expected: new Date(2013, 0, 1, 0)},
  {value: new Date(2013, 0, 2, 0), expected: new Date(2013, 0, 1, 0)},
  {value: new Date(2013, 0, 3, 0), expected: new Date(2013, 0, 1, 0)},
  {value: new Date(2013, 0, 4, 0), expected: new Date(2013, 0, 1, 0)},
  {value: new Date(2013, 0, 5, 0), expected: new Date(2013, 0, 1, 0)},
  {value: new Date(2013, 0, 6, 0), expected: new Date(2013, 0, 1, 0)},
  {value: new Date(2013, 0, 7, 0), expected: new Date(2013, 0, 1, 0)},
  {value: new Date(2013, 0, 8, 0), expected: new Date(2013, 0, 1, 0)},
  {value: new Date(2013, 0, 9, 0), expected: new Date(2013, 0, 1, 0)},
  {value: new Date(2013, 0, 10, 0), expected: new Date(2013, 0, 1, 0)},
  {value: new Date(2013, 0, 11, 0), expected: new Date(2013, 0, 1, 0)},
  {value: new Date(2013, 0, 12, 0), expected: new Date(2013, 0, 1, 0)},
  {value: new Date(2013, 0, 13, 0), expected: new Date(2013, 0, 1, 0)},
  {value: new Date(2013, 0, 14, 0), expected: new Date(2013, 0, 1, 0)},
  {value: new Date(2013, 0, 15, 0), expected: new Date(2013, 0, 1, 0)},
  {value: new Date(2013, 0, 16, 0), expected: new Date(2013, 0, 1, 0)},
  {value: new Date(2013, 0, 17, 0), expected: new Date(2013, 0, 1, 0)},
  {value: new Date(2013, 0, 18, 0), expected: new Date(2013, 0, 1, 0)},
  {value: new Date(2013, 0, 19, 0), expected: new Date(2013, 0, 1, 0)},
  {value: new Date(2013, 0, 20, 0), expected: new Date(2013, 0, 1, 0)},
  {value: new Date(2013, 0, 21, 0), expected: new Date(2013, 0, 1, 0)},
  {value: new Date(2013, 0, 22, 0), expected: new Date(2013, 0, 1, 0)},
  {value: new Date(2013, 0, 23, 0), expected: new Date(2013, 0, 1, 0)},
  {value: new Date(2013, 0, 24, 0), expected: new Date(2013, 0, 1, 0)},
  {value: new Date(2013, 0, 25, 0), expected: new Date(2013, 0, 1, 0)},
  {value: new Date(2013, 0, 26, 0), expected: new Date(2013, 0, 1, 0)},
  {value: new Date(2013, 0, 27, 0), expected: new Date(2013, 0, 1, 0)},
  {value: new Date(2013, 0, 28, 0), expected: new Date(2013, 0, 1, 0)},
  {value: new Date(2013, 0, 29, 0), expected: new Date(2013, 0, 1, 0)},
  {value: new Date(2013, 0, 30, 0), expected: new Date(2013, 0, 1, 0)},
  {value: new Date(2013, 0, 31, 0), expected: new Date(2013, 0, 1, 0)}
]);

testInput('time', [
  {value: {}, error: true},
  {value: [], error: true},
  {value: 1000, expected: 1000},
  {value: '01:00', expected: 3600000}
]);

testInput('number', [
  {value: {}, error: true},
  {value: [], error: true},
  {value: 10, expected: 10}
]);

testInput('range', [
  {value: {}, error: true},
  {value: [], error: true},
  {value: 0, expected: 0},
  {value: -1, expected: 0},
  {value: 10, expected: 10},
  {value: 100, expected: 100},
  {value: 200, expected: 100}
]);

testInput('color', [
  {value: {}, error: true},
  {value: {r: 255}, error: true},
  {value: {r: 255, g: 255}, error: true},
  {value: [], error: true},
  {value: '#ffffff', expected: '#ffffff'},
  {value: 'ffffff', expected: '#ffffff'},
  {value: '#fff', expected: '#ffffff'},
  {value: 'fff', expected: '#ffffff'},
  {value: 'rgb(255, 255, 255)', expected: '#ffffff'},
  {value: {r: 255, g:255, b:255}, expected: '#ffffff'},
]);

testInput('checkbox',[
  {value: true, expected: true},
  {value: false, expected: false}
]);

testInput('radio', [
  {value: 'foo', expected: 'foo'},
  {value: 'bar', expected: 'bar'},
  {value: 'baz', expected: 'baz'}
], $('body').append(
  '<div style="display:none;">' +
    '<input type="radio" name="a" value="foo">' +
    '<input type="radio" name="a" value="bar">' +
    '<input type="radio" name="a" value="baz">' +
  '</div>'
).find('[name=a]'));

});