const Button = ({ children, className = "",variant="", ...props }) => {
    return (
        <button className={`btn btn-${variant} ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button