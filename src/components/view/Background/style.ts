import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`;
const Image = styled.img.attrs({ alt: '' })`
  position: absolute;
`;
export const TopImage = styled(Image)`
  top: 0;
  right: 0;
`;
export const BottomImage = styled(Image)`
  bottom: 0;
  left: 0;
`;
