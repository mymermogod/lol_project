import styled from 'styled-components'

export const Container = styled.form `
    
`

export const FormSelect = styled.select `
    border: 1px solid #17a4d0;
    color: #17a4d0;
    font-size: 14px;
    border-radius: 5px;
    margin-left: 5px;
`

export const FormInput = styled.input `
    border: 1px solid #17a4d0;
    color: #17a4d0;
    font-size: 14px;
    border-radius: 5px;
    margin-left: 5px;
    width: 40px;
    length: 55px;
`

export const FormButton = styled.button `
background-color: #17a4d0;
color: #fff;
border: 1px solid #17a4d0;
font-size: 14px;
font-weight: 400;
width: 100px;
height: 30px;
border-radius: 100px;
margin-top: 10px;
transition: all 0.5s ease-in-out;
cursor: pointer;

&:hover{
    background-color: #F8FDFF;
    color: #17a4d0;
}
`;
