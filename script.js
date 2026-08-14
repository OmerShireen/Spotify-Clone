console.log("Let's write Javascript ");
async function getnasheeds(){

    let a = await fetch("http://127.0.0.1:3000/nasheeds/")
    let response = await a.text();
    console.log(response);
    let div = document.createElement("div");
    div.innerHTML = response;
    let  as = div.getElementsByTagName("a");
    let nasheeds = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            let decoded = decodeURIComponent(element.href)
            let fixed = decoded.replaceAll("\\", "/")
            nasheeds.push(fixed.split("/nasheeds/")[1]) 
        }
        
    } 
    return nasheeds;

}

async function main(){
    let nasheeds = await getnasheeds();
    console.log(nasheeds);
    let nasheedUL = document.querySelector(".nasheedlist").getElementsByTagName("ul")[0];
    for (const nasheed of nasheeds ) {
        nasheedUL.innerHTML  = nasheedUL.innerHTML + ` 
        <li><img class="invert" src="img/music.svg" alt="">
        <div class="info">
            <div> ${nasheed}</div>
            <div>Song Artist</div>
        </div>
        <div class="playnow">
            <span>Play Now</span>
            <img class="invert  " src="img/play.svg" alt="">    
        </div>
    </li>  `;
    }
    var audio = new Audio(nasheeds[2]);
    audio.play();

    audio.addEventListener("loadeddata",()=>{
        let duration = audio.duration;
        console.log(duration); 
    })
}
main() 