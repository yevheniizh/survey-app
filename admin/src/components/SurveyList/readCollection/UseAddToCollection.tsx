/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { createSurvey } from '../../../redux/actions/survey.actions';

export function UseAddToCollection(
  data: any,
  clicked: Boolean,
  setClicked: any
) {
  const dispatch = useDispatch();
  const [id, setId] = React.useState(null);
  const { collection, defaults } = data;

  React.useEffect(() => {
    let isMounted = true;

    if (clicked) {
      const request = dispatch(createSurvey({ collection, defaults }));

      Promise.resolve(request).then((doc: any) => {
        if (isMounted) {
          setId(doc.id);
          setClicked(false);
        }
      });
    }

    return () => {
      isMounted = false;
    };
  }, [clicked]);

  return { id };
}