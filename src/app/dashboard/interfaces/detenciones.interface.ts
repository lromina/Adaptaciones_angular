
export interface Detencion {
  persona: Persona;
  detencion_id:  number;
  fecha:         string;
  cantidad_dias: number;
  numero_documento: number;
  dependencia_id: number;
  delito:        string;
}

export interface Dependencia {
  dependencia_id: number;
  descripcion:    Descripcion;
}

export enum Descripcion {
  COMISARÍA1RaALCAIDÍACURUZUCUATIA = "COMISARÍA 1ra. ALCAIDÍA - CURUZU CUATIA",
  COMISARÍA2DaCURUZUCUATIA = "COMISARÍA 2da. - CURUZU CUATIA",
  UnidadPenalNro9PasoDeLosLibres = "UNIDAD PENAL NRO 9 PASO DE LOS LIBRES",
}

export interface Persona {
  numero_documento: number;
  apellido:         string;
  nombre:           string;
  fecha_nacimiento: Date;
}
