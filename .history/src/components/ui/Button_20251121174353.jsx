const Button = ({ children, className = "", ...props }) => {
    return (
        <button className={`btn bt ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button