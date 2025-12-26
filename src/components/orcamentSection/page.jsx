import { LuSparkles } from "react-icons/lu";
import { FiGift, FiZap, FiMessageCircle } from "react-icons/fi";
import { confianca } from "@/data/inforCards/page";
import "./orcament.css";

export default function Orcament() {
  return (
    <div className="benefit-content">
      <div className="benefit">
        <div className="ofert-title">
          <span>
            <LuSparkles />
            Oferta especial
          </span>
        </div>
        <div className="infor-benefit">
          <h2>Transforme seu negócio com um site profissional</h2>
          <p>
            Receba um orçamento personalizado e descubra como posso ajudar seu
            negócio a conquistar mais clientes online.
          </p>
        </div>
        <div className="infor-confianca">
          {confianca.map((confia, index) => {
            const { icon, title, subtitle } = confia;
            return (
              <div key={index} className="card-benefit">
                <span>{icon}</span>
                <div>
                  <h4>{title}</h4>
                  <p>{subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="card-whats">
        <div>
          <div className="infor-whats">
            <span>
              <FiMessageCircle />
            </span>
            <h3>Solicite seu orçamento</h3>
            <p>Gratuito e sem compromisso</p>
          </div>
        </div>
        <div className="actions-whats">
          <a
            href="https://wa.me/5564999056219?text=Vim%20pelo%20seu%20portf%C3%B3lio%2C%20quero%20fazer%20um%20or%C3%A7amento%20ou%20tirar%20d%C3%BAvidas."
            target="_blank"
            className="urlWhats-orcament"
          >
            <button>
              <FiMessageCircle />
              Fala no whatsApp
            </button>
          </a>
          <span>
            <FiZap />
            Resposta em até 1 hora
          </span>
        </div>
        <div className="valid-hero">
          <div className="section-valid">
            <span className="statistic-hero">50+</span>
            <span className="descri-statist">Projetos</span>
          </div>
          <div className="section-valid">
            <span className="statistic-hero">98%</span>
            <span className="descri-statist">Satisfação</span>
          </div>
          <div className="section-valid">
            <span className="statistic-hero">7 dias</span>
            <span className="descri-statist">Entrega</span>
          </div>
        </div>
        <div className="bonus-whats">
          <span>
            <FiGift />
          </span>
          <div>
            <h4>Bônus exclusivo</h4>
            <p>Configuração de Google Analytics gratuita</p>
          </div>
        </div>
      </div>
    </div>
  );
}
