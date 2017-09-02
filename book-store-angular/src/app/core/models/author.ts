export class Author {
  constructor(
    public id: number = 0,
    public firstName: string = null,
    public lastName: string = null,
    public biography: string = null,
    public books: number[] = null) { }

  isNew(): boolean {
    return this.id == 0;
  }
}