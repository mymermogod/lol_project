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

export const PriceColumn = styled.div`
  margin-top: -80px;
  margin-left: 170px;
  background-color: #17a4d0;
  box-shadow: 0 7px 30px rgba(52, 31, 97, 0.1);
  padding: 2rem;
  max-width: 65px;
  height: 150px;
  border-radius: 8px;
  color: #F8FDFF;
  
`
 
export const PriceColumnSec = styled.div`
  margin-top: -90px;
  margin-left: 300px;
  padding-left: 50px;
  background-color: #17a4d0;
  box-shadow: 0 7px 30px rgba(52, 31, 97, 0.1);
  padding: 2rem;
  max-width: 65px;
  height: 50px;
  border-radius: 8px;
  color: #F8FDFF

` 

export const PriceHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
`
export const DolarSign = styled.div`
    font-size: 1.5rem;
    margin-top: .5rem;
    margin-right: .25rem;
`
export const PerCall = styled.div`
    font-size: .75rem;
    align-self: flex-end;
    margin-bottom: 1.1rem;
    text-transform: uppercase
`
export const SelectedPlan = styled.div`
    text-transform: uppercase;
    font-size: .9rem;
    margin-top: 1rem;
    margin-bottom: 0;
`
export const PricePlan = styled.div`
    font-size: 3.5rem;
    display: flex;
`
export const PriceNoPlan =  styled.div`
    font-size: 1.8rem;
    display: flex;
`
