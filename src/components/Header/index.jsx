import HeaderMob from "./Mobile/index";
import HeaderDesk from "./Desk/index";
import { headers } from 'next/headers';

const Header = () => {
  const headersList = headers();
  const userAgent = headersList.get('user-agent') || '';
  const isMobile = /mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile|ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(userAgent);

  return (
    <>
      {isMobile ?
        <HeaderMob />
        :
        <HeaderDesk />
      }
    </>
  );
};
export default Header;
