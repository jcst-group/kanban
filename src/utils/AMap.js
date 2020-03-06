export function MapLoader(){
    return new Promise((resolve,reject)=>{
        if(window.AMap){
            resolve(window.AMap)
        }else{
            var script=document.createElement('script')
            script.type='text/javascript'
            script.async=true
            script.src='http://webapi.amap.com/maps?v=1.4.11&callback=initAMap&key=b37218900009b3618f05afc6210f4dca'
            script.onerror=reject
            document.head.appendChild(script)
        }
        window.initAMap=()=>{
            resolve(window.AMap)
        }
    })
}