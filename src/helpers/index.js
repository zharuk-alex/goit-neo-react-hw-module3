const fakeNewId = (arrOfObj) => {
  const ids = arrOfObj.map(({ id }) => parseInt(id.split("-")[1]));
  return `id-${Math.max(...ids) + 1}`;
};

export { fakeNewId };
