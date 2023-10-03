import { useSearchParams } from '@remix-run/react';
import { HEADER_HEIGHT } from '~/constants';
import MenuHeader from './MenuHeader';
import MenuHome from './MenuHome';
import TableOfContents from './TableOfContent';
import Search from './Search';
import Translations from './Translations';
import Post from './Post';
import { Editor } from '@tiptap/react';
import Suggestion from './Suggestion';

function Menu({ editor }: { editor: Editor | null }) {
  let [searchParams] = useSearchParams();
  let menu = searchParams.get('with');
  if (!menu) return null;
  return (
    <div className="w-full flex flex-col max-w-[30%]" style={{ maxHeight: 'calc(100vh - 60px)' }}>
      <MenuHeader />
      {menu === 'all' && <MenuHome />}
      {menu === 'TableOfContent' && <TableOfContents editor={null} />}
      {menu === 'Search' && <Search editor={editor} />}
      {menu === 'Translations' && <Translations />}
      {menu === 'Post' && <Post editor={editor} />}
      {menu === 'Suggestion' && editor && <Suggestion editor={editor} />}
    </div>
  );
}

export default Menu;
