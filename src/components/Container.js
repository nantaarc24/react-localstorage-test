export const Container = ({ children }) => {
  return (
    <div className="container">
      <div className="p-4 col-md-4 offset-md-4">{children}</div>
    </div>
  );
};
