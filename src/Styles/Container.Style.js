import styled from "styled-components";
const sizes = {
  mobileM: "500px",
  mobileL: "600px",
  tablet: "1025px",
};
const devices = {
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
};
export const BannerLeftContainer = styled.div`
  // color: red;
  padding-left: 70px;
  @media ${devices.tablet} {
    padding: 20px;
  }
  @media ${devices.mobileL} {
    padding-left: 10px;
  }
`;
export const BannerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  /* grid-gap: 20px; */
  align-items: center;
  /* height: 100vh; */
  padding-bottom: 100px;
  background-color: #541554;

  @media ${devices.mobileL} {
    grid-template-columns: 1fr;
  }
`;
export const SlackReviewNumberContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 60px;
  text-align: center;
  align-items: center;
  padding: 100px 60px;
  @media ${devices.mobileL} {
    grid-template-columns: 1fr;
    padding: 20px 20px;
  }
  & span {
    color: #611f69;
    font-size: calc(40px + 2vmin);
    font-weight: 700;
    display: inline-block;
    @media ${devices.tablet} {
   font-size: calc(20px + 1vmin);
  }
  }
  & p {
    font-size: calc(20px + 1vmin);
    margin: 0;
    line-height: 35px;
    @media ${devices.tablet} {
   font-size: calc(12px + 1vmin);
  }
  }
`;
export const SlackReviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  align-items: center;
  /* height: 100vh; */
  @media ${devices.mobileL} {
    grid-template-columns: 1fr;
    padding: 20px 20px;
  }
  & video {
    border-top-right-radius: 500px;
    border-bottom-right-radius: 500px;
  }
  & p {
    font-weight: 300;
    line-height: 1.364;
    letter-spacing: -0.3px;
    /* margin-top: 0; */
    font-size: calc(18px + 2vmin);
    padding-right: 20px;
    font-style: italic;
    @media ${devices.tablet} {
   font-size: calc(12px + 1vmin);
  }
  }
  & span {
    font-weight: 700;
    display: block;
    margin-bottom: 10px;
  }
  & a {
    padding: 0;
    padding: 10px 5px;
  }
`;
export const AllContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-gap: 80px !important;
  align-items: center;
  justify-content: space-between;
  padding: 100px 60px;
  @media ${devices.tablet} {
    grid-gap: 20px !important;
    padding: 50px 20px;
  }
  @media ${devices.mobileL} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    padding: 20px 20px;
    & video {
      grid-row: 2 / 3;
    }
    & div{
      grid-row: 1 / 2;
    }
  }
`;
export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  align-items: center;
  @media ${devices.tablet} {
    grid-template-columns: 1fr;
    margin-bottom: 30px;
  }
  @media ${devices.mobileL} {
    grid-template-columns: 1fr;
    margin-bottom: 30px;
  }
  & a {
    background-color: black;
    margin-right: 10px;
    padding: 0 20px;
    height: 60px;
    line-height: 60px;
    background-color: white;
    border-radius: 5px;
    color: #541554;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bolder;
    display: flex;
    & svg {
      border-radius: 5px;
      padding: 10px;
      margin: 5px;
      background-color: white;
    }
    &:nth-of-type(2) {
      background-color: #4285f4;
      color: white;
      width: 80%;
      padding-left: 1px;
      justify-content: space-between;
      @media ${devices.tablet} {
width: 100%;
  }
    }
  }
`;
export const SlackReviewButtonContainer = styled.div`
  display: grid;
  width: 50%;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  grid-gap: 50px;
  margin: auto;
  @media ${devices.tablet} {
    width: 80%;
    justify-content: center;
  }
  @media ${devices.mobileL} {
    grid-template-columns: 1fr;
    width: 80%;
  }
  & a {
    padding: 20px;
    border-radius: 5px;
    color: #541554;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bolder;
    display: flex;
    justify-content: center;

    &:nth-of-type(1) {
      background-color: rgb(78, 25, 84);
      color: rgb(232, 230, 227);
      fill: rgb(232, 230, 227);
      /* @media ${devices.tablet} {
        width: 80%;
      } */
      @media ${devices.mobileL} {
        width: 80%;
      }
    }
    &:nth-of-type(2) {
      width: 60%;
      text-align: center;
      background-color: #fff;
      color: #611f69;
      fill: #611f69;
      box-shadow: inset 0 0 0 1px #611f69;
      @media ${devices.mobileL} {
        width: 80%;
      }
    }
  }
`;

export const DeeperWorkContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 100px 60px;
  @media ${devices.tablet} {
    grid-template-columns: 1fr 1fr;
    padding: 20px 20px;
  }
  @media ${devices.mobileL} {
    grid-template-columns: 1fr;
    padding: 20px 20px;
  }
`;
export const SingleDeeperWorkContainer = styled.div`
  display: grid;
  padding: 10px;
  height: auto;
  background-color: azure;
  transform: scale(0.97);
  transition: all linear 0.5s;

  & div {
    display: flex;
    justify-content: space-between;
    align-self: flex-end;
    padding: 40px 0 10px 0;
    color: blue !important;
    & a {
      text-decoration: none;
    }
  }
  &:nth-of-type(1) {
    background-color: #541554;
  }
  &:hover {
    transform: scale(1.02);
  }
`;
export const WelcomeContainer = styled.div`
  background: #4a154b;
  border: none;
  clip-path: ellipse(75% 100% at center top);
  height: auto;
  min-height: 370px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${devices.mobileL} {
    clip-path: ellipse(105% 100% at center top);
    padding-bottom: 6rem!important;
  }
`;
export const WelcomeContainerButtonContainer = styled.div`
  display: grid;
  width: 50%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2;
  grid-gap: 50px;
  margin: 50px auto 0 auto;
  @media ${devices.tablet} {
    width: 90%;
    margin: 25px auto 0 auto;
  }
  @media ${devices.mobileL} {
    grid-template-columns: 1fr;
    width: 90%;
    margin: 5px auto 0 auto;
  }
  & a {
    padding: 20px;
    border-radius: 5px;
    color: #541554;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bolder;
    display: flex;
    justify-content: center;

    &:nth-of-type(1) {
      background-color: white;
      color: #611f69;
      fill: rgb(232, 230, 227);
    }
    &:nth-of-type(2) {
      text-align: center;
      border: 1px solid white;
      color: #fff;
      fill: #611f69;
      box-shadow: inset 0 0 0 1px #611f69;
    }
  }
`;
export const FooterWarraper = styled.div`
  padding: 10px 60px;
`;
export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;

  @media ${devices.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media ${devices.mobileL} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${devices.mobileM} {
    grid-template-columns: 1fr;
  }
  & ul {
    list-style: none;
    padding-left: 0;
    & li {
      & span {
        font-size: calc(15px + 1vmin);
        font-weight: 700;
        padding-bottom: 10px;
        display: inline-block;
      }
      & a {
        text-decoration: none;
        color: black;
        padding: 10px 0;
        display: inline-block;
      }
    }
  }
`;
