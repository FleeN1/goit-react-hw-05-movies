import styled from 'styled-components';


export const Item = styled.li`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;

  &:hover,
  &:focus {
    transform: scale(1.03);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25), 0 7px 10px rgba(0, 0, 0, 0.15);
  }`