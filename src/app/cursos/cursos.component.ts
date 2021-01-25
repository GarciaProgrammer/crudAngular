import { CursoService } from './curso.service';
import { Curso } from './Curso';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  private vetorCursos: Curso[];
  private curso: Curso;
  private id: number;

  constructor(private servico: CursoService) {}

  ngOnInit() {
    this.id = -1;
    this.curso = new Curso();
    this.vetorCursos = this.servico.listarCurso();
  }

  cadastrar() {
    this.servico.cadastrarCurso(this.curso);
    this.curso = new Curso();
  }

  excluirCurso(id: number) {
    this.servico.exclur(id);
    this.id = -1;
  }

  editarCurso(id: number) {
    this.id = id;
    this.curso = new Curso(
      this.vetorCursos[id].nomeCurso,
      this.vetorCursos[id].valorCurso,
      this.vetorCursos[id].areaCurso
    );
  }

  atualizar(){
     this.servico.alterar(this.id, this.curso);
     this.curso = new Curso();
     this.id = -1;

  }
}
