/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import classnames from 'classnames';
import styles from './iconToggle.module.css';

type Props = {
  width: number;
  height: number;
  iconText: string;
  normalStateURL?: string;
  selectedStateURL?: string;
  selected?: boolean;
  onClick?: any;
};

export const IconToggle = ({
  width,
  height,
  normalStateURL,
  selectedStateURL,
  selected,
  onClick,
  iconText,
}: Props) => (
  <div
    className={styles.container}
    style={{
      width: `${width}px`,
      height: `${height}px`,
      cursor: 'pointer',
    }}
    onClick={onClick}
  >
    {normalStateURL ? (
      <img
        className={styles.img}
        key={normalStateURL}
        src={normalStateURL}
        style={{
          visibility: !selected ? 'visible' : 'hidden',
        }}
      />
    ) : null}
    {selectedStateURL ? (
      <img
        className={styles.img}
        key={selectedStateURL}
        src={selectedStateURL}
        style={{
          visibility: selected ? 'visible' : 'hidden',
        }}
      />
    ) : null}
    <div
      className={classnames(
        styles.icon_text,
        selected ? styles.icon_text_active : styles.icon_text_passive
      )}
    >
      {iconText}
    </div>
  </div>
);

export default IconToggle;
