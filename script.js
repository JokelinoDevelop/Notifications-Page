let markAsRead = document.getElementById('markAsRead');
let allItems = document.querySelectorAll('.container .content li')
let notifyNum = document.getElementById('notificationsNum');

let startingActiveItems = document.querySelectorAll('.container .content .active');

notifyNum.innerText = `${startingActiveItems.length}`;

allItems.forEach(item => {
    item.addEventListener("click", () => {
        if(item.classList.contains("active")){
            item.classList.remove("active")
        } else{
            item.classList.add("active")
        }
        let dynamicLength = document.querySelectorAll('.container .content .active');
        notifyNum.innerText = `${dynamicLength.length}`;
        
    })
})


markAsRead.addEventListener("click", () => {
    let activeItems = document.querySelectorAll('.container .content .active');
    activeItems.forEach( item => {
        item.classList.remove("active");
    })
    newLenght = document.querySelectorAll('.container .content .active');
    notifyNum.innerText = `${newLenght.length}`;
})
 