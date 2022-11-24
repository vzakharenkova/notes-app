import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';
import { WorkspaceService } from '../../services/workspace.service';

@Component({
  selector: 'app-tags-manager',
  templateUrl: './tags-manager.component.html',
  styleUrls: ['./tags-manager.component.scss'],
})
export class TagsManagerComponent implements OnInit {
  @Input() sideNav!: MatDrawer;

  searchTerm: string = '';

  tags: string[];

  constructor(private workspaceService: WorkspaceService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.workspaceService.getTags().subscribe((res) => (this.tags = res.tags));
  }

  openConfirmationModal(tag: string) {
    this.dialog.open(ConfirmationModalComponent, {
      data: {
        title: 'Delete tag',
        content: `#${tag}`,
        // handler: () => this.deleteTask(this.column, this.task),
      },
    });
  }
}
