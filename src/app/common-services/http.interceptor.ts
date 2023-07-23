
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Puedes realizar tareas adicionales aquí antes de enviar la solicitud HTTP,
    // como agregar encabezados personalizados, modificar la solicitud, etc.

    // Clonar la solicitud para evitar problemas con la inmutabilidad de objetos.
    const clonedRequest = request.clone();

    return next.handle(clonedRequest).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // Puedes realizar tareas adicionales aquí después de recibir la respuesta HTTP,
          // como analizar la respuesta, procesar datos, etc.
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        // Puedes manejar errores aquí y realizar acciones específicas según el tipo de error.
        // Por ejemplo, mostrar mensajes de error, redirigir a una página de error, etc.
        return throwError(error);
      })
    );
  }
}