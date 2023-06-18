function Button({title, src, alt}) {
    
    return(
        <>
            <button>
                <a href="http://" target="_blank" rel="noopener noreferrer">{title}</a>
                <img src={src} alt={alt} />
            </button>
        </>
    )
}
export default Button