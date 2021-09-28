import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Tarefa } from "src/app/models/tarefa";
import { TarefaService } from "src/app/services/tarefa.service";

@Component({
    selector: "app-cadastrar-tarefa",
    templateUrl: "./cadastrar-tarefa.component.html",
    styleUrls: ["./cadastrar-tarefa.component.css"],
})
export class CadastrarTarefaComponent implements OnInit {
    titulo!: string;
    descricao!: string;
    estimativa!: string;
    responsavel!: string;

    constructor(private service: TarefaService, private router: Router) {}

    ngOnInit(): void {}

    create(): void {
        let tarefa: Tarefa = {
            titulo: this.titulo,
            descricao: this.descricao,
            estimativa: this.estimativa,
            responsavel: this.responsavel,
        };
        this.service.create(tarefa).subscribe((tarefa) => {
            this.router.navigate(["tarefa/listar"]);
        });
    }
}
