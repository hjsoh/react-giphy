class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      counter: 0
    };
  }

  handleClick = () => {
    // function to change state
    this.setState({
      clicked: !this.state.clicked,
      counter: this.state.counter + 1
    })
  }

  render() {
    // build and return html
    return (
      <div className={this.state.clicked ? 'clicked' : null}
        onClick={this.handleClick}>
        Hello {this.props.name} {this.state.counter}
      </div>
    )
  }
}
