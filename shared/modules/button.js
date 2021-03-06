import React, {Component, PropTypes} from 'react'
import {ButtonChunks} from '../chunks'

class Button extends Component{
    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.string
    }
    static defaultProps = {
        type: 'button'
    }
    componentDidMount(){
        var self = this
        ButtonChunks().then(buttons => {})
    }
    render(){
        var className = (!this.props.className)?'ui button':'ui '+this.props.className+' button'
        return (
            React.createElement(this.props.type, {className: className, ref: 'button'}, this.props.children)
        )
    }
}

export default Button