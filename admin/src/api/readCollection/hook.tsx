import * as React from 'react';
import { useDispatch } from 'react-redux';
import { loadSurveys } from '../../redux/actions';

export function UseReadCollection(data: Object) {
  const [result, setResult] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const request = async () => {
      try {
        setLoading(true);
        let result = await dispatch(loadSurveys(data));

        // @ts-ignore
        setResult(result);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };

    request();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { result, loading, error };
}
