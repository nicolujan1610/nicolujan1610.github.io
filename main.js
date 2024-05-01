const switchModeBtn = document.getElementById('switch-mode-btn')

switchModeBtn.addEventListener('click', () => {
  const root = document.documentElement;

  if (switchModeBtn.classList.contains('fa-toggle-off')) {
    switchModeBtn.classList.remove('fa-toggle-off')
    switchModeBtn.classList.add('fa-toggle-on')
    root.style.setProperty('--background', '#ddd')
    root.style.setProperty('--text-color', '#222')

  } else {
    switchModeBtn.classList.remove('fa-toggle-on')
    switchModeBtn.classList.add('fa-toggle-off')
    root.style.setProperty('--background', '#222')
    root.style.setProperty('--text-color', '#ddd')
  }
})