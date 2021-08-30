import * as React from 'react';
import { useParams } from 'react-router';
import { SurveyType, Survey } from '@zzzhyrov/my-perfect-package';
import Editor from './Editor';

/** material-ui */
import Grid from '@material-ui/core/Grid';

/** <data> prop are gotten from useReadDoc */

const SurveyEditor = (data: SurveyType) => {
  // @ts-ignore
  let { id } = useParams();
  const [surveyData, setSurveyData] = React.useState(data);
  const [lang, setLang] = React.useState('ua');
  const surveyProps = { ...surveyData, lang, setLang };
  const editorProps = { id, lang, setLang, surveyData, setSurveyData };

  return (
    <Grid container spacing={1} justifyContent="space-between">
      <Grid item lg={5} md={5} sm={12}>
        <Editor {...editorProps} />
      </Grid>
      <Grid item lg={7} md={7} sm={12}>
        <Survey {...surveyProps} />
      </Grid>
    </Grid>
  );
};

export default SurveyEditor;
