import styled from 'styled-components';

export const ItemWrapper = styled.div`
  margin-bottom: 3rem;

  width: 400px;
  height: 100px;
  border-radius: 10px;
  border: 2px dotted;

  display: flex;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div<{ pin: boolean; check: boolean }>`
  text-decoration: ${(props) => (props.check ? 'line-through' : 'none')};

  font-size: ${(props) => (props.pin ? '3rem' : '2rem')};
`;

export const ContentWrapper = styled.div`
  font-size: 1rem;
`;
