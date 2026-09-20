import { usePrompts } from './hooks/usePrompts.js'
import PromptCard from './components/PromptCard.jsx'
import PromptForm from './components/PromptForm.jsx'
import SearchBar from './components/SearchBar.jsx'
import TagFilter from './components/TagFilter.jsx'

export default function App() {
  const { prompts, allTags, search, setSearch, activeTag, setActiveTag, addPrompt, deletePrompt } = usePrompts()

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        <header>
          <h1 className="text-2xl font-bold text-gray-100">AI Prompt Manager</h1>
          <p className="text-gray-500 text-sm mt-1">Store and copy your engineered prompts instantly.</p>
        </header>

        <SearchBar value={search} onChange={setSearch} />

        {allTags.length > 0 && (
          <TagFilter tags={allTags} activeTag={activeTag} onSelect={setActiveTag} />
        )}

        <PromptForm onAdd={addPrompt} />

        <div className="space-y-3">
          {prompts.length === 0 ? (
            <p className="text-center text-gray-600 text-sm py-8">
              No prompts yet. Add your first one above.
            </p>
          ) : (
            prompts.map(p => (
              <PromptCard key={p.id} prompt={p} onDelete={deletePrompt} />
            ))
          )}
        </div>

        <footer className="text-center text-xs text-gray-700 pt-4">
          {prompts.length} prompt{prompts.length !== 1 ? 's' : ''} stored locally
        </footer>
      </div>
    </div>
  )
}
