import React from "react"

const Demo = (props) => {
  return (
    <div className = 'dib br3 pa3 ma2 grow bw2 shadow-5 bg-black white'>
      <img src={process.env.PUBLIC_URL + `/img/${props.id}.png`} alt="demo" width = '200' height = '200' />
      <div>
        <h1>{props.price}</h1>
        <p>{props.pname}</p>
        <p>{props.storage}</p>
      </div>
    </div>

  );
};

export default Demo;
