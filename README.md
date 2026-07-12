# 🧮 Faulty Calculator

A fun JavaScript project that simulates a **faulty calculator**. Unlike a normal calculator, this one intentionally produces incorrect results **10% of the time** by replacing the selected mathematical operator with a different one.

This project demonstrates the use of JavaScript concepts such as random number generation, conditional statements, objects, user input, template literals, and the `eval()` function.

## 🚀 Features

* Accepts two numbers from the user using prompts.
* Allows the user to choose a mathematical operator (`+`, `-`, `*`, `/`).
* Performs the correct calculation **90% of the time**.
* Performs an incorrect calculation **10% of the time** by changing the operator:

  * `+` → `-`
  * `*` → `+`
  * `-` → `/`
  * `/` → `**` (Exponentiation)
* Displays the result using JavaScript alert boxes.

## 🛠️ Technologies Used

* HTML5
* JavaScript (ES6)

## 📚 JavaScript Concepts Practiced

* `Math.random()`
* `prompt()`
* `alert()`
* Objects
* `if...else` statements
* Template literals
* `eval()`
* Console logging

## ▶️ How It Works

1. The user enters the first number.
2. The user enters a mathematical operator (`+`, `-`, `*`, or `/`).
3. The user enters the second number.
4. A random number is generated.
5. If the random number is greater than `0.1`, the calculator performs the correct operation.
6. Otherwise, the operator is replaced with a different one, producing an intentionally incorrect result.

## 📂 Project Structure

```text
Faulty-Calculator/
│── index.html
│── script.js
└── README.md
```

## 💡 Example

**Input**

```text
First Number: 10
Operator: +
Second Number: 5
```

**90% of the time**

```text
Result: 15
```

**10% of the time**

The operator is replaced:

```text
10 + 5
```

becomes

```text
10 - 5
```

Result:

```text
5
```

## 🎯 Learning Objective

This project was built to practice JavaScript fundamentals while creating a fun and interactive application. It is especially useful for beginners learning about user input, operators, objects, randomness, and program flow.

## 📄 License

This project is created for learning and educational purposes. Feel free to fork, modify, and experiment with the code.
