import { Play } from 'phosphor-react';
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";
import { useForm } from 'react-hook-form';
 
export function Home(){

    const { register, handleSubmit, watch } = useForm();

    function handleCreateNewCycle(data: any) {
        console.log(data);
    };

    const task = watch('task');
    const isSubmitDisable = !task;


    return (
            <HomeContainer>
                <form onSubmit={handleSubmit(handleCreateNewCycle)}>
                    <FormContainer>
                        <label htmlFor="task">Work in</label>
                        <TaskInput 
                            id='task' 
                            list='task-suggestions'
                            placeholder='Name your project'
                            {...register('task')}

                        />

                        <datalist id='task-suggestions'>
                            <option value="Project 1"></option>
                            <option value="Project 2"></option>
                            <option value="Project 3"></option>
                            <option value="Project 4"></option>

                        </datalist>

                        <label htmlFor="minutesAmount">for</label>
                        <MinutesAmountInput 
                            type="number" 
                            id="minutesAmout" 
                            placeholder='00'
                            step={5}
                            min={5}
                            max={60}
                            {...register('minutesAmount', { valueAsNumber: true})}
                        />

                        <span>minutes</span>    
                    </FormContainer>

                    <CountdownContainer>
                        <span>0</span>
                        <span>0</span>
                        <Separator>:</Separator>
                        <span>0</span>
                        <span>0</span>
                    </CountdownContainer>

                    <StartCountdownButton type="submit" disabled={isSubmitDisable}>
                        <Play size={24}/>
                        Start
                    </StartCountdownButton>
                </form>
            </HomeContainer>
    )
}
        