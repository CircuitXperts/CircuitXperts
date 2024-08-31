import { CardStyles } from "./style";

export const Card = (props: any) => {
  return (
    <div className="one-cards d-lg-flex">
      <div className="card-content d-flex align-items-center gap-5">
        <img src={props.image} className="w-16 images-icon" alt="image" />
        <div className="head-text">{props.name}</div>
      </div>
      <div className="card-description py-4 fw-semibold pe-lg-2 text-justify">
        {props.desc}
      </div>
      <a href={props.link} className="show-card-link d-flex justify-center">
        Show Details
      </a>
    </div>
  );
};
export const ServiceCards = () => {
  const arr = [
    {
      image: "/images/rfid.jpg",
      name: "Schematic Design",
      desc: "Develops detailed diagrams for electronic circuits, showing component connections and interactions to guide effective design and implementation.",
      link: "/our-service/schematic-design",
    },
    {
      image: "/images/rfid.jpg",
      name: "PCB Solutions",
      desc: "Provides comprehensive services for designing, assembling, and testing printed circuit boards, ensuring reliable and efficient electronic performance.",
      link: "/our-service/pcb-solutions",
    },
    {
      image: "/images/rfid.jpg",
      name: "Programming",
      desc: "Delivers solutions for both hardware and software development. Hardware Programming focuses on configuring and controlling physical devices, while Software Programming involves creating code to run on various platforms and systems.",
      link: "/our-service/programming",
    },
    {
      image: "/images/rfid.jpg",
      name: "Integrity Analysis",
      desc: "Assesses and ensures the stability and performance of signal and power integrity within electronic designs, optimizing reliability and functionality",
      link: "/our-service/integrity-analysis",
    },
    {
      image: "/images/rfid.jpg",
      name: "System Validation",
      desc: " Confirms that a system meets design specifications and requirements through integration, verification, and testing to ensure reliable and correct operation.",
      link: "/our-service/system-validation",
    },
    {
      image: "/images/rfid.jpg",
      name: "Embedded Solutions",
      desc: "Provides comprehensive development and implementation of embedded software, test code, and IP cores, tailored for seamless integration and functionality within electronic systems.",
      link: "/our-service/embedded-solutions",
    },
  ];
  return (
    <CardStyles>
      <div className="d-lg-flex my-4 justify-around flex-wrap gap-3 cards-section">
        {arr.map((data, index) => (
          <Card
            image={data.image}
            name={data.name}
            desc={data.desc}
            link={data.link}
            key={index}
          />
        ))}
      </div>
    </CardStyles>
  );
};
