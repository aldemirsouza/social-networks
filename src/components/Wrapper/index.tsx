import * as S from "./styles";
import Image from "../../assets/images/pp.jpg";
import { Linkedin, GitHub, Instagram, Dribbble, Youtube, Globe } from 'react-feather'

export const Wrapper = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Image src={Image} />
        <S.Name>Aldemir Souza</S.Name>
        <S.User>Front-end Developer</S.User>
      </S.Wrapper>

      <S.WrapperButtons>
        <S.Button href='https://github.com/aldemirsouza' target='_blank'>
          <GitHub className="iconButton" />
          Github
        </S.Button>

        <S.Button href='https://www.linkedin.com/in/aldemirsouza/' target='_blank'>
          <Linkedin className="iconButton" />
          Linkedin
        </S.Button>

        <S.Button href='https://www.instagram.com/aldemmir17b/' target='_blank'>
          <Instagram className="iconButton" />
          Instagram
        </S.Button>

        <S.Button href='https://dribbble.com/aldemmir17b' target='_blank'>
          <Dribbble className="iconButton" />
          Dribbble
        </S.Button>

        <S.Button href='https://www.youtube.com/channel/UCJ8iHBe8bs0PVRlGd0rBkCQ' target='_blank'>
          <Youtube className="iconButton" />
          YouTube
        </S.Button>

        <S.Button href='https://aldemirsouza.github.io/portfolio/' target='_blank'>
          <Globe className="iconButton" />
          Portfolio
        </S.Button>
      </S.WrapperButtons>

      <S.Footer>
        By Aldemir Souza - Front-end Developer
      </S.Footer>
    </S.Container>
  )
}