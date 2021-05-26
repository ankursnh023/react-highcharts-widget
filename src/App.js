import HighchartsReact from "highcharts-react-official";
import "./styles.css";
import * as Highcharts from "highcharts";
import variablepie from "highcharts/modules/variable-pie";

variablepie(Highcharts);

export default function App() {
  const options = {
    tooltip: {
      useHTML: true,
      backgroundColor: null,
      borderWidth: 0,
      shadow: false
    },
    plotOptions: {
      variablepie: {
        borderWidth: 5,
        borderColor: "#f5f5f5",
        dataLabels: {
          enabled: false
        },
        minPointSize: 50,
        innerSize: "50%",
        tooltip: {
          headerFormat: "",
          pointFormatter: function () {
            return (
              '<div style="background-color:' +
              this.color +
              ';color: #fff;" class="hc-tooltip"> ' +
              "<b>" +
              this.y +
              "</b>" +
              "%" +
              "</div>"
            );
          }
        }
      }
    },
    credits: {
      enabled: false
    },
    title: {
      text: "Authmind"
    },
    series: [
      {
        type: "variablepie",
        data: [
          {
            name: "Low",
            y: 90,
            z: 1,
            color: "#fcbf2e"
          },
          {
            name: "Medium",
            y: 90,
            z: 1,
            color: "#fd7122"
          },
          {
            name: "Critical",
            y: 15,
            z: 2,
            color: "#fa1262"
          },
          {
            name: "None",
            y: 90,
            z: 1,
            color: "#cccccc"
          }
        ]
      }
    ]
  };

  return (
    <div className="App">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
