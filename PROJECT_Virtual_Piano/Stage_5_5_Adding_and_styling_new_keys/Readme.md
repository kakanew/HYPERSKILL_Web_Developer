# Project: Virtual Piano

## Stage 5/5: Adding and styling new keys

### Description

If you have a feeling that something is still missing, you're right: a piano has more than just white keys. Create five black keys in the HTML document body using the `<kbd>` tag and bind them to the [corresponding sounds](https://stepik.org/media/attachments/lesson/315625/black_keys.zip).

Use letters `W`, `E`, `T`, `Y`, and `U` for the black keys and position them the way they normally look on a real musical instrument.

To accomplish this, you need to slightly change the code you've already written and add new styles, taking into account the following:

1. You already have styles applied to the keys. To prevent conflict of existing and future properties, wrap the `<kbd>` tags responsible for the white keys in the `<div>` tag with the `white-keys` class. Then, open the CSS file and change the `kbd` selector to `.white-keys kbd`. Now, it does not refer to all the `<kbd> `tags but only those tags that have the `white-keys` class. Check that the application doesn't crash after the edits and still displays the same view.
2. Wrap your black keys in the `<div>` tag with the class `black-keys`.
3. Apply properties to the `.black-keys kbd` selector to make the new keys black-colored.
4. Place the black keys on top of the white keys and resize the black keys, remembering to set the `display` property to `inline-block` value.
5. Change the color of the letters on the black keys. You can also change the font, size, and formatting styles of the text if you want.

> Use `class` or `id` attributes for the keys to which you want to set unique styles, for example, the location styles.

Congratulations, now you have a new project for your portfolio!

After passing this stage, you can continue to develop and improve the project yourself. You can draw the body of the piano, add animation when pressing keys, increase the number of keys or alter the sounds they make. You can also learn CSS Flexbox or CSS Grid, arrays, template literals, and other JS features that will help make your code shorter, cleaner and more readable. Good luck!

## Objectives

1. Add 5 `<kbd>` tags to the HTML document body that will be responsible for the black keys: `W`, `E`, `T`, `Y`, and `U`.
2. Create event handlers that play audio when keys with these characters are pressed.
3. Wrap all the white keys in one `<div>` tag with the class `white-keys`.
4. Wrap all the black keys in one `<div>` tag with the class `black-keys`.
5. Set the color of the black keys to black.
6. Resize the black keys, remembering to set the `display` property to `inline-block` value.
7. Change the location of the black keys using positioning properties.
8. Change the color of the letters displayed on the black keys.

### [HYPERSKILL_Web_Developer](https://github.com/kakanew/HYPERSKILL_Web_Developer)