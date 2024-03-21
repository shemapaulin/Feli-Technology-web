import { NavLink } from 'react-router-dom';
import image from '../../assets/img/404.jpg';
import router from '../../routes/router';

export const NotFound = () => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: '50%',
    maxWidth: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    paddingTop: '80px',
  };

  return (
    <>
      {image && (
        <section
          data-theme="light"
          style={styles}
          className=" flex items-center bg-cover lg:bg-auto bg-top lg:bg-center justify-end lg:items-start lg:justify-end py-8 px-12 w-screen h-screen overflow-hidden"
        >
          <section className="flex flex-col items-end lg:mr-[5%]">
            <p className="text-5xl text-footer-color lg:text-6xl font-extrabold mt-4 mb-8">
              Not found - Who took the page?
            </p>
            <NavLink
              to={router.home}
              className="flex hover:shadow-xl mt-4 items-center justify-center px-4 py-3 border-4 border-secondary text-secondary hover:bg-secondary hover:text-footer-color uppercase font-semibold"
            >
              <div>Accueil Page</div>
            </NavLink>
          </section>
        </section>
      )}
    </>
  );
};
