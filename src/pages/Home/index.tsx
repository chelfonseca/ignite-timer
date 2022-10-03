import { Play, HandPalm } from 'phosphor-react';
import { HomeContainer, StartCountdownButton, StopCountdownButton } from "./styles";
import { useState, useEffect } from 'react';
import { NewCycleForm } from './Components/NewCycleForm';
import { Countdown } from './Components/Countdown';

interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
    startDate: Date;
    interruptedDate?: Date;
    finishedDate?: Date;
}

export function Home() {
    const [cycles, setCycles] = useState<Cycle[]>([]);
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
    
    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);
        
    function handleCreateNewCycle(data: NewCycleFormData) {
        const id = String(new Date().getTime());

        const newCycle: Cycle = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),
        }

        setCycles((state) => [...state, newCycle]);
        setActiveCycleId(id);
        setAmountSecondsPassed(0);

        reset();
    };

    function handleInterruptCycle() {
        setCycles((state) => 
            state.map((cycle) => {
                if (cycle.id === activeCycleId) {
                    return { ...cycle, interruptedDate: new Date() }
                } else {
                    return cycle
                }
            })
        )
        setActiveCycleId(null);
    }

    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

    const minutesAmount = Math.floor(currentSeconds / 60);
    const secondsAmount = currentSeconds % 60;

    const minutes = String(minutesAmount).padStart(2, '0');
    const seconds = String(secondsAmount).padStart(2, '0');

    useEffect(() => {
        if (activeCycle) {
            document.title = ` ${minutes}:${seconds}`
        }
    }, [minutes, seconds, activeCycle])

    const task = watch('task');
    const isSubmitDisable = !task;
    console.log(cycles);


    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)}>
                <NewCycleForm/>
                <Countdown
                    activeCycle={activeCycle}
                    setCycles={setCycles}
                    activeCycleId={activeCycleId}
                />

                {activeCycle ? (
                    <StopCountdownButton onClick={handleInterruptCycle} type='button'>
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
