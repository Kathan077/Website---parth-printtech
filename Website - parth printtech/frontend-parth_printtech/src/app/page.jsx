import Navbar from "@/components/Navbar/Navbar";
import VideoSlider from "@/components/Home/VideoSlider/VideoSlider";
import WhoWeAre from "@/components/Home/WhoWeAre/WhoWeAre";
import MarketsWeServe from "@/components/Home/MarketsWeServe/MarketsWeServe";
import Products from "@/components/Home/Products/Products";
import Clients from "@/components/Home/Clients/Clients";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import OurValues from "@/components/Home/OurValues/OurValues";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <VideoSlider />
      <WhoWeAre />
      <MarketsWeServe />
      <Products />
      <Clients />
      <Testimonials />
      <OurValues />
      <Footer />
    </div>
  );
}
export const metadata = {
  title: "Parth Printing Technology | Packaging & Offset Print",
  description: "High-precision commercial offset printing, custom mono cartons, corrugated packaging boxes, and rigid visual retail materials.",
};
