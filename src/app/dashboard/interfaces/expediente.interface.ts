export interface Expediente {
    id:  number;
    causa_cod:      string;
    caratula:       string;
    nro_audiencias: number;
    registrado:     Date;
}

export enum Caratula {
    HomicidioAgravadoPorElVinculo = "Homicidio Agravado por el vinculo",
}

export enum CausaCod {
    LIF2032302023 = "LIF-203230-2023",
}