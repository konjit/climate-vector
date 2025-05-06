import { Moon, Sun } from "lucide-react";
import Switch from "react-switch";

const ThemeToggle = ({ checked, onChange }) => {
  const isDark = checked;

  const moonColor = "#005c99";
  const sunColor = "#FFD700";
  const onColor = "#EB6969";
  const offColor = isDark ? "#424242" : "#87CEEB";
  const handleColor = isDark ? "#fefefe" : "#ffffff";

  return (
    <Switch
      checked={checked}
      onChange={onChange}
      checkedIcon={<Moon color={moonColor} size={18} style={{ marginLeft: 4, marginTop: 2, fill: moonColor }} />}
      uncheckedIcon={<Sun color={sunColor} size={18} style={{ marginLeft: 4, marginTop: 2, fill: sunColor }} />}
      onColor={onColor}
      offColor={offColor}
      onHandleColor={handleColor}
      offHandleColor={handleColor}
      height={22}
      width={46}
      handleDiameter={18}
    />
  );
};

export default ThemeToggle;