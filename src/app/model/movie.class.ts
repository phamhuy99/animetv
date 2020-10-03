export class movies{
	public id:number;
	public name:string;
	public link:string;
	public price:number;
	constructor(name:string,link:string,price:number,id?:number){
		this.id=id;
		this.name=name;
		this.link=link;
		this.price=price;
	}
}