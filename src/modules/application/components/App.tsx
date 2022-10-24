import { Switch, Route, Redirect } from 'react-router-dom';

import config from 'config';
import { HomePage } from 'modules/home';

const routes = [
    {
        path: config.routes.home,
        render: () => <HomePage />,
        exact: true,
    },
    {
        render: () => <Redirect to="/" />,
    },
];

const App = () => (
    <Switch>
        {routes.map((route, index) => (
            // We ensure same order of array items
            // eslint-disable-next-line react/no-array-index-key
            <Route {...route} key={index} />
        ))}
    </Switch>
);

export default App;
