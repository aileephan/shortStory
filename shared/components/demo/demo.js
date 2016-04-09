import React, {Component, PropTypes} from 'react'
import Helmet from 'react-helmet'
import {Form, Column, Field} from '../../modules'
import {connect} from 'react-redux'
import * as DemoActions from '../../actions/DemoActions'
class Demo extends Component{
	static propsType = {
		data: PropTypes.any,
		dispatch: PropTypes.func.isRequired
	}
	static fetchData = [
		DemoActions.getData
	]
	render() {
		const {data, dispatch} = this.props
		return (
			<div>
				<Helmet
					title="demo"
					meta = {[
						{"name": "description", "content": "Product description"},
                        {"property": "og:type", "content": "article"}
					]}
				/>
				<h1>Demo</h1>
				{data}
			</div>
			)
	}
}
export default connect(state=>({data: state.data}))(Demo)