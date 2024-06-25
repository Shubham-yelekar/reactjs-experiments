
import { useTheme } from '../theme-context'

const ToggleSwitch = () => {
  const {theme, toggleTheme} = useTheme()
  return (
    <div className="container">
      <input
      onChange={toggleTheme}
      checked = {theme === "dark"}
      type="checkbox" className="checkbox" id="checkbox" />
      <label className="switch" htmlFor='checkbox' >
        <span className="slider"></span>
      </label>
    </div>
  )
}

export default ToggleSwitch