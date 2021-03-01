import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  constructor(private http: HttpClient) { }

  private urlGeneral = "http://locahost:3004/api/auto";

  crearAuto(auto :any) {
    return this.http.post<any>(this.urlGeneral, auto);
  }

  editarAuto(auto :any) {
    return this.http.put<any>(this.urlGeneral, auto);
  }

  listarAuto() {
    return this.http.get<any>(this.urlGeneral + "/listaAutos");
  }

  eliminarAuto(auto :any) {
    return this.http.delete<any>(this.urlGeneral +"/" +auto._id);
  }


}
