import React from "react";

class MainComponent extends React.Component{
    

    render(){

        const date=new Date();
        const time=date.getHours();
        const time2=date.getMinutes();
        
       
    let wish;
    let background;
    if(time>=0 && time<12)
    {wish="Morning";
     //backgroundPic= "https://cache.desktopnexus.com/thumbseg/368/368369-bigthumbnail.jpg";
     background="orange"
    }
     else if(time>=12 && time<17)
     {
         wish="Afternoon";
        background="red"
         //backgroundPic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ksQg8b7spwDfy53I1jNGqBwd0cPyCETpiyiLEgZL229B9Qno";
     }
     else if(time>17 && time<=23)
     {
         wish="Night";
         background="black"
         //backgroundPic="https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.baltana.com%2Ffiles%2Fwallpapers-5%2FNight-Background-HQ-Wallpaper-16437.jpg&imgrefurl=http%3A%2F%2Fwww.baltana.com%2Fbackgrounds%2Fnight-background-hq-wallpaper-16437.html&docid=VhqERfhoyt3h6M&tbnid=JQEmKZFORLTX0M%3A&vet=10ahUKEwjpktb7t6flAhVOT30KHT0IA6oQMwiRASgWMBY..i&w=1280&h=720&client=firefox-b-d&bih=654&biw=1366&q=night%20background%20photos&ved=0ahUKEwjpktb7t6flAhVOT30KHT0IA6oQMwiRASgWMBY&iact=mrc&uact=8"
     }


    return(
        <main className="m" >
                <p style={{color:background}}>{`Time is ${time} : ${time2}`}<br></br>
                {`Wish You Good ${wish}`}</p>
        </main>
    )
    }
}

export default MainComponent;