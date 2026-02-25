const PageWrapper = ({ children, offset = true }) => {
  return (
    <main
      className={offset ? "pt-0 md:pt-30" : ""}
    >
      {children}
    </main>
  );
};

export default PageWrapper;
