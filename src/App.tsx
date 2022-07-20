import React, { ReactElement} from 'react'
import {Admin} from "react-admin";
import jsonServerProvider from "ra-data-json-server";

function App(): ReactElement {

  return (
    <div >
      <Admin dataProvider={jsonServerProvider('http://localhost:4005')}>

      </Admin>);
    </div>
  )
}

export default App
