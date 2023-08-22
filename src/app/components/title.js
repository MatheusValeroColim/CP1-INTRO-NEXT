import styled from 'styled-components';

const Title = styled.h1`
  color: #00A1FC;
  font-size: 32px;
  font-weight: bold;
  font-style: Raleway;
`

export default function MyTitle(props) {
    return (
      <Title>
        {props.name}
      </Title>
    )
  }