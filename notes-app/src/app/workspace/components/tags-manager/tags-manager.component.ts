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

  constructor(public dialog: MatDialog, private workspaceService: WorkspaceService) {}

  ngOnInit(): void {
    this.workspaceService.getTags().subscribe((tags) => (this.tags = tags));
  }

  openConfirmationModal(tag: string) {
    this.dialog.open(ConfirmationModalComponent, {
      data: {
        title: 'Delete tag',
        content: `#${tag}`,
        handler: () => this.deleteTag(tag),
      },
    });
  }

  checkTag(tag: string) {
    return this.workspaceService.checkTag(tag);
  }

  createNewTag(tag: string) {
    if (!this.checkTag(tag)) {
      this.workspaceService.createTag(tag);
    }
  }

  deleteTag(tag: string) {
    this.workspaceService.deleteTag(tag);
    this.dialog.closeAll();
  }
}
