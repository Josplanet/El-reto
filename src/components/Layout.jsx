import NavBar from "./NavBar";
import Hero from "./Hero";
import Logos from "./Logos";
import Products from "./Products";
import Cta from "./Cta";
import Email from "./Email";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <main className=" max-w-[1440px] ">
      <div className="relative  w-full h-full flex flex-col items-center justify-center">
        <div
          style={{
            backgroundImage: "url('/Hero_Bg.png')",
            backgroundSize: "Cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            width: "1440px",
            height: "760px",
            zIndex: -2,
            top: 0,
            left: 0,
          }}
        />
        <img
          src="/Rectangle.png"
          alt="Rectángulo"
          style={{
            backgroundSize: "Cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            width: "100%",
            height: "500px",
            zIndex: -1,
            top: "600px",
          }}
        />

        <img
          src="/mouse.png"
          alt="Rectángulo"
          style={{
            backgroundSize: "Cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            width: "426px",
            zIndex: 1,
            top: "350px",
            left: "640px",
          }}
        />

        <img
          src="/gradient.png"
          alt="Rectángulo"
          style={{
            backgroundSize: "Cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            width: "426px",
            zIndex: -1,
            top: "350px",
            left: "900px",
          }}
        />

        <img
          src="/card.png"
          alt="Rectángulo"
          style={{
            backgroundSize: "Cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            width: "160px",
            height: "211px",
            zIndex: 1,
            top: "220px",
            left: "1173px",
          }}
        />
        <NavBar />
        <Hero />
        <Logos />
        <Products />
        <Cta />
        <Email />
        <Footer />
        {children}
      </div>
    </main>
  );
};

export default Layout;
