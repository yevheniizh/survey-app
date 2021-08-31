/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadSurveys } from '../../redux/actions';

export function UseReadCollection(data: Object) {
  const dispatch = useDispatch();
  const { entities, loading, loaded, error } = useSelector(
    (surveys: any) => surveys.surveys
  );

  React.useEffect(() => {
    if (!loading && !loaded) dispatch(loadSurveys(data));
  }, [loading, loaded, loadSurveys]);

  return { result: entities, loaded, loading, error };
}
