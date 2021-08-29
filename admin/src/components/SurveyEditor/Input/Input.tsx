import * as React from 'react';

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
    <div>
      <h2>{name}</h2>
      <input key={name} value={value} onBlur={onBlur} onChange={onKeyUp} />
    </div>
  );
};

export default Input;
