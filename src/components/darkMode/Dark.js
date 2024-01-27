import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { FiMoon } from 'react-icons/fi';
import { BsSun } from 'react-icons/bs';
import './Dark.css';

function Dark({ theme, toggleTheme }) {
  const [currentTheme, setCurrentTheme] = useState(theme);
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme !== null) {
      const newTheme = storedTheme === 'true';
      setCurrentTheme(newTheme);
      toggleTheme(newTheme);
    }
  }, [toggleTheme]);

  const handleClick = () => {
    const newTheme = !currentTheme;
    localStorage.setItem('theme', newTheme);
    setCurrentTheme(newTheme);
    toggleTheme(newTheme);
  };

  const containerClassName = `theme-container shadow-${theme ? 'light' : 'dark'}`;

  return (
    <div>
      <div className={containerClassName} onClick={handleClick}>
        { currentTheme ?  <FiMoon id="moon" /> : <BsSun id="sun" /> }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme.theme === 'light', 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTheme: (newTheme) => dispatch({ type: 'theme', payload: newTheme }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dark);
