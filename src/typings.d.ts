declare module '*.css' {
	const value: string;
	export = value;
}

/// <reference types="jquery" />
declare module '@fc-lib/jquery' {
	var _: JQueryStatic;
	export default _;
}

/// <reference types="mousetrap" />
declare module '@fc-lib/mousetrap' {
	var _: typeof Mousetrap;
	export default _;
}
