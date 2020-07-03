import React from 'react'

import { useLocationQuery } from 'react-use-location-query/dist/index'
import 'react-use-location-query/dist/index.css'

const App = () => {
  return (
    <div>
      <SubApp />
    </div>
  )
}

const SubApp = () => {
  useLocationQuery()
  return (
    <div>
      <div></div>
    </div>
  )
}
export default App
