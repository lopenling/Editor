import { Link, useLoaderData } from '@remix-run/react';

function Translations() {
  const { text, page, translations } = useLoaderData();
  return (
    <div className="w-[45%]">
      <div className="h-8 mt-2 bg-gray-300 w-full px-2 flex items-center justify-between">
        <div>Translation:</div>
        <Link to={`/translation?text=${text.id}&&page=${page.order}`}>create</Link>
      </div>
      <div>
        {translations.map((t) => {
          return (
            <Link to={''} className="bg-white rounded px-1 mx-1" key={t.id}>
              {t.name} -- {t.user.username}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Translations;
