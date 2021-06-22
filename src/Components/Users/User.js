export default function User(props) {

    const {item: {id, name, username, email, address: {street, suite, city, geo: {lat, lng}}}} = props;


    return (
        <div>
            <div>
                <h2>{id}</h2>
                <h3>{name}</h3>
                <h3>{username}</h3>
                <h2>{email}</h2>
                <p>{street} - {suite} - {city}</p>
                <p>{lat} ---- {lng}</p>
            </div>
        </div>
    )
}