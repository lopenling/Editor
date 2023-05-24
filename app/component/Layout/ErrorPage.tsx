import { Link } from "@remix-run/react";

type error = { message: string };
export default function ErrorPage({ message }: error) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p className="text-gray-700 mb-4">{message}</p>
      <a
        href="/"
        style={{ textDecoration: "none", marginLeft: 10 }}
        className=" bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 no-underline"
      >
        [Home page]
      </a>
      <img
        src="https://st.depositphotos.com/1006899/2650/i/600/depositphotos_26505551-stock-photo-error-metaphor.jpg"
        alt="errorMessage"
      />
    </div>
  );
}
