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

const initialState = {
  savedIds: ["2"],
  jobType: "All",
  activeJobCategory: "All",
};

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
    case "setJobType":
      return { ...state, jobType: action.payload };
    case "setJobCategory":
      return { ...state, activeJobCategory: action.payload };
  }
}

function SavedJobsProvider({ children }) {
  const [{ savedIds, jobType, activeJobCategory }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  function save(jobId) {
    dispatch({ type: "save", payload: jobId });
  }

  function unsave(jobId) {
    dispatch({ type: "unsave", payload: jobId });
  }

  function setJobType(type) {
    dispatch({ type: "setJobType", payload: type });
  }

  function setJobCategory(category) {
    dispatch({ type: "setJobCategory", payload: category });
  }

  return (
    <SavedJobsContext.Provider
      value={{
        savedIds,
        save,
        unsave,
        setJobType,
        jobType,
        activeJobCategory,
        setJobCategory,
      }}
    >
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
