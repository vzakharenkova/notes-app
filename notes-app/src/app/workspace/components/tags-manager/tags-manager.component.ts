import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
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

  constructor(private workspaceService: WorkspaceService) {}

  ngOnInit(): void {
    this.workspaceService.getTags().subscribe((res) => (this.tags = res.tags));
  }
}
