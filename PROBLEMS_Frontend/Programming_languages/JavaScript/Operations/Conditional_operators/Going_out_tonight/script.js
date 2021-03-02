function enterPub() {
    return "That's ok. You can enter the pub.";
}

function noEnterPub() {
    return "Sorry, but you are a minor.";
}

let age = 18;

if (age >= 18) {
    console.log(enterPub());
} else {
    console.log(noEnterPub());
}