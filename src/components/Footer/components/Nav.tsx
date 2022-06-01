import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://polygonscan.com/address/0xcF51ab7398315DbA6588Aa7fb3Df7c99D3D1F4dD#code"
      >
        HopeNobt Contract
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://info.quickswap.exchange/pair/0xc445b18b3ff85e0691fe416ad91e456f8697b166"
      >
        Quickswap BRT-WMATIC
      </StyledLink>
      <StyledLink target="_blank" href="https://discord.gg/VgXcCBnxgG">
        Discord
      </StyledLink>
      <StyledLink target="_blank" href="https://t.me/allswapdefi">
        Telegram
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/AllSwaps">
        Twitter
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/Allswap">
        Github
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[50]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[60]};
  }
`

export default Nav
