import React from 'react'
import styled from 'styled-components';

const Supplier = () => {
    return (
        <Wrapper>
            <h2>Supplier Detaials</h2>
            <form action="#" className='item-form'>
                <div className="items">
                    <input type="text" placeholder='Enter Item name' name='item' />
                    <input type="text" placeholder='Enter Item name' name='item' />
                    <input type="text" placeholder='Enter Item name' name='item' />
                    <input type="text" placeholder='Enter Item name' name='item' />
                </div>
                <div className="items">
                    <input type="text" placeholder='Enter Item name' name='item' />
                    <input type="text" placeholder='Enter Item name' name='item' />
                    <input type="text" placeholder='Enter Item name' name='item' />
                </div>
            </form>
        </Wrapper>
    )
}
const Wrapper = styled.section`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 1rem;
.item-form{
    background-color: #7F56D9;
    width: 60%;
    height: 20rem;
   display: flex;
   /* flex-direction: column; */
   justify-content: center;
   align-items: center;
   gap: 1rem;
   padding: 1rem;
   .items{
    width: 30%;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
   }
   input{
    padding: 1rem;
    margin: 1rem;
   }
}
    
`
export default Supplier;