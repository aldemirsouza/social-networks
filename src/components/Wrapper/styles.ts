import styled from "styled-components";
import backgroundImage from "../../assets/images/bg-user-image.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.white.colors.whiteLight};
  padding-top: 48px;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 287px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: top center;
  padding: 92px 0 0 0;

  @media screen and (max-width: 480px) {
    background-size: auto;
  }
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 4px;
  border: 4px solid ${({ theme }) => theme.brand.colors.secondary};
`;

export const Name = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 38px;
  margin-top: 24px;
  opacity: 0.9;
`;

export const User = styled.span`
  display: inline-block;
  font-family: "Roboto Mono", monospace;
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 150%;
  opacity: 0.9;
  margin-top: 8px;
`;

export const WrapperButtons = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 64px;
`;

export const Button = styled.a`
  width: 96px;
  height: 96px;
  background-color: ${({ theme }) => theme.brand.colors.tertiary};
  font-size: 1rem;
  color: ${({ theme }) => theme.white.colors.whiteLight};
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-bottom: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.3s ease;

  .iconButton {
    display: block;
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
  }

  &:hover {
    color: ${({ theme }) => theme.brand.colors.secondary};
    transform: translateY(-5px);
  }
`;

export const Footer = styled.footer`
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 16px;
  color: ${({ theme }) => theme.brand.colors.primary};
  background-color: ${({ theme }) => theme.brand.colors.backgroundColor};
  text-align: center;
  padding: 31px 0;
  margin-top: 64px;

  @media screen and (max-width: 480px){
    margin-top: 0;
  }
`;
