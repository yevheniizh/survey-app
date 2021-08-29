import * as React from 'react';
import {
  db,
  ContentEnum,
  LocationEnum,
  AttributesEnum,
} from '@zzzhyrov/my-perfect-package';
import LangSwitcher from '../LangSwitcher';
import Input from '../Input';

/** material-ui */
import Button from '@material-ui/core/Button';

const Editor = ({ id, lang, setLang, surveyData, setSurveyData }: any) => {
  const [loading, setLoading] = React.useState(false);
  const updateSurvey = async () => {
    setLoading(true);
    try {
      await db.collection('surveys').doc(id).set(surveyData);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const onSetSurveyData = () =>
    setSurveyData(JSON.parse(JSON.stringify(surveyData)));

  const contentPath = surveyData[AttributesEnum.translations][lang];
  const locationPath = surveyData[AttributesEnum.location];

  return (
    <div>
      <div className="form">
        <div className="formEditor">
          <LangSwitcher lang={lang} setLang={setLang} />
          <Input
            name={LocationEnum.logo}
            path={locationPath}
            onSetSurveyData={onSetSurveyData}
          />
          <Input
            name={ContentEnum.greeting}
            path={contentPath}
            onSetSurveyData={onSetSurveyData}
          />
          <Input
            name={ContentEnum.feedbackBad}
            path={contentPath}
            onSetSurveyData={onSetSurveyData}
          />
          <Input
            name={ContentEnum.feedBackNeutral}
            path={contentPath}
            onSetSurveyData={onSetSurveyData}
          />
          <Input
            name={ContentEnum.feedbackGood}
            path={contentPath}
            onSetSurveyData={onSetSurveyData}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          disabled={loading}
          onClick={updateSurvey}
          fullWidth
          size="large"
          style={{ marginTop: 15 }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default Editor;
