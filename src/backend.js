import MySql from 'mysql'


export default class Backend{

//this needs to to move to backend (nodejs REST)
     db = null;
    connectToDB(){


        this.db = MySql.createConnection({
            host:'database-news-project.cy1gpustpocr.us-east-1.rds.amazonaws.com',
            user:'admin',
            password:'News304838'
        })

        this.db.connect(function(err) {
               if(err)
                    console.log(err);
                else {
                }
        })
    }

    getCategories(){
        let categories = [
            {id:1,name:'Sports'},
            {id:2,name:'Politics'}];
        /*this.db.query('SELECT * FROM categories', function (err, results, fields) {

            if (err)
                console.log(err);
            else{
                console.log("yay "+results);
                categories = results;
            }

        })*/

        return
    }

    getArticles() {
        let articles = [
            {id:1,title:'Sports',category:1},
            {id:1,title:'Sports',category:1},
            {id:1,title:'Sports',category:1}]
        return articles;
    }

    removeArticle(id) {
        //delete query;
    }
}
