export class Recipe {
  public name: string | undefined;
  public description: string | undefined;
  public imagePath: string | undefined;

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
