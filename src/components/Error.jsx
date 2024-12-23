import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import React from "react";

const Error = () => {
  return (
    <section>
      <h2 className="loading">Oh no! Something went wrong...</h2>
      <div className="lottie-gif">
        <DotLottieReact
          src="https://lottie.host/c0663d83-27a8-4aa9-9279-84e3445e78a7/z7fWPxOZrY.json"
          loop
          autoplay
        />
      </div>
    </section>
  );
};

export default Error;
