import React from 'react';
import { useParams } from 'react-router';
import {
  SurveyType,
  Survey,
  db,
  ContentEnum,
  LocationEnum,
  AttributesEnum,
} from '@zzzhyrov/my-perfect-package';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const Editor = ({ setSurveyData, data, lang }: any) => {
  const Input = ({ name, path }: any) => {
    const pathName = path[name];
    const [value, setValue] = React.useState(pathName);

    const onKeyUp = (e: any) => {
      return setValue(e.target.value);
    };
    const onBlur = (e: any) => {
      path[name] = e.target.value;
      return setSurveyData(JSON.parse(JSON.stringify(data)));
    };
    return (
      <div>
        <h2>{name}</h2>
        <input key={name} value={value} onBlur={onBlur} onChange={onKeyUp} />
      </div>
    );
  };

  const contentPath = data[AttributesEnum.translations][lang];
  const locationPath = data[AttributesEnum.location];

  return (
    <div>
      <div className="form">
        <div className="formEditor">
          <Input name={LocationEnum.logo} path={locationPath} />
          <Input name={ContentEnum.greeting} path={contentPath} />
          <Input name={ContentEnum.feedbackBad} path={contentPath} />
          <Input name={ContentEnum.feedBackNeutral} path={contentPath} />
          <Input name={ContentEnum.feedbackGood} path={contentPath} />
        </div>
      </div>
    </div>
  );
};
const LangSwitch = ({ setLang }: any) => {
  const onChange = (e: any) => {
    return setLang(e.target.value);
  };
  return (
    <select onChange={onChange}>
      <option value="en">en</option>
      <option value="ru">ru</option>
      <option value="ua">ua</option>
    </select>
  );
};
export const SurveyEditor = (data: SurveyType) => {
  // @ts-ignore
  let { id } = useParams();
  const [surveyData, setSurveyData] = React.useState(data);
  const [lang, setLang] = React.useState('en');
  const surveyProps = { ...surveyData, lang, setLang };
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
  return (
    <Grid container spacing={3} justifyContent="space-between">
      <Grid item lg={6}>
        <LangSwitch lang={lang} setLang={setLang} />
        <Editor data={surveyData} lang={lang} setSurveyData={setSurveyData} />
        <Button
          variant="contained"
          color="primary"
          disabled={loading}
          onClick={updateSurvey}
        >
          Save
        </Button>
      </Grid>
      <Grid item lg={6}>
        <Survey {...surveyProps} />
      </Grid>
    </Grid>
  );
};
