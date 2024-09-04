/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'class project' });
   };
module.exports = {
index
};