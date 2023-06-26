export function getIdFromUrl (windowLocationObj){
	const pathname = windowLocationObj.pathname
	const pathnameArr = pathname.split("/")
	const id = pathnameArr.slice(-1)[0]

	return id
}