var prodectName=document.getElementById("prodectName")
var prodectPrice=document.getElementById("prodectPrice")
var prodectdes=document.getElementById("prodectdes")
var prodectcatogare=document.getElementById("prodectcatogare")
var prodectImage=document.getElementById("prodectImage")
var prodectlist=[];
var addbtn=document.getElementById("addbtn")
var updatebtn=document.getElementById("updatebtn")
var currentindex;

if(localStorage.getItem("prodectlist")!=null){
    prodectlist=JSON.parse(localStorage.getItem("prodectlist"))
    displayProdect(prodectlist)
}

function addProdect (){
    var prodect= {
        name:prodectName.value,
        price:prodectPrice.value,
        desc:prodectdes.value,
        catogare:prodectcatogare.value,
        img:"./drew-coffman-1872.jpg",
    }
    prodectlist.push(prodect);
    setAtlocal()
    displayProdect(prodectlist)
    updateInpute()
    console.log(prodectlist);
    
}

function displayProdect(list){
    var cartona=``;
    for(var i=0;i<list.length;i++){
        cartona+=`  <div class="col-md-4">
            <div class="item border border-3 border-secondary overflow-hidden rounded-3">
            <img src=${list[i].img} class="w-100 mb-2" alt="">
            <div class="text text-white p-3">
                <h2>Name:${list[i].newName? list[i].newName : list[i].name}</h2>
                <p>Desc:${list[i].desc}</p>
                <h3>Price:${list[i].price}</h3>
                <h4>Catogary:${list[i].catogare}</h4>
                <button onclick="getDataUpdate(${i})" class="btn btn-outline-warning w-100 mb-3">Update</button>
                <button onclick="deleteprodect(${i})" class="btn btn-outline-danger w-100">Delete</button>
            </div>
            </div>
        </div>`
    }
    document.getElementById("mydata").innerHTML=cartona;
}

function deleteprodect(index){
    prodectlist.splice(index,1);
    console.log(prodectlist);
    setAtlocal()
    displayProdect(prodectlist)
}

function updateInpute(prodectlist){
    prodectName.value= prodectlist ? prodectlist.name : ``;
    prodectdes.value= prodectlist ? prodectlist.desc : ``;
    prodectcatogare.value= prodectlist ? prodectlist.catogare : ``;
    prodectPrice.value= prodectlist ? prodectlist.price : ``;
    // prodectImage.value= prodectlist ? prodectlist.img : ``;
}


function getDataUpdate(index){
    updateInpute(prodectlist[index])
    currentindex=index;
    addbtn.classList.add('d-none')
    updatebtn.classList.remove("d-none")
}

function updateProdect(){
    prodectlist[currentindex].name=prodectName.value
    prodectlist[currentindex].price=prodectPrice.value
    prodectlist[currentindex].catogare=prodectcatogare.value
    prodectlist[currentindex].desc=prodectdes.value
    displayProdect(prodectlist)
    updatebtn.classList.add('d-none')
    addbtn.classList.remove("d-none")
    setAtlocal()
    updateInpute()

}

function setAtlocal(){
    localStorage.setItem("prodectlist",JSON.stringify(prodectlist))
}

function search (searchValue){
    var searchItem=[]
    for(var i=0;i< prodectlist.length ;i++){
        
        if(prodectlist[i].name.toLowerCase().includes(searchValue.toLowerCase())){
            prodectlist[i].newName=prodectlist[i].name.toLowerCase().replace(searchValue.toLowerCase(),`<span class="text-danger">${searchValue.toLowerCase()}</span>`)
            // console.log(prodectlist[i].name) 
            searchItem.push(prodectlist[i])
        }
    }
    displayProdect(searchItem)
}

