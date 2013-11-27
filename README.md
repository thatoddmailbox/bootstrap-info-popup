bootstrap-info-popup
====================
A simple plugin for Twitter Bootstrap that lets you easily small popup messages (like Google's) with JavaScript.

Requirements
====================
* jQuery
* Twitter Bootstrap (tested with v2.3.2, might work with v3)

Usage
====================
Include somewhere in your page:
```html
<script src="infopopup.js" type="text/javascript"></script>
```
Include somewhere in your JavaScript:
```JavaScript
... code bla bla bla ...
$.infoPopup({
  text: text
});
... code bla bla bla...
```

Options
====================
```JavaScript
$.infoPopup({
  text: "Hello!",
  type: "info"
});
```

* `text`: _(default: "Hello!")_ The text to display in the popup.
* `type`: _(default: "info")_ The type of popup to display. (options: "error", "success", "info", "warn")
