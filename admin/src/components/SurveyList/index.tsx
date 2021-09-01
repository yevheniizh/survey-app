import { ReadCollection, ReadCollectionType } from './readCollection';
import { SurveyList } from './SurveyList';
import { surveyDefaults } from '@zzzhyrov/my-perfect-package';
import { useHistory, Redirect } from 'react-router-dom';
export const Wrapper = () => {
  let history = useHistory();

  // @ts-ignore
  surveyDefaults.userId = 'testUser';
  const props: ReadCollectionType = {
    CollectionView: SurveyList,
    collection: 'surveys',
    where: {
      field: 'userId',
      operator: '==',
      value: 'testUser',
    },
    defaults: surveyDefaults,
    history,
    Redirect,
  };

  return <ReadCollection data={props} />;
};
