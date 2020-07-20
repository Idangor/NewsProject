import MySql from 'mysql';
import {Component} from "react";
const mysql = require('mysql');

class Backend extends Component{
//this needs to to move to backend (nodejs REST)

    db;

    connectToDB() {
        this.db = mysql.createConnection({
            host:'database-news-project.cy1gpustpocr.us-east-1.rds.amazonaws.com',
            user:'admin',
            password:'News304838',
            database:'NewsDB'
        });
        this.db.connect(function(err) {
               if(err) console.log(err);
        })
    }

    getCategories(){
        let categories = [
            {id:1,name:'Sports'},
            {id:2,name:'Politics'}];
        this.connectToDB();
        this.db.query("SELECT * FROM Categories", function (err, results, fields) {
            if (err)
                console.log(err);
            else{
                console.log("yay "+results);
                categories = results;
            }
        })
        return categories;
    }

    getArticles() {
        let articles = [
            {id:1,title:'Sports',category:1},
            {id:1,title:'Sports',category:1},
            {id:1,title:'Sports',category:1}]

        this.db.query('SELECT * FROM Articles', function (err, results, fields) {
            if (err)
                console.log(err);
            else{
                console.log("yay "+results);
                articles = results;
            }
        })
        return articles;
    }

    removeArticle(id) {
        //delete query;
    }
}

export default Backend;
