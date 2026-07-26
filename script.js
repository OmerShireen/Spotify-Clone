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
            nasheeds.push(element.href)
            
        }
        
    } 
    return nasheeds;

}

async function main(){
    let nasheeds = await getnasheeds();
    console.log(nasheeds);
    var audio = new Audio(nasheeds[6]);
    audio.play();
}
main() 