export default function Post({item, selectPost}) {
    // console.log(selectPost);
    return (
        <div className={'fuck'}>
           <h2>{item.id}</h2>
            <h3>{item.title}</h3>
            <p>{item.body}</p>

            <button className={'btn'} onClick={() => {
                selectPost(item.id);
            }}>click pls</button>
        </div>
)};