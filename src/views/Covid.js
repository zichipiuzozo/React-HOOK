import useFetch from "../Customize/fetch";
import moment from "moment";
const Covid = () => {
  const today = moment().startOf("day").toISOString(true);
  const priorDate = moment()
    .startOf("day")
    .subtract(31, "days")
    .toISOString(true);
  const {
    data: dataCovid,
    isLoading,
    isError
  } = useFetch(
    `https://api.covid19api.com/country/vietnam?from=${priorDate}&to=${today}`,
    true
  );
  //componentDidMount
  return (
    <>
      <h3>Covid19 Tracking in Vietnam :</h3>
      <table>
        <thead>
          <tr>
            <td>Date</td>
            <td>Confirmed</td>
            <td>Active</td>
            <td>Deaths</td>
            <td>Recovered</td>
          </tr>
        </thead>
        <tbody>
          {isError === false &&
            isLoading === false &&
            dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map(item => {
              return (
                <tr key={item.ID}>
                  <td>{item.Date}</td>
                  <td>{item.Confirmed}</td>
                  <td>{item.Active}</td>
                  <td>{item.Deaths}</td>
                  <td>{item.Recovered}</td>
                </tr>
              );
            })}
          {isLoading === true && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                Loading....
              </td>
            </tr>
          )}
          {isError === true && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                Something went wrong...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
export default Covid;
