export default function fetchComponentData(dispatch, components, params) {
  const needs = components.reduce( (prev, current) => {
    console.log
    return current ? (current.needs || []).concat(prev) : prev;
  }, []);
  const fetchData = components.reduce((prev, current) => {
  	return current ? (current.fetchData || []).concat(prev):prev
  }, []);
  const promises = fetchData.map(need => dispatch(need(params)));

  return Promise.all(promises);
}