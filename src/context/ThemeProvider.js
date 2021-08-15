import React, { useState } from 'react';

export const ThemeContext = React.createContext();

const ThemeProvider = props => {
  const [isDark, setTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{
      isDark,
      changeTheme: () => setTheme(!isDark)
    }}>
      {props.children}
    </ThemeContext.Provider>
  )
};

const Theme = ({ element }) => (
    <ThemeProvider>
      {element}
    </ThemeProvider>
  )
;
export default Theme;