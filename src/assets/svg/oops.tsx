interface Props {
    colorHashDefault?: string
    colorHashActive?: string
    size?: string
}

interface Props {
    colorHashDefault?: string
    colorHashActive?: string
    size?: string
}
const OopsIcon = (props: Props) => {
    const { colorHashDefault = '#CACBC9', size = '24' } = props

    return <div style={{ display: 'inline' }}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32">
            <title>oops</title>
            <path fill={colorHashDefault} d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM23.304 18.801l0.703 2.399-13.656 4-0.703-2.399zM8 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM20 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2z"></path>
        </svg>
    </div>
}

export default OopsIcon