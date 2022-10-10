import { Play, HandPalm } from 'phosphor-react';
import { HomeContainer, StartCountdownButton, StopCountdownButton } from "./styles";
import { useContext} from 'react';
import { NewCycleForm } from './Components/NewCycleForm';
import { Countdown } from './Components/Countdown';
import { FormProvider, useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CyclesContext } from '../../contexts/CyclesContext';


const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Inform the task'),
    minutesAmount: zod
        .number()
        .min(5, 'The cycle needs to be at least 5 minutes')
        .max(60, 'The cycle needs to be at most 60 minutes')
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {

    const { activeCycle, createNewCycle, interruptCurrentCycle } = 
    useContext(CyclesContext);
   

    const newCycleForm = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    });

    
    // Zod validation
    // formState from useForm
    // console.log(formState.errors)
    
    const { handleSubmit, watch, /*reset*/ } = newCycleForm;

    const task = watch('task');
    const isSubmitDisable = !task;
  
    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(createNewCycle)} >
               
                    <FormProvider {...newCycleForm}>
                        <NewCycleForm />
                    </FormProvider> 
                    <Countdown/>
              
               
                {activeCycle ? (
                    <StopCountdownButton onClick={interruptCurrentCycle} type='button'>
                        <HandPalm size={24} />
                        Interrupt
                    </StopCountdownButton>

                ) : (
                    <StartCountdownButton type="submit" disabled={isSubmitDisable}>
                        <Play size={24} />
                        Start
                    </StartCountdownButton>
                )}
            </form>
        </HomeContainer>
    )
}
