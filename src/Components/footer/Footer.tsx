import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlinePersonOutline } from "react-icons/md";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaSquareXTwitter className="w-6 h-6" />,
      url: "https://x.com/shantanu_96k",
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/shantanu-nirpal-056139239/",
    },
    {
      icon: <FaInstagram className="w-6 h-6" />,
      url: "https://www.instagram.com/_shantanu143_/",
    },
  ];

  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <MdOutlinePersonOutline className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" />
          <span className="ml-3 text-xl">Employ Management</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 —
          <a
            href="https://twitter.com/knyttneve"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @shantanunirpal
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {socialLinks.map((data, index) => {
            return (
              <a href={data.url} key={index} className="text-gray-500 px-1">
                {data.icon}
              </a>
            );
          })}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
