import * as React from 'react';
import styles from './styles.scss';
import { SurveyType } from '../../types';
import classnames from 'classnames';
import { useState } from 'react';

const LangList = ({ list, onChangeHandler }) => {
  const [listItem, setListItem] = useState<string>(list[0]);
  const [isOpened, setIsOpened] = useState(false);

  const listItemHandler = (lang: string) => {
    setListItem(lang);
    setIsOpened(!isOpened);
  };
  return (
    <div
      className={classnames(
        styles.headerLang,
        isOpened && styles.headerLang_opened
      )}
      onClick={() => setIsOpened(!isOpened)}
    >
      <ul className={styles.headerLang__list}>
        <li
          className={classnames(
            styles.langList__item,
            isOpened && styles.langList__item_active
          )}
        >
          {listItem}
        </li>
        {isOpened &&
          list
            .filter((lang) => lang !== listItem)
            .map((lang, index) => (
              <li
                className={styles.langList__item}
                key={index}
                onClick={() => {
                  listItemHandler(lang);
                  onChangeHandler(lang);
                }}
              >
                {lang}
              </li>
            ))}
      </ul>
      <div
        className={classnames(
          styles.headerLang__dropdown,
          isOpened && styles.headerLang__dropdown_opened
        )}
        onClick={() => setIsOpened(!isOpened)}
      ></div>
    </div>
  );
};

export const Header = (data: SurveyType) => {
  const {
    lang,
    location: { title, subTitle, logo },
    setLang,
    design,
    showLogo,
  } = data;
  const { headerBackgroundImage, headerBackgroundColor, headerTextColor } =
    design;
  const langs = ['ua', 'en', 'ru'];
  const headerStyles = {
    backgroundImage: `url(${headerBackgroundImage})`,
    backgroundColor: headerBackgroundColor,
    color: headerTextColor,
  };

  const onChangeHandler = (lang: string) => {
    return setLang(lang);
  };
  return (
    <div
      style={headerStyles}
      className={classnames(
        styles.header,
        showLogo ? '' : styles.header_collapsed
      )}
    >
      <LangList list={langs} onChangeHandler={onChangeHandler} />
      {logo && showLogo && <img className={styles.logo} src={logo} />}
      <div
        className={styles.title}
        style={showLogo ? null : { marginTop: '25px' }}
      >
        {title}
      </div>
      {showLogo && <div className={styles.subTitle}>{subTitle}</div>}
    </div>
  );
};
