import React from 'react';

export default React.createContext({
  notes: [],
  folders: [],
  addNote: () => {},
  deleteNote: () => {},
  addFolder: () => {},
});
 