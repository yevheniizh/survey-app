import * as React from 'react';
// import TextField from '@material-ui/core/TextField';
import Title from '../components/title';
import styles from './styles.scss';
import { SurveyType, Answer } from '../../../types';

export default ({
  answers,
  setAnswer,
  design,
  content,
}: Partial<SurveyType>) => {
  const answerKey = Answer.feedbackMessage;
  //const classes = inputStyles();
  const {
    feedbackInputLabel,
    feedbackAwful,
    feedbackBad,
    feedBackNeutral,
    feedbackGood,
    feedbackWow,
  } = content;
  const titles = [
    feedbackAwful,
    feedbackBad,
    feedBackNeutral,
    feedbackGood,
    feedbackWow,
  ];
  const { primaryColor } = design;

  const onChange = (e: any) => {
    const { value } = e.target;
    // @ts-ignore
    setAnswer({ ...answers, [answerKey]: value });
  };

  return (
    <div>
      <Title
        title={titles[answers[Answer.overallGrade]]}
        contentTextColor={primaryColor}
      />
      {/* <TextField
        //className={classes.root}
        onChange={onChange}
        value={answers[answerKey]}
        style={{width:'100%}}
        id="outlined-textarea"
        placeholder={feedbackInputLabel}
        multiline={true}
        autoFocus={true}
      /> */}
      <input
        className={(styles.shareInput, styles.input)}
        placeholder={feedbackInputLabel}
        onChange={onChange}
      />

      {/* <div className={styles.mediaRow}>
                <Media type={Answer.audio} />
                <Media type={Answer.photo} />
            </div> */}
    </div>
  );
};
