// Theme toggle: remembers the choice; otherwise the OS preference applies.
(function () {
  var root = document.documentElement
  var KEY = 'granspace-theme'
  var saved = localStorage.getItem(KEY)
  if (saved) root.setAttribute('data-theme', saved)

  var btn = document.getElementById('theme-toggle')
  if (!btn) return
  btn.addEventListener('click', function () {
    var current =
      root.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    var next = current === 'dark' ? 'light' : 'dark'
    root.setAttribute('data-theme', next)
    localStorage.setItem(KEY, next)
  })
})()
