import styled from "styled-components";

const ContainerWelcome = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopContainer = styled.div`
  min-height: 50svh;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50svh;
`;

const TitleWelcome = styled.h1`
  color: #1a1b23;
  font-family: Poppins;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.5rem;
  text-align: center;
  width: 19.8125rem;
`;

const DescriptionWelcome = styled.p`
  color: #919191;
  font-family: Poppins;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  text-align: center;
  width: 18.1875rem;
`;

export { ContainerWelcome, TopContainer, BottomContainer, TitleWelcome, DescriptionWelcome };
