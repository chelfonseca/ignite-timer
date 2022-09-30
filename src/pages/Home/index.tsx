import { Play } from 'phosphor-react';
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";

export function Home(){
    return (
            <HomeContainer>
                <form>
                    <FormContainer>
                        <label htmlFor="task">Work in</label>
                        <TaskInput id='task' placeholder='Name your project'/>

                        <label htmlFor="minutesAmount">for</label>
                        <MinutesAmountInput 
                            type="number" 
                            id="minutesAmout" 
                            placeholder='00'
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

                    <StartCountdownButton type="submit">
                        <Play size={24}/>
                        Start
                    </StartCountdownButton>
                </form>
            </HomeContainer>
    )
}
        