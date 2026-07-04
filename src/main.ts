import { Plugin } from 'obsidian';

export default class StartupDelayDemoPlugin extends Plugin {
	async onload() {
		console.log(`plugin onload enter: ${Date.now()}`);
		this.app.workspace.onLayoutReady(async () => {
			console.log(`plugin layout ready: ${Date.now()}`);
			const f = this.app.vault.getFileByPath('testFile.md');
			if (f) {
				await this.app.vault.cachedRead(f);
				console.log(`file loaded: ${Date.now()}`);
			} else {
				console.log(`file not found: ${Date.now()}`);
			}
		});
	}
}
