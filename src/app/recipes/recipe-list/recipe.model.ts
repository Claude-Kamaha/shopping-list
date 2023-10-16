export class Recipe{
    public imagePath:string;
    public name:string;
    public description:string;
    constructor(name:string, desc:string, imagePath:string){
        this.name= name;
        this.description=desc;
        this.imagePath = imagePath
    }

}