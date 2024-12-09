import about2 from "../assets/about2.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="py-24" id="about">
      <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-16">
        <article className="flex flex-col items-center justify-center relative">
          <div className="border-sky-600 border-8 w-96 absolute bottom-[4rem]"></div>
          <div className="border-sky-400 border-8 w-96 absolute  bottom-[5rem]"></div>
          <img
            className="w-64 h-64 mx-auto z-10"
            src={about2}
            alt="about me image"
          />
        </article>
        <article>
          <SectionTitle title="código e tereré" />
          <p className="text-slate-600 mt-8 leading-loose">
            Formado em Sistemas de Informação na Universidade Federal de Mato
            Grosso do Sul, tenho foco em desenvolvimento web e especialização
            no uso da stack MERN (MongoDB, Express, React e Node.js). Gosto de
            criar aplicações modernas e escaláveis, combinando a flexibilidade
            do backend com a interatividade do frontend. Meu foco está em
            construir projetos que entreguem experiências de usuário fluidas e
            funcionais, sempre buscando boas práticas e soluções eficientes.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
