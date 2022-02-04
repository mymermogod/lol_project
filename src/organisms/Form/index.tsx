import * as S  from './styles'

import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react';
import IFormInput from '../../Models/iforminput' 
import PlanValue from '../../Models/planvalue'
import { franchising, routecall } from '../../utils/calculate';



const Form = () => {
    const [data, setData] = useState<IFormInput>();
    const [valueWithPlan, setValueWithPlan] = useState<PlanValue>();
    const [valueWithoutPlan, setValueWithoutPlan] = useState<PlanValue>();
    const { register, handleSubmit } = useForm<IFormInput>();
    function onSubmit(data: IFormInput) {
        setData(data);
    }
    function pricingPlanCall(data: IFormInput) {
        if(data.minutes>franchising.[data.selectedPlan]){
           const withPlan = (data.minutes-franchising[data.selectedPlan])*routecall[data.selectedDddO][data.selectedDddF]
           setValueWithPlan(valueWithPlan);
        }else {
           const withPlan = 0.00;
           setValueWithPlan(valueWithPlan);
    }  
}
    function pricingNoPlanCall(data: IFormInput) {
       const withoutPlan = data.minutes*routecall[data.selectedDddO][data.selectedDddF]*0.9
       setValueWithoutPlan(valueWithoutPlan);

    }

    console.log(data)
    console.log(valueWithPlan)
    console.log(valueWithoutPlan)
    
    return (
    <S.Container onSubmit={handleSubmit(onSubmit)}>
      <label>Select your plan</label>   
          <S.FormSelect {...register("selectedPlan")}>
              <option value="FaleMais30">FaleMais30</option>
              <option value="FaleMais60">FaleMais60</option>
              <option value="FaleMais120">FaleMais120</option>
          </S.FormSelect>
        <br/>  
      <label>DDD Origin
      <S.FormSelect {...register("selectedDddO")}>
              <option value="11">11</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
          </S.FormSelect>
    </label>
    <br/>      
      <label>DDD Destiny
        <S.FormSelect {...register("selectedDddF")}>
              <option value="11">11</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
        </S.FormSelect>
      </label>
      <br/>    
      <label>Minutos</label>
      <S.FormInput {...register("minutes")}/>
      <br/>  
      <S.FormButton type="submit">Calculate</S.FormButton>
      </S.Container>
    );
}

export default Form;