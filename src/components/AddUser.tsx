import IUserData from "../../types/user.type";
import UserDataService from "../services/user.service";
import React, {useState} from 'react';
import Layout from "../Layout";

// const AddUser = (props: IUserData) => {
// //name email password target.value -> stan
//     const [user, setUser] = useState<IUserData> ({
//         name: "",
//         email: "",
//         password: ""
//     });
//         UserDataService.create(props).then((response: any) => {
//             setUser({
//                 name: response.props.name,
//                 email: response.props.email,
//                 password: response.props.password
//             });
//             console.log(response.props);
//         }).catch((e: Error) => {
//             console.log(e);
//         });
//     return (
//         <h4>You register successfully!</h4>
//     );
// }
// export default AddUser;
