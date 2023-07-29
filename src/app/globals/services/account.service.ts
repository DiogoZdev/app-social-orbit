import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ILoginData, IRegisterData } from "../interfaces/login.interface";

@Injectable()
export class AccountService {
    constructor(
        private http: HttpClient
    ) { }

    async register({email, password, name}: IRegisterData) {
        console.log(email, password, name)
        return this.http.post(environment.api + "/user", { email, password, name });
    }

    async login({ email, password }: ILoginData) {
        return this.http.post(environment.api + "/auth/login", { email, password });
    };

    logout() {
        return localStorage.removeItem("token");
    }
}