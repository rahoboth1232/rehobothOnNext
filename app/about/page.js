// app/about/page.js  (Next.js App Router)
// Put AboutPage.jsx in the same folder or components/

import AboutPage from "../AboutPage";



export const metadata = {
  title: "About Rehoboth Digitech Solution | Digital Marketing Agency in Janakpuri",
  description:
    "Learn about Rehoboth Digitech Solution, a trusted digital marketing agency in Janakpuri helping businesses grow online with ethical SEO and result-driven strategies.",
  alternates: {
    canonical: "https://www.rehobothdigitechsolution.com/about",
  },
};

export default function Page() {
  return <AboutPage />;
}