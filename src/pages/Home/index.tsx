import { Play } from 'phosphor-react';
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { useState, useEffect } from 'react';
import { differenceInSeconds } from 'date-fns';

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Inform the task'),
    minutesAmount: zod
        .number()
        .min(5, 'The cycle needs to be at least 5 minutes')
        .max(5, 'The cycle needs to be at most 60 minutes')
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;
 
interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
    startDate: Date;
}

export function Home(){
    const [cycles, setCycles] = useState<Cycle[]>([]);
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);


    const { register, handleSubmit, watch, reset} = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    });
    
    // Zod validation
    // formState from useForm
    // console.log(formState.errors)
    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

    useEffect(() => {
        if(activeCycle) {
            setInterval(() => {
                setAmountSecondsPassed(
                    differenceInSeconds(new Date(), activeCycle.startDate),
                )
            }, 1000)
        }
    }, [activeCycle])

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

        reset();
    };

    
    
    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

    const minutesAmount = Math.floor(currentSeconds / 60);
    const secondsAmount = currentSeconds % 60;

    const minutes = String(minutesAmount).padStart(2, '0');
    const seconds = String(secondsAmount).padStart(2, '0');

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
                        <span>{minutes[0]}</span>
                        <span>{minutes[1]}</span>
                        <Separator>:</Separator>
                        <span>{seconds[0]}</span>
                        <span>{seconds[1]}</span>
                    </CountdownContainer>

                    <StartCountdownButton type="submit" disabled={isSubmitDisable}>
                        <Play size={24}/>
                        Start
                    </StartCountdownButton>
                </form>
            </HomeContainer>
    )
}
        