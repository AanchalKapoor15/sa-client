import { useState } from 'react'

interface Props {
    colorHashDefault?: string
    colorHashActive?: string
    size?: string
}
const DeleteIcon = (props: Props) => {
    const { colorHashDefault = '#A1A1A1', colorHashActive = '#767676', size = '24' } = props

    const [color, serColor] = useState(colorHashDefault)

    return <div style={{ display: 'inline' }} onMouseOver={() => serColor(colorHashActive)} onMouseOut={() => serColor(colorHashDefault)}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32">
            <title>user-minus</title>
            <path fill={color} d="M12 23c0-4.726 2.996-8.765 7.189-10.319 0.509-1.142 0.811-2.411 0.811-3.681 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h12.416c-0.271-0.954-0.416-1.96-0.416-3z"></path>
            <path fill={color} d="M23 14c-4.971 0-9 4.029-9 9s4.029 9 9 9c4.971 0 9-4.029 9-9s-4.029-9-9-9zM28 24h-10v-2h10v2z"></path>
        </svg>
    </div>
}

export default DeleteIcon