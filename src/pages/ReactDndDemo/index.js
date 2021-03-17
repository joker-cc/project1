import React from 'react'
import { Container } from './Container'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const ReactDndDemo = () => {
	return (
		<div className="ReactDndDemo">
			<DndProvider backend={HTML5Backend}>
				<Container />
			</DndProvider>
		</div>
	)
}

export default ReactDndDemo;