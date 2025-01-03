import React from 'react'
import styled from 'styled-components';


const Header = () => {
    return (
        <Wrapper>
            <div className="invem-header">
                <div className="first">
                    <h1> Inventroy Managment System</h1>
                </div>
                <div className="first">
                    Home
                </div>
            </div>
            
        </Wrapper>
      
    )
}
const Wrapper = styled.section`
width: 100%;
display: flex;
align-items: center;
justify-content: center;

    .invem-header{
        height: 4rem;
        width: 90%;
        background-color: #007AFF;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }
`
export default Header;