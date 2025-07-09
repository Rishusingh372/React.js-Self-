import { useState } from "react";

export default function Form() {
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value};
        });
    };
        
    let handleSubmit = (event) =>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName:"",
            username: "",
            password: "",
        })
    }
    return (
        <form>
            <label htmlFor="fullName">Full name</label>
            <input
                placeholder="enter full name"
                type="text"
                value={formData.fullName}
                id="fullName"
                name="fullName"
                onChange={handleInputChange}
            />
            <br /> <br />
            <br /><br />

            <label htmlFor="username">Username</label>
            <input
                placeholder="enter user name"
                type="text"
                value={formData.username}
                id="username"
                name="username"
                onChange={handleInputChange}
            />
            <br /><br />
            <br /><br />
            <label htmlFor="password">Username</label>
            <input
                placeholder="enter password"
                type="password"
                value={formData.password}
                id="password"
                name="password"
                onChange={handleInputChange}
            />

            <button type="submit">Submit</button>
        </form>
    );

}