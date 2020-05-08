import React,{Component} from "react";


function Tiltle(props) {
    if (props.loadingSearch){
        return (<div>
                <h1>{props.value} pictures</h1>
            </div>
        );
    }
    if (props.loadingMoutain){
        return (<div>
                <h1>Mountain pictures</h1>
            </div>
        );
    }
    if (props.loadingBeach){
        return (<div>
                <h1>Beach pictures</h1>
            </div>
        );
    }
    if (props.loadingBird){
        return (<div>
                <h1>Bird pictures</h1>
            </div>
        );
    }
    if (props.loadingFood){
        return (<div>
                <h1>Food pictures</h1>
            </div>
        );
    }

}


class Search extends Component{

    render() {
        return(
           <div className='search'>
              <form onSubmit={this.props.handleSubmit}>
                  <input type="text"  placeholder='Search...' value={this.props.value} onChange={this.props.onChange} />
                  <input type="submit" value="Search" />
              </form>
           </div>
        );
    }
}

class Muotain extends Component{

    render() {
        return(
           <div>
               <div className='button'>
                   <button onClick={this.props.onClick}>Mountain</button>

               </div>
           </div>

        );
    }
}


class Beaches extends Component{
    render() {
        return(
            <div>
                <div className='button'>
                    <button onClick={this.props.onClick}>Beachs</button>

                </div>
            </div>

        );
    }
}

class Birds extends Component{
    render() {
        return(
            <div>
                <div className='button'>
                    <button onClick={this.props.onClick}>Birds</button>

                </div>
            </div>

        );
    }
}

class Food extends Component{
    render() {
        return(
            <div>
                <div className='button'>
                    <button onClick={this.props.onClick}>Food</button>

                </div>
            </div>

        );
    }
}

function LoadImage(props) {
    let item=[];
    if(props.data){
        props.data.map(data=>{
            if(props.loadingMoutain){

                if (data.name==="Mountain")
                    item.push(data);
            }
            if(props.loadingBird){

                if (data.name==="Bird")
                    item.push(data);
            }
            if(props.loadingBeach){

                if (data.name==="Beach")
                    item.push(data);
            }
            if(props.loadingFood){
                if (data.name==="Food")
                    item.push(data);
            }
            if (props.loadingSearch){
                if(data.name.toLowerCase().includes(props.value.toLowerCase()))
                    item.push(data);
            }
        });

        console.log(item);




        return (
            item.map(data=>{
                return(
                    <img key={data.id} src={data.src} alt="error"/>
                );
            })
        );
    }
    else return (
        <div><h1>Loading</h1></div>
    );

}



class Main extends Component{
    constructor() {
        super();
        this.handleClickMountain=this.handleClickMountain.bind(this);
        this.handleClickBeach=this.handleClickBeach.bind(this);
        this.handleClickBird=this.handleClickBird.bind(this);
        this.handleClickFood=this.handleClickFood.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.state={
            data:null,
            value:'',
            loadingMountain:true,
            loadingBeach:false,
            loadingBird:false,
            loadingFood:false,
            loadingSearch:false
        };
    }
    async componentDidMount() {
        const respone= await fetch("https://5eb31ffe974fee0016ecd31e.mockapi.io/pictures/");
        const dataBase = await respone.json();
        this.setState({
            data:dataBase
        });
    }


    handleChange(event){
        this.setState({
            value:event.target.value
        });
    }

    handleSubmit(event){
        this.setState({
            loadingSearch:true,
            loadingMountain:false,
            loadingBeach:false,
            loadingBird:false,
            loadingFood:false
        });
        event.preventDefault();
    }
    handleClickMountain(){
        this.setState({
            loadingMountain:true,
            loadingBeach:false,
            loadingBird:false,
            loadingSearch:false,
            loadingFood:false
        });
    }

    handleClickBeach(){
        this.setState({
            loadingBeach:true,
            loadingMountain:false,
            loadingBird:false,
            loadingSearch:false,
            loadingFood:false
        });
    }

    handleClickBird(){
        this.setState({
            loadingBird:true,
            loadingBeach:false,
            loadingMountain:false,
            loadingSearch:false,
            loadingFood:false
        });
    }

    handleClickFood(){
        this.setState({
            loadingFood:true,
            loadingBeach:false,
            loadingBird:false,
            loadingSearch:false,
            loadingMountain:false
        });
    }



    render() {
        return(
            <div>
                <div className='header'>
                    <h1>SnapShot</h1>
                </div>
                <div className='search'>
                    <Search
                        handleSubmit={(event)=>this.handleSubmit(event)}
                        value={this.state.value}
                        onChange={(event)=>this.handleChange(event)}
                    />
                </div>
                <div className='menu'>
                    <Beaches onClick={()=>this.handleClickBeach()}/>
                    <Birds onClick={()=>this.handleClickBird()}/>
                    <Food onClick={()=>this.handleClickFood()}/>
                    <Muotain
                        onClick={()=>this.handleClickMountain()}
                    />
                </div>
                <div className="title">
                    <Tiltle loadingMoutain={this.state.loadingMountain}
                            loadingBeach={this.state.loadingBeach}
                            loadingBird={this.state.loadingBird}
                            loadingFood={this.state.loadingFood}
                            loadingSearch={this.state.loadingSearch}
                            value={this.state.value}
                    />
                </div>
                <div className="image">
                    <LoadImage
                        loadingMoutain={this.state.loadingMountain}
                        loadingBeach={this.state.loadingBeach}
                        loadingBird={this.state.loadingBird}
                        loadingFood={this.state.loadingFood}
                        data={this.state.data}
                        loadingSearch={this.state.loadingSearch}
                        value={this.state.value}
                    />

                </div>

            </div>

        );


    }
}

export default Main
