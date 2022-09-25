var Datatforapi = `www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`
console.log(Datatforapi)
async function main(){
    var url = `www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`
    let res = await fetch(url);
    let Data = await res.json();
    // console.log(Data)
    // forappend(Data.results)
    console.log(Data)
       
}
main()
 