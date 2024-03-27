import DOMPurify from 'dompurify'

export const sanitizeFilename = (input: string) => {
  var sanitized = input
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim()

  sanitized = DOMPurify.sanitize(sanitized, {
    USE_PROFILES: { html: false },
  })

  sanitized = sanitized.replace(/&lt;/g, '<').replace(/&gt;/g, '>')

  if (sanitized.length > 0) {
    return sanitized
  } else {
    return 'unnamed'
  }
}

export const decodeFromBase64 = (input: string) => {
  const binString = atob(input)
  const bytes = Uint8Array.from(binString, (m) => m.codePointAt(0))
  return new TextDecoder().decode(bytes)
}

export const encodeToBase64 = (input: string) => {
  const bytes = new TextEncoder().encode(input)
  const binString = String.fromCodePoint(...bytes)
  return btoa(binString)
}
