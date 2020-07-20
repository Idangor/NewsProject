import React, {Component} from "react";
import Backend from "./backend";
import CategoryFilter from "./categoryFilter";

class NewsItems extends Component {

    articles_arr = Backend.getArticles();

    constructor(props) {
        super(props);
        this.state = {title: props.title}

    }

    filterChange(id) {
        // update state;
        // update UI
        //getArticles()
    }

    render() {
        return (this.articles_arr.filter(function (value) {
                //check if value matches filter
                //Also make sure to address no filter
               // <NewsItem title={"myTitle"} category={1}content={"blabla"}></NewsItem>
            })
        )
    }
}

export default NewsItems;