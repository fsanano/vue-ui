export default function({ req, store }) {
  const header = (req && req.headers['user-agent']);
  const isMobile = {
    Android() {
      return header.match(/Android/i);
    },
    BlackBerry() {
      return header.match(/BlackBerry/i);
    },
    iOS() {
      return header.match(/iPhone|iPad|iPod/i);
    },
    Opera() {
      return header.match(/Opera Mini/i);
    },
    Windows() {
      return header.match(/IEMobile/i);
    },
    any() {
      return (isMobile.Android()
        || isMobile.BlackBerry()
        || isMobile.iOS()
        || isMobile.Opera()
        || isMobile.Windows());
    },
  };
  const isM = isMobile.any();
  if (isM) {
    store.dispatch('common/setUserDevice', true);
  } else {
    store.dispatch('common/setUserDevice', false);
  }

  return true;
}
