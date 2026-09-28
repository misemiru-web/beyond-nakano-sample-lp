import { Access } from "@/components/Access/Access";
import { Blog } from "@/components/Blog/Blog";
import { CustomerVoice } from "@/components/CustomerVoice/CustomerVoice";
import { Facility } from "@/components/Facility/Facility";
import { Faq } from "@/components/Faq/Faq";
import { FinalCta } from "@/components/FinalCta/FinalCta";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { ProofStrip } from "@/components/ProofStrip/ProofStrip";
import { Price } from "@/components/Price/Price";
import { Reasons } from "@/components/Reasons/Reasons";
import { Results } from "@/components/Results/Results";
import { Stores } from "@/components/Stores/Stores";
import { Trainers } from "@/components/Trainers/Trainers";
import { TrainingFood } from "@/components/TrainingFood/TrainingFood";
import { TrialFlow } from "@/components/TrialFlow/TrialFlow";
import { Trust } from "@/components/Trust/Trust";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProofStrip />
        <Reasons />
        <Trainers />
        <TrainingFood />
        <Facility />
        <Results />
        <CustomerVoice />
        <Trust />
        <Stores />
        <TrialFlow />
        <Price />
        <Access />
        <Faq />
        <Blog />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
