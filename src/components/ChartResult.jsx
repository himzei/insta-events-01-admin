import ApexCharts from "react-apexcharts";
import { useQuery } from "react-query";
import { getChartResult } from "../api";

export default function ChartResult() {
  const { data } = useQuery("chartResult", getChartResult);

  const likesArray = data?.map((item) => item.total_likes);
  const commentsArray = data?.map((item) => item.total_comments);
  const totalFriends = data?.map((item) => item.total_friends);
  const createdAt = data?.map((item) => item.created_at.substr(11, 5));
  const instaArray = data?.map((item) => item.total_insta);
  console.log(likesArray);

  const chartData = {
    series: [
      {
        name: "좋아요",
        type: "column",
        data: likesArray,
      },
      {
        name: "친구소환",
        type: "line",
        data: totalFriends,
      },
      {
        name: "댓글",
        type: "column",
        data: commentsArray,
      },
      {
        name: "친구소환",
        type: "line",
        data: instaArray,
      },
    ],

    options: {
      legend: {
        horizontalAlign: "right",
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "시간대별 '좋아요','댓글','친구소환'",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3f3", "#ffffff"], // takes an array which will be repeated on columns
          opacity: 0.8,
        },
      },
      xaxis: {
        categories: createdAt,
      },
      yaxis: [
        {
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "#008FFB",
          },
          labels: {
            style: {
              colors: "#008FFB",
            },
          },
          title: {
            text: "Income (thousand crores)",
            style: {
              color: "#008FFB",
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        {
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "#008FFB",
          },
          labels: {
            style: {
              colors: "#008FFB",
            },
          },
          title: {
            text: "Income (thousand crores)",
            style: {
              color: "#008FFB",
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        {
          seriesName: "Income",
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "#00E396",
          },
          labels: {
            style: {
              colors: "#00E396",
            },
          },
          title: {
            text: "Operating Cashflow (thousand crores)",
            style: {
              color: "#00E396",
            },
          },
        },
        {
          seriesName: "Revenue",
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "#FEB019",
          },
          labels: {
            style: {
              colors: "#FEB019",
            },
          },
          title: {
            text: "Revenue (thousand crores)",
            style: {
              color: "#FEB019",
            },
          },
        },
      ],
    },
  };

  return (
    <div>
      <ApexCharts
        options={chartData.options}
        series={chartData.series}
        typs="line"
        width={"100%"}
        height={700}
      />
    </div>
  );
}
