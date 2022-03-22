/** ALL EXT FUNCTIONS USED FROM HANDLE IMAGE/FILE/CANVAS */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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