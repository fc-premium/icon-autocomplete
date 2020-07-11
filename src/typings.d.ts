declare module '*.css' {
	const value: string;
	export = value;
}

/// <reference types="jquery" />
declare module '@fc-lib/jquery' {
	var _: JQueryStatic;
	export default _;
}
