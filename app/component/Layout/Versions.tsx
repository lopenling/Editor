import { Link, useLoaderData } from '@remix-run/react';

function Versions() {
  const { text, page, user_versions } = useLoaderData();
  return (
    <div className="w-[50%]">
      <div className="h-8 mt-2 bg-gray-300 w-full px-2 flex items-center justify-between">
        <div>Versions:</div>
        <Link to={`/version/create?text=${text.id}&&page=${page.order}`}>create</Link>
      </div>
      <div>
        {user_versions.map((t) => {
          return (
            <Link
              to={`/version/${t.id}?text=${text.id}&&page=${page.order}`}
              className="bg-white rounded px-1 mx-1"
              key={t.id}
            >
              {t.name} -- {t.user.username}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Versions;
