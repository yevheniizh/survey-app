import * as React from 'react';
import GeneralFeeling from './generalFeeling';
import Feedback from './feedback';
import Nps from './nps';
import styles from './styles.css';
import { SurveyType, Answer } from '../../types';
import Button from './components/Button';

export const Form = (data: Partial<SurveyType>) => {
  const { saveAnswers, lang, translations } = data;

  const [answers, setAnswer] = React.useState(
    data.answers || { [Answer.recommendationGrade]: 5 }
  );
  const props = {
    content: translations[lang],
    setAnswer,
    answers,
  };

  const componentProps: Partial<SurveyType> = { ...data, ...props };
  return (
    <form className={styles.form}>
      <GeneralFeeling {...componentProps} />
      {Number.isInteger(answers[Answer.overallGrade]) && (
        <React.Fragment>
          <Feedback {...componentProps} />
          {/*<Nps {...componentProps} />*/}
          <Button
            title={props.content.submitButton}
            onClickHandler={() => {
              return saveAnswers && saveAnswers(answers);
            }}
          />
        </React.Fragment>
      )}
    </form>
  );
};
