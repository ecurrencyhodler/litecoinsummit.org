import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

import videoBackground from 'images/video-background.png'
import { Button, fromTheme, media } from 'theme/globalStyle'
import Counter from './Counter'

const Wrapper = styled.div`
  background: url(${videoBackground}) no-repeat center;
  background-size: cover;
  /* background-position: center center; */
  min-height: 530px;
  width: 100%;
`

const InfoWrapper = styled.div`
  position: relative;
  left: 50%;
  top: 250px;
  transform: translate(-50%,-50%);
  ${media.handheld`
    top: 240px;
  `}
`

const H1 = styled.h1`
  color: ${fromTheme('white')};
  font-size: 20px;
`

const SponsorWrapper = styled.div`
  background: ${fromTheme('lightGrey')};
  padding: 1.2rem 0;
`

const RAV = styled.img`
  width: 300px;
`

const Media = () => (
  <React.Fragment>
    <Wrapper>
      <InfoWrapper>
        <H1>#LTCSF18</H1>
        <Counter />
      </InfoWrapper>
    </Wrapper>
    <SponsorWrapper>
      <RAV src='https://i.imgur.com/PK9wVbD.png'/>
    </SponsorWrapper>
  </React.Fragment>
)

export default Media
