const Button = ({ children, className = "",,varian" ...props }) => {
    return (
        <button className={`btn btn- ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button