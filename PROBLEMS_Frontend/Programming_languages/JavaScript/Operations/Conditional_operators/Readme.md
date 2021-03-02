# Conditional operators

## The "if" statement

For example, imagine you have a cat that meows when it gets hungry after 6 am. We can write a statement:

```javascript
function meow() {
  return "Meow!";
}

let time = 10;
let sound;

if (time >= 6) {
  sound = meow();
  console.log(sound);
}
```

```javascript
let condition = true; 

if (condition) {
  console.log("True!");
}
```

## The "else" block

```javascript
function meow() {
  return "Meow!";
}

function sleep() {
  return "Zzzzz...";
}

let time = 5;
let sound;

if (time >= 6) {
  sound = meow();
} else {
  sound = sleep();
}
console.log(sound);
```

Here, our cat meows when the time is later than or equal to 6 am; otherwise, it sleeps.

## Several conditions: "else if" block

```javascript
function meow() {
  return "Meow!";
}

function sleep() {
  return "Zzzzz...";
}

function play() {
  return "Bang bang!";
}

let time = 9;
let sound;

if (time < 6) {
  sound = sleep();
} else if (time < 8) {
  sound = meow();
} else {
  sound = play();
}
console.log(sound);
```

As you can see, here we check three possible variants: the cat sleeps when time is before 6 am, meows when it’s between 6 and 8 am, and plays otherwise.

## The ternary operator "? :"

```javascript
let time = 11;
let isHungry = (time >= 6) ? true : false;
```

The same code, but without brackets

```javascript
let time = 11;
let isHungry = time >= 6 ? true : false;
```

The condition can be as simple as in the example above, as well as more complex.

```javascript
let time = 11;
let isHungry = !(time <= 6) ? true : false;
```

### [HYPERSKILL_Web_Developer](https://github.com/kakanew/HYPERSKILL_Web_Developer)

