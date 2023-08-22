

import styled from 'styled-components';

const Text = styled.p`
    color: black;
    font-size: 14px;
    font-style: Raleway;
    font-weight: Medium;
`

export default function MyText(props) {
    return (
      <Text>
        {props.text}
      </Text>
    )
  }