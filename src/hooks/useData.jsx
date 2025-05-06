import useFetch from "./useFetch";

/**This hooks fetches data from to endpoint 
for example given endpoint: https://climatemonitor.info/api/public/v1/co2/for/2025-04-30
  the data is:
  {
    "status": "success",
    "data": {
    "label": "2025-04-30",
    "value": 427.61,
    "trend": 425.68
    }
  }
*/
const useData = (currentUrl, oldUrl) => {
  const current = useFetch(currentUrl);
  const old = useFetch(oldUrl);

  return {
    current,
    old,
  };
};

export default useData;
