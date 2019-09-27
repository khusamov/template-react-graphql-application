import React, {Component, CSSProperties} from 'react';
import './App.scss';
import {Editor} from 'graphql-editor';

export default class App extends Component {
	render() {
		const style: CSSProperties = {
			width: '100%',
			height: '100%',
			display: 'grid',
			gridTemplateColumns: 'auto 1fr',
			gridTemplateRows: '1fr'
		};
		return (
			<div className='App' style={style}>
				<Editor editorVisible={true}/>
			</div>
		);
	}
};
