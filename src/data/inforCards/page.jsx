import { FaCode, FaPalette, FaMobileAlt, FaWhatsapp } from "react-icons/fa";
import advImg from "@/assets/imgProject/adv.png";
import lanchoneteImg from "@/assets/imgProject/lanchonete.png";
import serenoImg from "@/assets/imgProject/Sereno.png";
import cinePrimeImg from "@/assets/imgProject/CinePrime.png";
import blocoImg from "@/assets/imgProject/bloco.png";
import despesasImg from "@/assets/imgProject/despesas.png";
import galeriaImg from "@/assets/imgProject/galeria.png";

import { LuMessageSquare, LuClock, LuTarget, LuTrophy } from "react-icons/lu";

export const servicesCards = [
  {
    id: 1,
    icon: FaCode,
    title: "Landing Pages",
    description:
      "Páginas otimizadas para conversão com foco em captura de leads e vendas. Design moderno e carregamento ultrarrápido.",
  },
  {
    id: 2,
    icon: FaPalette,
    title: "Sites Institucionais",
    description:
      "Sites completos para apresentar sua empresa, serviços e construir autoridade no mercado. Totalmente personalizados.",
  },
  {
    id: 3,
    icon: FaMobileAlt,
    title: "Design Responsivo",
    description:
      "Todos os sites são 100% responsivos, garantindo perfeita visualização em celulares, tablets e desktops.",
  },
  {
    id: 4,
    icon: FaWhatsapp,
    title: "Integração WhatsApp",
    description:
      "Botões estratégicos de WhatsApp e formulários de contato para facilitar a comunicação com seus clientes.",
  },
];

export const projects = [
  {
    id: 1,
    img: advImg,
    title: "Site Institucional de Advocacia",
    about: "Site institucional / Landing page",
    description:
      "Site institucional desenvolvido para escritórios de advocacia, com design moderno, foco em credibilidade, captação de clientes e apresentação clara dos serviços jurídicos.",
    languages: ["REACT", "NEXT", "CSS"],
    repo: "site-advocacia-eight.vercel.app",
  },

  {
    id: 2,
    img: lanchoneteImg,
    title: "Site para Restaurante",
    about: "Landing page comercial",
    description:
      "Landing page para restaurante, destacando cardápio, localização e chamadas estratégicas para conversão de clientes, com layout responsivo e visual atrativo.",
    languages: ["HTML", "CSS", "JavaScript"],
    repo: "lanchonete-hazel-gamma.vercel.app",
  },

  {
    id: 3,
    img: serenoImg,
    title: "Caminho Sereno",
    about: "Site institucional / Projeto social",
    description:
      "Projeto web voltado ao bem-estar emocional, com foco em mensagens positivas, layout limpo e experiência acolhedora para o usuário.",
    languages: ["HTML", "CSS", "JavaScript"],
    repo: "pensamentos-delta.vercel.app",
  },

  {
    id: 4,
    img: cinePrimeImg,
    title: "Catálogo de Filmes",
    about: "Aplicação web com API",
    description:
      "Aplicação front-end que consome a API do TMDB para exibição de filmes, detalhes, avaliações e interface dinâmica, com foco em usabilidade.",
    languages: ["HTML", "CSS", "JavaScript"],
    repo: "cine-prime-mu.vercel.app",
  },

  {
    id: 5,
    img: blocoImg,
    title: "Bloco de Notas",
    about: "Aplicação web",
    description:
      "Bloco de notas online desenvolvido para criação, edição e organização de anotações, com interface simples e funcional.",
    languages: ["HTML", "CSS", "JavaScript"],
    repo: "bloco-de-notas-kappa.vercel.app",
  },

  {
    id: 6,
    img: despesasImg,
    title: "Controle de Despesas",
    about: "Sistema de controle financeiro",
    description:
      "Aplicação web para cadastro, consulta e gerenciamento de despesas pessoais, com filtros por data, tipo, descrição e valor.",
    languages: ["HTML", "JavaScript", "Bootstrap"],
    repo: "app-orcamento-pessoal-phi.vercel.app",
  },

  {
    id: 7,
    img: galeriaImg,
    title: "Gallery Weather Dashboard",
    about: "Aplicação interativa / dashboard",
    description:
      "Dashboard moderno que exibe informações climáticas em tempo real, relógio local e interface visual interativa com foco em UI/UX.",
    languages: ["HTML", "CSS", "JavaScript"],
    repo: "galeria-seven-phi.vercel.app",
  },
];

export const features = [
  {
    icon: <LuMessageSquare size={32} />,
    title: "Comunicação clara",
    description:
      "Você acompanha todo o processo de desenvolvimento. Respostas rápidas e alinhamento constante.",
  },
  {
    icon: <LuClock size={32} />,
    title: "Entrega rápida",
    description:
      "Projetos entregues em até 7 dias. Agilidade sem comprometer a qualidade do trabalho.",
  },
  {
    icon: <LuTarget size={32} />,
    title: "Foco em conversão",
    description:
      "Cada elemento é pensado para converter. Design estratégico que gera resultados reais.",
  },
  {
    icon: <LuTrophy size={32} />,
    title: "Sites que geram resultados",
    description:
      "Não é só design bonito. É tecnologia aplicada para aumentar suas vendas e captar mais clientes.",
  },
];

import { FiCheckCircle } from "react-icons/fi";

export const confianca = [
  {
    icon: <FiCheckCircle />,
    title: "Entrega em até 7 dias úteis",
    subtitle: "Seu projeto pronto rapidamente",
  },
  {
    icon: <FiCheckCircle />,
    title: "Suporte pós-entrega incluído",
    subtitle: "30 dias de ajustes e melhorias",
  },
  {
    icon: <FiCheckCircle />,
    title: "Garantia de satisfação 100%",
    subtitle: "Revisões ilimitadas até aprovar",
  },
];

export const depoiments = [
  {
    quote:
      "O site ficou exatamente como eu precisava. Moderno, profissional e fácil dos clientes entrarem em contato. Já recebi vários casos novos através da landing page.",
    author: "Dr. Ricardo Almeida",
    role: "Advogado Criminalista",
    stars: ["FiStar", "FiStar", "FiStar", "FiStar", "FiStar"],
  },
  {
    quote:
      "Excelente trabalho! O site transmite exatamente a imagem que eu queria para minha clínica. Pacientes sempre elogiam o design e a facilidade de agendamento.",
    author: "Dra. Camila Santos",
    role: "Cirurgiã-dentista",
    stars: ["FiStar", "FiStar", "FiStar", "FiStar", "FiStar"],
  },
  {
    quote:
      "Profissional muito atencioso e rápido. Entregou antes do prazo e me ajudou em todas as dúvidas. O cardápio digital está um sucesso!",
    author: "Fernando Costa",
    role: "Empresário - Restaurante",
    stars: ["FiStar", "FiStar", "FiStar", "FiStar", "FiStar"],
  },
];

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export const frontendStack = [
  {
    id: 1,
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    id: 2,
    name: "CSS3",
    icon: FaCss3Alt,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: FaJs,
  },
  {
    id: 4,
    name: "React",
    icon: FaReact,
  },
  {
    id: 5,
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    id: 6,
    name: "Bootstrap",
    icon: FaBootstrap,
  },
  {
    id: 7,
    name: "Git",
    icon: FaGitAlt,
  },
];
