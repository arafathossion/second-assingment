import styled from "styled-components";
const sizes = {
    tablet: "768px",
  };
  const devices = {
    tablet: `(max-width: ${sizes.tablet})`,
  };
export const H1 = styled.h1`
  color: white;
  font-size: calc(35px + 7vmin);
  font-weight: bolder;
  @media ${devices.tablet} {
   font-size: calc(20px + 1vmin);
  }
`;
export const H2 = styled.h2`
  color: ${(props) => props.color || "black"} !important;
  font-size: calc(35px + 3vmin);
  font-weight: bolder;
  margin:  0;
  text-align: ${(props) => props.textAlign || ""};
  @media ${devices.tablet} {
   font-size: calc(25px + 1vmin);
  }
`;
export const H4 = styled.h4`
  font-size: calc(14px + 1vmin);
  font-weight: bolder;
  margin: 5px 0;
  text-align: ${(props) => props.textAlign || ""};
  color: ${(props) => props.color || "black"} !important;
  @media ${devices.tablet} {
   font-size: calc(18px + 1vmin);
  }
`;
export const P = styled.p`
  color: white;
  font-size: calc(15px + 1vmin);
  margin: 25px 0;
  color: ${(props) => props.color || ""};
  & strong & span {
    color: #ecb22e;
  }
  & span {
    color: black;
    text-align: center;
    width: 100%;
    display: block;
  }
  @media ${devices.tablet} {
   font-size: calc(12px + 1vmin);
  }
`;
export const Image = styled.img`
  /* padding: 10px; */
`;
export const AllP = styled.p`
  color: black;
  font-size: calc(15px + 1vmin);
  & strong {
    color: #ecb22e;
  }
  @media ${devices.tablet} {
   font-size: calc(12px + 1vmin);
  }
`;
export const HR = styled.hr`
 border-radius: 50px;
    height: 2px;
  background-color: #ebeaeb;
`;
