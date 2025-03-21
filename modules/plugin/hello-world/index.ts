
import {Context, Next} from "hono"
import {Plugin} from "paykhom-fw/modules/plugin"
//import {WebEngine} from "paykhom-fw/modules/modules/engine/web-engine"
import {MenuItem} from "paykhom-fw/modules/component"

export class HelloWorld extends Plugin {
	public name = "Hello World"
	public slug = "hello-world"
	public description = "A simple custom plugin"
	public version = "1.0.0"

	constructor(config) {
		super(config)
		this.config = {greeting: "Hello, World!"}
	}

	async uponInit(): Promise<void> {}

	async uponReady(): Promise<void> {
		this.addEvent("ping", payload => {
			this.log("Pong")
		})
	}

	async uponStart(): Promise<void> {}

	getMenus(): MenuItem {
		return {
			label: "Hello World",
			icon: "feather feather-book", // Replace with feather icon
			children: [
				{
					label: "Content",
					icon: "feather feather-file-text",
					children: [
						{
							label: "Pages",
							url: "/admin/cms/pages",
							icon: "feather feather-file", // Replace with feather icon
							permissions: ["cms.page.read"]
						},
						{
							label: "Posts",
							url: "/admin/cms/posts",
							icon: "feather feather-edit", // Replace with feather icon
							permissions: ["cms.post.read"]
						}
					]
				},
				{
					label: "Taxonomies",
					icon: "feather feather-folder", // Replace with feather icon
					children: [
						{
							label: "Categories",
							url: "/admin/cms/categories",
							icon: "feather feather-folder", // Replace with feather icon
							permissions: ["cms.category.read"]
						},
						{
							label: "Tags",
							url: "/admin/cms/tags",
							icon: "feather feather-tag", // Replace with feather icon
							permissions: ["cms.tag.read"]
						}
					]
				},
				{
					label: "Settings",
					url: "/admin/cms/settings",
					icon: "feather feather-settings", // Replace with feather icon
					permissions: ["cms.settings.read"]
				},
				{
					label: "Content Types",
					url: "/admin/cms/content-types",
					icon: "feather feather-list", // Replace with feather icon
					permissions: ["cms.contentType.read"]
				}
			]
		}
	}
}
