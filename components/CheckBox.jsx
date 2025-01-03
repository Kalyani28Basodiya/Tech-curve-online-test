import React from 'react'
import styled from 'styled-components';

const CheckBox = () => {
  return (
    <Wrapper>
      <form action="" className='checkbox'>
        <div>
          <input type="checkbox" />
          <p>Item</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>Item</p>
        </div>
      </form>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.checkbox{ 
  display: flex;
  align-self: center;
  justify-content: center;
 
div{
  display: flex;
  align-items: center;
  justify-content: center;
}
  input{
    margin: 1rem;
  }
}
`
export default CheckBox;