import {
  faGavel,
  faWindowRestore,
  faRobot,
  faUsers,
  faGlobeAmericas,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';

import Img1 from "../../public/assets/images/blog/blog1.png";
import Img2 from "../../public/assets/images/blog/blog2.png";
import Img3 from "../../public/assets/images/blog/blog3.png";


const BlogData = [
  {
    id: 1,
    img: Img1,
    Icon: faUsers,
    title: 'Grow Your Business',
    subtitle: 'Williamson',
    subcontent: 'Web designer',
    content:
      'Websites and Applications make it easier for your customers to connect with you and learn more about your company. Making it extremely easy to scale or grow your business and reach.',
  },
  {
    id: 2,
    img: Img2,
    Icon: faRobot,
    title: 'Lighten Your Workload and Costs',
    subtitle: 'Miranda Roy',
    subcontent: 'Web developer',
    content:
      "Robots cost less to feed than humans.."
  },
  {
    id: 3,
    img: Img3,
    Icon: faGlobeAmericas,
    title: 'Connect With More Customers',
    subtitle: 'Steve Thomas',
    subcontent: 'Web developer',
    content:
    "Let us market your company with"
  },
];

export default BlogData