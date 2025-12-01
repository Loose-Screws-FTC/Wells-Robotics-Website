import Title from "../Components/title"
import Unit from "../Components/unit"

export default function Robot(){
    return(
        <>
            <Title text="Our Robot"/>
            <Unit
                title="Intake"
                text="The intake is an important part of the robot. It's how we intake artifacts."
            />
            <Unit
                title="Spindexer/Decoder Ring"
                text="The spindexer is an important part of the robot. It's how we sort artifacts."
            />
            <Unit
                title="Outtake"
                text="The outtake is an important part of the robot. It's how we shoot artifacts."
            />
        </>
    )
}