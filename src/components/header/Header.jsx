import React from 'react'
import styled from 'styled-components'

const HeaderWrap = styled.div`
    display: flex;
    border:1px solid #cacaca;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    display: flex;
    color:#044e94;
`
const TextWrap = styled.div`
    font-size: 25px;
    margin: 0 10px 0 10px;
`

const Header = () => {
    return (
        <HeaderWrap>
            <TextWrap>My Todo List</TextWrap>
            <TextWrap>React</TextWrap>
        </HeaderWrap>
    )
}

export default Header