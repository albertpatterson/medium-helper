import {windowAny} from '../../shared/objects';
import {Browser} from '../../shared/types';
import {setupBrowserAction} from './setupBrowserAction';

const browser: Browser = windowAny.browser || windowAny.chrome;

setupBrowserAction(browser);
