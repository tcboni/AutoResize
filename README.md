# AutoResize

This is a jQuery plugin for vertically adjusting a textarea based on user input and controlling any presentation in CSS. <strong>No clone or ghost elements</strong> used.

So why build this? Many solutions didn't feel smooth. In some the textarea would flicker on entering new lines with a noticeable delay in resizing. Most were outdated and all were a lot bulkier than they had to be. Many had to use a mirror textarea or ghost element with some needing presentation values set in script. I wanted just the behavior in the script and anything regarding presentation should be controlled through CSS.

## Usage

Load the plugin and use jQuery to find the desired `textarea` elements on which to call the plugin method.

```html
<textarea class="js-auto-size" rows="1"></textarea>

<script src="http://code.jquery.com/jquery-2.1.0.min.js"></script>
<script src="jquery.textarea_autosize.min.js"></script>
<script>
  $('textarea.js-auto-size').textareaAutoSize();
</script>
```

### Minimum CSS Requirements

The only requirement is to set `box-sizing: border-box` and a `min-height` on the textarea. In the example below, the minimum height is one line of text which is determined from the base font size, line height, and vertical padding and border.

```css
textarea {
  box-sizing: border-box;
  max-height: 94px; /* optional, but recommended */
  min-height: 31px;
  overflow-x: hidden; /* for Firefox (issue #5) */
}
```

Increase the `min-height` to have more initial rows. Once text exceeds that minimum height the textarea will expand naturally. The [overflow-x setting is for Firefox](https://github.com/javierjulio/textarea-autosize/issues/5) to prevent an initial additional line from appearing.

### Updating Textarea Content

If you pre-fill the textarea before page load the textarea will adjust to fit automatically but if given a value after page load (e.g. single page app) then you will need to trigger an input event on the textarea after setting its value for it to size correctly.

```js
textarea.val('A test comment.').trigger('input');
```

## Browser Support

These are the browsers I've tested against. These are not requirements.

* Google Chrome (latest)
* Apple Safari 6+
* Mozilla Firefox (latest)
* Internet Explorer 9+ (using [ievms](https://github.com/xdissent/ievms))