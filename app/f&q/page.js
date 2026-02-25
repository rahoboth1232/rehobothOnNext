import PageWrapper from "../components/PageWrapper";
import Faq from "../components/FAQ";


export const metadata = {
  title: "FAQs | Rehoboth Digitech Solution",
  description:
    "Find answers to frequently asked questions about our digital marketing, SEO, and web development services.",
  alternates: {
    canonical: "https://www.rehobothdigitechsolution.com/faq",
  },
};

const servicesFaq = [
{
    q: "How long does a typical project take?",
    a: "Most web development projects take 2–6 weeks, depending on complexity. Simple landing pages can be delivered in 1-2 weeks, while complex web applications may take 8-12 weeks. We provide a detailed timeline during our initial consultation."
  },
  {
    q: "Do you offer ongoing maintenance and support?",
    a: "Yes. We provide comprehensive monthly maintenance plans including security updates, performance monitoring, content updates, and technical support. Our 24/7 monitoring ensures your site stays secure and performs optimally."
  },
  {
    q: "Can you work with our existing systems and platforms?",
    a: "Absolutely. We specialize in integrating with existing systems, migrating legacy platforms, and improving current solutions. Whether you need a redesign, new features, or performance optimization, we can help."
  },
  {
    q: "What's included in your SEO and digital marketing services?",
    a: "Our digital marketing services include comprehensive SEO audits, keyword research, on-page optimization, content strategy, link building, PPC campaign management, social media marketing, and detailed analytics reporting."
  },
  {
    q: "Do you provide training for our team?",
    a: "Yes, we provide comprehensive training sessions for your team to manage and update your new system. We also provide detailed documentation and ongoing support to ensure smooth operations."
  },
  {
    q: "What are your payment terms?",
    a: "We typically work with a 50% upfront payment to begin work, and 50% upon project completion. For larger projects, we can structure milestone-based payments. We accept bank transfers, credit cards, and mobile payments."
  }
];


export default function FaqPage() {
  return (
    <PageWrapper offset={true}>
      <Faq faq={servicesFaq} />
    </PageWrapper>
  );
}
