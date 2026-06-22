import * as vscode from "vscode";

const SERVER_LABEL = "LLMemory";
const SERVER_URI = "https://mcp.llmemory.xyz/mcp";
const PROVIDER_ID = "llmemory";

export function activate(context: vscode.ExtensionContext): void {
  const didChangeEmitter = new vscode.EventEmitter<void>();

  context.subscriptions.push(
    vscode.lm.registerMcpServerDefinitionProvider(PROVIDER_ID, {
      onDidChangeMcpServerDefinitions: didChangeEmitter.event,
      provideMcpServerDefinitions: () => {
        return [
          new vscode.McpHttpServerDefinition(
            SERVER_LABEL,
            vscode.Uri.parse(SERVER_URI),
          ),
        ];
      },
      resolveMcpServerDefinition: async (server) => server,
    }),
  );
}

export function deactivate(): void {}
