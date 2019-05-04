import { URISchemeHandler, URIComponents, URIOptions } from "../uri";

const handler:URISchemeHandler = {
	scheme : "http",

	domainHost : true,

	parse : function (components:URIComponents, options:URIOptions):URIComponents {
		//report missing host
		if (!components.host) {
			components.error = components.error || "HTTP URIs must have a host.";
		}

		return components;
	},

	serialize : function (components:URIComponents, options:URIOptions):URIComponents {
		//normalize the default port
		if (components.port === (String(components.scheme).toLowerCase() !== "https" ? 80 : 443) || components.port === "") {
			components.port = undefined;
		}
		
		//normalize the empty path
		if (!components.path) {
			components.path = "/";
		}

		//NOTE: We do not parse query strings for HTTP URIs
		//as WWW Form Url Encoded query strings are part of the HTML4+ spec,
		//and not the HTTP spec.

		return components;
	}
};

export default handler;