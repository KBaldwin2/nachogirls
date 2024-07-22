type FormActionRowProps = {
  children: React.ReactNode;
};

export const FormActionRow = ({ children }: FormActionRowProps) => {
  return (
    <div className="mt-6 flex flex-col-reverse justify-end gap-2 sm:flex-row sm:items-center">
      {children}
    </div>
  );
};
