import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import PartnerSection from './Partner';
export default function FooterContainer() {

  let items = [
    {
      logo: 'https://openpecha.org/logo.png',
      link: 'https://openpecha.org/',
    },
    {
      logo: AiFillTwitterCircle,
      link: 'https://twitter.com/OpenPecha',
    },
    {
      logo: AiFillGithub,
      link: 'https://github.com/OpenPecha',
    },
  ];

  return (
    <footer className="absolute bottom-0 w-full bg-white dark:bg-gray-900">
      <PartnerSection />

      <div className="mx-auto w-full ">
        <div className="bg-gray-100 px-4 py-6 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2023 <a href="https://flowbite.com/">Lopenling™</a>. All Rights Reserved.
          </span>
          <div className="mt-4 flex space-x-6 sm:justify-center md:mt-0">
            {items.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.link}
                  className="text-gray-400 hover:text-blue-300 dark:hover:text-white"
                  target="_blank"
                >
                  {typeof item.logo === 'string' ? (
                    <img src={item.logo} className="h-4 w-4" alt="openpecha" />
                  ) : (
                    <item.logo />
                  )}
                  <span className="sr-only">page links</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
