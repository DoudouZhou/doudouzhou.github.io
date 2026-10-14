export default function PublicationAuthors({ authors }: { authors: string }) {
  return <>{authors.split(/([#*])/).map((part, index) => {
    if (part === "#" || part === "*") {
      const label = part === "#" ? "Corresponding author" : "Equal contribution or alphabetic authorship";
      return <sup key={index} title={label} aria-label={label}>{part}</sup>;
    }
    return <span key={index}>{part}</span>;
  })}</>;
}
