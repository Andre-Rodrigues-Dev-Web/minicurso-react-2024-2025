import ButtonAuth from "../../Shared/Components/ButtonAuth";
import {
  BottomContainer,
  ContainerWelcome,
  TopContainer,
  TitleWelcome,
  DescriptionWelcome,
} from "./style";

const Welcome = () => {
  return (
    <ContainerWelcome>
      <TopContainer></TopContainer>
      <BottomContainer>
        <TitleWelcome>Let’s connect with each other</TitleWelcome>
        <DescriptionWelcome>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </DescriptionWelcome>
        <ButtonAuth textButtonAuth="Get started" />
      </BottomContainer>
    </ContainerWelcome>
  );
};

export default Welcome;
