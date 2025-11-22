const Button = ({ children, className = "", ...props }) => {
    return (
        <button className={`btn btn ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button