export function TagFilter({
  tags,
  selecionada,
  onSelect,
  rotuloTodas,
  rotuloGrupo,
}: {
  tags: string[];
  selecionada: string | null;
  onSelect: (tag: string | null) => void;
  rotuloTodas: string;
  rotuloGrupo: string;
}) {
  const classe = (ativo: boolean) =>
    `rounded-full border px-3 py-1 font-mono text-xs transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
      ativo
        ? 'border-accent bg-accent text-white dark:text-black'
        : 'border-border text-muted hover:border-accent hover:text-accent'
    }`;

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label={rotuloGrupo}>
      <button
        type="button"
        onClick={() => onSelect(null)}
        aria-pressed={selecionada === null}
        className={classe(selecionada === null)}
      >
        {rotuloTodas}
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => onSelect(tag)}
          aria-pressed={selecionada === tag}
          className={classe(selecionada === tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
