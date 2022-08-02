import { Switch, Route, Redirect } from 'react-router-dom';

import config from 'config';

const routes = [
    {
        path: config.routes.home,
        render: () => 'Home Page',
        exact: true,
    },
    {
        render: () => <Redirect to="/" />,
    },
];

const App = () => {
    return (
        <Switch>
            {routes.map((route, index) => (
                // We ensure same order of array items
                // eslint-disable-next-line react/no-array-index-key
                <Route {...route} key={index} />
            ))}
        </Switch>
    );
};

export default App;
