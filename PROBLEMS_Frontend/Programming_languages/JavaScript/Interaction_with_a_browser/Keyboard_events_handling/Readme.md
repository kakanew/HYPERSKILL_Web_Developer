# Keyboard events handling

## Event handling

```javascript
document.addEventListener("keydown", function(event) {
  if (event.code == "AltRight") {
    console.log(event);
  }
});
```

For our event handler to work correctly, the `event` parameter was passed to the function (sometimes it is simply designated by the letter `e`).

![img](https://ucarecdn.com/4f7cb3bf-e2a7-448f-80a5-8470cb8787c5/-/crop/709x51/75,497/-/preview/)

```javascript
document.addEventListener("keydown", function(event) {
  console.log(event.code);
});
```

```javascript
document.addEventListener("keydown", function(event) {
  if (event.key == "W") {
    console.log("W Pressed");
  }
});
```

### [HYPERSKILL_Web_Developer](https://github.com/kakanew/HYPERSKILL_Web_Developer)

