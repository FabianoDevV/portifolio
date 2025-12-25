// app/page.jsx
import "./page.css";
import Btn from "@/components/Btn/page";
import InforSection from "@/components/InforSection/page";
import Cards from "@/components/Cards/page";
import CardProject from "@/components/CardProject/page";
import CardChoose from "@/components/CardChoose/page";
import Orcament from "@/components/orcamentSection/page";
import Depoiment from "@/components/Depoiment/page";
import Stack from "@/components/Stack/page";

// ✅ Metadata para SEO
export const metadata = {
  title:
    "Desenvolvimento Front-End e Criação de Sites Profissionais | Fabiano Soares",
  description:
    "Especialista em desenvolvimento front-end e criação de sites modernos para advogados, profissionais liberais e empresas, com foco em credibilidade, captação de clientes e presença online de alta qualidade.",
};

export default function Home() {
  const btnColor = {
    backgroundColor: "rgb(53 68 96 / 80%)",
  };

  return (
    <main>
      {/* Hero Section */}
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

      {/* About Section */}
      <section className="about">
        <div className="content-about">
          <div className="inforSect">
            <p>Sobre mim</p>
          </div>

          <div className="about-content">
            <div className="stack-about">
              <div className="title-stack">
                <h3>Tecnologias que Domino</h3>
              </div>
              <div className="stack">
                <Stack />
              </div>
            </div>

            <div className="about-me">
              <h2>
                Desenvolvedor focado em{" "}
                <span className="emphasis-text">resultados reais</span>
              </h2>
              <p>
                Atuo como desenvolvedor front-end na criação de{" "}
                <span className="destaq-text">
                  landing pages e sites institucionais
                </span>{" "}
                com foco em usabilidade, performance e conversão.
              </p>
              <p>
                Desenvolvo interfaces{" "}
                <span className="destaq-text">
                  eficientes, responsivas e orientadas à experiência do usuário
                </span>
                , transformando visitas em resultados concretos.
              </p>
              <span className="obs-about">
                <em>
                  &ldquo;Cada projeto é desenvolvido pensando em três pilares:{" "}
                  <span className="destaq-text">
                    design profissional, velocidade de carregamento e facilidade
                    de contato
                  </span>{" "}
                  para seus clientes.&rdquo;
                </em>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="service">
        <InforSection
          title="Serviços especializados"
          descript="Desenvolvimento front-end focado em resultados para o seu negócio"
        />
        <div className="card-service">
          <Cards />
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-projects">
        <InforSection
          title="Projetos desenvolvidos"
          descript="Veja alguns dos sites que criei e os resultados alcançados"
        />
        <div className="projects">
          <CardProject />
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="choose">
        <div className="escolher">
          <InforSection
            title="Por que me escolher?"
            descript="Trabalho focado em entregar valor e resultados concretos para o seu negócio"
          />
          <div className="cardChoose">
            <CardChoose />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <article>
        <InforSection
          title="O que dizem meus clientes"
          descript="Depoimentos reais de profissionais que aumentaram suas vendas"
        />
        <div className="depoiments">
          <Depoiment />
        </div>
      </article>

      {/* Contact/Orcament Section */}
      <section className="section-orcament">
        <Orcament />
      </section>

      {/* Footer */}
      <footer>
        © 2025 Fabiano Soares - Developer. Todos os direitos reservados.
      </footer>
    </main>
  );
}
