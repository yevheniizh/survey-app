import * as React from 'react';
import TitleItem from './TitleItem';

import { List } from '@material-ui/core';

interface TitlesMock {
  titlesMock: string[];
  onEditSubmit: Function; // TEMP: helper mock function
}

const TitlesList = ({
  titlesMock,
  onEditSubmit, // TEMP: helper mock function
}: TitlesMock) => {
  return (
    <List>
      <ul style={{ paddingLeft: 0 }}>
        {titlesMock.map((title, titleIndex) => (
          <TitleItem
            key={titleIndex}
            title={title}
            titleIndex={titleIndex}
            onEditSubmit={onEditSubmit} // TEMP: helper mock function
          />
        ))}
      </ul>
    </List>
  );
};

export default TitlesList;
