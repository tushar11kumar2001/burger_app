

//Class based component ...
import React from "react"
class Userbyclass extends React.Component{

    constructor(props){
       super(props);

       this.state = {
        userinfo : {
          name: "unknown",
          location: "unknown",
          avatar_url: "unknown"
        },
      
    }

       console.log(this.props.name + "children Constructor");
    };

    async componentDidMount(){
        console.log(this.props.name + " Children componentDidMount");
        const userData = await fetch("https://api.github.com/users/tushar11kumar2001");
        const json = await userData.json();
        console.log(json);

        this.setState({
            userinfo:json,
        })
    }
    componentDidUpdate(prevprops , prevState){
        if(this.state.count !== prevState.count)  console.log("componentDidUpdate")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }


    render(){
        console.log(this.props.name + "children render"); 
        

       const {name , location , avatar_url}  = this.state.userinfo;
       const {count}  = this.state;

        return (
            < div className="userclass">
              
          
            <h2> {name.toUpperCase()}</h2>
            <h3>Location : {location}</h3>
            <img style = {{width:"200px" , height:"150px"}}src={avatar_url} />
         </div>
        );
    }
}

export default Userbyclass