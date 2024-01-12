import { forwardRef } from "react";

const Input = forwardRef(function Input({ className, placeholder, value, onChange, onFocus }, ref) {
    return (
        <input className={className} ref={ref} placeholder={placeholder} value={value} onChange={onChange} onFocus={onFocus} />
    )
})

export default Input;