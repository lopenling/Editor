import * as React from 'react';
import GraphemeSplitter from 'grapheme-splitter';
import reactStringReplace from 'react-string-replace';

type Props = {
  string: string;
  highlightClass: string;
  stringClass?: string;
  searchTerm?: string;
};

export default class HighlightedString extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const string = this.props.string;
    let nameHtml = string;
    let stringClass = this.props.stringClass || '';
    if (this.props.searchTerm) {
      const searchTerm = this.props.searchTerm;
      const splitter = new GraphemeSplitter();
      const graphemes = splitter.splitGraphemes(string);
      const start = string.indexOf(searchTerm);
      const end = start + searchTerm.length;
      let position = 0;
      let foundGraphemes = '';
      if (start > -1) {
        for (let i = 0; i < graphemes.length; i++) {
          let grapheme = graphemes[i];
          if (position >= start && position < end) {
            foundGraphemes += grapheme;
          }
          position += grapheme.length;
        }
      }
      if (foundGraphemes.length > 0) {
        nameHtml = reactStringReplace(string, foundGraphemes, (match, i) => (
          <span className={this.props.highlightClass} key={`highlight-${i}`}>
            {match}
          </span>
        ));
      }
    }
    return <span className={stringClass}>{nameHtml}</span>;
  }
}
