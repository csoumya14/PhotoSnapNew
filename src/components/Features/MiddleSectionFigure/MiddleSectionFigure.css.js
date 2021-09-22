import styled from 'styled-components';
export const Figure = styled.figure`
  height: 14.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3.5rem;
  @media only screen and (min-width: 768px) {
    width: 340px;
    height: 236px;
  }
`;

export const ImageItem = styled.img``;

export const Caption = styled.figcaption`
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  margin-top: 3rem;
`;
export const Text = styled.p`
  font-size: 15px;
  line-height: 25px;
  opacity: 0.6;
  text-align: center;
`;
