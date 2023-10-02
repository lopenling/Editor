import { Link, useLoaderData } from '@remix-run/react';
import React from 'react';

function Translations() {
  let { text, page, user_versions } = useLoaderData();
  let createUrl = `/version/create?text=${text.id}&page=${page.order}`;
  return (
    <div>
      <Link to={createUrl} className="bg-gray-300 text-center float-right px-2 py-1 m-2 rounded">
        create +
      </Link>
      <div>
        {user_versions?.map((version) => {
          let versionUrl = `/version/${version.id}`;
          return (
            <Link to={versionUrl} key={version.id + version.user.id}>
              {version?.name} - {version.user.username}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Translations;
