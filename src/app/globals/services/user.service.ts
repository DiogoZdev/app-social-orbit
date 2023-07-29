import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
    
    getUser() {
        let user = localStorage.getItem("user");
        if (user) return JSON.parse(user)
    }
}   