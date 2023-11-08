import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';



@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    // Verifica si el token existe en el sessionStorage.
    const token = sessionStorage.getItem('token');
    if (token) {
      // Si existe un token, el usuario está autenticado y se le permite acceder.
      return true;
    }

    // Si no existe un token, redirige al usuario a la página de inicio de sesión.
    return this.router.parseUrl('/login');
  }
}

@Injectable({
    providedIn: 'root',
  })
  export class UnauthGuard implements CanActivate {
    constructor(private router: Router) {}
  
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): boolean | UrlTree {
      // Verifica si el token existe en el sessionStorage.
      const token = sessionStorage.getItem('token');
      if (!token) {
        // Si no existe un token, el usuario no está autenticado y se le permite acceder.
        return true;
      }
  
      // Si existe un token, redirige al usuario a una ruta donde debes manejar la lógica para usuarios autenticados.
      return this.router.parseUrl('/'); // Cambia '/home' por la ruta a la que deseas redirigir a usuarios autenticados.
    }
  }
