import React, {Component} from "react";

class CategoryFilter extends Component {

    //const filterFunc = null;

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

export default CategoryFilter;