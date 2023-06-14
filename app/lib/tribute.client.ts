import Tribute from 'tributejs';
import collection from './tibuteCollection';

export  function initializeTribute(id:string,value:string) {
  if (typeof window !== 'undefined') {
    const tribute = new Tribute({
      values:[{key:'item',value:'item'}],
      autocompleteMode: true,
      noMatchTemplate() {
        return `<span class="tribute-no-match"></span>`;
      },
    });

    tribute.attach(document.getElementById(id));

    return tribute;
  }

  return null;
}

function convertArrayOfStringToKeyValue(array:string[]) {
  return array.map((item) => {
    return { key: item, value: item };
  });
}
