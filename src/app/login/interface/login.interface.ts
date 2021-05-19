

export interface Welcome {
    id?:           number;
    nit:          number;
    name:         string;
    description?:  string;
    direction?:    string;
    phoneNumber?:  string;
    listaJournal?: ListaJournal[];
    
}

export interface EmpresaPost {
    nit:          number;
    name:         string;
    description?:  string;
    direction?:    string;
    phoneNumber?:  string;
}

export interface ListaJournal {
    id?:          number;
    code?:        number;
    debit?:       number;
    credit?:      number;
    description?: string;
    date?:        Date;
}
