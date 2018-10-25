import React from "react";

const ChatContext = React.createContext();

class Messages extends React.Component{
	render(){
		return (
			<ChatContext.Consumer>
				{({messages})=>{
					return messages.map((el)=>{
						return <div>{el.text}</div>
					})
				}}
			</ChatContext.Consumer>
		)
	}		
}

class TextBox extends React.Component{
	render(){
		return (
			<ChatContext.Consumer>
				{({setTyping})=>{
					return <input onChange={setTyping(true)} />
				}}
			</ChatContext.Consumer>
		)
	}		

}


class Chat extends React.Component{

	static Messages = Messages;
	static TextBox = TextBox;
	
	getValue(){
		return  {
			messages: [],
			setTyping: (value)=>{
				this.setState({
					typing: value
				});
			}
		}
	}

	render(){
		<ChatContext.Provider value={this.getValue()}>
			{this.props.children}
		</ChatContext.Provider>
	}
}


export default Chat;
