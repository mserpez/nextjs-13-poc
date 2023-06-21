"use client";

import { useMemo } from "react";
import { useController } from "react-hook-form";

interface TextAreaFieldProps {
  name: string;
  label?: string;
  multiline?: boolean;
}
export default function TextAreaField(props: TextAreaFieldProps) {
  const { name, label, multiline } = props;

  const { field, fieldState } = useController({
    name,
    defaultValue: "",
    rules: { required: true },
  });

  const hasError = !!fieldState.error;

  const inputClass = useMemo(
    () =>
      `bg-gray-50 border ${
        hasError ? "border-red-600" : "border-gray-300"
      } text-sm rounded-lg w-full p-2.5 text-gray-600 `,
    [hasError]
  );

  return (
    <div
      key={`text-field-${name}`}
      className="flex flex-col items-start mt-2 w-full"
    >
      <label className="ml-1 text-xs">{label}</label>
      <textarea
        className={inputClass}
        onChange={field.onChange}
        onBlur={field.onBlur}
        ref={field.ref}
        value={field.value}
        {...props}
      />

      {hasError && (
        <p className="text-red-600 text-xs">{fieldState?.error?.message}</p>
      )}
    </div>
  );
}
