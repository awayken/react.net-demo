class CommentBox extends React.Component {
    constructor(props) {
        super(props)

        this.state = { name: props.name }

        this.onChange = this.onChange.bind(this)
    }
    onChange(e) {
        this.setState({
            name: e.target.value
        })
    }
    render() {
        return (
            <div className="commentBox">
                <p>Hello, {this.state.name}! I am a CommentBox.</p>
                <input name="name" onChange={this.onChange} value={this.state.name} />
            </div>
        );
    }
}
