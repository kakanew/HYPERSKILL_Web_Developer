# Comparison operators

## Numbers

```javascript
console.log(5 > 3);   // true
console.log(4 < 2);   // false
console.log(7 == 6);  // false
console.log(7 != 6);  // true
```

## Strings

```javascript
console.log("A" == "A");             // true
console.log("A" != "Z");             // true
console.log("Z" > "A");              // true
console.log("colorful" > "color");   // true
console.log("Dog" > "Bird");         // true
```

## Different types

```javascript
console.log("10" > 5);    // true
console.log(14 == "14");  // true
```

The logical value `true` in such cases becomes `1`, and `false` is considered `0`.

```javascript
console.log(true == 1);   // true
console.log(false == 0);  // true
```

## Strict equal and strict not equal

```javascript
console.log("15" === 15);         // false
console.log("15" == 15);          // true 
console.log(true === 1);          // false
console.log(true == 1);           // true
console.log(null === undefined);  // false
console.log(null == undefined);   // true 
```

## null and undefined

```javascript
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(null <= 0); // true
```

Also, any comparison of `undefined` with `0` is always `false`:

```javascript
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
console.log(undefined <= 0); // false
```

JS has another strange rule: `undefined` can only equal `null` and nothing more:

```javascript
console.log(undefined == null);  // true 
console.log(undefined == 0);     // false
```

### [HYPERSKILL_Web_Developer](https://github.com/kakanew/HYPERSKILL_Web_Developer)

