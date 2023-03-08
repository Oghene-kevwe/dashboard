export function NavBar ({setShowMenu,showMenu}) {

  return (
    <nav className=" bg-white pt-4 px-[3vw] pb-8 lg:flex gap-x-12 items-center  relative ">
      <div className=" flex justify-between mb-8 lg:mb-0 ">
        {/* menu button */}
        <div className=" flex gap-x-4">
          <button className=" w-6 h-6" onClick={()=>setShowMenu(!showMenu)}>
            <img src="images/icons/menu.svg" alt="menu icon" />
          </button>
          {/* site logo */}
          <div className=" w-28">
            <img src="images/icons/Pavilion.svg" alt="site-logo" />
          </div>
        </div>

        <div className=" flex gap-4 lg:absolute right-[4vw]">
        {/* notofication  */}
          <button className=" w-6 h-6">
            <img src="images/icons/notification.svg" alt="notification icon" />
          </button>
          {/* profile image */}
          <div className=" w-6 h-6">
            <img src="images/icons/profile.svg" alt="profile" />
          </div>
        </div>
      </div>
      {/* search */}
      <form action="" className=" flex border border-[#1D242D]  w-full  max-w-[34rem] p-1 rounded-sm">
        <div className="  top-0 left-0 w-6 h-6">
          <img src="images/icons/searchIcon.svg" alt="profile" />
        </div>
        <input type="text" placeholder="Search" className=" outline-none w-[92%] ml-auto  " />
      </form>
    </nav>
  );
};
