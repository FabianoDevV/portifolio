import { features } from "@/data/inforCards/page";
import "./CardChoose.css";

export default function CardChoose() {
  return features.map((card, index) => {
    const { icon, title, description } = card;
    return (
      <div className="card-escolher" key={index}>
        <span>{icon}</span>

        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  });
}
