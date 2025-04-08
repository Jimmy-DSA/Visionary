import { memo, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import useScreenType from "../../useScreenSize";

const TopSection = () => {
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const size = useScreenType();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(textRef.current, {
        x: -200,
        opacity: 0,
        duration: 1.8,
        ease: "power1.inOut",
      });

      tl.from(
        "#subtitle",
        {
          x: -200,
          opacity: 0,
          duration: 2,
          ease: "back.out",
        },
        "-=0.5"
      );

      tl.from(
        buttonRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      );

      tl.to(textRef.current, { opacity: 1, duration: 0.2 });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="h-[calc(100vh-64px)] flex flex-col px-6 py-5 
    z-10 relative"
    >
      <h1
        ref={textRef}
        className={`shiny-text ${
          size.screenSize === "mobile" ? "text-4xl" : "text-5xl"
        }  md:text-6xl font-semibold text-gray-900 tracking-tight`}
      >
        Veja o Mundo <br /> Com Clareza
      </h1>
      <h2
        style={{
          fontSize: size.screenSize === "mobile" ? "1.75rem" : "2.25rem",
          lineHeight: size.screenSize === "mobile" ? "1.55rem" : "2rem",
        }}
        id={"subtitle"}
        className=" mt-2 pl-8 shiny-gray-text font-light"
      >
        Em todos <br /> detalhes
      </h2>

      <button
        ref={buttonRef}
        style={{ opacity: 1, marginTop: "auto", marginBottom: 80 }}
        className="px-6 py-3 text-lg font-bold border text-black bg-slate-200 rounded-full hover:bg-black hover:text-white"
      >
        Descubra Agora
      </button>
    </section>
  );
};

export default memo(TopSection);
