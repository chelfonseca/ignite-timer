import { FormContainer, MinutesAmountInput, TaskInput } from "../../styles";
import * as zod from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';


const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Inform the task'),
    minutesAmount: zod
        .number()
        .min(5, 'The cycle needs to be at least 5 minutes')
        .max(60, 'The cycle needs to be at most 60 minutes')
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function NewCycleForm() {

    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    });

    // Zod validation
    // formState from useForm
    // console.log(formState.errors)

    return (
        <FormContainer>
                    <label htmlFor="task">Work in</label>
                    <TaskInput
                        id='task'
                        list='task-suggestions'
                        placeholder='Name your project'
                        disabled={!!activeCycle}
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
                        disabled={!!activeCycle}
                        {...register('minutesAmount', { valueAsNumber: true })}
                    />

                    <span>minutes</span>
                </FormContainer>

               
    )
}