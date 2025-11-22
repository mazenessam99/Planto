const Button = ({ children, className = "",variant="", ...props }) => {
    return (
        <button className={`btn btn-${varian} ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button