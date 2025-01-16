import AllNewsCards from "./components/AllCategoryNewsCard";
import React, { Suspense } from "react";

const NewsHome: React.FC = () => {
  return (
    <Suspense>
      <AllNewsCards />
    </Suspense>
  );
};

export default NewsHome;
