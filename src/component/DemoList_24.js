import React from "react"
import Demo from "./Demo_24"

const DemoList = ({demos}) => {
  return (
    <div>
      {
        demos.map(((d,i) => {
            return (
              <Demo id={d.id} pname={d.pname} price={d.price} storage={d.storage} key={i}/>
            )
          }
        ))
      }
    </div>
  );
};

export default DemoList;
