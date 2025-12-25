import "./CardProject.css";
import Image from "next/image";
import { projects } from "@/data/inforCards/page";

export default function CardProject() {
  return projects.map((project, index) => {
    const { img, title, description, languages, repo } = project;
    return (
      <div key={index} className="project">
        <div>{/* <Image src={img}></Image> */}</div>

        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <div>
            <span>{languages}</span>
          </div>
        </div>
      </div>
    );
  });
}
