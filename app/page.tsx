import Navbar from '@/components/Navbar';
import TikTokDownloader from '@/components/TikTokDownloader';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import FAQs from '@/components/FAQs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Each section has an id matching the navbar scroll targets */}
      

      <section id="download" className="min-h-screen">
        <TikTokDownloader /> {/* Or your download section if different */}
      </section>

      <section id="how-it-works" className="min-h-screen">
        <HowItWorks />
      </section>

      <section id="features" className="min-h-screen">
        <Features />
      </section>

      <section id="faqs" className="min-h-screen">
        <FAQs />
      </section>

      <section id="get-started" className="">
        {/* Your get started content or keep the footer here */}
        <Footer />
      </section>
    </div>
  );
}