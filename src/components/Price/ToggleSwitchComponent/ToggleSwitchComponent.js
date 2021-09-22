import { ToggleTextYearly, ToggleTextMonthly, ToggleSwitch } from './ToggleSwitchComponent.css';

const ToggleSwitchComponent = ({ checked, name, onChange }) => {
  const handleKeyPress = e => {
    if (e.keyCode !== 32) {
      return;
    }
    e.preventDefault();
    onChange(!checked);
  };
  return (
    <ToggleSwitch>
      <ToggleTextMonthly checked={checked}>Monthly</ToggleTextMonthly>
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        title="toggle-switch"
      />
      <label
        htmlFor={name}
        className="toggle-switch-label"
        tabIndex="1"
        onKeyDown={e => handleKeyPress(e)}
      >
        <span className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />
      </label>
      <ToggleTextYearly checked={checked}>Yearly</ToggleTextYearly>
    </ToggleSwitch>
  );
};

export default ToggleSwitchComponent;
