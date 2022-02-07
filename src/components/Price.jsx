import React from 'react';
import styled from 'styled-components';
import PriceCard from './PriceCard';

const Container = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Price = () => {
  return (
      <Container>
        <PriceCard price="10" type="Basic"></PriceCard>
        <PriceCard price="20" type="Full"></PriceCard>
        <PriceCard price="30" type="Premium"></PriceCard>
      </Container>
  );
};

export default Price;
