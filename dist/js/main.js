"use strict";

// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }
Highcharts.setOptions({
  lang: {
    thousandsSep: ','
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var myChart = Highcharts.chart('chart-container', {
    chart: {
      type: 'bar',
      styledMode: true,
      spacingBottom: 25,
      spacingRight: 100
    },
    title: {
      text: null
    },
    data: {
      googleSpreadsheetKey: '1hrISQBq6eBYa0WuHyGtFq6zBsLn_-GAfNXHdpplJ-P0'
    },
    legend: {
      align: 'right',
      symbolRadius: 0,
      verticalAlign: 'top',
      x: 10,
      itemMarginTop: -10
    },
    xAxis: {
      labels: {
        reserveSpace: true,
        x: -5,
        y: 0,
        align: 'right',
        style: {// whiteSpace: 'nowrap'
        }
      }
    },
    yAxis: {
      title: false,
      labels: {
        useHTML: true,
        overflow: 'allow'
      },
      max: 6,
      tickAmount: 7
    },
    credits: {
      enabled: false
    },
    tooltip: {
      shadow: false,
      padding: 10,
      valuePrefix: '$'
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          chart: {
            spacingRight: 10
          },
          legend: {
            align: 'left',
            x: -18
          },
          tooltip: {
            enabled: false
          },
          xAxis: {
            labels: {
              reserveSpace: false,
              style: {
                whiteSpace: 'nowrap'
              },
              x: 5,
              y: -22,
              align: 'left'
            }
          }
        }
      }]
    }
  });
});