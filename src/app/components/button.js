

import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-style: Raleway;
  font-size: 14px;
  font-weight: bold;
  width: 158px;
  height: 48px;
  padding: 16px;
  color: white;
  background-color: blue;
  border-radius: 7px;
  text-align: center;
`

export default function MyButton(props) {
    return (
      <Button>
        {props.name}
      </Button>
    )
  }