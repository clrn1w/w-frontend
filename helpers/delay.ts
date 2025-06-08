export default async function delay(func: Promise<any>, delay = 300) {
	const [res] = await Promise.allSettled([
		func,
		new Promise(resolve => setTimeout(resolve, delay)),
	])

	if (res.status === 'rejected') throw res.reason
	else return res.value
}
