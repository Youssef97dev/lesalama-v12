import Slides from "./components/Slides";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>test</div>}>
      <div className="w-full text-primary text-center mb-20 mt-28 lg:mt-5">
        <Slides />
      </div>
    </Suspense>
  );
};

export default page;
