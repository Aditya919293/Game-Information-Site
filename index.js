/*section*/
var sec = [
    {class:"secimg",src:"./images/section1.jpg",h1:"EXPLORE AN OPEN WORLD FILLED WITH POSSIBILITIES",p:"Discover the most diverse Far Cry world ever created. With terrain spanning from lush forests to the snowcapped Himalayas, the entire world is alive… and deadly."},
    {class:"secimg",src:"./images/section2.jpg",h1:"ABUNDANT WILDWIFE",p:"From leopards, rhinos, black eagles, and vicious honey badgers, Kyrat is home to abundant wildlife. As you embark on your hunt for resources, know that something may be hunting you..."},
    {class:"secimg",src:"./images/section3.jpg",h1:"SCOUT ENEMY TERRITORY",p:"Scout enemy territory from above in the all-new gyrocopter and then plummet back to earth in your wing suit. Climb aboard the back of a six-ton elephant and unleash its raw power on your enemies."},
    {class:"secimg",src:"./images/section4.jpg",h1:"A DIVERSE ARSENAL",p:"Choose the right weapon for the job, no matter how insane or unpredictable that job might be. With a diverse arsenal, you’ll be prepared for anything."}
]

var feature = document.querySelector('#feature')
sec.forEach((s) => {
    feature.innerHTML+=`
    <section>
    <div>
    <img class="${s.class}" src="${s.src}" alt="">
    </div>
    <div>
    <h1>${s.h1}</h1>
    <p>${s.p}</p>
    </div> </section>`
});


/*panel*/
var pan = [
    {class:"panel",class2:"phead",p:"Trivia 1",class3:"pbody",p2:"Far Cry 4 is the first to have a protagonist that is native to the game's environment.Far Cry 4 is also the first game in the series to have the protagonist to be connected to the villain before the events of the game."},
    {class:"panel",class2:"phead",p:"Trivia 2",class3:"pbody",p2:"A secret ending can be activated by waiting for roughly 13 minutes after Pagan Min left the dining table at the beginning of the game."},
    {class:"panel",class2:"phead",p:"Trivia 3",class3:"pbody",p2:"Far Cry 4's Valley of the Yetis DLC takes place a few miles from North Kyrat over the hills. However, even when using Noclip on the PC version, the player cannot travel back to Kyrat, as the two areas are considered seperate worldspaces by the in-game engine."},
    {class:"panel",class2:"phead",p:"Trivia 4",class3:"pbody",p2:"The E3 demo featured exclusive gameplay where Ajay is to locate Ratu Gadhi and along the way locates and destroys a convoy before teaming up with Hurk (player 2) and liberating Ratu Gadhi. The gameplay is speculated to have only been for a demo presentation and not an actual mission from the final release."}
]

var panel = document.querySelector('#panel')
pan.forEach((p) => {
    panel.innerHTML+=`<div class="${p.class}">
    <div class="${p.class2}">
        <p>${p.p}</p>
        <i class="fa-solid fa-chevron-up"></i>
    </div>
    <div class="${p.class3}">
        <p>${p.p2}</p>
    </div>
    </div>`
});

/*tab-body*/
var tab = [
    {id:"ign",class:"tabcont",h3:"IGN reviews",h32:"review score:- 8.5/10",p:"Far Cry 4 has weak characters, but its campaign, co-op, and competitive multiplayer feature incredibly fun freedom."},
    {id:"pcgamer",class:"tabcont",h3:"pc gamer reviews",h32:"review score:- 89/100",p:"An absurdly entertaining open world playground thats at its best when it breaks away from script. Shame about those tailing missions."},
    {id:"gamespot",class:"tabcont",h3:"gamespot reviews",h32:"review score:- 7/10",p:"Like the terrain if depicts, Far Cry 4 travels both high and low, representing the good, the bad, and ugly of video games all at once. It's awesome and messy and dumb and fun and annoying and gross and beautiful. Take any given adjective in your vocabulary, and chances are, it will in some way describe Far Cry 4."},
]

var tabbody = document.querySelector('.tab-body')
tab.forEach((t)=>{
    tabbody.innerHTML+=`
    <div id="${t.id}" class="${t.class}">   
    <h3>${t.h3}</h3>
    <h3>${t.h32}</h3>
    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>
    <p>${t.p}</p>
    </div>`
})


/*dark mode*/
var i = document.querySelector('.fa-solid.fa-moon')
var body = document.querySelector('body')
var circle = document.querySelector('.fa-regular.fa-circle-up');
var il = document.querySelector('.fa-solid.fa-chevron-left');
var ir = document.querySelector('.fa-solid.fa-chevron-right');

i.addEventListener('click',()=>{
    if(body.style.backgroundColor!="black" && body.style.color!="white"){
        body.style.backgroundColor="black";
        body.style.color="white";
        circle.style.color="orangered"    
        il.style.color="white"
        ir.style.color="white"
    }
    else{
        body.style.backgroundColor="white";
        body.style.color="black";
        circle.style.color="orange"    
        il.style.color="black"
        ir.style.color="black"
    }
})


/*top scroll*/
var gear = document.querySelector('.fa-regular.fa-circle-up')
gear.addEventListener('click',()=>{
    window.scrollTo({top:0,behavior:"smooth"});
})


/*side-menu popup*/
var menu = document.querySelector('.fa-solid.fa-bars')
var close = document.querySelector('.fa-solid.fa-xmark')
var msec = document.querySelector('#menusection')

menu.addEventListener('click',()=>{
    msec.style.right="0%";
    msec.style.transition="2s"
})

close.addEventListener('click',()=>{
    msec.style.right="-100%"
    msec.style.transition="4s"
})


/*carousel*/
var img = document.querySelector('#carouselimg');
var previous = document.querySelector('.fa-solid.fa-chevron-left');
var next = document.querySelector('.fa-solid.fa-chevron-right');
var store = ["./images/section5.jpg","./images/section6.jpg","./images/section7.jpg","./images/section8.jpg","./images/section9.jpg","./images/section10.jpg","./images/section11.jpg","./images/section12.jpg"]
var index=0;

previous.addEventListener('click',()=>{
    index=(index-1+store.length)%store.length
    img.src=store[index]
})

next.addEventListener('click',()=>{
    index=(index+1)%store.length
    img.src=store[index]
})

function auto(){
    index=(index-1+store.length)%store.length
    img.src=store[index]   
}
setInterval(auto,5000)



/*accordians*/
var panel = document.querySelectorAll(".panel")
var pbody = document.querySelectorAll(".pbody");
var up = document.querySelectorAll('.fa-solid.fa-chevron-up');

for (let i = 0; i < panel.length; i++) {
    panel[i].addEventListener("click", () => {
     if(pbody[i].style.display=="none"){
        pbody[i].style.display="block"
         up[i].style.transform="rotate(180deg)"
     }
     else{
        pbody[i].style.display="none"
         up[i].style.transform="rotate(0deg)"
     }
 });
}


/*modal*/
var modal = document.querySelector('#modal')
var x = document.querySelector('.fa-solid.fa-x')
var btn = document.querySelector('#h1')

btn.addEventListener('click',()=>{
        modal.style.display="block"
})

    x.addEventListener('click',()=>{
        modal.style.display="none";
})


/*reviews*/
function change(tab){
    var x = document.querySelectorAll('.tabcont')
    for(var i=0;i<x.length;i++){
            x[i].style.display="none";
    }
    document.getElementById(tab).style.display="block"
}