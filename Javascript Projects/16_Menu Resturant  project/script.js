const Items=[
    {
        id:1,
        title:"Pizza",
        category:"breakfast",
        price:1.99,
        img:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
        desc:"Pizza Is Very Sweet And Tasty . you Can Eat normally Pizza With Mix Of differnt types of product and Differnt design of bread like cheese and differ category.",
    },
    {
        id:2,
        title:"Burger",
        category:"breakfast",
        price:0.49,
        img:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
        desc:"Burger Is Very Sweet And Tasty . you Can Eat normally burger With Mix Of differnt types of product and Differnt design of bread like cheese and differ category.",
    },
    {
        id:3,
        title:"Biryani",
        category:"lunch",
        price:1.49,
        img:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
        desc:"Biryani Is Very Sweet And Tasty . you Can Eat normally chicken With Mix Of differnt types of product and Differnt design of bread like cheese and differ category.",
    },
    {
        id:4,
        title:"Thali",
        category:"lunch",
        price:1.79,
        img:"https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
        desc:"Thali Is Very Sweet And Tasty . you Can Eat normally thali With Mix Of differnt types of product and Differnt design of bread like cheese and differ category.",
    },
    {
        id:5,
        title:"Chicken",
        category:"lunch",
        price:2.49,
        img:"https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
        desc:"Chicken Is Very Sweet And Tasty . you Can Eat normally Pizza With Mix Of differnt types of product and Differnt design of bread like cheese and differ category.",
    },
    {
        id:6,
        title:"Cake",
        category:"breakfast",
        price:0.99,
        img:"https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
        desc:"Birthday Cake Is Very Sweet And Tasty . you Can Eat normally Pizza With Mix Of differnt types of product and Differnt design of bread like cheese and differ category.",
    },
    {
        id:7,
        title:"Rolls",
        category:"breakfast",
        price:1.89,
        img:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
        desc:"Rolls With Egg Is Very Sweet And Tasty . you Can Eat normally Pizza With Mix Of differnt types of product and Differnt design of bread like cheese and differ category.",
    },
    {
        id:8,
        title:"Cold Drink",
        category:"shakes",
        price:0.29,
        img:"https://b.zmtcdn.com/data/o2_assets/13bdf0d4c96d44e6ddb21fedde0fe4081632716661.png",
        desc:"Soft Drink Is Very Sweet And Tasty . you Can Eat normally Pizza With Mix Of differnt types of product and Differnt design of bread like cheese and differ category.",
    },
    {
        id:9,
        title:" Fruits Juice ",
        category:"shakes",
        price:0.39,
        img:"https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
        desc:"Fruit Juice Is Very Sweet And Tasty . you Can Eat normally Pizza With Mix Of differnt types of product and Differnt design of bread like cheese and differ category.",
    },
    {
        id:10,
        title:"Chowmin",
        category:"shakes",
        price:1.39,
        img:"https://b.zmtcdn.com/data/o2_assets/c21624eac87ed1c8c87ef1ea52980ded1632716659.png",
        desc:"Chicken Is Very Sweet And Tasty . you Can Eat normally Pizza With Mix Of differnt types of product and Differnt design of bread like cheese and differ category.",
    },
    {
        id:11,
        title:"Stack Dinner",
        category:"dinner",
        price:1.39,
        img:"https://b.zmtcdn.com/data/o2_assets/c21624eac87ed1c8c87ef1ea52980ded1632716659.png",
        desc:"Chicken Is Very Sweet And Tasty . you Can Eat normally Pizza With Mix Of differnt types of product and Differnt design of bread like cheese and differ category.",
    }
   ];
                 
   
   const menuItem=document.getElementById('menu-item');
   const titleItem=document.getElementById('title');
   const priceItem=document.getElementById('price');
   const itemText=document.getElementById('item-text');
   const itemImage=document.getElementById("image");
   const Products=document.getElementById('product'); 
const containerBtn=document.querySelector('.btn-container');
   window.addEventListener('DOMContentLoaded',()=>{
        displaymenuItems(Items);  
        displaymenuBtn();
})
function displaymenuItems(menuItem){
    let displayMenu=menuItem.map(function(item){
        // console.log(item);
        return`<article class="menu-item" id="menu-item">
                <img id="image"
                    src=${item.img}
                    alt="${item.title}">
                <div class="item-info">
                    <header class="head">
                        <h4 class="title" id="title">${item.title}</h4>
                        <h4 class="price" id="price">$${item.price}</h4>
                    </header>
                    <p class="item-text" id="item-text">${item.desc}</p>
                </div>
            </article>`
    })
    //  console.log(displayMenu);  
     displayMenu=displayMenu.join("");
     Products.innerHTML=displayMenu;
}  
function displaymenuBtn(){
    const categories=Items.reduce(
            function(values,item){
            if(!values.includes(item.category)){
                values.push(item.category);
            }
            return values;
        },
            ["all"]
        );
        const categoryBtns=categories.map(function(category){
            return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
        }).join("");
        // console.log(categoryBtns)
        containerBtn.innerHTML=categoryBtns;
        const btnfilter=containerBtn.querySelectorAll('.filter-btn');
        btnfilter.forEach(function(btn){
    btn.addEventListener('click',function(e){
        // console.log(e.currentTarget.dataset.id);
        const category=e.currentTarget.dataset.id;
        const menuCategory=Items.filter(function(menuItem){
            if(menuItem.category===category){
                return menuItem;
            }

        })
        // lconsole.log(menuCategory);
        if(category === "all"){
            displaymenuItems(Items);
        }
        else{
            displaymenuItems(menuCategory);
        }
    })
})
}
  
