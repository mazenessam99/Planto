const Button = ({ children, className = "",,varia""" ...props }) => {
    return (
        <button className={`btn btn- ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button