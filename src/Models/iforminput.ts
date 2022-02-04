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



export default interface IFormInput {
  
selectedPlan: PlanEnum;
selectedDddO: DddOrigin;
selectedDddF: DddFinal;
minutes: number;
    
};

