import * as React from 'react';
import TextField from "@material-ui/core/TextField";
import Title from "../components/title";
import {SurveyType,Answer} from "../../../types";


export default ({ answers, setAnswer, design, content }: Partial<SurveyType>) => {

    const answerKey = Answer.feedbackMessage;
    //const classes = inputStyles();
    const { feedbackInputLabel, feedbackBad, feedbackGood, feedBackNeutral } = content;
    const titles = [feedbackBad, feedBackNeutral, feedbackGood]
    const { primaryColor } = design;

    const onChange = (e: any) => {
        const { value } = e.target;
        // @ts-ignore
        setAnswer({ ...answers, [answerKey]: value })
    };

    return (
        <div>
            <Title title={titles[answers[Answer.overallGrade]]} contentTextColor={primaryColor} />
            <TextField
                //className={classes.root}
                onChange={onChange}
                value={answers[answerKey]}
                style={{ width: "100%" }}
                id="outlined-textarea"
                placeholder={feedbackInputLabel}
                multiline={true}
                autoFocus={true}
            />

            {/* <div className={styles.mediaRow}>
                <Media type={Answer.audio} />
                <Media type={Answer.photo} />
            </div> */}
        </div>
    );
};