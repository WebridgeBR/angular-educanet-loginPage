import { Component, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";

/** @title Sidenav with custom escape and backdrop click behavior */
@Component({
  selector: "sidenav-disable-close-example",
  templateUrl: "sidenav-disable-close-example.html",
  styleUrls: ["sidenav-disable-close-example.css"]
})
export class SidenavDisableCloseExample {
  @ViewChild("sidenav") sidenav: MatSidenav;
  menuLinks = [
    {
      menuTitle: "Tabelas Auxiliares Adm",
      menuDescription: "Sessão responsável pela gestão de alunos",
      icon: "school"
    },
    {
      menuTitle: "Merenda Escolar",
      menuDescription: "Sessão responsável pela merenda escolar",
      icon: "local_dining"
    },
    {
      menuTitle: "Unidade Educacional",
      menuDescription: "Sessão responsável pela Unidade Educacional",
      icon: "local_library"
    },
    {
      menuTitle: "Profissionais",
      menuDescription: "Sessão responsável pela Profissionais",
      icon: "work"
    },
    {
      menuTitle: "Movimentação Prov",
      menuDescription: "Sessão responsável pela Movimentação Prov",
      icon: "money"
    },
    {
      menuTitle: "Tabelas Auxiliares Adm",
      menuDescription: "Sessão responsável pela gestão de alunos",
      icon: "school"
    },
    {
      menuTitle: "Merenda Escolar",
      menuDescription: "Sessão responsável pela merenda escolar",
      icon: "local_dining"
    },
    {
      menuTitle: "Unidade Educacional",
      menuDescription: "Sessão responsável pela Unidade Educacional",
      icon: "local_library"
    },
    {
      menuTitle: "Profissionais",
      menuDescription: "Sessão responsável pela Profissionais",
      icon: "work"
    },
    {
      menuTitle: "Movimentação Prov",
      menuDescription: "Sessão responsável pela Movimentação Prov",
      icon: "money"
    }
  ];
  menuLinksBackup = this.menuLinks;
  close() {
    this.sidenav.close();
  }
  filterItem(value: string) {
    if (value !== "") {
      this.menuLinks = this.menuLinksBackup.filter(
        item => item.menuTitle.toLowerCase().indexOf(value.toLowerCase()) > -1
      );
    } else {
      this.menuLinks = this.menuLinksBackup;
    }
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
