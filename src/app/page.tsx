import Link from "next/link";
import Navbar from "./components/ui/navbar";
import Feature from "./components/ui/feature";
import Support from "./components/ui/supportPage";
import Title from "./components/ui/title";
import Promo from "./components/ui/promo";
import Footer from "./components/ui/footer";
import SEO from "./components/ui/seo";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <Title />

      <Feature />

      <Promo />

      <Support />
      <SEO />
      <Footer />
    </>
  );
}
1;
