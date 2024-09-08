import React from "react";
import Link from "next/link";

export const PageNotFound = () => {
  return (
    <div className="not-page site-container">
      <h1 className="pb-2 fw-bold h1 text-orange">404 PAGE NOT FOUND</h1>
      <div className="text-desc pt-4 pt-lg-5 text-lg-nowrap">
        The page you are looking for does not exist, or an error occurred. Go
        back, or head over to the{" "}
        <Link className="link-text" href="/">
          Home page
        </Link>{" "}
        to choose a new direction.
      </div>
    </div>
  );
};
