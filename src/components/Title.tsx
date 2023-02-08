type TitleProp = {
    name : String
}

const Title = (props:TitleProp) => {
    return (
        <h1 className={`bg-gradient-to-t from-indigo-700 to-blue-600 bg-clip-text text-transparent text-center text-4xl sm:text-5xl font-medium mt-8 sm:mt-16`}>
            {props.name}
        </h1>
    )
}

export default Title