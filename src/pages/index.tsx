import React, { FunctionComponent } from 'react'
import Text from 'components/Text'
import { Link } from 'gatsby'

const Index: FunctionComponent = function () {
  return (
    <div>
      <Text text="Hello, World!" />
      <Link to="/info/">Go to info page</Link>
    </div>
  )
}

export default Index
