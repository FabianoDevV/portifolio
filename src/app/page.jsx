import "./page.css";
import Btn from "@/components/Btn/page";
import { FaBullseye, FaChartLine } from "react-icons/fa";
import InforSection from "@/components/InforSection/page";
import Cards from "@/components/Cards/page";
import CardProject from "@/components/CardProject/page";

export default function Home() {
  const btnColor = {
    backgroundColor: "rgb(53 68 96 / 80%)",
  };
  return (
    <main>
      <section className="hero">
        <div className="section-hero">
          <div className="infor-hero">
            <div className="fucos-ti">
              <p>
                <span> &lt; &gt; </span>Front-end focado em conversão
              </p>
            </div>

            <div className="intro-hero">
              <h1>
                Criação de Landing Pages <span>que geram clientes</span>
              </h1>
              <p>
                Desenvolvedor especializado em criar sites modernos, responsivos
                e focados em conversão para advogados, dentistas e negócios
                locais.
              </p>
            </div>
            <div className="btns-hero">
              <Btn text="Solicitar orçamento" />
              <Btn color={btnColor} text="Ver projetos" id="BtnHero" />
            </div>

            <div className="valid-hero">
              <div className="section-valid">
                <span className="statistic-hero">50+</span>
                <span className="descri-statist">Projetos entregues</span>
              </div>
              <div className="section-valid">
                <span className="statistic-hero">98%</span>
                <span className="descri-statist">Clientes satisfeitos</span>
              </div>
              <div className="section-valid">
                <span className="statistic-hero">3 anos</span>
                <span className="descri-statist">De experiência</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="solution">
        <div className="content-solution">
          <div className="inforSect">
            <h2>
              Sites que{" "}
              <span className="emphasis-text">
                convertem visitantes em clientes
              </span>
            </h2>
          </div>

          <div className="CardSection">
            <div className="card-foco-area">
              <span className="svg-area">
                <FaBullseye />
              </span>
              <h3>O problema que resolvo</h3>
              <p>
                Muitos profissionais liberais e negócios locais perdem clientes
                porque seus sites não transmitem profissionalismo ou não
                facilitam o contato. Eu crio landing pages que destacam seus
                serviços e transformam visitantes em leads qualificados.
              </p>
            </div>

            <div className="card-foco-area">
              <span className="svg-area1">
                <FaChartLine />
              </span>
              <h3>Meu diferencial</h3>
              <p>
                Não basta ter um site bonito. Cada elemento é pensado
                estrategicamente para gerar ação: botões de WhatsApp em
                destaque, formulários simples, design responsivo e carregamento
                rápido. Tudo para maximizar suas conversões.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service">
        <InforSection
          title="Serviços especializados"
          descript="Desenvolvimento front-end focado em resultados para o seu negócio"
        />

        <div className="card-service">
          <Cards />
        </div>
      </section>

      <section className="section-projects">
        <InforSection
          title="Projetos desenvolvidos"
          descript="Veja alguns dos sites que criei e os resultados alcançados"
        />

        <div className="projects">
          <CardProject />
        </div>
      </section>
    </main>
  );
}
