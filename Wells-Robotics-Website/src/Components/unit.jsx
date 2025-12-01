export default function Unit({title,text}){
    return(
        <div className="unit">
            <div className="content">
                <div className="unit_title">
                    <h3>{title}</h3>
                </div>
                <div className="unit_text">
                    <p>{text}</p>
                </div>
            </div>
            <img src={image_src} width="200px" height="auto"/>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}