import * as React from 'react';

/** material-ui */
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const Input = ({ name, path, onSetSurveyData }: any) => {
  const pathName = path[name];
  const [value, setValue] = React.useState(pathName);

  React.useEffect(() => {
    const pathName = path[name];
    setValue(pathName);
  }, [path, name]);

  const onKeyUp = (e: any) => {
    return setValue(e.target.value);
  };
  const onBlur = (e: any) => {
    path[name] = e.target.value;
    return onSetSurveyData();
  };

  return (
    <Box style={{ marginTop: 10 }}>
      <Typography id="range-slider" gutterBottom variant="h5" component="h5">
        {name}
      </Typography>
      <TextField
        fullWidth
        id={name}
        key={name}
        onBlur={onBlur}
        onChange={onKeyUp}
        value={value}
        variant="outlined"
      />
    </Box>
  );
};

export default Input;
