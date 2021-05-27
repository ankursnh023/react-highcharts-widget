import HighchartsReact from "highcharts-react-official";
import "./styles.css";
import * as Highcharts from "highcharts";
import variablepie from "highcharts/modules/variable-pie";

variablepie(Highcharts);

export default function App() {
  const options = {
    chart: {
      spacing: [2, 0, 0, 0],
      margin: [14, 0, -6, 0],
      height: 130,
      width: 160
    },
    title: {
      useHTML: true,
      text:
        '<span class="hc-title">MFA' +
        '<span style="color: #fa1262">' +
        " &#129149 " +
        "" +
        "2%" +
        "</span></span>",
      style: {
        marginTop: 10
      }
    },
    subtitle: {
      style: {
        display: "none"
      }
    },
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
        minPointSize: 20,
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
      <div
        style={{
          position: "absolute",
          top: 47,
          right: 54,
          height: 43,
          width: 43,
          border: "3px solid transparent",
          borderRadius: "50%",
          boxShadow: "1px 2px #ccc",
          padding: 3,
          fontSize: 14,
          fontWeight: "bold",
          textAlign: "center",
          zIndex: "-10 !important",
          cursor: "pointer"
        }}
      >
        <div style={{ paddingTop: 6 }}>20K</div>
        <div style={{ fontSize: 12 }}>Issue</div>
      </div>
    </div>
  );
}
