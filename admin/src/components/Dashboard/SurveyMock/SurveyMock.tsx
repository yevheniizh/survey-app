import * as React from 'react';

import { SurveyComponent } from '@alega-lab/my-perfect-package';

// TEMP: example for demonstrating synchronizing data
// between 'Edit Titles' & 'Survey Demo' boards in 'Dashboard'
const SurveyMock = ({ titlesMock }: { titlesMock: string[] }) => {
  return (
    <div>
      {titlesMock.map((title, titleIndex) => (
        <li key={titleIndex}>{`${titleIndex + 1} - ${title}`}</li>
      ))}
      <SurveyComponent />
    </div>
  );
};

export default SurveyMock;
