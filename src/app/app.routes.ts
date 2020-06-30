import { RouterModule, Routes } from "@angular/router";

// PAGINA WEB
import { PwComponent } from "./components/pw/pw.component";
// Log In
import { LogInSWComponent } from "./components/sw/log-in-sw/log-in-sw.component";

const routes: Routes = [
  { path: "", component: PwComponent },
  { path: "LogIn", component: LogInSWComponent },
];

export const APP_ROUTES = RouterModule.forRoot(routes);
