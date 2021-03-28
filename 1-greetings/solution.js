function greet(userName = "Mr. Nobody") {
  return `Hello ${userName}`;
}

const greetingsMarwin = greet("Marwin");
const greetingsMartin = greet("Martin");
const greetingsNobody = greet();

alert(greetingsMarwin);
alert(greetingsMartin);
alert(greetingsNamir);
