import * as React from 'react';
import { SurveyType } from '../types';
import { Header } from '../components/header';
import { Form } from './form';
import { data } from './testData';

export const Survey = (data: SurveyType) => {
  const [lang, setLang] = React.useState('ua');
  const [showLogo, setShowLogo] = React.useState(true);

  const props = { ...data, lang, setLang, showLogo, setShowLogo };

  return (
    <React.Fragment>
      <div style={{ margin: 'auto', maxWidth: '400px' }}>
        <Header {...props} />
        <Form {...props} />
      </div>
    </React.Fragment>
  );
};

export const PopulatedSurvey = () => {
  const [lang, setLang] = React.useState('ua');
  const props = { ...data, lang, setLang };
  return <Survey {...props} />;
};
