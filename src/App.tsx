/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import "./App.css";
import CanvasContainer from "./components/CanvasContainer";
import TopSection from "./components/page/TopSection";
import Offers from "./components/page/Offers";
import About from "./components/page/About";
import Header from "./components/page/Header";
import { useCanvasPosition } from "./context/CanvasPositionContext";
import Lenis from "lenis";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import Footer from "./components/page/Footer";

function App() {
  const { position } = useCanvasPosition();

  useEffect(() => {
    const rootElement = document.getElementById("root");

    const lenis = new Lenis({
      wrapper: rootElement!,
      duration: 3,
      lerp: 0.1,
      smoothWheel: true,
      syncTouchLerp: 0.5,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      infinite: false,
      touchMultiplier: 1.3,
      orientation: "vertical",
      gestureOrientation: "vertical",
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Header />
      <TopSection />
      <Offers />
      <About />
      <div className="canvas-container" data-position={position}>
        <CanvasContainer />
      </div>
      <Footer />
    </>
  );
}

export default App;
