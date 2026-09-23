import * as vscode from "vscode";
import * as path from "path";

export function activate(context: vscode.ExtensionContext) {
    const runCommand = vscode.commands.registerCommand(
        "pradpy.runFile",
        () => {
            const editor = vscode.window.activeTextEditor;

            if (!editor) {
                vscode.window.showErrorMessage(
                    "No PradPyLang file is open."
                );
                return;
            }

            const filePath = editor.document.fileName;

            if (!filePath.endsWith(".prad")) {
                vscode.window.showErrorMessage(
                    "The active file is not a PradPyLang file."
                );
                return;
            }

            const runtimePath = path.join(
                context.extensionPath,
                "runtime",
                "pradpy.exe"
            );

            const runtimeDir = path.join(
                context.extensionPath,
                "runtime"
            );

            const escapedRuntime = runtimePath.replace(/'/g, "''");
            const escapedFile = filePath.replace(/'/g, "''");
            const escapedRuntimeDir = runtimeDir.replace(/'/g, "''");

            const terminal = vscode.window.createTerminal({
                name: "PradPyLang",
                shellPath: "powershell.exe",
                shellArgs: [
                    "-NoExit",
                    "-Command",
                    `$env:PATH = '${escapedRuntimeDir};$env:PATH'; ` +
                    `Set-Alias pradpy '${escapedRuntime}'; ` +
                    `& '${escapedRuntime}' '${escapedFile}'`
                ]
            });

            terminal.show();
        }
    );

    context.subscriptions.push(runCommand);
}

export function deactivate() {}