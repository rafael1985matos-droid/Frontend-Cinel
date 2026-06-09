import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: "", redirectTo: "welcome", pathMatch: "full"},
    {},


    /**ultima rota */
    {path: "**" },
];
