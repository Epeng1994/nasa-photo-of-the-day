import axios from 'axios'

async function apodCall(date){
  let apodObject = {}
  await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=' + date)
  .then(res => {
    apodObject = {
      media_type:res.data.media_type,
      url:res.data.url,
      info:res.data.explanation,
      title:res.data.title,
      today:res.data.date,
      load:false
    }
  })
  .catch(err => {
    apodObject = {
      url:'./space.gif',
      info:'',
      title:'',
      today:'',
      media_type:'image',
      load:true
    }
  })
  console.log(apodObject)
  return apodObject
};

export default apodCall;