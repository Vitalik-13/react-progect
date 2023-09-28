type PropsContent = {
    content1: string
    content2?: string
}

const Content = (props: PropsContent) => {
    return (
        <>
            <p>{props.content1}</p>
            <p>{props.content2}</p>
        </>
    )
}

export default Content
