import { Routes } from '@angular/router';
import { Users } from './users/users/users';
import { AddMenuItem } from './menu/add-menu-item/add-menu-item';
import { AddUser } from './users/add-user/add-user';
import { EditUser } from './users/edit-user/edit-user';
import { MenuItems } from './menu/menu-items/menu-items';
import { Sidebar } from './layout/sidebar/sidebar';
import { Dashboard } from './dashboard/dashboard/dashboard';


export const routes: Routes = [
    {
        path : 'users',
        component : Users
    },
    {
        path : 'adduser',
        component : AddUser

    },
    {
        path: 'edituser',
        component : EditUser
    },

    {
        path : 'AddMenuItem',
        component : AddMenuItem
    },
    {path : 'MenuItems',
        component : MenuItems
    },
    {
        path : 'sidebar',
        component : Sidebar
    },
     {
        path : 'dashboard',
        component : Dashboard
    },
    {
        path : '**',
        redirectTo : 'users'
    }

];
