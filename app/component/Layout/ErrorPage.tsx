import { Link } from '@remix-run/react';

type error = { message: string };
export default function ErrorPage({ message }: error) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p className="mb-4 text-gray-700">{message}</p>
      <a
        href="/"
        style={{ textDecoration: 'none', marginLeft: 10 }}
        className=" rounded bg-red-500 px-4 py-2 font-bold text-white no-underline hover:bg-red-600"
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
