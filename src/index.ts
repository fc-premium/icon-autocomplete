import { Core } from 'fc-premium-core'
import $ from '@fc-lib/jquery'

import { BackdropHandler } from './backdrop'
import ModuleInfo from "./info.json";
import ModuleConfig from "./config.json";
import ModuleStyles from '@assets/main.css'


const IconAutoCompleteModule = new Core.Module(ModuleInfo);

let backdropHandler: BackdropHandler;

function operate(e) {
	backdropHandler.getComputedValues();
	backdropHandler.updateBackdropRows();
	backdropHandler.updateBackdropPosition();
}

function setup(e) {
	backdropHandler.setEditor(e.currentTarget);
}

IconAutoCompleteModule.onload = function() {
	backdropHandler = new BackdropHandler();

	$('html').on('mousedown', 'textarea', setup);
	$('html').on('focus', 'textarea', setup);

	$('html').on('submit', 'textarea', () => {
		backdropHandler.display = false;
		backdropHandler.backdrop.hide();
	});

	$('html').on('keydown', 'textarea', operate);
	$('html').on('keyup', 'textarea', operate);
	$('html').on('mousedown', 'textarea', operate);
	$('html').on('mouseup', 'textarea', operate);
	$('html').on('focus', 'textarea', operate);
};

IconAutoCompleteModule.onunload = function() {
	console.log('Unloading module');

	$('html').off('mousedown', 'textarea', setup);
	$('html').off('focus', 'textarea', setup);

	$('html').off('submit', 'textarea', () => {
		backdropHandler.display = false;
		backdropHandler.backdrop.hide();
	});

	$('html').off('keydown', 'textarea', operate);
	$('html').off('keyup', 'textarea', operate);
	$('html').off('mousedown', 'textarea', operate);
	$('html').off('mouseup', 'textarea', operate);
	$('html').off('focus', 'textarea', operate);

	backdropHandler.display = false;
	backdropHandler.backdrop.hide();
};

export {
	IconAutoCompleteModule as module,
	ModuleConfig as config,
	ModuleInfo as info,
	ModuleStyles as css
};
