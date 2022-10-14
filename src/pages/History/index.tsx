import { HistoryContainer, HistoryList, Status } from "./styles";
import { useContext } from "react";
import { CyclesContext } from '../../contexts/CyclesContext';
import { formatDistanceToNow } from "date-fns/esm";
import enUS from "date-fns/locale/en-US";

export function History() {
    const { cycles } = useContext(CyclesContext);

    return (
        <HistoryContainer>
            <h1>My history</h1>

            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Duration</th>
                            <th>Duration</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cycles.map((cycle) => {
                            return (
                                <tr key={cycle.id}>
                                    <td>{cycle.task}</td>
                                    <td>{cycle.minutesAmount} minutes</td>
                                    <td>
                                        {formatDistanceToNow(new Date(cycle.startDate), {
                                            addSuffix: true,
                                            locale: enUS,

                                        })}
                                    </td>
                                    <td>
                                        {cycle.finishedDate && (
                                            <Status statusColor='green'>Complete</Status>
                                        )}

                                        {cycle.interruptedDate && (
                                            <Status statusColor='red'>Interrupted</Status>
                                        )}

                                        {!cycle.finishedDate && !cycle.interruptedDate && (
                                            <Status statusColor='yellow'>In progress</Status>
                                        )}

                                    </td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    )
}