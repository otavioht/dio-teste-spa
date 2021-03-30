import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-alunos",
  templateUrl: "./alunos.component.html",
  styleUrls: ["./alunos.component.scss"],
})
export class AlunosComponent implements OnInit {
  @Input() valorInicial = 10;
  constructor() {}

  ngOnInit() {}
}
