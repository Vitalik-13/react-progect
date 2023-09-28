interface PropsTitle {
    title: string
}

const Titel = (props: PropsTitle) => {
    return <h1>Hello {props.title}</h1>
}
export default Titel
