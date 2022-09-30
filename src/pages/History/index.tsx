import { HistoryContainer, HistoryList } from "./styles";

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
                            <td>Done</td>
                        </tr>
                        <tr>
                            <td>Tasks</td>
                            <td>20 minutes</td>
                            <td>About 2 mounths</td>
                            <td>In progress</td>
                        </tr>
                        <tr>
                            <td>Tasks</td>
                            <td>20 minutes</td>
                            <td>About 2 mounths</td>
                            <td>Interrupted</td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    )
}