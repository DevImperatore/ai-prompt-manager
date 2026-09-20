import { useState } from 'react'

export default function PromptForm({ onAdd }) {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tagsInput, setTagsInput] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!title.trim() || !content.trim()) return
    onAdd({ title: title.trim(), content: content.trim(), tags: tagsInput.split(',') })
    setTitle('')
    setContent('')
    setTagsInput('')
    setOpen(false)
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="w-full py-3 rounded-lg border-2 border-dashed border-gray-600 text-gray-400 hover:border-indigo-500 hover:text-indigo-400 transition-colors text-sm font-medium"
      >
        + Add New Prompt
      </button>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg p-4 space-y-3 border border-gray-700">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Prompt title"
        className="w-full px-3 py-2 rounded bg-gray-900 text-gray-100 placeholder-gray-500 border border-gray-600 focus:outline-none focus:border-indigo-500 text-sm"
      />
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Prompt content..."
        rows={4}
        className="w-full px-3 py-2 rounded bg-gray-900 text-gray-100 placeholder-gray-500 border border-gray-600 focus:outline-none focus:border-indigo-500 text-sm resize-none"
      />
      <input
        type="text"
        value={tagsInput}
        onChange={e => setTagsInput(e.target.value)}
        placeholder="Tags (comma separated): writing, code, analysis"
        className="w-full px-3 py-2 rounded bg-gray-900 text-gray-100 placeholder-gray-500 border border-gray-600 focus:outline-none focus:border-indigo-500 text-sm"
      />
      <div className="flex gap-2 justify-end">
        <button type="button" onClick={() => setOpen(false)} className="px-4 py-2 text-sm text-gray-400 hover:text-gray-200">
          Cancel
        </button>
        <button type="submit" className="px-4 py-2 text-sm bg-indigo-600 hover:bg-indigo-500 text-white rounded font-medium transition-colors">
          Save Prompt
        </button>
      </div>
    </form>
  )
}
