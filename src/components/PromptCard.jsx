import CopyButton from './CopyButton.jsx'

export default function PromptCard({ prompt, onDelete }) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 space-y-3">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-gray-100 font-medium text-sm leading-snug">{prompt.title}</h3>
        <CopyButton text={prompt.content} />
      </div>
      <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-wrap">{prompt.content}</p>
      {prompt.tags.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {prompt.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 rounded-full text-xs bg-gray-700 text-gray-300">
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-600">
          {new Date(prompt.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </span>
        <button
          onClick={() => onDelete(prompt.id)}
          className="text-xs text-gray-600 hover:text-red-400 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  )
}
