export interface Puc {
  concepto:     string;
  naturaleza:   Naturaleza;
  cod_contable: number;
}

export enum Naturaleza {
  Credito = "Credito",
  Debito = "Debito",
}
