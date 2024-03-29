import { Editor } from '@tiptap/react';
import Suggestion from './Suggestion';
import { useLoaderData } from '@remix-run/react';
function Suggestions({ editor }: { editor: Editor | null }) {
  const { suggestions } = useLoaderData();

  let groupedSuggestion = transformObjectsByNewValue(suggestions);
  return (
    <div
      className="z-1 flex-1 overflow-visible overflow-y-auto bg-slate-50 p-2 shadow-md dark:bg-gray-700"
      style={{ minWidth: 350, fontFamily: 'sans-serif' }}
    >
      <div className="flex flex-col  gap-2 ">
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
