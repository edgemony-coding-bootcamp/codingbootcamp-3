let greeting = "ciao zio";

// Closures
const fn1 = () => {
  let name = "Pippo";
  console.log(greeting, "from fn1");
  console.log(name, "from fn1");

  const fn2 = () => {
    let email = "ciao@pippo.it";
    console.log(email, name, greeting, "from fn2");
  };

  fn2();
  console.log(email, "outside fn2");
};

console.log(name, "outside fn1");
console.log(greeting);

fn1();

// Posso riutilizzare i nomi di variabili e argomenti
const sum = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;
