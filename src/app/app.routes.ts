import { Routes } from '@angular/router';
import { Users } from './users/users/users';
import { AddMenuItem } from './menu/add-menu-item/add-menu-item';


export const routes: Routes = [
    {
        path : 'users',
        component : Users
    },
    {
        path : 'AddMenuItem',
        component : AddMenuItem
    },
    {
        path : '**',
        redirectTo : 'users'
    }

];
