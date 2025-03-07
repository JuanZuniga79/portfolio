const getLocale = (lang: string) => {
  return lang === "es" ? "es-CO" : "en-US"
}

export const dateFormater = (date: Date, lang: string) => {
  return new Intl.DateTimeFormat(getLocale(lang), {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(date);
}

export const getDate = (date: string) => {
  const [day, month, year] = date.split('-').map(Number);
  return new Date(year, month - 1, day);
}

export const getDateDiference = (lang: string, start: Date, end?: Date) => {
  if (!end) return lang === "es" ? `${start.getFullYear()} - Presente` : `${start.getFullYear()} - Present`
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const yearsText = lang === "es" ? "años" : "years"
  const monthsText = lang === "es" ? "meses" : "months"

  return `${years > 0 ? `${years} ${yearsText}` : ''} ${months > 0 ? `${months} ${monthsText}` : ''}`
}