/**
 * Vendel Code Theme
 *
 * Custom Shiki theme matching the site's mint color palette.
 * Colors correspond to CSS variables in global.css:
 *
 * --color-code-bg: #222826
 * --color-code-text: #edf5f1
 * --color-code-comment: #707874
 * --color-code-string: #6ee7c2
 * --color-code-keyword: #2dd4a8
 * --color-code-function: #edf5f1
 * --color-code-variable: #ccd4d0
 * --color-code-punctuation: #a0a8a4
 */
export const vendelTheme = {
  name: 'vendel-dark',
  type: 'dark' as const,
  colors: {
    'editor.background': '#222826',
    'editor.foreground': '#edf5f1',
  },
  tokenColors: [
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: '#707874', fontStyle: 'italic' }
    },
    {
      scope: ['string', 'string.quoted'],
      settings: { foreground: '#6ee7c2' }
    },
    {
      scope: ['constant.numeric', 'constant.language'],
      settings: { foreground: '#2dd4a8' }
    },
    {
      scope: ['keyword', 'storage.type', 'storage.modifier'],
      settings: { foreground: '#2dd4a8' }
    },
    {
      scope: ['entity.name.function', 'support.function'],
      settings: { foreground: '#edf5f1' }
    },
    {
      scope: ['variable', 'variable.other'],
      settings: { foreground: '#ccd4d0' }
    },
    {
      scope: ['entity.name.tag', 'support.class'],
      settings: { foreground: '#2dd4a8' }
    },
    {
      scope: ['entity.other.attribute-name'],
      settings: { foreground: '#6ee7c2' }
    },
    {
      scope: ['meta.property-name', 'support.type.property-name'],
      settings: { foreground: '#ccd4d0' }
    },
    {
      scope: ['punctuation'],
      settings: { foreground: '#a0a8a4' }
    },
    {
      scope: ['source.shell', 'keyword.operator'],
      settings: { foreground: '#edf5f1' }
    }
  ]
}

/**
 * Color tokens for use in React/other frameworks
 * that don't use Shiki but need matching colors
 */
export const codeColors = {
  bg: '#222826',
  text: '#edf5f1',
  comment: '#707874',
  string: '#6ee7c2',
  keyword: '#2dd4a8',
  function: '#edf5f1',
  variable: '#ccd4d0',
  punctuation: '#a0a8a4',
}
