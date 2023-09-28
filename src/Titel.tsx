interface PropsTitle {
    title: string
    year: number
}

const Titel = (props: PropsTitle) => {
    return (
        <h1>
            Hello {props.title}, Year: {props.year}
        </h1>
    )
}
export default Titel
