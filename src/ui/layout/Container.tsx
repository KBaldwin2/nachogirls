type Props = {
    children?: React.ReactNode;
    className?: string;
  };
  
  const Container = ({ children, className }: Props) => {
    return <div className={`md:p-6 m-4 ${className}`}>{children}</div>;
  };
  
  export default Container;
  