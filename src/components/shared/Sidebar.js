import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.aside`
  height: 100%;
  width: 30%;
  flex-basis: 30%;
  padding: 24px;
  border-right: solid 8px #ccc;
`
const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 16px;
`
const Navigation = styled.nav`
  padding: 16px 8px;
`
const NavigationList = styled.ul`
`
const NavigationItem = styled.li`
  font-size: 2.0rem;
  &:hover {
    text-decoration: underline;
  }
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`
class Sidebar extends React.Component {

  render() {
    const items = [
      {to: '/hello-three', text: 'Hello Three'},
      {to: '/references', text: 'References'},
    ].map((item, i) => {
      return (
        <NavigationItem key={i}>
          <Link to={item.to}>{ item.text }</Link>
        </NavigationItem>
      )
    })
    return (
      <Container>
        <Title>
          <Link to="/">three.js gallery</Link>
        </Title>
        <Navigation>
          <NavigationList>{ items }</NavigationList>
        </Navigation>
      </Container>
    )
  }
}

export default Sidebar
