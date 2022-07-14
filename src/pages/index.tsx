import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/common/GlobalStyle'
import Introduction from 'components/main/Introduction'

const Index: FunctionComponent = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Introduction />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
`

export default Index
