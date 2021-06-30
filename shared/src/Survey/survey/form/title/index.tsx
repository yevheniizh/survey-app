import React from "react";
//import FormContext from '../form/'
//import { RootState } from "../../store/store";
import styles from "./styles.module.css";

export default ({ title, contentTextColor }: { title: string, contentTextColor: string }) => {
    return (
        <h1 className={styles.question} style={{ color: contentTextColor }}>
            {title}
        </h1>
    );
};