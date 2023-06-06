import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedSuggestionThread, selectedTextOnEditor } from '~/states';
import { Editor } from '@tiptap/react';

import Suggestion from './Suggestion';
import { SuggestionType } from '~/model/type';
function Suggestions({ editor, suggestions }: { editor: Editor | null; suggestions: SuggestionType[] }) {
  const suggestionThread = useRecoilValue(selectedSuggestionThread);

  let list = suggestions.filter((sug) => {
    return sug.threadId === suggestionThread.id;
  });

  let groupedSuggestion = transformObjectsByNewValue(list);
  return (
    <div
      className="z-1 ml-2 mt-4 h-[80vh] max-h-[80vh] overflow-visible overflow-y-auto bg-slate-50 p-2 shadow-md dark:bg-gray-700"
      style={{ minWidth: 350, fontFamily: 'sans-serif' }}
    >
      <div className="flex flex-col  gap-2 ">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white lg:text-2xl">Suggestion</h2>
        {groupedSuggestion.map((suggest) => {
          return <Suggestion optimistic={false} editor={editor} suggest={suggest} key={suggest.id} />;
        })}
      </div>
    </div>
  );
}

export default Suggestions;

function combineObjectsByNewValue(objects) {
  const combinedObjects = {};

  objects.forEach((obj) => {
    const { newValue } = obj;
    if (newValue in combinedObjects) {
      combinedObjects[newValue].push(obj);
    } else {
      combinedObjects[newValue] = [obj];
    }
  });

  return combinedObjects;
}

function transformObjectsByNewValue(objects) {
  const transformedObjects = [];

  const combinedObjects = combineObjectsByNewValue(objects);

  for (const newValue in combinedObjects) {
    const objectsWithSameNewValue = combinedObjects[newValue];
    const usersArray = objectsWithSameNewValue.map((obj) => obj.user);
    const likedByArray = objectsWithSameNewValue.reduce((likedByArr, obj) => {
      likedByArr.push(...obj.likedBy);
      return likedByArr;
    }, []);

    objectsWithSameNewValue.forEach((obj) => {
      const newObj = { ...obj };
      newObj.user = usersArray;
      newObj.likedBy = likedByArray;
      transformedObjects.push(newObj);
    });
  }

  // Remove repeating newValue data
  const uniqueValues = [...new Set(transformedObjects.map((obj) => obj.newValue))];
  const uniqueTransformedObjects = uniqueValues.map((newValue) => {
    const objectsWithSameNewValue = transformedObjects.filter((obj) => obj.newValue === newValue);
    return objectsWithSameNewValue[0];
  });

  return uniqueTransformedObjects;
}
