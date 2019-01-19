import React from 'react';

class Bio extends React.Component {
  render() {
    const { theme } = this.props;
    // TODO: use glamor or something?
    return (
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /**
         * Based on copypasta from Remy Bach and Sarah Drasner
         */
        code[class*="language-"],
        pre[class*="language-"] {
          color: white;
          background: none;
          font-family: Consolas,Menlo,Monaco,source-code-pro,Courier New,monospace;
          font-feature-settings: normal;
          text-align: left;
          white-space: pre;
          word-spacing: normal;
          word-break: normal;
          word-wrap: normal;
          line-height: 1.5;
          margin-bottom: 0;

          -moz-tab-size: 4;
          -o-tab-size: 4;
          tab-size: 4;

          -webkit-hyphens: none;
          -moz-hyphens: none;
          -ms-hyphens: none;
          hyphens: none;
        }

        /* Code blocks */
        pre[class*="language-"] {
          overflow: auto;
          padding: 1em;
        }

        pre[class*="language-"]::-moz-selection {
          /* Firefox */
          background: hsl(207, 4%, 16%);
        }

        pre[class*="language-"]::selection {
          /* Safari */
          background: hsl(207, 4%, 16%);
        }

        /* Text Selection colour */
        pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection {
          text-shadow: none;
          background: hsla(0, 0%, 100%, 0.15);
        }

        pre[class*="language-"]::selection, pre[class*="language-"] ::selection {
          text-shadow: none;
          background: hsla(0, 0%, 100%, 0.15);
        }

        /* Inline code */
        :not(pre) > code[class*="language-"] {
          border-radius: .3em;
          background: ${theme.inlineCode.background};
          color: ${theme.inlineCode.color};
          padding: .15em .2em .05em;
          white-space: normal;
        }

        .token.attr-name {
          color: rgb(173, 219, 103);
          font-style: italic;
        }

        .token.comment {
          color: rgb(99, 119, 119);
        }

        .token.string,
        .token.url {
          color: rgb(173, 219, 103);
        }

        .token.variable {
          color: rgb(214, 222, 235);
        }

        .token.number {
          color: rgb(247, 140, 108);
        }

        .token.builtin,
        .token.char,
        .token.constant,
        .token.function {
          color: rgb(130, 170, 255);
        }

        .token.punctuation {
          color: rgb(199, 146, 234);
        }

        .token.selector,
        .token.doctype {
          color: rgb(199, 146, 234);
          font-style: 'italic';
        }

        .token.class-name {
          color: rgb(255, 203, 139);
        }

        .token.tag,
        .token.operator,
        .token.keyword {
          color: #ffa7c4;
        }

        .token.boolean {
          color: rgb(255, 88, 116);
        }

        .token.property {
          color: rgb(128, 203, 196);
        }

        .token.namespace {
          color: rgb(178, 204, 214);
        }

        pre[data-line] {
          padding: 1em 0 1em 3em;
          position: relative;
        }

        .gatsby-highlight-code-line {
          background-color: hsla(207, 95%, 15%, 1);
          display: block;
          margin-right: -1em;
          margin-left: -1em;
          padding-right: 1em;
          padding-left: 0.75em;
          border-left: 0.25em solid #ffa7c4;
        }

        .gatsby-highlight {
          margin-bottom: 1.75rem;
          border-radius: 10px;
          background: #011627;
          -webkit-overflow-scrolling: touch;
          overflow: auto;
        }

        .gatsby-highlight pre[class*="language-"] {
          float: left;
          min-width: 100%;
        }

        a {
          color: ${theme.primary.text.link}
        }


        .react-toggle--checked .react-toggle-thumb {
          border-color: #4f5b62;
        }

        .react-toggle--checked .react-toggle-track {
          background-color: #4f5b62;
        }

        .react-toggle-track {
          background-color: #000;
        }

        .react-toggle:hover .react-toggle-track {
          background-color: ${
            theme.id === 'dark' ? '#37474f' : '#222'
          }!important;
        }

        .react-toggle-track-x {
          width: 17px;
          height: 17px;
          right: 5px;
        }

        .react-toggle-track-check {
          width: 17px;
          height: 17px;
          left: 5px;
        }
        `,
        }}
      />
    );
  }
}

export default Bio;
