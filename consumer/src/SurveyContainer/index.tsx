import React from 'react';
import {
  SurveyType,
  Survey,
  surveyDefaults,
} from '@zzzhyrov/my-perfect-package';

export const SurveyContainer = () => {
  const data: SurveyType = surveyDefaults;
  const [lang, setLang] = React.useState('en');
  const surveyProps = { ...data, lang, setLang };

  return (
    <>
      <Survey {...surveyProps} />
    </>
  );
};
