const LOCAL_STORAGE_KEY = 'timeTrackingApp';

export const getProjectsFromLocalStorage = () => {
  const projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  return projects || [];
};

export const saveProjectsToLocalStorage = (projects) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(projects));
};