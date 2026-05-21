import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-items-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './items-page.component.html',
  styleUrl: './items-page.component.scss',
})
export class ItemsPageComponent implements OnInit {
  private readonly itemsService = inject(ItemsService);

  items = signal<Item[]>([]);
  loading = signal(true);
  error = signal<string | null>(null);

  newTitle = '';
  newDescription = '';

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.loading.set(true);
    this.error.set(null);
    this.itemsService.getAll().subscribe({
      next: (items) => {
        this.items.set(items);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Could not connect to the API. Is the backend running?');
        this.loading.set(false);
      },
    });
  }

  addItem(): void {
    const title = this.newTitle.trim();
    if (!title) return;

    this.itemsService
      .create({ title, description: this.newDescription.trim() })
      .subscribe({
        next: (item) => {
          this.items.update((list) => [item, ...list]);
          this.newTitle = '';
          this.newDescription = '';
        },
        error: () => this.error.set('Failed to create item'),
      });
  }

  toggleComplete(item: Item): void {
    this.itemsService
      .update(item._id, { completed: !item.completed })
      .subscribe({
        next: (updated) =>
          this.items.update((list) =>
            list.map((i) => (i._id === updated._id ? updated : i))
          ),
      });
  }

  removeItem(id: string): void {
    this.itemsService.delete(id).subscribe({
      next: () =>
        this.items.update((list) => list.filter((i) => i._id !== id)),
    });
  }
}
