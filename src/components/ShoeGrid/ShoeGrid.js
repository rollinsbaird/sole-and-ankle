import React from "react";
import styled from "styled-components/macro";

import SHOES from "../../data";
import ShoeCard from "../ShoeCard";

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ItemWrapper>
          <ShoeCard key={shoe.slug} {...shoe} />
        </ItemWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

const ItemWrapper = styled.div`
  min-width: 275px;
  flex: 1;
`;

export default ShoeGrid;
