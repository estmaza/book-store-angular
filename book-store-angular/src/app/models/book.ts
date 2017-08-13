export class Book {
  constructor(
    public id: number = 0,
    public name: string = null,
    public date: string = null,
    public rating: number = null,
    public pages: number = null,
    public authors: number[] = null) { }

  get isNew(): boolean {
    return this.id == 0;
  }
}