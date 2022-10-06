import { useState } from "react";

import { useRouter } from "../../hooks/useRouter";

function About() {
  const { push } = useRouter();

  return (
    <div className="App">
      <h1>about</h1>
      <button onClick={() => push("/")}>go main</button>
    </div>
  );
}

export default About;
