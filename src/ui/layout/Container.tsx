type Props = {
    children?: React.ReactNode;
    className?: string;
  };
  
  const Container = ({ children, className }: Props) => {
    return <div className={`p-2 md:p-8 ${className}`}>{children}</div>;
  };
  
  export default Container;
  