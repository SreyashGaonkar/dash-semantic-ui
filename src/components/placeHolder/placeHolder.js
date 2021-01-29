import React from 'react'
import './placeHolder.css'
import { Placeholder } from 'semantic-ui-react'

const placeHolder = () => (
    <div className='placeholder-container'>
        <Placeholder>
            <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
            </Placeholder.Header>
            <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            </Placeholder.Paragraph>
        </Placeholder>
    </div>
)

export default placeHolder