export class InscricaoViagem {
    constructor(
        public Nome?: string,
        public RG?: number,
        public Email?: string,
        public CPF?: number,
        public Celular?: number,
        public DataNascimento?: Date,
        public Pagamento?: string,
        public Parcela?: number,
        public Responsavel?: string,
    ) { }
}
