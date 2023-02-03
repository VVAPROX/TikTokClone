import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Test from '~/pages/Test';

const publicRoutes = [
    {path:  '/' , component:Home},
    {path:  '/test', component:Test, layout:HeaderOnly}
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };