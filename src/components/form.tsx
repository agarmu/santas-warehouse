import { FieldProps } from 'formik';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
type InputFieldProps = { placeholder: string; label: string; id: string };
export const InputField: React.ReactNode = ({
  field,
  id,
  // form: _,
  placeholder,
  label,
  ...props
}: FieldProps & InputProps & InputFieldProps) => (
  <div className="form-group mb-3">
    <label htmlFor={`formInput-${id}`}>{label}</label>
    <input
      {...field}
      id={`formInput-${id}`}
      placeholder={placeholder}
      {...props}
    />
  </div>
);
