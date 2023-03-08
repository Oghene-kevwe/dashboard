import { Sidebar } from "./sidebar";
import { tabDetails } from "../utils/data";
import { chartData } from "../utils/data";
import { tableData } from "../utils/data";
import { Popup } from "./popup";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Chart } from "chart.js/auto";
import { useState } from "react";

Chart.register(CategoryScale);

export function Home({ showMenu }) {
  // chart info
  const chartInfo = {
    labels: chartData.map((item) => item.date),
    datasets: [
      {
        label: " Transaction Settlement",
        data: chartData.map((item) => item.totalSettlement),
      },
    ],
  };

  // chart styles
  const options = {
    maintainAspectRatio: false,
    layout: {
      padding: 20,
    },
    elements: {
      point: {
        radius: 6,
        backgroundColor: "#202F6B",
      },
      line: {
        borderWidth: 2,
        borderColor: "#364FB5",
        tension: 0.2,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        offset: true,
        title: {
          display: true,
          text: "Date",
          color: "#1D242D",
          font: {
            weight: "bold",
          },
          padding: {
            top: 20,
          },
        },
      },
      y: {
        grid: {
          color: "#F6F8F9",
        },
        title: {
          display: true,
          text: "Total Settlemets",
          color: "#1D242D",
          font: {
            weight: "bold",
          },
          padding: {
            right: 20,
          },
        },
        suggestedMin: 0,
        suggestedMax: 3500,
      },
    },
    plugins: {
      legend: false,
    },
  };

// display tooltip
  const [tooltip, setToolTip] = useState(false);
  function toggleTooltip() {
    setToolTip(!tooltip);
  }

  return (
    <main className="relative  text-[#1D242D] bg-[#f4f5f6] lg:flex">
      {showMenu && <Sidebar />}
      <div className="px-[3vw] lg:pl-[1vw] w-full lg:w-[75%]   pt-8  grow">
        <section className=" mb-8">
          <div className=" mb-8 md:flex justify-between">
            <div>
              <h2 className=" text-3xl font-bold mb-2">Welcome back,</h2>
              <p>Here’s what is happening with your Terminals today,</p>
            </div>
            {/* date */}
            <div className=" flex gap-x-3 items-center mt-4 md:mt-0 ">
              <p>12th October, 2022</p>
              <button className="  bg-[#EDF1FF] w-5 h-5 p-1">
                <img src="images/icons/dropdown.svg" alt="drop-down" />
              </button>
            </div>
          </div>

          {/* tabs */}
          <article className=" mb-8 bg-white flex justify-between  items-center flex-wrap gap-4 rounded-md px-2 w-fit ">
            <button className="p-1 px-3 h-full ">Transactions</button>
            {/* selected tab */}
            <div
              className=" relative"
              onMouseEnter={toggleTooltip}
              onMouseLeave={toggleTooltip}
            >
              <button className=" p-1 px-3 h-full settlementText ">
                Settlements
              </button>
              {/* tooltip */}
              {tooltip && <Popup />}
            </div>
            <button className="p-1 px-3 h-full ">Performance</button>
            <button className="p-1 px-3 h-full ">Terminal Health</button>
            <button className="p-1 px-3 h-full ">Bank Statement</button>
          </article>

          {/* tabs info */}
          <article className=" w-fit flex  flex-wrap    gap-4">
            {tabDetails.map(({ id, info, image, amount }) => {
              return (
                <div key={id} className=" bg-white p-2 rounded-md w-[12rem]">
                  <div className=" flex gap-2">
                    <img
                      src={`images/icons/${image}`}
                      alt={info}
                      className=" w-6"
                    />
                    <p className="text-sm text-[#292D32]">{info}</p>
                  </div>
                  <p className=" text-xl font-semibold text-[#383737] mt-2">
                    {amount}
                  </p>
                </div>
              );
            })}
          </article>
        </section>

        {/* chart */}
        <section className=" bg-white  rounded-md mb-16 ">
          <div className="relative h-[55vh] ">
            <Line data={chartInfo} options={options} />
          </div>
          <div className=" p-4 flex justify-between">
            <div className=" flex items-center gap-x-2">
              <p className=" h-2 w-2 bg-[#202F6B] rounded-full"></p>
              <p className=" text-xs">Weekly Indicator</p>
            </div>
            <button className=" bg-[#4C6FFF] text-white w-fit px-3 py-2 rounded-md">
              View Details
            </button>
          </div>
        </section>

        {/* table */}
        <section className="remove-scrollbar overflow-x-auto  ">
          <table className=" min-w-[30rem] w-full bg-[#EDF1FF] mb-20 ">
            <tbody>
              <tr className=" bg-[#C8D2FF] font-semibold">
                <th>Time</th>
                <th>Transaction Amount</th>
                <th>Charges</th>
                <th>Settled Amount</th>
                <th>Transaction ID</th>
              </tr>
            </tbody>
            {tableData.map(
              ({
                id,
                time,
                transactionAmount,
                charges,
                settledAmount,
                transactionId,
              }) => {
                return (
                  <tbody key={id}>
                    <tr className=" text-sm text-[#3D4C5E]" key={id}>
                      <td>{time}</td>
                      <td>{transactionAmount}</td>
                      <td>{charges}</td>
                      <td>{settledAmount}</td>
                      <td>{transactionId}</td>
                    </tr>
                  </tbody>
                );
              }
            )}
          </table>
        </section>
      </div>
    </main>
  );
}
