"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { PropsWithChildren } from "react";
import { DeepPartial, FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";

interface FormWrapperPorps<T> extends PropsWithChildren {
  className?: string;
  onSubmit: (data: T, form: any) => void;
  schema?: yup.ObjectSchema<any>;
  defaultValues: T;
}

export default function FormWrapper<T>(props: FormWrapperPorps<T>) {
  const { children, className, onSubmit, schema, defaultValues } = props;
  const form = useForm({
    defaultValues: defaultValues as DeepPartial<Record<keyof T, any>>,
    resolver: schema && yupResolver(schema),
  });

  const onSubmitHandler = (data: any) => {
    onSubmit(data, form);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmitHandler)}>
        <div className={className}>{children}</div>
      </form>
    </FormProvider>
  );
}
