import FooterMob from "./Mobile/index";
import FooterDesk from "./Desk/index";
import { headers } from 'next/headers';

const Footer = () => {
  const headersList = headers();
  const userAgent = headersList.get('user-agent') || '';
  const isMobile = /mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile|ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(userAgent);

  return (
    <>
      {isMobile ?
        <FooterMob />
        :
        <FooterDesk />
      }
    </>
  );
};

export default Footer;
