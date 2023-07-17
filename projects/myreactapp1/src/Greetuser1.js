import React from 'react'

constructor()
{
    super();
    this.state = { result: 'Result will be displayed here', name: '' }
}

render()

return (
    <div>
        <label> Enter your name </label>
        <input type='text'
            onChange={(event) => {
                this.setstate({ name: event.target.name })
            }}></input><br />
        <button onClick={() => {
            this.setState({ result: 'Greetings' + this.state.name })
        }}>greet</button>
        <h2>{this.state.result}</h2>
        <h3>{this.state.name}</h3>
    </div>
)

export default Greetuser1;