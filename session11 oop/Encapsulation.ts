/*
Cách khởi tạo class
*/
class std12{
    name:string;
    constructor(name:string){
        this.name=name;
    }
}

let std11=new std12("minhthu");
/*
access modifier phạm vi truy cập
3.Phạm vi:
1.public
Chỉ bên ngoài có thẻ truy cập vào
2.private
Chỉ được truy cập bên trong class
3.protected
Chỉ được truy cập bên trong class và sub class
*/
get Name(){
    return this.name;
}
setName(newName:string){ 
    this.name=newName;
}


console.log(std11.getName)
