export const SurveyList = (data: Array<any>) => {
  const List = data.map((d) => <h1>{JSON.stringify(d)}</h1>);
  return List;
};
