# jQuery input valHooks

`$.fn.val` hooks for some input elements.

## Usage

```html
<script src="jquery.js"></script>
<script src="jquery.input.valhooks.js"></script>
```

## Examples

### radio

```html
<input type="radio" name="foo" value="a">
<input type="radio" name="foo" value="b">
<input type="radio" name="foo" value="c">
```

```javascript
$('[name=foo]').val('a');
$('[name=foo]').val(); // a

$('[name=foo]').val('b');
$('[name=foo]').val(); // b

$('[name=foo]').val('c');
$('[name=foo]').val(); // c
```

### checkbox

```javascript
$('#checkbox').val(true); // check
$('#checkbox').val(false); // uncheck
$('#checkbox').val(); // false.

```

### color

```javascript
// same mean.
$('#color').val('#ffffff');
$('#color').val('#fff');
$('#color').val('fff');
$('#color').val('ffffff');
$('#color').val('rgb(255, 255, 255)');
$('#color').val({r: 255, g: 255, b:255});

$('#color').val(); // '#ffffff'
```

### time

```javascript
// same mean.
$('#time').val('01:00');
$('#time').val(3600000);

$('#time').val(); // 3600000.
```

### date

```javascript
$('#date').val(new Date);
$('#date').val(); // get as Date object.
```

### and more

week, month, datetime, datetime-local...

## License

Licensed under the MIT.
