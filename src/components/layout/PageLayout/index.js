import Header from 'components/layout/Header/index';

function PageLayout(props) {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
}

export default PageLayout;
