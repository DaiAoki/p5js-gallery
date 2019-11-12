import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 16px;
`
const List = styled.ul`
  padding: 16px;
`
const Item = styled.li`
  font-size: 1.8rem;
  &:hover {
    text-decoration: underline;
  }
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`
class References extends React.Component {

  render() {
    const items = [
      { href: "https://github.com/mrdoob/three.js", text: "GitHub | mrdoob/three.js: JavaScript 3D library." },
      { href: "https://threejs.org/", text: "Reference | three.js – JavaScript 3D library" },
      { href: "https://ics.media/tutorial-three/index.html", text: "Three.js入門サイト - ICS MEDIA" },
      { href: "https://www.oreilly.co.jp/books/9784873117706/", text: "初めてのThree.js 第2版 -- WebGLのためのJavaScript 3Dライブラリ"},
      { href: "https://github.com/dataarts/dat.gui", text: "GitHub | dataarts/dat.gui: dat.gui is a lightweight controller library for JavaScript. "},
    ].map((item, i) => {
      return (
        <Item key={i}>
          <a href={item.href} target="_blank" rel="noopener noreferrer">{ item.text }</a>
        </Item>
      )
    })
    return (
      <div>
        <Title>References</Title>
        <List>{ items }</List>
      </div>
    )
  }
}

export default References
