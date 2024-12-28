import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loading = () => {
  return (
    <section>
      <h2 className="loading">Loading contents...</h2>
      <div className="lottie-gif">
        <DotLottieReact
          src="https://lottie.host/a2174cc3-398a-4a89-a109-44f83698dc6c/wfonPPPWwq.json"
          loop
          autoplay
        />
      </div>
    </section>
  );
};

export default Loading;
