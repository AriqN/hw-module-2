
const List = ({data})=>{
 return(
     <>
    
        <div className="card">
        <img src={            
            data.images===null ? "https://www.google.com/search?q=foto&sxsrf=APq-WBsxG6qqnyJiyUHt3C18LlnCqpo21g:1648999243654&tbm=isch&source=iu&ictx=1&vet=1&fir=A6DG5AQW6D8obM%252CteTzm1S8OBMr0M%252C_%253Bbpv4ZrE7Vg1wyM%252CWMpjNpeznDsxdM%252C_%253BSrrvCsqh6kiEWM%252CpzkvUx6XUGnHlM%252C_%253B4yCZ1uZikloPzM%252CteTzm1S8OBMr0M%252C_%253B8lLMIfpiYJSlhM%252CqldrVBJigV5TPM%252C_%253Bdn8QYoedHzn_uM%252Cxp8tV_d2MfMsTM%252C_%253B-KK7IjkegF77wM%252CbDfXKxmjyyholM%252C_%253B6BnETlAbKCpVZM%252C7BH_WcapYi22zM%252C_%253BRcbRiuwnP4xG5M%252CV5c0VU5TdGBY8M%252C_%253B51ES4BlWv3ZSkM%252CmPoNrjI07vlImM%252C_%253BCc42P1jtGg98EM%252CcBZigszCce-uuM%252C_%253BnXBjwpoU_b6YGM%252CmPoNrjI07vlImM%252C_%253BtVtjSawwek0BbM%252ClUrVt5cl7ds7AM%252C_%253B0Q0q5NYg2Pn0MM%252C3nxue1whTOihzM%252C_%253BsVZifZyTrW7j1M%252Ce06eON7CMpAIJM%252C_%253Bsveyw7VUjo467M%252CJ6WTX0hHHYfgOM%252C_&usg=AI4_-kSOyAOEhMslA2ZU1NwhQjls7BLatA&sa=X&ved=2ahUKEwjlhpzxmPj2AhXFTWwGHSZrC7QQ9QF6BAgiEAE#imgrc=8lLMIfpiYJSlhM"
            : data.images[0].url
            } alt="music"/>
                        <div className="text-playlist">
                            <div className="song-title">
                                {data.name}
                            </div>
                            <div className="artist">
                                {data.description}
                            </div>
                        
                        </div>                         
        </div>
     
     </>
 )   
}

export default List;