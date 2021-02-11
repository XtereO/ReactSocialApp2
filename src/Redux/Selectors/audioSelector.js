import AudioTemplate from "../../Article/Audio/ContainerAudioTemplate";

export let getAudio=(state)=>{
    let audioData=state.audioPage.Property.audioData.map((a)=>{
        return <AudioTemplate name={a.name} compositor={a.compositor}
            asrc={a.asrc} img={a.img} id={a.id}/>
    })
    return audioData
}