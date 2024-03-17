import { Extension } from '@tiptap/core';

export const LiteralTab = Extension.create({
  name: 'literalTab',

  addKeyboardShortcuts() {
    return {
      Tab: () => {
        this.editor.chain()
        .sinkListItem('listItem')
        .command(({ tr }) => {
          tr.insertText(' '.repeat(8))

          return true
         })
        .run()
        return true;
      }
    }
  }
})