import HighchartsReact from "highcharts-react-official";
import "./styles.css";
import * as Highcharts from "highcharts";
import variablepie from "highcharts/modules/variable-pie";

variablepie(Highcharts);

export default function App() {
  const options = {
    chart: {
      height: "100%",
      marginTop: window.matchMedia("(min-width: 2560px)").matches ? 40 : 20,
      marginBottom: 0
    },
    title: {
      style: {
        textAlign: "center"
      },
      useHTML: true,
      text:
        '<span class="hc-title">MFA' +
        '<span style="color: #fa1262">' +
        " &#129149 " +
        "" +
        "2%" +
        "</span></span>"
    },
    tooltip: {
      useHTML: true,
      backgroundColor: null,
      borderWidth: 0,
      shadow: false
    },
    plotOptions: {
      variablepie: {
        borderWidth: 2,
        borderColor: "#f5f5f5",
        dataLabels: {
          enabled: false
        },
        minPointSize: "40%",
        innerSize: "50%",
        tooltip: {
          headerFormat: "",
          pointFormatter: function () {
            return (
              '<div style="background-color:' +
              this.color +
              ';color: #fff; z-index: 12000" class="hc-tooltip"> ' +
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
    series: [
      {
        type: "variablepie",
        states: {
          hover: {
            halo: null
          }
        },
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
      <div className="hc-btn">
        <div className="hc-pT">20K</div>
        <div className="hc-fS">Issue</div>
      </div>
    </div>
  );
}
