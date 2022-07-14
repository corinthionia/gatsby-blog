import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'

interface IInfoPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
      }
    }
  }
}

/* practicing emotion library */

// global style
const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 20px;
  }
`
// styled component (kebab-case)
const Text1 = styled.div<{ disable: boolean }>`
  font-size: 20px;
  font-weight: 700;
  text-decoration: ${({ disable }) => (disable ? 'line-through' : 'none')};
`

// object (camelCase)
const Text2 = styled('div')<{ disable: boolean }>(({ disable }) => ({
  fontSize: '15px',
  color: 'blue',
  textDecoration: disable ? 'line-through' : 'none',
}))

const InfoPage: FunctionComponent<IInfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) {
  return (
    <div>
      <Global styles={globalStyle} />
      <Text1 disable={true}>{title}</Text1>
      <Text2 disable={false}>
        {description} {author}
      </Text2>
    </div>
  )
}

export default InfoPage

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
