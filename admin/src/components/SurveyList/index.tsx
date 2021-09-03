import * as React from 'react';
import { ReadCollection, ReadCollectionType } from './readCollection';
import { SurveyList } from './SurveyList';
import { surveyDefaults } from '@zzzhyrov/my-perfect-package';
import { useHistory, Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
export const Wrapper = () => {
  let history = useHistory();
  const { currentUser } = React.useContext(AuthContext);

  // @ts-ignore
  surveyDefaults.userId = currentUser.uid;
  const props: ReadCollectionType = {
    CollectionView: SurveyList,
    collection: 'surveys',
    where: {
      field: 'userId',
      operator: '==',
      value: currentUser.uid,
    },
    defaults: surveyDefaults,
    history,
    Redirect,
  };

  return <ReadCollection data={props} />;
};
