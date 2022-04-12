
const Form = ({data, handleFormChange,handleList})=>{

    return(
        <>
        <form onSubmit={handleList} className="form-playlist">
            <div>
            <ul>
                <li>
                    <label htmlFor="title">Title</label>
                    <input 
                        id="title"
                        type="text"
                        name="title"
                        maxLength="10"
                        onChange={handleFormChange}
                        value={data.title}
                        required
                        placeholder="Enter Your Playlist Title"
                        className="input-playlist-title"
                    />
                </li>
                <li>
                <label htmlFor="desc">Description</label>
                    <textarea id="desc"
                        type="text"
                        name="desc"
                        onChange={handleFormChange}
                        value={data.desc}
                        required
                        placeholder="Enter Your Playlist Description"
                        className="input-playlist-desc"
                        ></textarea>
                </li>
            </ul>
            </div>
            <div className="create-btn">
                <button className="select-btn" type="submit">Create Playlist</button>
            </div>
        </form>
        
        </>
    )


}

export default Form;