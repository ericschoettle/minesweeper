export class Cell {
  constructor(
    public bomb: boolean,
    public num: number,
    public visible: boolean,
    public x: number,
    public y: number,
  ) {}
}
