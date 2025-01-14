import React from "react";
import BasicMenu from "../components/menus/BasicMenu";

const BasicLayout = ({ children }) => {
  return (
    <div>
      <BasicMenu />
      {/* <header className="bg-teal-400 p-5"><h1 className="text-2xl md:text-4xl">header</h1></header> */}
      <div className="bg-white w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <main className="bg-sky-300 md:w-2/3 lg:w-3/4 px-5 py-40">
            {children}
        </main>
        <aside className="bg-green-300 md:w-1/3 lg:w-1/4 px-5 py-40">
            <h2 className="text-2xl md:text-4xl">Sidebar</h2>
        </aside>
      </div>
      {/* <main>{children}</main>
      <footer>footer</footer> */}
    </div>
  );
}

export default BasicLayout;