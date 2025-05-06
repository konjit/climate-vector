import useFetch from "../../hooks/useFetch";

import Loading from "../templates/Loading";
import CustomAreaChart from "./CustomAreaChart";
import { ROOT_END_POINT } from "../../config";

function FactorData({ query, factor, color }) {
  const endPoint = `${ROOT_END_POINT}/${factor}/${query}`;

  const { data, error, loading } = useFetch(endPoint);
  if (error) return <div className="error-message">{error}</div>;
  if (loading) return <Loading />;

  return <>{data && <CustomAreaChart data={data} color={color} />}</>;
}

export default FactorData;
