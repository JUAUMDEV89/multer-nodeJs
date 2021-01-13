module.exports = {

    store: async (req, res)=>{
       res.render('home.mst');
    },

    login: async(req, res)=>{
        res.render('login.mst');
    }
}