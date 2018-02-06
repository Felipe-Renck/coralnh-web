export class User {
    constructor(
        public Nome?: string,
        public RG?: string,
        public OrgaoEmissorRG?: string,
        public Email?: string,
        public Telefone?: string,
        public Celular?: string,
        public Whatsapp?: string,
        public DataNascimento?: Date,
        public TipoSanguineo?: string,
        public Observacoes?: string
    ) { }
}