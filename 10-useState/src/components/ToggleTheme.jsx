import React, { useState } from 'react';

const ToggleTheme = () => {
  const [isDark, setIsDark] = useState(false);

  const changeColor = () => {
    setIsDark(!isDark);
    document.body.style.backgroundColor = isDark ? 'white' : 'black';
  };

  return (
    <div>
      <p style={{ color: isDark ? 'white' : 'black' }}>
        This text color changes.
      </p>
      <button style={{color: isDark ? 'black' : 'white', backgroundColor:isDark ? 'white' : 'black'  }}  onClick={changeColor}>
        Change Color
      </button>
    </div>
  );
};

export default ToggleTheme;
