import { FormContainer, MinutesAmountInput, TaskInput } from "../../styles";

export function NewCycleForm() {
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