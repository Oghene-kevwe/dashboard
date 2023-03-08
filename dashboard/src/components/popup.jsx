const data = [
  {
    id: 0,
    info: "Settled Amount",
    amount: "#40,000,000",
    image: "dollar-circlepopup.svg",
  },
  {
    id: 1,
    info: "Transaction Amount",
    amount: "#35,000,000",
    image: "money-receivepopup.svg",
  },
  {
    id: 2,
    info: "Charges",
    amount: "#5,000,000",
    image: "money-sendpopup.svg",
  },
];

export function Popup() {
  return (
    <div className=" text-sm text-[#B2BBC6]  font-semibold absolute -top-[12rem] right-0 translate-x-[25%] rounded-xl bg-[#FCFDFD] p-4 w-[15rem]">
      <div className=" relative">
        <p className="  absolute -bottom-[3.4rem]  -translate-x-[50%] left-[50%] popup-triangle"></p>
        <div className=" grid gap-y-3">
          {data.map((item) => {
            const { info, amount, image,id } = item;
            return (
              <div key={id} className=" flex  gap-4 ">
                <div>
                  <img
                    src={`images/icons/${image}`}
                    alt={info}
                    className=" w-4 h-4"
                  />
                </div>
                <div>
                  <p className=" font-normal">{info}</p>
                  <p>{amount}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}