import HighchartsReact from "highcharts-react-official";
import "./styles.css";
import * as Highcharts from "highcharts";

export default function App() {
  const options: Highcharts.Options = {};

  return (
    <div className="App">
      <HighchartsReact highcharts={Highcharts} />
    </div>
  );
}
