import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 120,
  },
}));

const LangSwitcher = ({ lang, setLang }: any) => {
  const classes = useStyles();
  const onChange = (e: any) => {
    return setLang(e.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel shrink id="langSwitcher_label">
        Language
      </InputLabel>
      <Select
        labelId="langSwitcher_select"
        id="langSwitcher"
        value={lang}
        defaultValue="en"
        onChange={onChange}
      >
        <MenuItem value="en">en</MenuItem>
        <MenuItem value="ua">ua</MenuItem>
        <MenuItem value="ru">ru</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LangSwitcher;
