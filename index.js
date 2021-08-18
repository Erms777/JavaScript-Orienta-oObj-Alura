import {Cliente} from "./Clientes.js";
import { Gerente } from "./Funcinarios/Gerente.js";
import { Diretor } from "./Funcinarios/Diretor.js";
import { SistemaAutenticaçao } from "./SistemaAutenticaçao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456789");

const gerente = new Gerente("Ricardo", 5000, 12378945601);
gerente.cadastrarSenha("123456");

const cliente = new Cliente("Lais", 74185296300, "456");

const gerenteEstaLogado = SistemaAutenticaçao.login(gerente, "123456");
const diretorEstaLogado = SistemaAutenticaçao.login(diretor, "123456789");


const clienteEstaLogado = SistemaAutenticaçao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);