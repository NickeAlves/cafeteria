import "./../styles/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const TermsPage = () => {
  return (
    <>
      <Header />
      <ScrollToTopButton />
      <div className="min-h-screen p-8 bg-[var(--hover-brown-color)]">
        <div className="max-w-4xl text-[var(--background)] mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">Terms of Use</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-lg mb-4">
              Welcome to our website. By accessing and using this website, you
              agree to comply with and be bound by the following terms and
              conditions. If you do not agree with these terms, please do not
              use this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Use of the Website</h2>
            <p className="text-lg mb-4">
              You may use this website for lawful purposes only. You are
              prohibited from:
            </p>
            <ul className="list-disc list-inside text-lg mb-4">
              <li>
                Using the website in any way that violates applicable laws or
                regulations.
              </li>
              <li>
                Reproducing, duplicating, or selling any part of the website
                without permission.
              </li>
              <li>
                Engaging in any activity that disrupts or interferes with the
                websites functionality.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Intellectual Property
            </h2>
            <p className="text-lg mb-4">
              All content on this website, including text, graphics, logos, and
              images, is the property of Nicolas Alves and is protected by
              international copyright laws. You may not use, reproduce, or
              distribute any content without prior written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Limitation of Liability
            </h2>
            <p className="text-lg mb-4">
              This website is provided as is without any warranties, express or
              implied. Nicolas Alves shall not be liable for any damages arising
              from the use of this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="text-lg mb-4">
              We reserve the right to modify these terms at any time. By
              continuing to use the website after changes are made, you agree to
              be bound by the revised terms.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsPage;
