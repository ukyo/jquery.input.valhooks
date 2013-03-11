/*
 * The MIT License
 * 
 * Copyright (c) 2013 Syu Kato <ukyo@gmail.com>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

(function($) {

var valueAsDateHook, valueAsNumberHook, rgb2colorCode;

valueAsDateHook = {
  get: function(elem) {
    return elem.valueAsDate;
  },
  set: function(elem, value) {
    switch (typeof value) {
      case 'string': return elem.value = value;
      case 'object':
        if (value instanceof Date) return elem.valueAsDate = value;
        throw new Error;
      default: throw new Error;
    }
  }
};

valueAsNumberHook = {
  get: function(elem) {
    return elem.valueAsNumber;
  },
  set: function(elem, value) {
    if (typeof value === 'string') {
      if (value == +value)
        return elem.valueAsNumber = +value;
      return elem.value = value;
    }
    throw new Error;
  }
};

rgb2colorCode = (function() {
  var hex, table, i, j;

  hex = '0123456789abcdef'
  table = [];

  for (i = 0; i < 16; ++i) {
    for (j = 0; j < 16; ++j) {
      table.push(hex.charAt(i) + hex.charAt(j));
    }
  }

  return function rgb2colorCode(r, g, b) {
    return table[+r] + table[+g] + table[+b];
  }
})();

$.extend($.valHooks, {
  date: valueAsDateHook,
  datetime: valueAsDateHook,
  'datetime-local': valueAsDateHook,
  month: valueAsDateHook,
  week: valueAsDateHook,
  time: valueAsNumberHook,
  number: valueAsNumberHook,
  range: valueAsNumberHook,
  radio: {
    get: function(elem) {
      return $('[name=' + elem.name + ']:checked')[0].value;
    },
    set: function(elem, value) {
      return elem.checked = elem.value === value;
    }
  },
  checkbox: {
    get: function(elem) { return !!elem.checked; },
    set: function(elem, value) { return elem.checked = !!value; }
  },
  color: {
    set: function(elem, value) {
      var code, m;

      switch (typeof value) {
        case 'string':
          if (m = value.match(/^#?([0-9a-fA-F]{6})$/)) {
            code = m[1];
          } else if (m = value.match(/^#?([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/)) {
            code = m[1] + m[1] + m[2] + m[2] + m[3] + m[3];
          } else if (m = value.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/)) {
            code = rgb2colorCode(m[1], m[2], m[3]);
          } else {
            throw new Error;
          }
          break;
        case 'object':
          if (value.r != null && value.g != null && value.b != null) {
            code = rgb2colorCode(value.r, value.g, value.b);
          } else {
            throw new Error;
          }
          break;
        default: throw new Error;
      }

      return elem.value = '#' + code;
    }
  }
});

})(jQuery);