import { Editor } from '@tiptap/react';
import { Button } from 'flowbite-react';
import React from 'react';
import exportAsDocs from '~/lib/export_docs';

type Props = {
  editor: Editor;
  name: string;
};

function ExportButton({ editor, name }: Props) {
  return (
    <Button size={'sm'} className="text-slate-500" onClick={() => exportAsDocs(editor)}>
      {name}
    </Button>
  );
}

export default ExportButton;
