import { Footer } from "flowbite-react";
import indrajalaLogo from "~/assets/indrajalaLogo.png";

export default function FooterContainer() {
  return (
    <>
      <div
        style={{ height: 198, fontFamily: "Inter" }}
        className=" text-3xl capitalize font-extrabold items-center justify-center flex "
      >
        our partners
      </div>
      <div
        style={{ height: 350 }}
        className="inline-flex w-full items-center justify-center bg-green-700"
      >
        <img
          src={indrajalaLogo}
          alt={"indrajala"}
          style={{ maxWidth: 387, maxHeight: 136 }}
        />
      </div>

      <Footer>
        <div className="w-full container m-auto">
          <div className="grid w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
            <div>
              <Footer.Title title="Lopenling" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">About</Footer.Link>
                <Footer.Link href="#">Careers</Footer.Link>
                <Footer.Link href="#">Brand Center</Footer.Link>
                <Footer.Link href="#">Blog</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="help center" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Discord Server</Footer.Link>
                <Footer.Link href="#">Twitter</Footer.Link>
                <Footer.Link href="#">Facebook</Footer.Link>
                <Footer.Link href="#">Contact Us</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Partners" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Licensing</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="download" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">iOS</Footer.Link>
                <Footer.Link href="#">Android</Footer.Link>
                <Footer.Link href="#">Windows</Footer.Link>
                <Footer.Link href="#">MacOS</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          <div className="w-full py-6 px-4 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              by=" Lopenling. All rights reserved."
              year={2022}
            />
            <div className="mt-4 flex space-x-6 items-center sm:mt-0 sm:justify-center">
              <svg
                width="8"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" cursor-pointer"
              >
                <path
                  d="M9.03516 10.125L9.52734 6.89062H6.39844V4.78125C6.39844 3.86719 6.82031 3.02344 8.22656 3.02344H9.66797V0.246094C9.66797 0.246094 8.36719 0 7.13672 0C4.57031 0 2.88281 1.58203 2.88281 4.39453V6.89062H0V10.125H2.88281V18H6.39844V10.125H9.03516Z"
                  fill="#6B7280"
                  className="hover:fill-blue-800"
                />
              </svg>
              <svg
                width="20"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" cursor-pointer"
              >
                <path
                  d="M19.1367 8.62109C19.8398 8.09375 20.4727 7.46094 20.9648 6.72266C20.332 7.00391 19.5938 7.21484 18.8555 7.28516C19.6289 6.82812 20.1914 6.125 20.4727 5.24609C19.7695 5.66797 18.9609 5.98438 18.1523 6.16016C17.4492 5.42188 16.5 5 15.4453 5C13.4062 5 11.7539 6.65234 11.7539 8.69141C11.7539 8.97266 11.7891 9.25391 11.8594 9.53516C8.80078 9.35938 6.05859 7.88281 4.23047 5.66797C3.91406 6.19531 3.73828 6.82812 3.73828 7.53125C3.73828 8.79688 4.37109 9.92188 5.39062 10.5898C4.79297 10.5547 4.19531 10.4141 3.70312 10.1328V10.168C3.70312 11.9609 4.96875 13.4375 6.65625 13.7891C6.375 13.8594 6.02344 13.9297 5.70703 13.9297C5.46094 13.9297 5.25 13.8945 5.00391 13.8594C5.46094 15.3359 6.83203 16.3906 8.44922 16.4258C7.18359 17.4102 5.60156 18.0078 3.87891 18.0078C3.5625 18.0078 3.28125 17.9727 3 17.9375C4.61719 18.9922 6.55078 19.5898 8.66016 19.5898C15.4453 19.5898 19.1367 14 19.1367 9.11328C19.1367 8.9375 19.1367 8.79688 19.1367 8.62109Z"
                  fill="#6B7280"
                  className="hover:fill-blue-400"
                />
              </svg>
              <svg
                width="20"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" cursor-pointer"
              >
                <path
                  d="M8.80078 16.7109C8.80078 16.6406 8.73047 16.5703 8.625 16.5703C8.51953 16.5703 8.44922 16.6406 8.44922 16.7109C8.44922 16.7812 8.51953 16.8516 8.625 16.8164C8.73047 16.8164 8.80078 16.7812 8.80078 16.7109ZM7.71094 16.5352C7.71094 16.6055 7.78125 16.7109 7.88672 16.7109C7.95703 16.7461 8.0625 16.7109 8.09766 16.6406C8.09766 16.5703 8.0625 16.5 7.95703 16.4648C7.85156 16.4297 7.74609 16.4648 7.71094 16.5352ZM9.29297 16.5C9.1875 16.5 9.11719 16.5703 9.11719 16.6758C9.11719 16.7461 9.22266 16.7812 9.32812 16.7461C9.43359 16.7109 9.50391 16.6758 9.46875 16.6055C9.46875 16.5352 9.36328 16.4648 9.29297 16.5ZM11.5781 3C6.72656 3 3 6.72656 3 11.5781C3 15.4805 5.42578 18.8203 8.94141 20.0156C9.39844 20.0859 9.53906 19.8047 9.53906 19.5938C9.53906 19.3477 9.53906 18.1523 9.53906 17.4141C9.53906 17.4141 7.07812 17.9414 6.55078 16.3594C6.55078 16.3594 6.16406 15.3398 5.60156 15.0938C5.60156 15.0938 4.79297 14.5312 5.63672 14.5312C5.63672 14.5312 6.51562 14.6016 7.00781 15.4453C7.78125 16.8164 9.04688 16.4297 9.57422 16.1836C9.64453 15.6211 9.85547 15.2344 10.1367 14.9883C8.16797 14.7773 6.16406 14.4961 6.16406 11.1211C6.16406 10.1367 6.44531 9.67969 7.00781 9.04688C6.90234 8.80078 6.62109 7.88672 7.11328 6.65625C7.81641 6.44531 9.53906 7.60547 9.53906 7.60547C10.2422 7.39453 10.9805 7.32422 11.7188 7.32422C12.4922 7.32422 13.2305 7.39453 13.9336 7.60547C13.9336 7.60547 15.6211 6.41016 16.3594 6.65625C16.8516 7.88672 16.5352 8.80078 16.4648 9.04688C17.0273 9.67969 17.3789 10.1367 17.3789 11.1211C17.3789 14.4961 15.3047 14.7773 13.3359 14.9883C13.6523 15.2695 13.9336 15.7969 13.9336 16.6406C13.9336 17.8008 13.8984 19.2773 13.8984 19.5586C13.8984 19.8047 14.0742 20.0859 14.5312 19.9805C18.0469 18.8203 20.4375 15.4805 20.4375 11.5781C20.4375 6.72656 16.4648 3 11.5781 3ZM6.41016 15.1289C6.33984 15.1641 6.375 15.2695 6.41016 15.3398C6.48047 15.375 6.55078 15.4102 6.62109 15.375C6.65625 15.3398 6.65625 15.2344 6.58594 15.1641C6.51562 15.1289 6.44531 15.0938 6.41016 15.1289ZM6.02344 14.8477C5.98828 14.918 6.02344 14.9531 6.09375 14.9883C6.16406 15.0234 6.23438 15.0234 6.26953 14.9531C6.26953 14.918 6.23438 14.8828 6.16406 14.8477C6.09375 14.8125 6.05859 14.8125 6.02344 14.8477ZM7.14844 16.1133C7.11328 16.1484 7.11328 16.2539 7.21875 16.3242C7.28906 16.3945 7.39453 16.4297 7.42969 16.3594C7.46484 16.3242 7.46484 16.2188 7.39453 16.1484C7.32422 16.0781 7.21875 16.043 7.14844 16.1133ZM6.76172 15.5859C6.69141 15.6211 6.69141 15.7266 6.76172 15.7969C6.83203 15.8672 6.90234 15.9023 6.97266 15.8672C7.00781 15.832 7.00781 15.7266 6.97266 15.6562C6.90234 15.5859 6.83203 15.5508 6.76172 15.5859Z"
                  fill="#6B7280"
                  className="hover:fill-gray-500"
                />
              </svg>
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
}
