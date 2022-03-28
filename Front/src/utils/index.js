/* Package imports */
import { Component, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import slugify from 'slugify';

/** ALL EXT FUNCTIONS USED FROM HANDLE IMAGE/FILE/CANVAS */
// Create Image
const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.setAttribute('crossOrigin', 'anonymous');
    image.src = url;
  });

  // Create Canvas
export default async function getCanvasImage(imageSrc) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
	canvas.width = image.width;
	canvas.height = image.height;
	ctx.drawImage(
		image, 0,0
	)
  return canvas;
}

// To convert dataUrl (which we get from our blob) to a a file object
export const dataURLtoFile = (dataurl, filename) => {
	const arr = dataurl.split(",");
	const mime = arr[0].match(/:(.*?);/)[1];
	const bstr = atob(arr[1]);
	let n = bstr.length;
	const u8arr = new Uint8Array(n);
	while (n--) u8arr[n] = bstr.charCodeAt(n);
	return new File([u8arr], filename, { type: mime });
};

// scroll to top page when user click to link
export const useScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

/** SLUGIFY */
// Create function to replace URL:id for URL:section.name
// Transform scetion name into slug
export const slugifyTitle = (title) => slugify(title, { lower: true});

// Adding /route(section) before slugifyTitle
export const buildSectionUrl = (title) => `/section/${slugifyTitle(title)}`;

/** 
 * --FIND SECTION BY SLUG--
 * 
 * section.title === (SLUG)section-title
 */
export const getSectionBySlug = (sections, slug) => (
  sections.find((section) => slugifyTitle(section.title) === slug)
);

/** React-router-dom v5 withRouter to v6 with own Hooks
https://reactrouter.com/docs/en/v6/faq#what-happened-to-withrouter-i-need-it 

https://github.com/remix-run/react-router/issues/7361#issuecomment-631311100

*/
export const withRouter = Component => props => {
  const location = useLocation();
  const match = { params: useParams() };
  const navigate = useNavigate();
  return <Component location={location} match={match} navigate={navigate} {...props} />;
};