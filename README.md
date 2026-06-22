# LLMemory for VS Code

Connect VS Code agent mode to your **LLMemory vault** — search and pull context from your ChatGPT, Claude, Codex, and Claude Code conversations without copy-pasting.

## What it does

Developers working across multiple AI tools (Claude Code, ChatGPT, Codex) constantly lose context when switching between them. LLMemory lets VS Code's agent mode pull prior sessions or hand off context without leaving the editor — "pull my most recent Codex session" or "what did I figure out about the OAuth worker last week?" — instead of copy-pasting.

## Install

1. Install this extension from the VS Code Marketplace.
2. Open agent mode in Chat view (`Cmd+I` / `Ctrl+I`).
3. LLMemory appears in the **MCP SERVERS** section of the Extensions view — enabled by default.
4. On first tool call, a browser OAuth flow grants Google Drive access (`drive.file` scope, limited to the `LLMemory/` folder).

No configuration needed. The extension registers the remote MCP server automatically.

## Tools

| Tool | Description |
|------|-------------|
| `list_sources` | Show which AI providers have data in your vault |
| `list_recent` | List most recently updated conversations |
| `search_chats` | Full-text search across all imported AI conversations |
| `get_conversation` | Fetch one full conversation transcript by ID |
| `get_context_pack` | Build an agent-ready briefing for handoff |

## Privacy / architecture

- **Zero server-side storage** — the Cloudflare Worker brokers Google OAuth and reads your Drive live; no chat content, no per-user database. Free tier.
- **Your own Google Drive is the storage** — written by the LLMemory browser extension / CLI.
- **Read-only** — the connector never writes to the vault.
- **OAuth is fully automated** via Dynamic Client Registration — no API keys to manage.

## Requirements

- VS Code 1.101.0 or later
- An LLMemory vault (install the [browser extension](https://llmemory.xyz) to start capturing chats)

## Links

- [Website](https://llmemory.xyz)
- [MCP server repo](https://github.com/meir-may/llmemory-mcp)
- [Official MCP Registry entry](https://registry.modelcontextprotocol.io/v0/servers?search=llmemory)
