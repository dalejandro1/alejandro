import{ NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AeropressComponent } from './component/Aeropress/Aeropress.component';
import { ChemexComponent } from './component/Chemex/Chemex.component';
import { V60Component } from './component/V60/V60.component';


const  routes: Routes =[
{path: "aeropress", component: AeropressComponent},
{path: "chemex", component: ChemexComponent},
{path: "v60", component: V60Component},
    
    {path: '**', pathMatch: 'full', redirectTo:'aeropress'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}