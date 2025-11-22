const Button = ({ children, className = "",,var ...props }) => {
    return (
        <button className={`btn btn- ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button