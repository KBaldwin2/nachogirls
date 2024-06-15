import Container from "./container";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex justify-between items-center">
          <Image
            src="/assets/branding/main-logo.png"
            width={200}
            height={200}
            alt="Logo"
          />
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://aeriumanalytics.com/contact-us/"
              className="mx-3 bg-secondary hover:bg-white hover:text-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Contact for Demo
            </a>
            <a
              href="https://aeriumanalytics.com/"
              className="mx-3 font-bold hover:underline"
            >
              View Website
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
