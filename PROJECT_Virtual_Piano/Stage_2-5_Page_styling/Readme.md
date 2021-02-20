# Project: Virtual Piano

## Stage 2/5: Page styling

### Description

At the moment, your application doesn't really please the eye yet. It's hard to imagine that soon the letters will turn into a virtual piano. Let's make this happen!

Use CSS to give your piano its unique design:

- Change the background of the web page, choose any color you like;
- Make the keys white (recommended for a classic piano look);
- Make sure that all the piano keys are aligned horizontally;
- Specify the key height and width. Sizes cannot be defined for inline `<kbd>` elements, so first you should change their type. One of the ways to do this is to set the `display` property with an `inline-block` value for all `<kbd>` tags — it will save the behavior of inline elements while allowing us to use some features of block-level elements;
- Wrap all the `<kbd>` tags in the `<div>` tag with the `container` class and get rid of unnecessary indents;
- Use the `border` property so that you can see the keys separately;
- Place your piano in the center of the screen;
- Optionally, you can center and align the key captions horizontally by applying the `text-align` property with the `center` value.

It’s often difficult to find the right values for your selectors. In such cases, you can open the HTML file in your browser, go to web development tools (usually done with *Ctrl+Shift+I* or *Cmd+Opt+I*) and use them to apply styles to the elements directly. If you opt to do that, don't forget to copy and transfer the changes to your CSS file!

### Objectives

1. Change the page background color.
2. Change the key background color to white.
3. Set the size of the keys.
4. Wrap the `<kbd>` tags in `<div>` with the `container` class.
5. Remove the distance between the keys. For example, you can do it with the `margin-left` property.
6. Set boundaries for `<kbd>` elements.
7. Place the piano in the center of the screen.

### Examples

**Example 1:** *Working in a development tool*

![img](https://ucarecdn.com/2a5c6001-6730-4d90-975a-7c907c719618/)

**Example 2:** *Example result after completing this stage*

![img](https://ucarecdn.com/c8e71ac9-d935-4423-8abb-e094a817071c/)

### [HYPERSKILL_Web_Developer](https://github.com/kakanew/HYPERSKILL_Web_Developer)