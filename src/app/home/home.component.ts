import { Component, OnInit } from "@angular/core";
import { Aluno } from "../model/aluno";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  valor: number;
  exibeTabela: boolean = false;

  listaAlunos: Aluno[] = [
    {
      nome: "Camila",
      idade: 27,
      email: "camila.taruma@gmail.com",
      curso: "Ciencia da Computacao",
    },
    {
      nome: "Teste",
      idade: 25,
      email: "Teste@gmail.com",
      curso: "Analise e desenvolvimento de sistemas",
    },
    {
      nome: "Teste 2",
      idade: 31,
      email: "Teste2@gmail.com",
      curso: "Engenharia da computacao",
    },
    {
      nome: "Teste 3",
      idade: 45,
      email: "Teste3@gmail.com",
      curso: "Sistemas da informacao",
    },
  ];

  displayedColumns: string[] = ["Nome", "Idade", "E-mail", "Curso"];

  ngOnInit(): void {
    this.valor = 5;
  }

  mudarValor() {
    this.valor++;
  }

  reiniciarValor() {
    this.valor = 0;
  }

  exibirTabela() {
    this.exibeTabela = true;
  }
}
