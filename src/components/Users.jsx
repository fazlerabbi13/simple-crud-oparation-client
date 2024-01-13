import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedData = useLoaderData()
    return (
        <div>
            {loadedData.length}
            <div>
            {
                loadedData.map(user => <p key={user._id}>{user.name} :{user.email}</p>)
            }
            </div>
        </div>
    );
};

export default Users;