import React, {Component} from 'react';

class Quotes extends Component {
    render() {
        return (
            <React.Fragment>
            <div>
            <h1 id="welcome-to-my-react-markdown-previewer-">Welcome to my React Markdown Previewer!</h1>
            <h2 id="this-is-a-sub-heading-">This is a sub-heading...</h2>
            <h3 id="and-here-s-some-other-cool-stuff-">And here's some other cool stuff:</h3>
            <p>Heres some code, <code>&lt;div&gt;&lt;/div&gt;</code>, between 2 backticks.</p>
            <blockquote>
<p>Block Quotes!</p>
</blockquote>
            </div>
            </React.Fragment>
        )
    }
}

export default Quotes;