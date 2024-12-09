import { socialLinks } from "../data";
import heroImage from "../assets/hero2.svg";

const Hero = () => {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-16">
        <article>
          <h1 className="text-7xl md:text-6xl font-bold tracking-wider">
            Goran Temeljkovitch
          </h1>

          <p className="mt-4 text-3xl text-sky-800 capitalize tracking-wide">
            Desenvolvedor MERN Stack
          </p>
          <p className="mt-2 text-lg text-sky-600  tracking-wide">
            Transformando ideias e conceitos em aplicações práticas.
          </p>
          <ul className="flex gap-x-8 mt-8">
            {socialLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a
                    className="text-slate-600 hover:text-sky-500 duration-300"
                    href={link.href}
                  >
                    {link.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </article>
        <article className="mx-auto flex items-center justify-center">
          <div className="hidden md:block border-sky-400 border-[16px] w-[25rem] h-[25rem] rounded-full absolute lg:w-[30rem] lg:h-[30rem]"></div>
          <div className="hidden md:block border-sky-600 border-[16px] w-[23rem] h-[23rem] rounded-full absolute lg:w-[32rem] lg:h-[32rem]"></div>
          <img
            className="hidden h-80 md:block lg:h-96 "
            src={heroImage}
            alt="portfolio image"
          />
        </article>
      </div>
    </section>
  );
};

export default Hero;
