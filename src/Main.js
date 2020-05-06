import React,{Component} from "react";

class Search extends Component{
    render() {
        return(
           <div className='search'>
               <form>
                   <input type="text"  placeholder='Search...' />
                   <button>Search</button>
               </form>
           </div>
        );
    }
}
class Title extends Component{
    render() {
        return(
            <div>
                <h2>{this.props.title} Pictures</h2>
            </div>
        );
    }
}
class Muotain extends Component{
    constructor() {
        super();
        this.onClick=this.onClick.bind(this);
    }

    onClick(){
        return(
            <Title/>
        );
    }
    render() {
        return(
           <div>
               <div className='button'>
                   <button onClick={this.onClick}>Mountain</button>
               </div>

           </div>

        );
    }
}

class Beaches extends Component{
    constructor() {
        super();
        this.state={
            title:'Beaches'
        };
    }
    render() {
        return(
            <div>
                <div className='button'>
                    <button>Beaches</button>
                </div>

            </div>

        );
    }
}

class Birds extends Component{
    constructor() {
        super();
        this.state={
            title:'Birds'
        };
    }
    render() {
        return(
            <div>
                <div className='button'>
                    <button>Birds</button>
                </div>

            </div>

        );
    }
}

class Food extends Component{
    constructor() {
        super();
        this.state={
            title:'Food'
        };
    }
    render() {
        return(
            <div>
                <div className='button'>
                    <button>Food</button>
                </div>

            </div>

        );
    }
}

class Main extends Component{
    render() {
        return(
            <div>
                <div className='header'>
                    <h1>SnapShot</h1>
                </div>
                <div className='search'>
                    <Search/>
                </div>
                <div className='menu'>
                    <form>
                        <Muotain/>
                        <Beaches/>
                        <Birds/>
                        <Food/>

                    </form>
                </div>
            </div>

        );

    }
}

export default Main