import * as React from 'react';
import TitleItem from './TitleItem';

import { List } from '@material-ui/core';

interface TitlesMock {
  titlesMock: string[];
}

const TitlesList = ({ titlesMock }: TitlesMock) => {
  return (
    <List>
      <ul style={{ paddingLeft: 0 }}>
        {titlesMock.map((title, titleIndex) => (
          <TitleItem key={titleIndex} title={title} titleIndex={titleIndex} />
        ))}
      </ul>
    </List>
  );
};

export default TitlesList;
