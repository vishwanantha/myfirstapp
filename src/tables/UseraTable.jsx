const UserTable=({users})=>(
    <table>
        <thead>
            <tr>
                <th>name</th>
                <th>username</th>
                <th>action</th>
            </tr>
        </thead>
        
        <tbody>
        
        {props.users && props.users.map((dat)=>(
                
                <tr key={dat.id}>
                <td>{dat.name}</td>
                <td>{dat.usernamd}</td>
                <td>
                    <button className="button muted-button">edit</button>
                    <button className="button muted-button">delete</button>
                </td>
    </tr>
                ))
        
            }
        </tbody>
    </table>


)
export  default UserTable;