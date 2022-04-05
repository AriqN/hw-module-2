
const Form = ({data, handleFormChange,handleList})=>{

    return(
        <>
        <form onSubmit={handleList}>
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
                    />
                </li>
                <li>
                <label htmlFor="desc">Description</label>
                    <input
                        id="desc"
                        type="text"
                        name="desc"
                        onChange={handleFormChange}
                        value={data.desc}
                        required
                    />
                </li>
            </ul>
            <button className="select-btn" type="submit">Create Playlist</button>

        </form>
        
        </>
    )


}

export default Form;