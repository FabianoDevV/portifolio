import "./CardProject.css";
import Image from "next/image";
import { projects } from "@/data/inforCards/page";
import { languageIcons } from "@/data/iconsProject/page";

export default function CardProject() {
  return projects.map((project) => {
    const { id, img, title, about, description, languages, repo } = project;
    return (
      <div key={id} className="project">
        <div>
          <Image src={img} alt={title} width={300} height={200} />
        </div>

        <div>
          <div className="about">
            <span>{about}</span>
          </div>
          <div className="infor-project">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div className="linguagem-project">
            {languages.map((lingua, index) => {
              const Icon = languageIcons[lingua];
              const title =
                lingua === "REACT"
                  ? "React"
                  : lingua === "NEXT"
                  ? "Next.js"
                  : lingua;
              return Icon ? (
                <span key={index}>
                  <Icon title={title} />
                  {lingua}
                </span>
              ) : null;
            })}
          </div>
          <div className="btn-project">
            <a href={"https://" + repo} target="_blank">
              <button>Acessar projeto</button>
            </a>
          </div>
        </div>
      </div>
    );
  });
}
