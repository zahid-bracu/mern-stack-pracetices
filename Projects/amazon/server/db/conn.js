const mongoose=require('mongoose');
const db=process.env.url
mongoose.connect(db,{ 
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify: false 
}).then(()=>{
    console.log('connected')
}).catch((err)=>{
    console.log(err)
})