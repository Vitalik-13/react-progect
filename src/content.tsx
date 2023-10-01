type PropsContent = {
    content1: string
    content2?: string
}

const Content = ({ content1, content2 }: PropsContent) => {
    return (
        <>
            <p>{content1}</p>
            <p>{content2}</p>
        </>
    )
}

export default Content
