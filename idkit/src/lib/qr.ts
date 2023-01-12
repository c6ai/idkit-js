/**
 * Build data for QR Code
 */
export function buildQRData(uri: string, returnUrl?: string): string {
	// export function buildQRData(connector?: WalletConnect, returnUrl?: string): string {
	// const bridgeUrl = new window.URL(connector.bridge)

	const result = new window.URL('https://worldcoin.org/verify')
	// console.log(uri) // DEBUG

	result.searchParams.append('u', uri)

	// result.searchParams.append('t', connector.handshakeTopic)
	// result.searchParams.append('k', connector.key)
	// result.searchParams.append('b', bridgeUrl.hostname)
	// result.searchParams.append('v', '1')

	// returnUrl optionally instructs the WLD app how to return to the website after the verification is complete (intended for mobile only).
	if (returnUrl) result.searchParams.append('r', returnUrl)

	console.log(result.toString()) // DEBUG

	return result.toString()
}
