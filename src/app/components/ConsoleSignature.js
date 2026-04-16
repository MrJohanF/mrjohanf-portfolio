'use client'

import { useEffect } from 'react'

/**
 * Imprime una firma editorial en la consola del navegador la primera vez
 * que el sitio carga. Es un guiño para desarrolladores curiosos que abren
 * las devtools: ve un mensaje estilizado con el stack, un saludo y cómo
 * contactar en caso de oportunidad laboral.
 *
 * Se invoca una sola vez por sesión gracias a una flag en `window`.
 */
export default function ConsoleSignature() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.__johanConsolePrinted) return
    window.__johanConsolePrinted = true

    // Colores alineados con la paleta del sitio
    const accent = '#7dd3c0'
    const violet = '#8b5cf6'
    const muted = 'rgba(255,255,255,0.55)'
    const dim = 'rgba(255,255,255,0.35)'

    const logoArt = [
      '',
      '       ▗▄▄▄▖    ▗▄▄▄▖',
      '         █      █    ',
      '         █      ███  ',
      '       ▗▄█      █    ',
      '                     ',
    ].join('\n')

    const titleStyle = [
      `color: ${accent}`,
      'font-family: ui-monospace, SFMono-Regular, Menlo, monospace',
      'font-size: 12px',
      'line-height: 1.2',
      'padding: 4px 0',
      'font-weight: 600',
    ].join(';')

    const headingStyle = [
      'color: #ffffff',
      'font-family: Georgia, "Times New Roman", serif',
      'font-style: italic',
      'font-size: 20px',
      'line-height: 1.2',
      'padding: 8px 0 4px',
    ].join(';')

    const labelStyle = [
      `color: ${dim}`,
      'font-family: ui-monospace, SFMono-Regular, Menlo, monospace',
      'font-size: 10px',
      'letter-spacing: 0.22em',
      'text-transform: uppercase',
      'padding: 2px 0',
    ].join(';')

    const textStyle = [
      `color: ${muted}`,
      'font-family: ui-sans-serif, system-ui, -apple-system, sans-serif',
      'font-size: 12px',
      'line-height: 1.5',
      'padding: 1px 0',
    ].join(';')

    const linkStyle = [
      'color: #ffffff',
      'font-family: ui-monospace, SFMono-Regular, Menlo, monospace',
      'font-size: 12px',
      'text-decoration: underline',
      'text-decoration-color: ' + accent,
      'text-underline-offset: 2px',
      'padding: 1px 0',
    ].join(';')

    const badgeStyle = [
      `background: ${violet}22`,
      `color: ${violet}`,
      'padding: 2px 8px',
      'border-radius: 4px',
      'font-family: ui-monospace, SFMono-Regular, Menlo, monospace',
      'font-size: 10px',
      'letter-spacing: 0.18em',
      'text-transform: uppercase',
      'font-weight: 600',
    ].join(';')

    const ruleStyle = `color: ${dim}; font-family: monospace; letter-spacing: 0.3em;`

    /* eslint-disable no-console */
    console.log(`%c${logoArt}`, titleStyle)
    console.log('%c— Johan Fernández', headingStyle)
    console.log('%c01 — SAY HELLO', labelStyle)
    console.log(
      '%cHey, nice to see you in the console.',
      textStyle
    )
    console.log(
      "%cYou've got curiosity — that's the most important trait in this field.",
      textStyle
    )
    console.log(
      '%c─────────────────────────────────────────',
      ruleStyle
    )
    console.log('%c02 — STACK', labelStyle)
    console.log(
      '%cNext.js · React · Tailwind · Framer Motion · Node · PostgreSQL',
      textStyle
    )
    console.log(
      '%c─────────────────────────────────────────',
      ruleStyle
    )
    console.log('%c03 — HIRING?', labelStyle)
    console.log(
      '%cjohan_harol@outlook.com',
      linkStyle
    )
    console.log(
      '%cLet\'s build something exceptional together.',
      textStyle
    )
    console.log('%cOPEN TO WORK', badgeStyle)
    console.log(' ')
    /* eslint-enable no-console */
  }, [])

  return null
}
