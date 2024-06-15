type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return <div className={`mx-16 ${className}`}>{children}</div>;
};

export default Container;
