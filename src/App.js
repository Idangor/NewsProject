import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Backend from './backend'

class NewsItems extends Component {

    arr // Articles your bring them from the DB  = Backend.getArticles()

    filterChange(id) {
        // update state;
        // update UI
        //getArticles()
    }

    render() {
        return (
            arr.filter(function (value) {
                //check if value matches filter
                //Also make sure to afrss no filter
                <NewsItem title={"myTitle"} category={1} content={"blabla"}/>
            })
        )
    }
}

class CategoryFilter extends Component {

    const filterFunc = null;

    constructor(props) {
        super(props);
        this.state = {categories: props.categories}

    }

    filter(id) {
        console.log('clicked');
        // call filetrFunc
    }

    render() {
        this.state.categories =  [
            {id:1,name:'Sports'},
            {id:2,name:'Politics'}];

        console.log("cat" + this.state.categories)
        return (
            <select onClick={() => this.filter(1)}>
                {this.state.categories.map(
                    function (cat) {
                        return (
                            <option value={cat.id}> {cat.name} </option>)
                    })}
            </select>
        )
    }
}

class NewsItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            content: props.content,
            category: props.category
        }
    }

    render() {
        return(
            <div>
                <h3>{this.state.title}</h3>
                <h4>{this.state.category}</h4>
                <p>{this.state.content}</p>
            </div>
        )
    }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div style={{float:'left'}}><a href="dahsboard url">link to dash</a></div>
        <div>Title</div>
      </header>
      <div>
        <CategoryFilter categories={new Backend().getCategories()}></CategoryFilter>
      </div>
      <NewsItems/>
    </div>
  );
}

export default App;
