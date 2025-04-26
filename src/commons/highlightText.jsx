export const highlightText = (text,highlightedWords ,className) => {
    if (!highlightedWords || highlightedWords.length === 0) return text;
    const regex = new RegExp(`(${highlightedWords.join("|")})`, "gi");
  
    return text.split(regex).map((part, index) =>
    part != '' && highlightedWords.includes(part.trim()) ? (
        <span key={index} className={className}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  export const getLastWords = (str, count) => {
    const words = str.split(" ");
    const lastWords = words.slice(-count);
    return lastWords;
  };