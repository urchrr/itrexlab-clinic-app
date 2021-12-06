export const getInitialValuesFromInputList = (list) => list
  .reduce((init, { name }) => { init[name] = ''; return init; }, {});
