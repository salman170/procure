import { useState } from "react";

function Accordion() {
  const items = [
    {
      title: "01. How does ProcureN work??",
      content:
        "ProcureN manages the entire supply needs of a construction contractor from developing detailed bill of materials to ordering to delivery at site.",
    },
    {
      title: "02. What is logistics?",
      content: `Logistics Management is that part of Supply Chain Management that plans, implements, and controls the efficient, effective forward and reverse flow and storage of goods, services and related information between the point of origin and the point of consumption in order to meet customers' requirements.`,
    },
    {
      title: "03. What is Supply Chain Management?",
      content:
        "Supply Chain Management encompasses the planning and management of all activities involved in sourcing and procurement, conversion, and all logistics management activities. Importantly, it also includes coordination and collaboration with channel partners, which can be suppliers, intermediaries, third party service providers, and customers.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="divide-y divide-gray-200 bg-purple-50 rounded-xl">
      {items.map((item, index) => (
        <div key={index} className="py-4 px-4">
          <div
            className="flex items-center justify-between cursor-pointer  bg-gray-200 rounded-xl p-2"
            onClick={() => handleItemClick(index)}
          >
            <h2 className="text-lg font-medium m-2">{item.title}</h2>
            <svg
              className={`w-5 h-5 ${
                activeIndex === index ? "transform rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.293 6.293a1 1 0 0 1 1.414 0L10 8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
              />
            </svg>
          </div>
          {activeIndex === index && (
            <div className="mt-4">
              <p className="">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
