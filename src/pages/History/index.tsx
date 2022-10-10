import { HistoryContainer, HistoryList, Status} from "./styles";
import { useContext } from "react";
import { CyclesContext } from '../../contexts/CyclesContext';

export function History(){
    const { cycles } = useContext(CyclesContext);

    return (
        <HistoryContainer>
            <h1>My history</h1>
            <pre>{JSON.stringify(cycles, null, 2)}</pre>

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
                        <tr>
                            <td>Tasks</td>
                            <td>20 minutes</td>
                            <td>About 2 mounths</td>
                            <td>
                                <Status statusColor="green">Done</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tasks</td>
                            <td>20 minutes</td>
                            <td>About 2 mounths</td>
                            <td>
                                <Status statusColor="yellow">In Progress</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tasks</td>
                            <td>20 minutes</td>
                            <td>About 2 mounths</td>
                            <td>
                                <Status statusColor="red">Interrupted</Status>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    )
}