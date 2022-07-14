import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/common/GlobalStyle'
import Introduction from 'components/main/Introduction'

const Wrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
`

const Index: FunctionComponent = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Introduction />
    </Wrapper>
  )
}

export default Index
