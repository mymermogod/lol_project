import * as S  from './styles'


import { useForm, SubmitHandler } from 'react-hook-form'


enum PlanEnum {
    falemais30 = "FaleMais30",
    falemais60 = "FaleMais60",
    falemais120 = "FaleMais120",
}

enum DddOrigin {
     dddo11 = "11",
     dddo16 = "16",
     dddo17 = "17",
     dddo18 = "18",

}

enum DddFinal {
    dddf11 = "11",
    dddf16 = "16",
    dddf17 = "17",
    dddf18 = "18",

}

interface IFormInput {
    selectedPlan: PlanEnum;
    selectedDddO: DddOrigin;
    selectedDddF: DddFinal;
    minutes: Number;
}



const Form = () => {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => {

        if(data.selectedPlan === "FaleMais30"){
            if(data.selectedDddO === "11"){
                if(data.selectedDddF === "16"){
                    const valueWithoutPlan = 1.9*0.9*data.minutes
                    if(data.minutes <= 30){
                    const valueWithPlan = 0
                    }else {
                    const valueWithPlan = (data.minutes-30)*1.9
                    }
                }
                if(data.selectedDddF === "17"){
                    const valueWithoutPlan = 1.7*0.9*data.minutes
                    if(data.minutes <= 30){
                        const valueWithPlan = 0
                        }else {
                        const valueWithPlan = (data.minutes-30)*1.7
                        }
                    }
                if(data.selectedDddF === "18"){
                    const valueWithoutPlan = 0.9*0.9*data.minutes
                    if(data.minutes <= 30){
                        const valueWithPlan = 0
                        }else {
                        const valueWithPlan = (data.minutes-30)*0.9
                        }
                    }
            } else if (data.selectedDddO === "16"){
                    if(data.selectedDddF === "11"){
                        const valueWithoutPlan = 2.9*0.9*data.minutes
                        if(data.minutes <= 30){
                        const valueWithPlan = 0
                        }else {
                        const valueWithPlan = (data.minutes-30)*2.9
                        }
                    }else{
                        const valueWithoutPlan = "-"
                        const valueWithPlan = "-"
                        }                              
            } else if (data.selectedDddO === "17"){
                        if(data.selectedDddF === "11"){
                            const valueWithoutPlan = 2.7*0.9*data.minutes
                            if(data.minutes <= 30){
                            const valueWithPlan = 0
                            }else {
                                const valueWithPlan = (data.minutes-30)*2.7
                            }
                        } else {
                            const valueWithoutPlan = "-"
                            const valueWithPlan = "-"
                            }
            } else if (data.selectedDddO === "18"){
                                if(data.selectedDddF === "11"){
                                    const valueWithoutPlan = 1.9*0.9*data.minutes
                                    if(data.minutes <= 30){
                                    const valueWithPlan = 0
                                    }else {
                                        const valueWithPlan = (data.minutes-30)*1.9
                                    }
                                }else {
                                    const valueWithoutPlan = "-"
                                    const valueWithPlan = "-"
                                    }
                                }
    
}
        else if(data.selectedPlan === "FaleMais60"){
            if(data.selectedDddO === "11"){
                if(data.selectedDddF === "16"){
                    const valueWithoutPlan = 1.9*0.9*data.minutes
                    if(data.minutes <= 60){
                    const valueWithPlan = 0
                    }else {
                    const valueWithPlan = (data.minutes-60)*1.9
                    }
                }
                if(data.selectedDddF === "17"){
                    const valueWithoutPlan = 1.7*0.9*data.minutes
                    if(data.minutes <= 60){
                        const valueWithPlan = 0
                        }else {
                        const valueWithPlan = (data.minutes-60)*1.7
                        }
                    }
                if(data.selectedDddF === "18"){
                    const valueWithoutPlan = 0.9*0.9*data.minutes
                    if(data.minutes <= 60){
                        const valueWithPlan = 0
                        }else {
                        const valueWithPlan = (data.minutes-60)*0.9
                        }
                    }
            } else if (data.selectedDddO === "16"){
                    if(data.selectedDddF === "11"){
                        const valueWithoutPlan = 2.9*0.9*data.minutes
                        if(data.minutes <= 60){
                        const valueWithPlan = 0
                        }else {
                        const valueWithPlan = (data.minutes-60)*2.9
                        }
                    }else{
                        const valueWithoutPlan = "-"
                        const valueWithPlan = "-"
                        }                              
            } else if (data.selectedDddO === "17"){
                        if(data.selectedDddF === "11"){
                            const valueWithoutPlan = 1.9*0.9*data.minutes
                            if(data.minutes <= 60){
                            const valueWithPlan = 0
                            }else {
                                const valueWithPlan = (data.minutes-60)*2.7
                            }
                        } else {
                            const valueWithoutPlan = "-"
                            const valueWithPlan = "-"
                            }
            } else if (data.selectedDddO === "18"){
                                if(data.selectedDddF === "11"){
                                    const valueWithoutPlan = 1.9*0.9*data.minutes
                                    if(data.minutes <= 60){
                                    const valueWithPlan = 0
                                    }else {
                                        const valueWithPlan = (data.minutes-60)*1.9
                                    }
                                }else {
                                    const valueWithoutPlan = "-"
                                    const valueWithPlan = "-"
                                    }
                                }
        }
        else {
        if(data.selectedDddO === "11"){
            if(data.selectedDddF === "16"){
                const valueWithoutPlan = 1.9*0.9*data.minutes
                if(data.minutes <= 120){
                const valueWithPlan = 0
                }else {
                const valueWithPlan = (data.minutes-120)*1.9
                }
            }
            if(data.selectedDddF === "17"){
                const valueWithoutPlan = 1.7*0.9*data.minutes
                if(data.minutes <= 120){
                    const valueWithPlan = 0
                    }else {
                    const valueWithPlan = (data.minutes-120)*1.7
                    }
                }
            if(data.selectedDddF === "18"){
                const valueWithoutPlan = 0.9*0.9*data.minutes
                if(data.minutes <= 120){
                    const valueWithPlan = 0
                    }else {
                    const valueWithPlan = (data.minutes-120)*0.9
                    }
                }
        } else if (data.selectedDddO === "16"){
                if(data.selectedDddF === "11"){
                    const valueWithoutPlan = 2.9*0.9*data.minutes
                    if(data.minutes <= 120){
                    const valueWithPlan = 0
                    }else {
                    const valueWithPlan = (data.minutes-120)*2.9
                    }
                }else{
                    const valueWithoutPlan = "-"
                    const valueWithPlan = "-"
                    }                              
        } else if (data.selectedDddO === "17"){
                    if(data.selectedDddF === "11"){
                        const valueWithoutPlan = 1.9*0.9*data.minutes
                        if(data.minutes <= 120){
                        const valueWithPlan = 0
                        }else {
                            const valueWithPlan = (data.minutes-120)*2.7
                        }
                    } else {
                        const valueWithoutPlan = "-"
                        const valueWithPlan = "-"
                        }
        } else if (data.selectedDddO === "18"){
                            if(data.selectedDddF === "11"){
                                const valueWithoutPlan = 1.9*0.9*data.minutes
                                if(data.minutes <= 120){
                                const valueWithPlan = 0
                                }else {
                                    const valueWithPlan = (data.minutes-120)*1.9
                                }
                            }else {
                                const valueWithoutPlan = "-"
                                const valueWithPlan = "-"
                                }
                            } 
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
     </S.Container>

);

}

export default Form;