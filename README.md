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

## Example

```prad
keep age = 20

when age >= 18 {
    show("Adult")
} otherwise {
    show("Minor")
}
```

Click **Run PradPyLang** to execute the program.

Output:

```text
Adult
```

## Terminal

The extension includes the PradPyLang runtime, so you can also run programs from the integrated terminal:

```powershell
pradpy examples\hello.prad
```

No Python virtual environment is required for the bundled runtime.

## File Extension

PradPyLang source files use:

```text
.prad
```

## Requirements

- Visual Studio Code 1.85.0 or later
- Windows

The current extension bundles a Windows `pradpy.exe` runtime.

## Project

PradPyLang Interpreter:

https://github.com/Pradiptahaldar/pradpy

## License

MIT License
