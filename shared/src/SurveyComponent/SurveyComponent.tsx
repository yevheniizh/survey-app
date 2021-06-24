import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import FeedbackFaces from './components/FeedbackFaces';
import Header from './components/Header';
import SurveyComp from './components/SurveyComp';
import StartScreen from './components/StartScreen';
import FinishScreen from './components/FinishScreen';
import ShareContainer from './components/SahreWithFriends';
import styles from './SurveyComponent.scss';

const SurveyComponent: React.FC = () => {
  const [isNext, setIsNext] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackDone, setFeedbackDone] = useState(false);
  const [openShareScreen, setOpenShareScreen] = useState(false);

  const faceClickHandler = () => {
    setIsNext(true);
  };
  const submitFeedbackHandler = () => {
    setFeedbackDone(true);
    setTimeout(() => {
      setFeedbackDone(false);
      setOpenShareScreen(true);
    }, 2000);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className={styles.surveyWrapper}>
      <div className={styles.contentWrapper}>
        {isLoading ? (
          <StartScreen />
        ) : feedbackDone ? (
          <FinishScreen title="Thanks for your feedback!" />
        ) : (
          <>
            <Header isActive={isNext} />

            <div
              className={classnames(
                styles.feedback__fields,
                isNext && styles.feedback__fields_active
              )}
            >
              {openShareScreen ? (
                <ShareContainer />
              ) : (
                <>
                  {' '}
                  <FeedbackFaces faceClickHandler={faceClickHandler} />
                  {isNext && (
                    <SurveyComp submitFeedbackHandler={submitFeedbackHandler} />
                  )}
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SurveyComponent;
