import { Routes } from '@angular/router';
import { Users } from './users/users/users';


export const routes: Routes = [
    {
        path : 'users',
        component : Users
    },
    {
        path : '**',
        redirectTo : 'users'
    }

];
