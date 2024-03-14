import React from 'react';

class Heading extends React.Component{
    render = () => {
        return <h2>{this.props.children}</h2>
    };
}

class UnOrderedList extends React.Component {
    render() {
        return <ul>{this.props.children}</ul>
    }
}

class ListItem extends React.Component {
    render() {
        return <li>{this.props.children}</li>
    }
}

class DisplayHTML extends React.Component{
    render() {
        return (
            <div>
                <Heading>What is Frontend?</Heading>
                <UnOrderedList>
                    <ListItem>Frontend is the part of the website that users can see and interact with.</ListItem>
                    <ListItem>Frontend is also called <strong>client-side</strong>.</ListItem>
                    <ListItem>Frontend is built with HTML, CSS, and JavaScript.</ListItem>
                </UnOrderedList>
            </div>
        );
    }
}

export default DisplayHTML;