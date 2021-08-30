import * as React from 'react';
import { UseReadDoc } from '@zzzhyrov/my-perfect-package';
import { useParams } from 'react-router';
import SurveyEditor from './SurveyEditor';
import Loader from '../Loader';
import Error from '../Error';

export const Wrapper = () => {
  // @ts-ignore
  let { id } = useParams();
  const properties = {
    collection: 'surveys',
    docId: id,
    Component: SurveyEditor,
    Loading: Loader,
    Error,
    props: { errorText: 'There is no survey you are searching for!' },
  };
  return <UseReadDoc {...properties} />;
};
