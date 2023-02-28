import data from './metal.json'

function MetalMeta(){
    const num_bands = data.length
    return (
        <div>
            <h4>Metal Bands</h4>
            <p>Bands: {num_bands}</p>
        </div>
        
    )
}

export default MetalMeta