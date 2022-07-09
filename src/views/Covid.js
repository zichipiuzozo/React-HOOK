import useFetch from "../Customize/fetch";
import moment from "moment";
const Covid = () => {
  const today = new Date(new Date().setHours(0, 0, 0, 0));
  const priorDate = moment().subtract(31, "days");
  const {
    data: dataCovid,
    isLoading,
    isError
  } = useFetch(
    `https://api.covid19api.com/country/vietnam?from=${priorDate.toISOString()}&to=${today.toISOString()}`
  );
  //componentDidMount
  return (
    <div style={{ background: "#282c34", color: "white" }}>
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
    </div>
  );
};
export default Covid;
