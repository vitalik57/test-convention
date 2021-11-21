import styled from "styled-components";
export const RateStyled = styled.div`
  ul {
    list-style: none;
  }

  .text {
    font-size: 30px;
    line-height: 1.5;
    text-shadow: 1px 1px 1px silver, -1px 1px 1px silver;
    /* color: white; */
    transition: all 0.5s;
  }

  text:hover {
    text-shadow: -1px -1px 1px silver, 1px -1px 1px silver;
    color: white;
  }
`;
