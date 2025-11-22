const Button = ({ children, className = "",variant="", ...props }) => {
    return (
        <button className={`btn btn-${va} ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button