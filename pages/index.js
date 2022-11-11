// import config from "./config.json";
import styled from "styled-components"

function HomePage(){
  return (
    <div>
      <Menu></Menu>
      <Header></Header>
      <Timeline></Timeline>
    </div>
  )
}

export default HomePage

function Menu() {
  return (
    <div>
      Menu
    </div>
  )
}

const StyledHeader = styled.div`
  div{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #222;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
  }
`;

function Header () {
  return (
    <StyledHeader>
    <section className="user-info">
      Teste
    </section>
    </StyledHeader>
  )
}

function Timeline() {
  return (
    <div>
      Timeline
    </div>
  )
} 