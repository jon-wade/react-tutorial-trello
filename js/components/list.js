let React = require('react');
let Card = require('./card');


let List = function(props) {

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddSubmit();
        console.log('props.cards', props.cards);
    }


    return (
        <div className="card-list">
            <h2>{props.title}</h2>
            {props.cards.map(function(card, i) {
                return <Card key={i} text={card} />
            })}
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={props.onAddInputChanged}/>
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

module.exports = List;
