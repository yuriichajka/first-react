import './Post.css'
export default function Post(props) {

    return (
        <div>
                <div className={'post'}>
                    <h2 className={'number'}>{props.item.id}</h2>
                    <p className={'text1'}>{props.item.title}</p>
                    <p className={'text2'}>{props.item.body}</p>
                </div>
        </div>
    )
}