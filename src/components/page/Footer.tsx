import { FaGithub } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const GitHubButton = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.set(buttonRef.current, { y: 150, opacity: 0 });

      gsap.to(buttonRef.current, {
        y: -50,
        opacity: 0.4,
        duration: 0.3, // mais rápido
        ease: "power3.in",
        scrollTrigger: {
          trigger: "#footer",
          start: "30% 60%",
          end: "10% 60%",
          toggleActions: "play none reverse reset",
          scroller: "#root",
        },
      });
    });

    return () => {
      ctx.clear();
    };
  }, []);

  return (
    <a
      target="_blank"
      ref={buttonRef}
      rel="noopener noreferrer"
      href="https://github.com/Jimmy-DSA/Visionary#"
      className="github-button hover:cursor-pointer hover:!opacity-100 flex flex-row items-center justify-center"
    >
      <FaGithub />
      <span>Ver no GitHub</span>
    </a>
  );
};

const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex py-10 px-6 text-center mb-5 h-[calc(100vh-136px)]"
    >
      <div className="max-w-6xl mx-auto mt-auto">
        <GitHubButton />
        <h3 className="text-xl font-semibold mb-4">Siga-nos</h3>

        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-gray-400 hover:text-black">
            Facebook
          </a>
          <a href="#" className="text-gray-400 hover:text-black">
            Instagram
          </a>
          <a href="#" className="text-gray-400 hover:text-black">
            Twitter
          </a>
        </div>
        <p className="text-gray-500">© 2025 Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
