import { Play } from 'phosphor-react';
import { CountdownContainer, FormContainer, HomeContainer, Separator } from "./styles";

export function Home(){
    return (
            <HomeContainer>
                <form>
                    <FormContainer>
                        <label htmlFor="task">Work in</label>
                        <input id="task"/>

                        <label htmlFor="minutesAmount">for</label>
                        <input type="number" id="minutesAmout" />

                        <span>minutes</span>    
                    </FormContainer>

                    <CountdownContainer>
                        <span>0</span>
                        <span>0</span>
                        <Separator>:</Separator>
                        <span>0</span>
                        <span>0</span>
                    </CountdownContainer>

                    <button type="submit">
                        <Play size={24}/>
                        Start
                    </button>
                </form>
            </HomeContainer>
    )
}
        