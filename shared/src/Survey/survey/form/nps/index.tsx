import * as React from 'react';
import ReactSlider from "react-slider";
import styles from "./styles.css";
import Title from "../components/title";
import {SurveyType, Answer} from "../../../sharedtypes";

const Indicator = ({ left, children }: { left: any; children: any }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="47"
        viewBox="0 0 60 47"
        className={styles.indicator}
        style={{ left }}
    >
        <path
            fill="#E3EBF3"
            fillRule="evenodd"
            d="M44.617 0c5.349 0 7.289.557 9.244 1.603a10.904 10.904 0 0 1 4.536 4.536C59.443 8.094 60 10.034 60 15.383v9.234c0 5.349-.557 7.289-1.603 9.244a10.904 10.904 0 0 1-4.536 4.536C51.906 39.443 49.966 40 44.617 40h-8.283l-6.556 6.556L23.221 40h-7.838c-5.349 0-7.289-.557-9.244-1.603a10.904 10.904 0 0 1-4.536-4.536C.557 31.906 0 29.966 0 24.617v-9.234c0-5.349.557-7.289 1.603-9.244a10.904 10.904 0 0 1 4.536-4.536C8.094.557 10.034 0 15.383 0h29.234z"
        />
        <text x="50%" y="45%" dominantBaseline="middle" textAnchor="middle">
            {children}
        </text>
    </svg>
);

const Body = ({ answers, setAnswer, design, content }: Partial<SurveyType>) => {

    const { helperText = [] } = {};
    const answerKey = Answer.recommendationGrade;
    const { recommendationSectionTitle } = content;
    const { controlsBackgroundColor, contentTextColor } = design;
    const nps = answers[answerKey] as number;

    const onChange = (v: any) => {
        return setAnswer({ ...answers, [answerKey]: v });
    };

    return (
        <div>
            <Title title={recommendationSectionTitle} contentTextColor={contentTextColor} />
            <div className={styles.wrapper}>
                <div
                    style={{ color: contentTextColor }}
                    className={styles.indicatorMin}
                >
                    0
        </div>
                <ReactSlider
                    className={styles.slider}
                    max={10}
                    value={nps}
                    thumbClassName={styles.thumb}
                    onChange={onChange}
                    // @ts-ignore
                    renderTrack={(props, state) => {
                        const style =
                            state.index === 0
                                ? { ...props.style, backgroundColor: controlsBackgroundColor }
                                : props.style;
                        return (
                            <div
                                key={state.index}
                                {...props}
                                className={
                                    state.index === 0 ? styles.trackFilled : styles.trackEmpty
                                }
                                style={{ ...style }}
                            />
                        );
                    }}
                    // @ts-ignore
                    renderThumb={(props, state) => {
                        // @ts-ignore
                        const { left } = props.style;
                        // @ts-ignore
                        const thumbStyles = {
                            ...props.style,
                            backgroundColor: controlsBackgroundColor,
                        };
                        // @ts-ignore
                        return (
                            <>
                                <Indicator left={left}>{state.valueNow}</Indicator>
                                <div {...props} style={thumbStyles} />
                            </>
                        );
                    }}
                />
                <div
                    style={{ color: contentTextColor }}
                    className={styles.indicatorMax}
                >
                    10
        </div>
            </div>
            <div className={styles.legend}>
                <div style={{ color: contentTextColor }} className={styles.legendMin}>
                    {helperText[0]}
                </div>
                <div style={{ color: contentTextColor }} className={styles.legendMax}>
                    {helperText[1]}
                </div>
            </div>
        </div>
    );
};

export default Body;