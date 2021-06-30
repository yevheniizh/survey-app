import * as React from 'react';
import styles from './styles.css';
export default ({ title, contentTextColor }: { title: string, contentTextColor?: string }) => {
    return (
        <h1 className={styles.question} style={{ color: contentTextColor }}>
            {title}
        </h1>
    );
};