import React from 'react';
import styles from "./Header.module.css";
function Header() {
    return (
        <div className={styles.container}>        
        <h1>contact App</h1>
        <p>
            <a href="https://botostart.ir">Botostart</a> | react.js full course
        </p>
        </div>

    )
}

export default Header
