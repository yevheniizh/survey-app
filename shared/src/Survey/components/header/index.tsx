import * as React from 'react';
import styles from './styles.css'
import {SurveyType} from "../../types";

export const Header = (data:SurveyType) => {
    const {lang,location:{title,subTitle,logo}, setLang, design} = data;
    const {headerBackgroundImage, headerBackgroundColor, headerTextColor} = design;
    const langs = ['ru','en','ua'];
    const headerStyles = {
        backgroundImage: `url(${headerBackgroundImage})`,
        backgroundColor: headerBackgroundColor,
        color: headerTextColor,
    }
    const onChange = (e:any) => {
        const {value} = e.target;
        return setLang(value);
    }
    return (
        <div style={headerStyles} className={styles.header}>
            {logo ? (
                <img className={styles.logo} src={logo}  />
            ) : (
                <div className={logo} />
            )}
            <div>
                {title}
            </div>
            <div>
                {subTitle}
            </div>
            <select className={styles.langSelector} value={lang} onChange={onChange}>
                {langs.map((l) => (
                    <option key={l} value={l}>
                        {l.toUpperCase()}
                    </option>
                ))}
            </select>
        </div>
    );
}