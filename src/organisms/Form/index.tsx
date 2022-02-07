import * as S  from './styles'
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import IFormInput from '../../Models/iforminput' 
import { franchising, routecall } from '../../utils/calculate';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  selectedPlan: yup.string().required(),
  selectedDddO: yup.number().positive().integer().required(),
  selectedDddF: yup.number().positive().integer().required(),
  minutes: yup.number().positive().integer().required(),
}).required();

const Form = () => {
    const [noPath, setNoPath ] = useState<string>();
    const [valueWithPlan, setValueWithPlan] = useState<number>();
    const [valueWithoutPlan, setValueWithoutPlan] = useState<number>();
    const { register, handleSubmit, formState:{ errors } } = useForm<IFormInput>({resolver: yupResolver(schema)});
    function onSubmit(data: IFormInput) {
        if(data.minutes*routecall[data.selectedDddO][data.selectedDddF]*0.9 === 0) {
            setNoPath('Rota Inexistente!')
        }else
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
      <label>DDD Origin</label>
      <S.FormSelect {...register("selectedDddO")}>
              <option value="11">11</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
      </S.FormSelect>
    <br/>      
      <label>DDD Destiny</label>
        <S.FormSelect {...register("selectedDddF")}>
              <option value="11">11</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
        </S.FormSelect>
    <br/>    
      <label>Minutos</label>
      <S.FormInput {...register("minutes")}/>
      {errors.minutes && <p>{errors.minutes.message}</p>}
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