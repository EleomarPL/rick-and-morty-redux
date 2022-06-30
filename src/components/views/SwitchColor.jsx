import { useEffect, useState } from 'react'

import '../../switchColor.css'

const SwitchColor = () => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const root = document.documentElement

    if (isDark) {
      root.style.setProperty('--text-primary', '#ffffff')
      root.style.setProperty('--text-secondary', '#c6c6c6')
      root.style.setProperty('--bg-primary', '#212121')
      root.style.setProperty('--bg-secondary', '#37474f')
      root.style.setProperty('--border-primary', '#757575')
    } else {
      root.style.setProperty('--text-primary', '#212121')
      root.style.setProperty('--text-secondary', '#646464')
      root.style.setProperty('--bg-primary', '#eceff1')
      root.style.setProperty('--bg-secondary', '#cfd8dc')
      root.style.setProperty('--border-primary', '#757575')
    }
  }, [isDark])

  return (
    <div className="container-switch-color">
      <input type="checkbox" id="switchColor"
        onChange={ () => setIsDark(!isDark) }
        value={ isDark }
      />
      <label htmlFor="switchColor">
        <span className="visually-hidden-focusable">Cambiar color</span>
        <span></span>
      </label>
    </div>
  )
}

export default SwitchColor
