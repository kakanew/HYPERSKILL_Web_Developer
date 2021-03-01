# Type conversion

## String conversion

```javascript
String(123);   // "123"
String(false); // "false"
String(-12.3); // "-12.3"
String(true);  // "true"
```

```javascript
"3" + 4                        // "34"
4 + ""                         // "4"
true + "detective"             // "truedetective"
"You are " + 25 + " years old" // "You are 25 years old"
```

```javascript
3 + 10 + "1" // "131", not "3101"
```

## Numeric conversion

```javascript
Number("1");    // 1
Number(" 37 "); // 37
Number("");     // 0
Number("\n3");  // 3
Number("\n");   // 0
Number("\t");   // 0
Number(true);   // 1
Number(false);  // 0
```

```javascript
true + 43 // 44
3 - false // 3
10 / "5"  // 2
-true     // -1
+"85"     // 85
```

## Boolean conversion

```javascript
Boolean(1);            // true
Boolean(0);            // false
Boolean("Am I nice?"); // true
Boolean("");           // false   
```

```javascript
!!3                      // true
0 || "go"                // "go"
"Master" && "Margarita"  // "Margarita"
```

### [HYPERSKILL_Web_Developer](https://github.com/kakanew/HYPERSKILL_Web_Developer)

