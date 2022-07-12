import { useState } from 'react'

interface Props {
    colorHashDefault?: string
    colorHashActive?: string
    size?: string
}
const EditIcon = (props: Props) => {
    const { colorHashDefault = '#A1A1A1', colorHashActive = '#767676', size = '24' } = props

    const [color, serColor] = useState(colorHashDefault)

    return <div style={{ display: 'inline' }} onMouseOver={() => serColor(colorHashActive)} onMouseOut={() => serColor(colorHashDefault)}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32">
            <title>edit</title>
            <path fill={color} d="M27 0c2.761 0 5 2.239 5 5 0 1.126-0.372 2.164-1 3l-2 2-7-7 2-2c0.836-0.628 1.874-1 3-1zM2 23l-2 9 9-2 18.5-18.5-7-7-18.5 18.5zM22.362 11.362l-14 14-1.724-1.724 14-14 1.724 1.724z"></path>
        </svg>
    </div>
}

export default EditIcon