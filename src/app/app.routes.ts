import { RouterModule, Routes } from "@angular/router";

// PAGINA WEB
import { PwComponent } from "./components/pw/pw.component";

const routes: Routes = [{ path: "", component: PwComponent }];

export const APP_ROUTES = RouterModule.forRoot(routes);
