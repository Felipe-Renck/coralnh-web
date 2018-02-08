export class User {
    constructor(
        public Nome?: string,
        public RG?: number,
        public OrgaoEmissorRG?: string,
        public Email?: string,
        public Telefone?: number,
        public Celular?: number,
        public Whatsapp?: boolean,
        public DataNascimento?: Date,
        public TipoSanguineo?: string,
        public Observacoes?: string
    ) { }
}
