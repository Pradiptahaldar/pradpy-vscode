# PradPyLang — VS Code Extension

Official Visual Studio Code extension for **PradPyLang**, a modern interpreted programming language built from scratch in Python.

## Features

- Syntax highlighting for `.prad` files
- Comments and bracket support
- Auto-closing brackets and quotes
- PradPyLang Run button
- Integrated PradPyLang terminal
- Bundled standalone PradPyLang runtime
- Run `.prad` files without installing Python
- Command-line execution with `pradpy`
- Type conversion with `number()`, `boolean()`, and `list()`

## Getting Started

Create a file with the `.prad` extension:

```prad
keep age = 20

when age >= 18 {
    show("Adult")
} otherwise {
    show("Minor")
}
```

Then click **Run PradPyLang** to execute the program.

Output:

```text
Adult
```
- User input support with `ask()`
## User Input

PradPyLang supports interactive user input using `ask()`.

### String Input

```prad
keep name = ask("What is your name? ")

show("Hello, " + name)
```

`ask()` returns the entered value as a string.

### Number Input

Use `number()` to convert input into an integer or decimal number.

```prad
keep age = number(ask("How old are you? "))

show(age)
```

### Boolean Input

Use `boolean()` to convert `yes` or `no` into a boolean value.

```prad
keep answer = boolean(ask("Continue? "))

when answer {
    show("Continuing")
} otherwise {
    show("Stopping")
}
```

### List Input

Use `list()` to convert comma-separated input into a list.

```prad
keep values = list(ask("Enter values: "))

show(values)
```

For example, entering:

```text
1, 2.5, hello, yes, no
```

produces a list containing numbers, strings, and boolean values.

## Running from the Terminal

The extension includes the PradPyLang runtime, so you can also run programs from the integrated terminal:

```powershell
pradpy examples\hello.prad
```

No Python installation or virtual environment is required for the bundled runtime.

## File Extension

PradPyLang source files use:

```text
.prad
```

## Requirements

- Visual Studio Code 1.85.0 or later
- Windows

The current extension bundles a Windows `pradpy.exe` runtime.

## Installation

Search for **PradPyLang** in the Visual Studio Code Extensions Marketplace and click **Install**.

After installation, create or open a `.prad` file to start using PradPyLang.

## Project

### PradPyLang VS Code Extension

https://github.com/Pradiptahaldar/pradpy-vscode

### PradPyLang Interpreter

https://github.com/Pradiptahaldar/pradpy

### For example codes

https://github.com/Pradiptahaldar/pradpylang/tree/main/examples

## License

MIT License
