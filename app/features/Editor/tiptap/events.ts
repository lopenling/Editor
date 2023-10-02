const handleDOMEvents = {
  keydown: (v, event) => {
    let charCode = String.fromCharCode(event.which).toLowerCase();
    let copyPressed = (event.ctrlKey || event.metaKey) && charCode === 'c';
    if (![37, 38, 39, 40].includes(event.keyCode) && !copyPressed) {
      event.preventDefault();
    }
  },
  textInput: (v, evt) => {
    evt.preventDefault();
  },
  drop: (v, e) => {
    e.preventDefault();
  },
  dragstart: (v, e) => {
    e.preventDefault();
  },
  paste: (v, event) => {
    event.preventDefault();
    console.log(v);
  },
};

const noneditable = {
  handleDOMEvents: handleDOMEvents,
  attributes: {
    inputmode: 'none',
    'data-encoding': 'UTF-8',
  },
};

const editable = {
  handleDOMEvents: {},
  attributes: {
    inputmode: 'none',
    'data-encoding': 'UTF-8',
  },
};
export default { editable, noneditable };
