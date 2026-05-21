import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateItemDto, Item } from '../models/item.model';

@Injectable({ providedIn: 'root' })
export class ItemsService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = '/api/items';

  getAll(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseUrl);
  }

  create(dto: CreateItemDto): Observable<Item> {
    return this.http.post<Item>(this.baseUrl, dto);
  }

  update(id: string, dto: Partial<CreateItemDto>): Observable<Item> {
    return this.http.put<Item>(`${this.baseUrl}/${id}`, dto);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
