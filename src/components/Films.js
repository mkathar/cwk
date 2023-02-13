import { useState } from "react";
import { NavLink } from "react-router-dom";
import { cdnUrl } from "../utilities/cdnUrl";

export default function Films({ popular , a}) {
  const [filterText, setFilterText] = useState("");

  const filtered = popular;
  /*popular.filter((item) => {
    return Object.keys(item)?.some((key) =>
      item[key].includes(filterText.toLocaleLowerCase())
    );
  });
*/
console.log()
  return (
    <div className="container mx-auto text-white ">
      <div>
        <div className="columns-3 py-20">
          <div className="flex items-center  text-white transition-all text-opacity-80 hover:text-opacity-100 ">
            <pre className="text-2xl ">Milyonlarca film ve dizi</pre>
          </div>
          <div>
            <input
              type="text"
              className="bg-blue-300 w-full h-16 rounded-lg "
              placeholder="    Arayın"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
          </div>
          <div className=" pl-10 flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100">
            <pre className="text-2xl"> Hepsi senin için.</pre>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {filtered.map((data, i) => (
          <div key={i} className="col-3 my-4">
            <img src={`${cdnUrl}/w400${filtered[i].backdrop_path}`} alt="" />
            <div className="text-center">
              <p>{data.name}</p>
            </div>
          </div>
        ))}

        <NavLink
          to={"/Films"}
          className={
            "flex items-center gap-x-2 text-white transition-all text-opacity-60 hover:text-opacity-100"
          }
        >
          Tümünü Gör
        </NavLink>
      </div>
    </div>
  );
}
