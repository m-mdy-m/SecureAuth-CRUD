module.exports = (req,res,nxt)=>{
    if(!req.session.user){
        return res.redirect('/')
    }
    nxt()
}