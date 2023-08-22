import styled from 'styled-components';

const Card = styled.article`
    display: flex;
    padding: 16px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    border-radius: 18px;
    border: 1px solid #C3C3C3;
    background: #FFF;
    box-shadow: 8px 8px 12px 0px rgba(0, 0, 0, 0.73);
`

export default function MyCard(props) {
    return (
      <Card>
      </Card>
    )
  }