import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import Sidebar from './Sidebar'

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`
const Main = styled.main`
  height: 100%;
  flex-grow: 1;
`
const Article = styled.article`
  height: 100%;
  padding: 24px 24px 24px 32px;
`
class Layout extends React.Component {

  render() {
    return (
      <Container>
        <Sidebar/>
        <Main>
          <Article>{ this.props.children }</Article>
        </Main>
      </Container>
    )
  }
}

export default Layout
