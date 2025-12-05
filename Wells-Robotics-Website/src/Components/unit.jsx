export default function Unit({title,text, image_src, robot_src}){
    function model() {
        if (robot_src != null) {
            return(
                <model-viewer 
                    alt="FTC 2026 Robot" 
                    src={robot_src}
                    shadow-intensity="1"
                    camera-controls touch-action="pan-y"
                    style={{ width: "100%", height: "50rem"}}
                    orientation="0deg 270deg 180deg"
                ></model-viewer>
            )
        } else {
            return(null)
        }
    }

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
                {model()}
        </div>
    )
}