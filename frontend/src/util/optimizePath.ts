function optimizePath(title: string | undefined | null) {
  if (typeof title !== "string" || title.trim() === "") {
    return "";
  }

  const removedSymbolsTitle = title
    .replace(/–/g, "") // Remove en dash
    .replace(/«/g, "") // Remove opening double angle quotation mark
    .replace(/»/g, ""); // Remove closing double angle quotation mark

  const replacedTitle = removedSymbolsTitle
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .toLowerCase(); // Convert to lowercase

  return replacedTitle
    .split("")
    .map(char => {
      if (char === "ь" || char === "ъ") {
        return "";
      }

      const cyrillicMap: { [key: string]: string } = {
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "yo",
        ж: "zh",
        з: "z",
        и: "i",
        й: "y",
        к: "k",
        л: "l",
        м: "m",
        н: "n",
        о: "o",
        п: "p",
        р: "r",
        с: "s",
        т: "t",
        у: "u",
        ф: "f",
        х: "kh",
        ц: "ts",
        ч: "ch",
        ш: "sh",
        щ: "sch",
        ы: "y",
        э: "e",
        ю: "yu",
        я: "ya",
      };

      return cyrillicMap[char] || char;
    })
    .join("");
}

export default optimizePath;
