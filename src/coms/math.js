const CSS = `<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css' integrity='sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn' crossorigin='anonymous'>
  <script defer src='https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js' integrity='sha384-cpW21h6RZv/phavutF+AuVYrr+dA8xD9zs6FwLpaCct6O9ctzYFfFr4dgmgccOTx' crossorigin='anonymous'></script>
  <script defer src='https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js' integrity='sha384-+VBxd3r6XgURycqtZ117nYw44OOcIax56Z4dCRWbxyPt0Koah1uHoK0o4+/RRE05' crossorigin='anonymous' onload='renderMathInElement(document.body);'></script>`

exports.run = function(text, eohs) {
  if (!text.includes("<BM>") && !text.includes("<IM>")) {
    return text
  }
  text = text.replaceAll("<BM>", "\\[")
  text = text.replaceAll("</BM>", "\\]")
  text = text.replaceAll("<IM>", "\\(")
  text = text.replaceAll("</IM>", "\\)")
  eohs.push(CSS)
  return text
}
