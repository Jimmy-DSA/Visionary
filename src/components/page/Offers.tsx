import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RayBan from "../../assets/rayban.webp";

gsap.registerPlugin(ScrollTrigger);

const offers = [
  {
    title: "Óculos RayBan",
    description:
      "Design clássico, proteção UV completa e lentes polarizadas para máximo conforto visual.",
    price: "R$ 499,90",
    image: RayBan,
  },
];

const Offers = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stripeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({});

    tl.fromTo(
      stripeRef.current,
      { width: "0%" },
      {
        width: "100%",
        ease: "power4.in",
        duration: 0.3,
        scrollTrigger: {
          trigger: stripeRef.current,
          start: "20px bottom",
          end: "top center",
          scrub: true,
          scroller: "#root",
        },
      }
    ).fromTo(
      containerRef?.current!.children,
      { opacity: 0.4, x: -700 },
      {
        opacity: 1,
        x: 0,
        ease: "power4.in",
        duration: 0.3,
        scrollTrigger: {
          trigger: stripeRef.current,
          start: "-60px bottom",
          end: "top center",
          scrub: true,
          scroller: "#root",
        },
      },
      0
    );
  }, []);

  return (
    <section
      id="offers-section"
      className="relative h-[calc(100vh-64px)] flex justify-center px-6"
    >
      <div
        ref={stripeRef}
        className="absolute inset-0 bg-black h-1/3 w-full top-28 transform -skew-y-3"
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto text-black text-center">
        <h2 className="text-4xl font-bold mb-6">Oferta do Dia</h2>

        <div ref={containerRef}>
          {offers.map((offer, index) => (
            <div
              key={index}
              style={{ borderWidth: 1, borderColor: "black" }}
              className="relative opacity-100 flex-shrink-0 w-80 bg-white text-black rounded-xl shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-2xl font-semibold">{offer.title}</h3>
                <p className="text-gray-600">{offer.description}</p>
                <p className="text-lg font-bold mt-2">{offer.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
