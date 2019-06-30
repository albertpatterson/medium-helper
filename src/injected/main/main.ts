import * as mediumUtils from './utils';

document.addEventListener('load', removeAllEditorPics);

const removeAllEditorPicsThrottled: () => void =
    mediumUtils.throttle(removeAllEditorPics, 250);
document.addEventListener('scroll', removeAllEditorPicsThrottled);

function removeAllEditorPics() {
  mediumUtils.getArticles()
      .filter(mediumUtils.isEditorsPick)
      .forEach(mediumUtils.removeArticle);
}
