import { disambig_titles, disambig_templates } from '../_data/i18n.js'
import alt_disambig from './_disambig.js'

const inTitle = new RegExp('. \\((' + disambig_titles.join('|') + ')\\)$', 'i')
const i18n_templates = disambig_templates.reduce((h, str) => {
  h[str] = true
  return h
}, {})

// look for '... may refer to'
const byText = function (s) {
  if (!s) {
    return false
  }
  let txt = s.text()
  if (txt !== null && txt[0]) {
    if (/. may (also)? refer to\b/i.test(txt) === true) {
      return true
    }
  }
  return false
}

/**
 * Parses the wikitext to find out if this page is a disambiguation
 *
 * @private
 * @param {object} doc the document that is examined
 * @returns {boolean} an indication if the document is a disambiguation page
 */
const isDisambig = function (doc) {
  // check for a {{disambig}} template
  let templates = doc.templates().map((tmpl) => tmpl.json())
  let found = templates.find((obj) => {
    return alt_disambig.hasOwnProperty(obj.template) || i18n_templates.hasOwnProperty(obj.template)
  })
  if (found) {
    return true
  }
  // check for (disambiguation) in title
  let title = doc.title()
  if (title && inTitle.test(title) === true) {
    return true
  }
  //try 'may refer to' on first line for en-wiki?
  if (byText(doc.sentence(0)) === true || byText(doc.sentence(1)) === true) {
    return true
  }
  return false
}

export default isDisambig
