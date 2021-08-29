import * as React from 'react';
import { useParams } from 'react-router';
import { SurveyType, Survey } from '@zzzhyrov/my-perfect-package';
import Editor from './Editor';

/** material-ui */
import Grid from '@material-ui/core/Grid';

/** <data> prop are gotten from useReadDoc */

export const SurveyEditor = (data: SurveyType) => {
  // @ts-ignore
  let { id } = useParams();
  const [surveyData, setSurveyData] = React.useState(data);
  const [lang, setLang] = React.useState('en');
  const surveyProps = { ...surveyData, lang, setLang };
  const editorProps = { id, lang, setLang, surveyData, setSurveyData };

  return (
    <Grid container spacing={3} justifyContent="space-between">
      <Grid item lg={6}>
        <Editor {...editorProps} />
      </Grid>
      <Grid item lg={6}>
        <Survey {...surveyProps} />
      </Grid>
    </Grid>
  );
};
