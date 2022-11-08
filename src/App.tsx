import React, {useState} from 'react';
import {useForm, SubmitHandler} from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import './App.css';

interface IFormInput {
    name: string;
    email: string;
    password: string;
}

function App() {
    const {register,formState: {errors}, handleSubmit} = useForm<IFormInput>({
        criteriaMode: "all"
    });
    const [data, setData] = useState("");

    return (
        <div className="account">
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
            <div className="account_entry">
               <h2>Log in</h2>
            </div>
            {/*<label className="">name</label>*/}
            {/*<div className="">*/}
            {/*    <input type={"text"} autoComplete={"text"} {...register("name", {required: "this input is required"})} placeholder="Name"/>*/}
            {/*</div>*/}
            {/*<p>{errors.name?.message}</p>*/}
            <label className="account_entry--input-label" >Email</label>
            <div className="account_entry">
                <input className="input-main" type={"email"} autoComplete={"email"} {...register("email", {required: "this input is required"})} placeholder="Email"/>
            </div>
            <label className="account_entry--input-label">Password</label>
            <div className="account_entry">
                <div className="password-input-wrapper">
                    <input type={"password"} className="password-input" autoComplete={"current-password"} {...register("password", {required: "this input is required", minLength:{value:8, message:"This input must exceed 8 characters"}, pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/, message:"Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"}, })} placeholder="Password"/>
                </div>
                <p>{data}</p>
            </div>
            <ErrorMessage
            errors={errors}
            name="password"
            render={({messages}) => {
                console.log("messages", messages);
                return messages
                    ? Object.entries(messages).map(([type, message]) => (<p key={type}>{message}</p>)) : null;
            }}/>
            <input type="submit" className="account_entry btn-normal btn" value={"Submit"}/>
        </form>
        </div>
    );
}

export default App;
