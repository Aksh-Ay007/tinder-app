
const express=require('express')

const app=express()



app.use('/test',(req,res)=>{

    res.send('helojust do it')
})

app.listen(3000,()=>{

    console.log(`server is running 3000`)
})