import * as S  from './styles'
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import IFormInput from '../../Models/iforminput' 
import { franchising, routecall } from '../../utils/calculate';


const Form = () => {
    const [valueWithPlan, setValueWithPlan] = useState<number>();
    const [valueWithoutPlan, setValueWithoutPlan] = useState<number>();
    const { register, handleSubmit } = useForm<IFormInput>();
    function onSubmit(data: IFormInput) {
           setValueWithoutPlan(data.minutes*routecall[data.selectedDddO][data.selectedDddF]*0.9);
        if(data.minutes>franchising[data.selectedPlan]){
           setValueWithPlan((data.minutes-franchising[data.selectedPlan])*routecall[data.selectedDddO][data.selectedDddF]);
        }else {
           setValueWithPlan(0.00);
    }
}

    
    
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
      <S.PriceColumn>
      <S.PriceHeader>
        <S.PricePlan>
          <S.DolarSign>$</S.DolarSign>
          {valueWithPlan?.toFixed(1)}
        </S.PricePlan>
        <S.SelectedPlan>FaleMais</S.SelectedPlan>
      </S.PriceHeader>
      </S.PriceColumn>
      <S.PriceColumnSec>
        <S.PriceHeader>
          <S.PriceNoPlan>
            <S.DolarSign>$</S.DolarSign>
            {valueWithoutPlan?.toFixed(1)}
          </S.PriceNoPlan>
          <S.SelectedPlan>SemPlano</S.SelectedPlan>
        </S.PriceHeader>
      </S.PriceColumnSec>
      </S.Container>
    );
}

export default Form;