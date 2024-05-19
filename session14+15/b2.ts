class Product {
    id:number;
    name:string;
    price:number;
    constructor(productId:number,productName:string,productPrice:number){
        this.id=productId;
        this.name=productName;
        this.price=productPrice;
    }
}
class CartProduct extends Product{
    quantity:number;    
    constructor(productId:number,productName:string,productPrice:number,productQuantity:number){
        super(productId,productName,productPrice);
        this.quantity=productQuantity;
    }
    caculatePrice(){
        return this.price*this.quantity;
    }
    increaseQuantity(){
      this.quantity++;
    }
    decreaseQuantity(){
        this.quantity--;
    }
}
class ShopProduct extends Product{
    stock:number;
    constructor(productId:number,productName:string,productPrice:number,productStock:number){
        super(productId,productName,productPrice);
        this.stock=productStock;
    }
}
class Cart[
    id:number;

]