export interface Item {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateItemDto {
  title: string;
  description?: string;
  completed?: boolean;
}
