import { configure as mobxConfigure } from 'mobx';
import './i18n/translations';
mobxConfigure({
    enforceActions: 'observed',
    isolateGlobalState: true
});
