//  fetch('https://dummyjson.com/quotes')
//  .then(res => res.json())
//  .then( data =>{
//      console.log(data)
//      console.log(data.limit);
//      console.log(data.total);
//      console.log(data.quotes);
//      document.getElementById("total").innerHTML = data.total


//      for(const[i,d] of data.quotes.entries())
//      {
//          document.getElementById("list").innerHTML += `<li>${d.quote} - ${d.author}</li>`

//      }
//  } )

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then( data =>{

    List.innerHTML += <div class = "col-lg-6">
        <div class = "row">
            <div>
                <img class   src = "${d.thumbnail}">
            </div>
        </div>

    </div>



    console.log(data)
    console.log(data.limit);
    console.log(data.total);
    console.log(data.products);
    document.getElementById("total").innerHTML = data.total


    for(const[i,d] of data.products.entries())
    {
        document.getElementById("list").innerHTML += `<li>  - <ul>${d.title} </ul>  <ul>${d.description}</ul>  <ul>Price : ${d.price} </ul> <ul>Disc : ${d.discountPercentage} </ul> <ul>Stock : ${d.stock} </ul></li>`

    }
} )