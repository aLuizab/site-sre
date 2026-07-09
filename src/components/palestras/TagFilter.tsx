export function TagFilter({
  tags,
  selecionada,
  onSelect,
}: {
  tags: string[];
  selecionada: string | null;
  onSelect: (tag: string | null) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por tag">
      <button
        type="button"
        onClick={() => onSelect(null)}
        aria-pressed={selecionada === null}
        className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
          selecionada === null
            ? 'border-accent bg-accent text-white dark:text-black'
            : 'border-border text-muted hover:border-accent hover:text-accent'
        }`}
      >
        todas
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => onSelect(tag)}
          aria-pressed={selecionada === tag}
          className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
            selecionada === tag
              ? 'border-accent bg-accent text-white dark:text-black'
              : 'border-border text-muted hover:border-accent hover:text-accent'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
