import React, { useState } from 'react';
import IconToggle from './iconToggle';
import styles from './styles.module.css';
import Title from '../components/title';
import { Answer, ContentEnum, SurveyType } from '../../../types';
import { Collapse } from '@material-ui/core';

export default ({
  answers,
  setAnswer,
  design,
  content,
  setShowLogo,
}: Partial<SurveyType>) => {
  const answerKey = Answer.overallGrade;
  const grade = answers[answerKey];
  const gradeEmoji = design.gradeEmoji;
  const gradeEmojiText = design.gradeEmojiText;
  const gradeEmojiSelected = design.gradeEmojiSelected;
  const title = content[ContentEnum.greeting];
  const onChange = (i: number) => {
    // @ts-ignore
    setAnswer({ ...answers, [answerKey]: i });
  };
  // @ts-ignore
  const row = gradeEmoji.map((url, i) => (
    <IconToggle
      onClick={() => {
        onChange(i);
        setShowLogo(false);
      }}
      key={`emoji-${i}`}
      width={45}
      height={45}
      normalStateURL={url}
      selectedStateURL={gradeEmojiSelected ? gradeEmojiSelected[i] : ''}
      selected={grade === i}
      iconText={gradeEmojiText[i]}
    />
  ));
  return (
    <div>
      <Title title={title} contentTextColor={design.primaryColor} />
      <div className={styles.iconsWrapper}>{row}</div>
    </div>
  );
};
