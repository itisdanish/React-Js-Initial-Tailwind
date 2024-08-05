import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userInfo:{
                login:"state",
                location:"La Pata"
            },
        };
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/itisdanish")
        const json = await data.json()
        console.log(json)
        this.setState({
            userInfo:json
        })

    }
    render(){
        const {name, loc} = this.props
        const {login,location,avatar_url,bio} =this.state.userInfo
        return (
            <div className="userCard">
                <h2>Name: {login}</h2>
                <h2>Location: {location}</h2>
                <img className="menu-card-image" src={avatar_url} alt="No Image"/>
                <h2>Contact: {bio}</h2>
            </div>
        )
    }

}
export default UserClass

// const User = ()=>{
//     return(
//         <div className="userCard">
//             <h2>Name: John Doe</h2>
//             <h2>Location: Lorem Ipsum</h2>
//             <h2>Contact: Johndoe@contact.com </h2>
//         </div>
//     )
// }
// export default User