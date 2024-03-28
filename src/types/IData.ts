export interface IData {
  titulo: string;
  categoria: string;
  cores: {
    nome: string;
    codigo: string;
  }[];
  tamanhos: string[];
  valor: string;
  descricao: string;
  fotos: {
    url: string;
    capa: boolean;
  }[];
}
