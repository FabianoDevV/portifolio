import "./depoiment.css";
import { depoiments } from "@/data/inforCards/page";
import { FiStar } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

export default function Depoiment() {
  return (
    <>
      {depoiments.map((depoi, index) => {
        const { quote, author, role } = depoi;
        return (
          <div key={index} className="card-depoiment">
            <div className="icons-depoiment">
              <FaQuoteLeft />
              <span>
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
              </span>
            </div>
            <div>
              <div className="quote">
                <p>{quote}</p>
              </div>
              <div className="author">
                <h3>{author}</h3>
                <p>{role}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
