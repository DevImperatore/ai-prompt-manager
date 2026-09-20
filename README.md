# AI Prompt Manager

A lightweight, client-side dashboard to organize, tag, search, and instantly copy engineered AI prompts.

No backend. No database. No sign-up. Everything is stored locally in your browser.

**Live demo:** [Link after deploy to Vercel]

## Tech Stack

- React 18
- Vite
- TailwindCSS v3
- localStorage (intentional -- no server needed for this use case)

## Features

- Add prompts with a title, body, and comma-separated tags
- One-click copy to clipboard
- Filter by tag
- Full-text search across title and content
- Data persists across browser sessions via localStorage
- Zero external dependencies at runtime

## Getting Started

```bash
git clone https://github.com/DevImperatore/ai-prompt-manager.git
cd ai-prompt-manager
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Deploy

Deploy to Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/DevImperatore/ai-prompt-manager)

## Project Structure

```
src/
  App.jsx          # Root component and layout
  components/      # UI components (PromptCard, PromptForm, SearchBar, TagFilter, CopyButton)
  hooks/           # usePrompts -- central state and filtering logic
  utils/           # localStorage read/write helpers
```

## Design Decisions

- **No backend:** The data model (a list of text snippets) does not require a server. localStorage provides adequate persistence for a single-user tool.
- **No state library:** React's built-in useState and useReducer are sufficient for this scope. Adding Redux or Zustand would be over-engineering.
- **Tailwind over CSS modules:** Tailwind accelerates iteration on UI without sacrificing maintainability at this project scale.

## License

MIT
