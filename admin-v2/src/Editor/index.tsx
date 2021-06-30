import React from 'react';
import Grid from '@material-ui/core/Grid';
import {SurveyType, Survey, ContentEnum, LocationEnum, AttributesEnum, surveyDefaults} from '@alega-lab/my-perfect-package';


const Editor = ({setSurveyData,data,lang,}:any) => {
    const Input = ({name,path}:any) => {
        const pathName = path[name];
        const [value, setValue] = React.useState(pathName);

        const onKeyUp = (e:any) => {
            return setValue(e.target.value);
        }
        const onBlur = (e:any) => {
            path[name] = e.target.value;
            return setSurveyData(JSON.parse(JSON.stringify(data)));
        }
        return (
            <div>
                <h2>{name}</h2>
                <input key={name} value={value} onBlur={onBlur} onChange={onKeyUp} />
            </div>
        );
    }

    const contentPath = data[AttributesEnum.translations][lang];
    const locationPath = data[AttributesEnum.location];

    return (
        <div>
            <div className='form'>
                <div className='formEditor'>
                    <Input name={LocationEnum.logo}  path={locationPath} />
                    <Input name={ContentEnum.greeting}  path={contentPath} />
                    <Input name={ContentEnum.feedbackBad} path={contentPath} />
                    <Input name={ContentEnum.feedBackNeutral}  path={contentPath}/>
                    <Input name={ContentEnum.feedbackGood}  path={contentPath} />
                </div>
            </div>
        </div>
    )
}
const LangSwitch = ({lang,setLang}:any) => {
    const onChange = (e:any) => {
        return setLang(e.target.value)
    }
    return (
        <select onChange={onChange}>
            <option value='en'>en</option>
            <option value='ru'>ru</option>
            <option value='ua'>ua</option>
        </select>
    )
}
export const SurveyEditor = () => {
    const data: SurveyType = surveyDefaults;
    const [surveyData, setSurveyData] = React.useState(data);
    const [lang, setLang] = React.useState('en');
    const surveyProps = {...surveyData,lang,setLang};
    console.log('rerendered',surveyData);
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <LangSwitch lang={lang} setLang={setLang}/>
                    <Editor data={surveyData} lang={lang} setSurveyData={setSurveyData} />
                </Grid>
                <Grid item xs={8}>
                    <Survey {...surveyProps} />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}