import { useState, useEffect } from 'react'
import { loadPrompts, savePrompts } from '../utils/storage.js'

export function usePrompts() {
  const [prompts, setPrompts] = useState(() => loadPrompts())
  const [search, setSearch] = useState('')
  const [activeTag, setActiveTag] = useState(null)

  useEffect(() => {
    savePrompts(prompts)
  }, [prompts])

  function addPrompt({ title, content, tags }) {
    const newPrompt = {
      id: Date.now().toString(),
      title,
      content,
      tags: tags.map(t => t.trim().toLowerCase()).filter(Boolean),
      createdAt: new Date().toISOString(),
    }
    setPrompts(prev => [newPrompt, ...prev])
  }

  function deletePrompt(id) {
    setPrompts(prev => prev.filter(p => p.id !== id))
  }

  const allTags = [...new Set(prompts.flatMap(p => p.tags))]

  const filtered = prompts.filter(p => {
    const matchesSearch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.content.toLowerCase().includes(search.toLowerCase())
    const matchesTag = !activeTag || p.tags.includes(activeTag)
    return matchesSearch && matchesTag
  })

  return { prompts: filtered, allTags, search, setSearch, activeTag, setActiveTag, addPrompt, deletePrompt }
}
