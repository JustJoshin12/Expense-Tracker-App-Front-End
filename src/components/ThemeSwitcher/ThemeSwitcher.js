import React from 'react';

const ThemeSwitcher = () => {
  const changeTheme = (themeName) => {
    document.documentElement.setAttribute('data-theme', themeName);
  };

  return (
    <div>
      <select onChange={(e) => changeTheme(e.target.value)} defaultValue="">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="luxury">luxury</option>
        <option value="corporate">Corporate</option>
        <option value="halloween">Halloween</option>
        <option value="winter">Winter</option>
        <option value="night">Night</option>
        <option value="valentine">Valentine</option>
        <option value="business">Business</option>
        <option value="autum">Autum</option>
        <option value="forest">Forest</option>
        <option value="cyberpunk">Cyberpunk</option>
        <option value="retro">Retro</option>
        <option value="aqua">Aqua</option>
        <option value="nord">Nord</option>
        <option value="garden">Garden</option>
        <option value="fantasy">Fantasy</option>
      </select>
    </div>
  );
};

export default ThemeSwitcher;
