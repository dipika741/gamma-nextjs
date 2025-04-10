"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      title: "Analytical Instruments",
      img: "/assets/imgs/template/Analytical.png",
      link: "/Analytical-Instruments-UK",
      subMenu: [
        "Accessories",
        "Benchtop Meters",
        "Chemical Test Kits",
        "Electrodes and Probes",
        "Magnetic Stirrers",
        "Photometers",
        "Portable Meters",
        "Refractometers",
        "Reagents",
        "Testers",
        "Thermometers",
        "Titrators",
        "Turbidimeters",
      ],
    },
    {
      title: "Laboratory Equipment",
      img: "/assets/imgs/template/Laboratory.png",
      link: "/Laboratory-Equipment",
      subMenu: [
        "Autoclave Sterilizer",
        "Block Heater",
        "Centrifuge",
        "Chamber",
        "Circulation Bath",
        "Climatic Chamber",
        "Cold Trap Bath",
        "Growth Chamber",
        "Homogenizer",
        "Hotplate Stirrer",
        "Incubator",
        "Laboratory Refrigerator",
        "Muffle Furnace",
        "Orbital Reciprocal Shaker",
        "Oven",
        "Overhead Stirrer",
        "Rocker",
        "Safety Cabinet",
        "Shaking Incubator",
      ],
    },
    {
      title: "Material Testing",
      img: "/assets/imgs/template/material_testing.png",
      link: "/Material-Testing-Equipments",
      subMenu: [
        "Aggregate Rock Testing Equipments",
        "Bitumen And Asphalt Testing Equipments",
        "Cement And Mortar Testing Equipment",
        "Concrete Testing Equipment",
        "Material Testing Accessories",
        "Material Testing Tools",
        "Mould",
        "Steel Testing Equipment",
      ],
    },
    {
      title: "Laboratory Glassware",
      img: "/assets/imgs/template/glassware.png",
      link: "/Laboratory-Glassware",
      subMenu: [
        "Burettes",
        "Crucibles",
        "Disposable Glassware",
        "Glass Dessicators",
        "Glass Dishes",
        "Glass Disposable Culture Tubes",
        "Glass Joints",
        "Glass Measuring Cylinders",
        "Glass Petri Dishes",
        "Glass Pipettes",
        "Glass Reagent Bottles",
        "Glass Tubes",
        "Glassware Flasks",
        "Lab Filtration Assembly",
        "Lab Glassware Brushes",
        "Laboratory Beakers",
        "Laboratory Glass Bottles",
        "Laboratory Glass Columns",
        "Laboratory Glass Condensers",
        "Laboratory Glass Dishes",
        "Laboratory Glassware Adapter",
      ],
    },
    {
      title: "Plasticware",
      img: "/assets/imgs/template/plasticware.png",
      link: "/Laboratory-Plasticware",
      subMenu: ["General Laboratory Equipment", "Laboratory Plasticware"],
    },
  ];

  return (
    <div className={`sidebar-left ${isOpen ? "open" : ""}`}>
      <button className="btn btn-open" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "" : ""}
      </button>

      <ul className={`menu-icons ${isOpen ? "hidden" : "hidden"}`}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a >
              <Image
                src={item.img}
                alt={item.title}
                width={30}
                height={30}
                unoptimized // remove if images are large and located in /public
              />
            </a>
          </li>
        ))}
      </ul>

      <ul className={`menu-texts ${isOpen ? "menu-close" : "menu-close"}`}>
        {menuItems.map((item, index) => (
          <li key={index} className="has-children">
            <a >
              <span className="img-link">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={30}
                  height={30}
                  unoptimized
                />
              </span>
              <span className="text-link">{item.title}</span>
            </a>
            <ul className="sub-menu">
              {item.subMenu.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link href={item.link}>{subItem}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
