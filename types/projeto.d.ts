declare namespace Projeto {
    type Usuario = {
        length: number;
        id?: number;
        nome?: string;
        login?: string;
        senha?: string;
        email?: string;
    };

    type Recurso = {
        id?: number;
        nome: string;
        chave: string;
    };
}
