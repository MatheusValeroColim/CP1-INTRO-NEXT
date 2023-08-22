import styled from 'styled-components';

const SubTitle = styled.h2`
  color: #000;
  font-size: 24px;
  font-weight: bold;
  font-style: Raleway;
`

export default function MySubTitle(props) {
    return (
      <SubTitle>
        {props.name}
      </SubTitle>
    )
  }