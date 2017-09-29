export class MenuItem {
  constructor(
    public id: number = 0,
    public name: string = '',
    public link: string = '',
    public parentId: number = 0
  ) { }
}