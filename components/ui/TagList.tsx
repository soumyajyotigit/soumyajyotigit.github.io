type TagListProps = { items: string[]; className?: string };

export default function TagList({ items, className = "" }: TagListProps) {
  return <div className={`flex flex-wrap gap-2 ${className}`}>{items.map((item) => <span className="skill" key={item}>{item}</span>)}</div>;
}
