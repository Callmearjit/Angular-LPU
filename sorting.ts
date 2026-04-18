interface Comparator<T>
{
    compare(ob1 : T, ob2 : T):number;
}

function sort<T> (a : T[], comp : Comparator<T>)
{
    let n=a.length;
    for(let i = n-1; i>0 ;i--){
        for(let j=0;j<i;j++){
            if(comp.compare(a[j],a[j+1])>0){
                let temp=a[j];a[j]=a[j+1];a[j+1]=temp;
            }
        }
    }
}
interface User{id:number, name:string};
var ar:User[]=[{id:301,name:"sumit"},{id:112,name:"amit"}];
var comp: Comparator<User>={compare :(ob1,ob2)=>ob1.id-ob2.id};
sort(ar,comp);
console.log(ar);
