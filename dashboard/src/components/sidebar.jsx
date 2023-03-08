import { sidebarData } from "../utils/data";

export function Sidebar() {
  return (
    <aside className=" absolute top-0 z-10  bg-white min-w-[260px] shadow-md h-full pl-[3vw] pt-6 lg:h-auto lg:relative lg:shadow-none ">
      <h2 className=" font-semibold text-sm mb-4 ">POS Monitoring</h2>
      {/* content */}
      <div className=" text-[#909DAD] grid gap-6">
        {sidebarData.map(({ id, value, dropdown, icon }) => {

          const dropdownElement = [1, 2, 3, 4, 8];
          return (
            <div key={id} className=" flex items-center gap-3 ">
              <div className=" w-6 h-6">
                <img src={`images/icons/${icon}`} alt={value} />
              </div>
              <p className={id === 0 ? "text-[#4C6FFF]" : " "}>{value}</p>
              <button className=" w-4 h-4">
                <img
                  src={
                    dropdownElement.includes(id)
                      ? `images/icons/${dropdown}`
                      : " "
                  }
                  alt={dropdownElement.includes(id) ? "dropdown" : " "}
                />
              </button>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
