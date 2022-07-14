import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import ProfileImage from './ProfileImage'

const Background = styled.div`
  width: 100%;
  background-image: linear-gradient(60deg, #ffc1cc 0%, #bbe3bf 100%);
  color: #ffffff;
`

const Wrapper = styled.div`
  width: 768px;
  height: 400px;
  margin: 0 auto;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
`

const SubTitle = styled.div`
  font-size: 12px;
  font-weight: 400;
`

const Title = styled.div`
  margin-top: 5px;
  font-size: 16px;
  font-weight: 700;
`

const Introduction: FunctionComponent = () => {
  return (
    <Background>
      <Wrapper>
        <ProfileImage />

        <div>
          <SubTitle>테스트테스트 </SubTitle>
          <Title>테스트입니다</Title>
        </div>
      </Wrapper>
    </Background>
  )
}

export default Introduction
