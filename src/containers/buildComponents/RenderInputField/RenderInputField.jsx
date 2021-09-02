
import React from 'react';
import { Input } from 'reactstrap';


const RenderInputField = ({
    input, placeholder, type, className, style, meta: { touched, error },
}) => (
    <div className="form__form-group-input-wrap">
        <Input
            {...input}
            className={className}
            placeholder={placeholder}
            type={type}
            style={style}
        />
        {
            touched && error && <div className="form__form-group-error d-flex align-items-center">
                <span style={{ padding: '2px 5px', backgroundColor: '#ffdce0' }} className='rounded mb-3'>
                    {error}
                </span>
            </div>
        }
    </div>
);

export default RenderInputField;