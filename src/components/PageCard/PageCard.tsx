import React from "react";
import Image from "next/image";

interface AnalysisProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  points: string[];
  footerText: string;
}

export const PageCard: React.FC<AnalysisProps> = ({
  imageUrl,
  imageAlt,
  title,
  description,
  points,
  footerText,
}) => {
  return (
    <>
      <hr className="my-5" />
      <div className="analysis">
        <div className="md:flex gap-4 items-center">
          <Image
            src={imageUrl}
            className="w-56 h-64"
            width={300}
            height={400}
            alt={imageAlt}
          />
          <div className="analysis-description">
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-sm mb-2">{description}</p>
            <ul className="text-sm [&>li]:mb-1">
              {points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <p className="text-sm text-opacity-80">{footerText}</p>
          </div>
        </div>
      </div>
    </>
  );
};
