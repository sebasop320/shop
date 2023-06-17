const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.774ca97f.js","app":"_app/immutable/entry/app.396d7f67.js","imports":["_app/immutable/entry/start.774ca97f.js","_app/immutable/chunks/index.5242de00.js","_app/immutable/chunks/singletons.f121d8f6.js","_app/immutable/entry/app.396d7f67.js","_app/immutable/chunks/index.5242de00.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-f7b44aeb.js'),
			() => import('./chunks/1-0e88e604.js'),
			() => import('./chunks/2-d6e38242.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
