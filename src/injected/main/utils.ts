export function getArticles(): HTMLElement[] {
  return [].slice.call(document.querySelectorAll('article'));
}

export function isEditorsPick(article: HTMLElement): boolean {
  if (!article) {
    return false;
  }
  const innerText = article.innerText;
  const editorsPrefix = 'editors‘ pick';
  const prefix = innerText.slice(0, editorsPrefix.length).toLowerCase();
  return prefix === editorsPrefix;
}

export function removeArticle(article: HTMLElement): void {
  const parent = article.parentElement;
  if (!parent) {
    return;
  }
  parent.removeChild(article);
}

export function throttle(fcn: () => void, delay: number) {
  let ready = true;
  let cleanup: number;

  return () => {
    if (cleanup) {
      clearInterval(cleanup);
    }
    if (!ready) {
      cleanup = setTimeout(fcn, delay);
      return;
    }
    fcn();
    ready = false;
    setTimeout(() => {
      ready = true;
    }, delay);
  };
}