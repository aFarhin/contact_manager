import React, { Component } from 'react'

export class AddContact extends Component {
    state ={
        name: "",
        email : "",
    }
    idCounter = 1;

    add=(e)=>{
        e.preventDefault();
        if(this.state.name==='' || this.state.email===''){
            alert("all the fields are mandatory");
            return
        }
        const newContact = {
            id: this.idCounter,
            name: this.state.name,
            email: this.state.email,
          };
          this.idCounter++;

        this.props.addContactHandler(newContact)
        this.setState({ name:"", email:""})
        console.log(newContact)
    }
    render() {
        return (
            <div className='ui main container'>
            <br></br>
                <h3 className='heading-b'> Add Contacts</h3>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>First Name</label>
                       <input type='text' name='name'
                       value={ this.state.name} placeholder ='Name' onChange={(e)=> this.setState({name: e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" 
                        value={this.state.email} placeholder="Email" onChange={(e)=>this.setState({email: e.target.value})} />
                    </div>
                    <button className="ui button green" type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact