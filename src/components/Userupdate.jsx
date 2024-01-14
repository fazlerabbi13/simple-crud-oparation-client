import { useLoaderData } from "react-router-dom";

const Userupdate = () => {
    const loadeduser = useLoaderData()
    console.log(loadeduser)
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = { name, email };
        console.log(updatedUser)

        fetch(`http://localhost:5000/users/${loadeduser._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
           body:JSON.stringify(updatedUser)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
           if(data.modifiedCount>0){
            alert('user update successfuly')
           }
        })

    }
    return (
        <div>
            <h2>update user name:{loadeduser.name}</h2>

            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadeduser?.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={loadeduser?.email} id="" />
                <br />
                <input type="submit" value="Update" />
            </form>



        </div>
    );
};

export default Userupdate;