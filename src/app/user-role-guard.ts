import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class UserRoleGuard implements CanActivate {

    constructor(private route : Router) {
        
    }
    canActivate(): boolean {
        // this.route.navigate(['home'])
        return true;
    }
}