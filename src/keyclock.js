import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
            url: 'http://34.121.126.155/',
            realm: 'entlrealm',
            clientId: 'entl-frontend',
        });

export default keycloak