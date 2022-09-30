import { HistoryContainer, HistoryList, Status} from "./styles";

export function History(){
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