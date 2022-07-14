import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'

const Index: FunctionComponent = function () {
  return (
    <div>
      <Link to="/info/">Go to info page</Link>
    </div>
  )
}

export default Index
