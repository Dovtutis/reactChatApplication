import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';

const App = () => {
    console.log(localStorage.getItem('username'));
    if (!localStorage.getItem('username')) return <LoginForm />;
    
    return (
        <ChatEngine 
            height="100vh"
            projectID="c49200d9-bc21-4a5e-a081-b383dab84ca6"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;