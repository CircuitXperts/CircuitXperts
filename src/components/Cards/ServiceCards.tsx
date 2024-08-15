export const Card = (props: any) => {
  return (
    <div className="flex w-96 mb-3 border !border-transparent rounded-lg p-3 transition-all duration-300 ease-in-out hover:!border-black flex-col gap-1">
      <div className="flex items-center">
        <img src={props.image} className="w-16" alt="image" />
        <div className="text-lg font-semibold pl-6">{props.name}</div>
      </div>
      <div className="text-sm text-justify text-gray-600">{props.desc}</div>
      <a
        href={props.link}
        className="text-sm hover:no-underline text-black font-semibold"
      >
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
    <div className="flex my-5 justify-around flex-wrap gap-3">
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
  );
};
