import React from "react";

interface AnalysisProps {
  title: string;
  description: string;
  points: string[];
  footerText: string;
}

export const PageCard: React.FC<AnalysisProps> = ({
  title,
  description,
  points,
  footerText,
}) => {
  return (
    <>
      <hr className="my-5" />
      <div className="analysis">
        <div className="analysis-description">
          <h3
            className="text-sub"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h3>
          <p className="pt-2 pt-lg-3 pb-1">{description}</p>
          <ul className="text-sm [&>li]:mb-1">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <p className="pt-1">{footerText}</p>
        </div>
      </div>
    </>
  );
};
