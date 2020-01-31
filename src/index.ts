import { BackdropHandler } from './backdrop'
import ModuleInfo from "./info.json";
import ModuleConfig from "./config.json";
import ModuleStyles from '../assets/main.css'

declare var fcpremium: any;

const IconAutoCompleteModule = new fcpremium.Module(ModuleInfo);

IconAutoCompleteModule.onload = function() {

	const backdropHandler = new BackdropHandler();

	function operate(e) {
		backdropHandler.getComputedValues();
		backdropHandler.updateBackdropRows();
		backdropHandler.updateBackdropPosition();
	}

	function setup(e) {
		backdropHandler.setEditor(e.currentTarget);
	}

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

export {
	IconAutoCompleteModule as module,
	ModuleConfig as config,
	ModuleInfo as info,
	ModuleStyles as css
};
