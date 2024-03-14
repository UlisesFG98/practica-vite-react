export default function ViteCard(props){
    return(
        <article className="ViteCard">
            <div className="ViteCard__emoji">{props.emoji}</div>
            <h2 className="ViteCard__title">{props.title}</h2>
            <p className="ViteCard__text">{props.text}</p>
        </article>
    )
}