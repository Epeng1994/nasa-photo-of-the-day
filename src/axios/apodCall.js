import axios from 'axios'

function apodCall(date){
    let apodObject 
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY' + date)
    .then(res => {
      console.log(res)
      apodObject = {
        media_type:res.data.media_type,
        url:res.data.url,
        info:res.data.explanation,
        title:res.data.title,
        today:res.data.date,
        date:date,
        load:false
      }
    })
    .catch(err => {
        apodObject={
        url:'./space.gif',
        info:'',
        title:'',
        today:'',
        date:'',
        media_type:'image',
        load:true
      }
    })
    .catch(err => {
      apodObject = {...apodObject, title:'Either no image available for date or exceeded key amount'}
    })

    return apodObject
};

export default apodCall;