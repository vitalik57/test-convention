import styled from "styled-components";
export const MainStyled = styled.div`
  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
  }

  .Modal {
    width: 200px;
    height: 360px;
    background-color: #fff;
    border-radius: 20px;
    padding: 20px;
    text-align: center;
  }
  .select__css {
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 700;
    color: #444;
    line-height: 1.3;
    padding: 0.6em 1.4em 0.5em 0.8em;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    border-radius: 0.5em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
      linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
    background-repeat: no-repeat, repeat;
    background-size: 0.65em auto, 100%;
  }
  h1 {
    margin: 0;
    color: #343434;
    font-family: "Ultra", sans-serif;
    font-size: 23px;
    line-height: 25px;
    text-transform: uppercase;
    text-shadow: 0 2px white, 0 3px #777;
    margin-bottom: 30px;
  }
  .select__css:hover {
    border-color: #888;
  }
  .modal__button {
    border-radius: 9px;
    width: 95px;
    height: 30px;
    background-color: #fff;
    font-family: "Ultra", sans-serif;
    font-size: 15px;
    line-height: 25px;
    text-transform: uppercase;
    margin-top: 30px;
  }
  .title__menu {
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #222;
    font-size: 25px;
    padding-left: 15px;
    margin-bottom: 15px;
    border-left: 2px solid #b99d61;
  }
  .menu {
    font-size: 23px;
    line-height: 25px;
    text-decoration: none;
    outline: none;
    display: block;
    padding: 6px 0;
    letter-spacing: 1px;
    font-weight: 300;
    color: #444;
    transition: 0.3s linear;
  }
  .menu:hover {
    color: #b99d61;
  }
  ul {
    margin: 0;
    padding: 20px;
    list-style: none;
  }
`;
