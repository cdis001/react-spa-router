import { useState, useEffect } from "react";

import { useRouter } from "../../hooks/useRouter";

const Root = () => {
  const { push } = useRouter();

  return (
    <div className="App">
      <h1>root</h1>
      <button onClick={() => push("/about")}>about</button>
    </div>
  );
};

export default Root;
