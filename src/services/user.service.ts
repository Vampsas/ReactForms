import http from "../http-common";
import IUserData from "../../types/user.type";

class UserDataService {
    getAll(){
        return http.get<Array<IUserData>>("/users");
    }
    get(id: string) {
        return http.get<Array<IUserData>>(`/users/${id}`);
    }
    create(data: IUserData) {
        return http.post<IUserData>("/users", data)
    }
    update(data: IUserData, id: any) {
        return http.put<any>(`/users/${id}`, data);
    }
    delete(id: any) {
        return http.delete<any>(`/users/${id}`);
    }
    deleteAll(){
        return http.delete<any>(`users`);
    }
    findByName(name: string){
        return http.get<Array<IUserData>>(`/users?name=${name}`);
    }
}
export default new UserDataService();
