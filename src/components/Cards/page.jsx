import { servicesCards } from "@/data/inforCards/page";
import "./Cards.css";

export default function Cards() {
  return servicesCards.map((card) => {
    const { id, icon: Icon, title, description } = card;
    return (
      <div className="card" key={id}>
        <span>
          <Icon />
        </span>

        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  });
}
