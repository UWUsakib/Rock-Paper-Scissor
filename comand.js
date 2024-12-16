let userscore=0;
const userscorepara=document.querySelector("#Player")
let compscore=0;
const compscorepara= document.querySelector("#com");
const msg=document.querySelector("#msg");

const everydiv=document.querySelectorAll(".Choice");

const pcchoice=() => {
    const types= ["rock", "paper", "scissors"];
    const typeidx=Math.floor(Math.random()*3);
    return types[typeidx];
};

const drawgame=() =>{
    msg.innerText="DRAW!!  PLAY AGAIN";
    msg.style.backgroundColor="skyblue";
}
const showwinner =(userwin, xid, computer) =>{
    if (userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`YOU win!   Your ${xid} beats ${computer}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorepara.innerText=compscore;

        msg.innerText=`ENEMY win  ${computer} beats your ${xid}`;
        msg.style.backgroundColor="red";
    }
}

const playgame = (xid) =>{


    // computer choice
    const computer=pcchoice();

    if (xid==computer){
        drawgame();
    }

    else {
        let userwin= true;
        if(xid==="rock"){
            //scissors, paper
            userwin= computer==="paper" ? false : true;
    
        }else if (xid==="paper"){
            // Rock, scissors
            userwin=computer=== "scissors" ? false : true;
        } else {
            //Rock , Paper
            userwin= computer==="rock" ? false : true;
        }
        showwinner(userwin, xid, computer);
    }


};
everydiv.forEach((x) =>{
    x.addEventListener("click", () =>{
        const xid= x.getAttribute("ID");
        console.log("Action is activated",xid);
        playgame(xid)
    });
});
