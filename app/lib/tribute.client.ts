import Tribute from 'tributejs';

export  function initializeTribute(id:string) {
  if (typeof window !== 'undefined') {
    const tribute = new Tribute({
      values: function (text, callback) {
        // Make an asynchronous request to retrieve the suggestions from an API
        fetch('/api/text/?search=' + text)
          .then((response) => response.json())
          .then((data) => {
            let newData = data.map((item: any) => ({ key: item.name, value: item.name }));
            // Pass the retrieved suggestions to the callback function
            callback(newData);
          })
          .catch((error) => {
            console.error('Error retrieving suggestions:', error);
            callback([]);
          });
      },
      autocompleteMode: true,
      trigger:'་',
      noMatchTemplate() { return null }
    });

    tribute.attach(document.getElementById(id));

    return tribute;
  }

  return null;
}

