import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";
import './App.css';
import {Link} from "react-router-dom";
import IUserData from "../types/user.type";
import UserDataService from "./services/user.service";

interface IFormInput {
    name: string;
    email: string;
    password: string;
}

const Layout = () => {
    const {register, formState: {errors}, handleSubmit} = useForm<IUserData> ({
        criteriaMode: "all"
    });
    const onSubmit = (data: IUserData) => {
        console.log (data);
        UserDataService.create (data);
        return (<AddUser name={data.name} email={data.email} password={data.password}/>)
    };
    const [data, setData] = useState ("");
    const AddUser = (data: IUserData) => {
//name email password target.value -> stan
        console.log (JSON.stringify (data.name));
        const [user, setUser] = useState<IUserData> ({
            id: null,
            name: "",
            email: "",
            password: ""
        });
        UserDataService.create (data).then ((response: any) => {
            setUser ({
                name: response.props.name,
                email: response.props.email,
                password: response.props.password
            });
            console.log (response.props);
        }).catch ((e: Error) => {
            console.log (e);
        });
        return (
            <h4>You register successfully!</h4>
        );
    }
    return (
        <div className="account">
            <form onSubmit={handleSubmit (onSubmit)}>
                <div className="account_entry">
                    <h2>Register</h2>
                </div>
                <label className="account_entry--input-label">Name</label>
                <div className="account_entry">
                    <input type={"text"} className={"input-main"}
                           autoComplete={"text"} {...register ("name", {required: "this input is required"})}
                           placeholder="Name"/>
                </div>
                <p>{errors.name?.message}</p>
                <label className="account_entry--input-label">Email</label>
                <div className="account_entry">
                    <input className="input-main" type={"email"}
                           autoComplete={"email"} {...register ("email", {required: "this input is required"})}
                           placeholder="Email"/>
                </div>
                <label className="account_entry--input-label">Password</label>
                <div className="account_entry">
                    <div className="password-input-wrapper">
                        <input type={"password"} className="password-input"
                               autoComplete={"current-password"} {...register ("password", {
                            required: "this input is required",
                            minLength: {value: 8, message: "This input must exceed 8 characters"},
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/,
                                message: "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
                            },
                        })} placeholder="Password"/>
                    </div>
                    <p>{data}</p>
                </div>
                <ErrorMessage
                    errors={errors}
                    name="password"
                    render={({messages}) => {
                        console.log ("messages", messages);
                        return messages
                            ? Object.entries (messages).map (([type, message]) => (<p key={type}>{message}</p>)) : null;
                    }}/>
                <input type="submit" className="account_entry btn-normal btn" value={"Submit"}/>
            </form>
        </div>
    );
}

export default Layout;