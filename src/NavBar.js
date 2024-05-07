import React from 'react';
import styles from "./navBar.module.css"; // Import CSS file

function NavigationBar() {
  return (
    <nav className={styles.navbar}> {/* Add className */}
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/Paul">Paul</a></li>
        <li><a href="/Sasha">Sasha</a></li>
        <li><a href="/Max">Max</a></li>
        
      </ul>
    </nav>
  );
}

export default NavigationBar;