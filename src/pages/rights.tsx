import "./../styles/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const RightsPage = () => {
  return (
    <>
      <Header />
      <ScrollToTopButton />
      <div className="min-h-screen p-8 bg-[var(--hover-brown-color)]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl text-[var(--background)] font-bold mb-6 text-center">
            Copyright Notice
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--background)]">
              Copyright Information
            </h2>
            <p className="text-lg mb-4 text-[var(--background)]">
              &copy; {new Date().getFullYear()} Nicolas Alves. All rights
              reserved.
            </p>
            <p className="text-lg mb-4 text-[var(--background)]">
              The content, design, and code of this website, including but not
              limited to text, graphics, logos, icons, images, audio clips,
              digital downloads, and software, are the property of Nicolas Alves
              and are protected by international copyright laws.
            </p>
            <p className="text-lg mb-4 text-[var(--background)]">
              Unauthorized use, reproduction, or distribution of any materials
              on this website is strictly prohibited without prior written
              permission from Nicolas Alves.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--background)]">
              Terms of Use
            </h2>
            <p className="text-lg mb-4 text-[var(--background)]">
              By accessing and using this website, you agree to comply with the
              following terms and conditions:
            </p>
            <ul className="list-disc list-inside text-lg mb-4 text-[var(--background)]">
              <li>
                You may not use the content for commercial purposes without
                permission.
              </li>
              <li>
                You may not modify, distribute, or reproduce any content without
                authorization.
              </li>
              <li>
                You may not use this website in any way that causes harm or
                disrupts its functionality.
              </li>
            </ul>
            <p className="text-lg text-[var(--background)]">
              For full details, please refer to our{" "}
              <a
                href="/terms"
                className="text-blue-600 hover:underline hover:text-blue-500"
              >
                Terms of Use
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-[var(--background)] font-semibold mb-4">
              Privacy Policy
            </h2>
            <p className="text-lg mb-4 text-[var(--background)]">
              Your privacy is important to us. This website collects and uses
              personal information in accordance with our{" "}
              <a
                href="/privacy"
                className="text-blue-600 hover:underline hover:text-blue-500"
              >
                Privacy Policy
              </a>
              . By using this website, you consent to the collection and use of
              your information as outlined in the policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[var(--background)]">
              Contact Information
            </h2>
            <p className="text-lg mb-4 text-[var(--background)]">
              If you have any questions or concerns regarding copyright, terms
              of use, or privacy policies, please feel free to contact us:
            </p>
            <ul className="list-disc list-inside text-lg mb-4 text-[var(--background)]">
              <li>Email: nicke.rodrigues1125@hotmail.com</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RightsPage;
