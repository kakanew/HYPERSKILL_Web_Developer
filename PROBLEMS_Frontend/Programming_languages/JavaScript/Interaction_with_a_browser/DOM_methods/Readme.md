# DOM methods

## getElementById()

```html
<p id="blue-text">What's your hyper skill?</p>

<script>
  let element = document.getElementById("blue-text"); // get the element by id
</script>
```

```javascript
element.style.color = "blue";
```

## querySelector()

```html
<p>What's your hyper skill?</p>

<script>
  let element = document.querySelector("p"); // get the element by selector
</script>
```

## querySelectorAll()

```html
<p>Tell me</p>
<p>What's your hyper skill?</p>

<script>
  let elements = document.querySelectorAll("p"); // get elements by selector
</script>
```

> Do not forget that there are class selectors `(".className"`), id `("#idName")` selectors and many others. All of them can be used in the methods of `querySelectorAll()` and `querySelector()`.Do not forget that there are class selectors `(".className"`), id `("#idName")` selectors and many others. All of them can be used in the methods of `querySelectorAll()` and `querySelector()`.

### [HYPERSKILL_Web_Developer](https://github.com/kakanew/HYPERSKILL_Web_Developer)

