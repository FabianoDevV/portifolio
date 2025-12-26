import "./stack.css";
import {
  stackFrontEnd,
  complementaryTech,
  specialties,
} from "@/data/stacks/page";

import { FaStar, FaBolt, FaMobileAlt, FaGlobe } from "react-icons/fa";
import { LuSparkles } from "react-icons/lu";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";

export default function Stack() {
  const icons = {
    FaStar: <FaStar />,
    FaBolt: <FaBolt />,
    FaMobileAlt: <FaMobileAlt />,
    FaGlobe: <FaGlobe />,
  };

  const iconsTec = {
    SiHtml5: <SiHtml5 />,
    SiCss3: <SiCss3 />,
    SiJavascript: <SiJavascript />,
    SiReact: <SiReact />,
    SiNextdotjs: <SiNextdotjs />,
  };
  return (
    <>
      <div>
        <div className="title-stack">
          <h3>
            <FaStar />
            Stack & Especialidade Front-End
          </h3>
        </div>
        <div className="container-stacks-front">
          {stackFrontEnd.map((stack) => {
            const { id, name, icon } = stack;
            const Icon = iconsTec[icon];
            return (
              <div key={id} className="card-stack-front">
                <span>
                  {Icon}
                  {name}
                </span>
              </div>
            );
          })}
        </div>

        <div className="container-tech">
          {complementaryTech.map((tech) => {
            const { id, name, description } = tech;
            return (
              <div key={id} className="tech">
                <h3>{name}</h3>
                <span>
                  {"/ "}
                  {description}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {
        <div className="container-special">
          <div className="title-special">
            <h3>
              <LuSparkles />
              Especialidades
            </h3>
          </div>

          <div className="especilidade">
            {specialties.map((special) => {
              const { id, title, icon } = special;
              const Icon = icons[icon];
              return (
                <div key={id} className="card-special">
                  <span>{Icon}</span>
                  <h4>{title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      }

      {/* {frontendStack.map((tech) => {
        const Icon = tech.icon;
        return (
          <div key={tech.id} className="card-stack">
            <Icon size={32} />
            <span>{tech.name}</span>
          </div>
        );
      })} */}
    </>
  );
}
