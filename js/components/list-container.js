let React = require('react');
let List = require('./list');

let ListContainer = React.createClass({
    getInitialState: function() {
        return {
            text: "",
            cards: []
        }
    },
    onAddInputChanged: function(event) {
        this.setState({
            text: event.nativeEvent.target.value
        });
    },
    onAddSubmit: function() {
        let cards = this.state.cards;
        cards.push(this.state.text);
        this.setState({
            cards: cards
        });
    },
    render: function() {
        return (
            <List cards={this.state.cards} onAddInputChanged={this.onAddInputChanged} onAddSubmit={this.onAddSubmit} />
        );
    }
});

module.exports = ListContainer;