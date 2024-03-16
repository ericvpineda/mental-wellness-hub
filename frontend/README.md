# Frontend

# To-Do
- connect journal frontend to convex backend

# Implemented
- tiptap extensions:
    - headers (h1-3)
    - bold
    - quotes
    - bullet points
    - italics
    - code
    - invisible line
    - undo/redo

# Issues

# Solutions
- redo button does not work
    - problem: setContent() resets description on any user input
    - solution: setContent() runs if index of entry changes
- switching from 2 different entries combine the history (redo/undo)
    - problem: editor does not reset history on change of entry
    - solution: create reset history editor fxn 
        - link: https://github.com/ueberdosis/tiptap/issues/491