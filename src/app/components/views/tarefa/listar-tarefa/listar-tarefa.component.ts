import { Component, OnInit } from "@angular/core";
import { Tarefa } from "src/app/models/tarefa";
import { TarefaService } from "src/app/services/tarefa.service";

@Component({
    selector: "app-listar-tarefa",
    templateUrl: "./listar-tarefa.component.html",
    styleUrls: ["./listar-tarefa.component.css"],
})
export class ListarTarefaComponent implements OnInit {
    tarefas: Tarefa[] = [];

    constructor(private service: TarefaService) {}

    ngOnInit(): void {
        this.service.list().subscribe((tarefas) => {
            this.tarefas = tarefas;
            console.log(tarefas);
        });
    }
}
