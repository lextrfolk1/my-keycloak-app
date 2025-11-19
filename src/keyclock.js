import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
            url: 'http://136.114.132.65',
            realm: 'entlrealm',
            clientId: 'entl-frontend',
        });

export default keycloak