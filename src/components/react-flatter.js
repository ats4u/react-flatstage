import React from "react";

const StageContext = React.createContext({
  set() {
    throw new Error(
      "Staged objects must be called within the StageContext.Provider tag"
    );
  }
});
export function useStage() {
  return React.useContext(StageContext);
}
export function useNewStage() {
  const [stage, setStage] = React.useState(null);
  function Stage() {
    return <StageContext.Provider value={Stage}>{stage}</StageContext.Provider>;
  }
  Stage.set = setStage;
  return Stage;
}
const ReactStage = {
  useStage,
  useNewStage
};

export default ReactStage;

