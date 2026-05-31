import { act, createContext, useContext, useEffect, useReducer } from "react";
import { JOBS } from "../data/jobs";

const SavedJobsContext = createContext();

async function fetchJobs() {
  const res = await fetch("http://localhost:3001/JOBS");
  const data = await res.json();

  return data;
}

const jobs = await fetchJobs();
console.log(jobs);

const initialState = { savedIds: ["2"] };

function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "save":
      return { ...state, savedIds: [action.payload, ...state.savedIds] };
    case "unsave":
      return {
        ...state,
        savedIds: state.savedIds.filter(
          (sid) => Number(sid) !== Number(action.payload),
        ),
      };
  }
}

function SavedJobsProvider({ children }) {
  const [{ savedIds }, dispatch] = useReducer(reducer, initialState);

  function save(jobId) {
    dispatch({ type: "save", payload: jobId });
  }
  function unsave(jobId) {
    dispatch({ type: "unsave", payload: jobId });
  }

  return (
    <SavedJobsContext.Provider value={{ savedIds, save, unsave }}>
      {children}
    </SavedJobsContext.Provider>
  );
}

function useSavedJobs() {
  const context = useContext(SavedJobsContext);
  if (context == undefined) {
    throw new Error(
      "SavedJobsContext is being used outside the SavedJobsProvider",
    );
  }
  return context;
}

export { useSavedJobs, SavedJobsProvider };
