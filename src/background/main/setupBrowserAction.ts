import {Browser} from '../../shared/types';

export function setupBrowserAction(browser: Browser): void {
  if (!browser) {
    return;
  }

  browser.browserAction.onClicked.addListener(openMedium);

  const mediumTabOptions = {
    active: true,
    url: 'https://medium.com',
  };
  function openMedium() {
    browser.tabs.create(mediumTabOptions);
  }
}
