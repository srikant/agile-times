import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-alltimes',
  templateUrl: './alltimes.component.html',
  styleUrls: ['./alltimes.component.css']
})
export class AlltimesComponent implements OnInit {

  allTimesheetData = [

    { user: 'Glen', project: 'Payroll App', category: 'Backend', startTime: 1000, endTime: 1700, date: 1434243 },
    { user: 'Karen', project: 'Agile Times', category: 'Frontend', startTime: 900, endTime: 1700, date: 1434243 },
    { user: 'Si', project: 'Mobile App', category: 'Operations', startTime: 1100, endTime: 1700, date: 1434243 },
    { user: 'Rohit', project: 'Agile Times', category: 'Backend', startTime: 800, endTime: 1700, date: 1434243 },

  ];

  allProjectNames = ['', 'Payroll App', 'Mobile App', 'Agile Times'];

  allProjects = this.allProjectNames.map((proj) => {
    return { label: proj, value: proj };
  });

  // selectedRow: any;
  selectedRows: Array<any>;

  contextMenu: MenuItem[];

  recordCount: number;
  constructor() {
    for (let x = 0; x < 5; x++) {
      this.allTimesheetData = this.allTimesheetData.concat(this.allTimesheetData);
    }
  }

  ngOnInit() {
    this.contextMenu = [
      { label: 'Debug', icon: 'fa fa-bug', command: (event) => this.onDebug(this.selectedRows) },
      { label: 'Delete', icon: 'fa fa-close', command: (event) => this.onDelete(this.selectedRows) }
    ];
    this.recordCount = this.allTimesheetData.length;
  }

  onDebug(selectedRows: any) {
    console.log(JSON.stringify(selectedRows));
  }

  onDelete(selectedRows: any) {
    this.allTimesheetData = this.allTimesheetData.filter((row) => {
      return !selectedRows.includes(row);
    });
  }

  onEditComplete(editInfo) {
    const fieldChanged = editInfo.column.field;
    const newRowValues = editInfo.data;
    alert(`You edited ${fieldChanged} to ${newRowValues[fieldChanged]}`);
  }

  onRowSelect(rowInfo) {
    alert(JSON.stringify(rowInfo.data)); // or this.selectedRow
  }

}
