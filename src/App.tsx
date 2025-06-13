import React from 'react';
import { createComponent } from '@lit/react';

import { IconViewer } from 'lib-svg-icons';

const IconViewerReact = createComponent({
  react: React,
  tagName: 'icon-viewer',
  elementClass: IconViewer
});


function App() {
  return (
    <IconViewerReact />
  );
}

export default App;
