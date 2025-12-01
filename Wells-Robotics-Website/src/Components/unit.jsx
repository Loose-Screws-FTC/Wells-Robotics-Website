export default function Unit({title,text,image_src}){
    return(
        <div className="unit">
            <div className="content">
                 <h3>{title}</h3>
                <p>{text}</p>
            </div>
            <img src={image_src} width="200px" height="auto"/>
        </div>
    )
}