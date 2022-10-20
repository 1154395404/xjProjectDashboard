const query=require('./query');
module.exports = {
   async get(req,res) {
        const {to,from,date}=req.params
        const result=await query.getTrainList(from,to,date)
        res.send(result?result:[])
    },
    post() {

    }
}
