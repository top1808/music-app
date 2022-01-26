import ListVideo from './../../components/ListVideo/ListVideo'

function MVPage(props) {
    return (
        <ListVideo slug={props.match.params.slug}/>
    )
}

export default MVPage;