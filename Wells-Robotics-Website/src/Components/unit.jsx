export default function Unit({title,text,image_src}){
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
        </div>
    )
}