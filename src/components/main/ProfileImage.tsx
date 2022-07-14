import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const PROFILE_IMG_LINK = 'https://avatars.githubusercontent.com/u/79887293?v=4'

const ProfileImgWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;
`

const ProfileImage: FunctionComponent = () => {
  return <ProfileImgWrapper src={PROFILE_IMG_LINK} alt="Profile Image" />
}

export default ProfileImage
